"use server";

import { INTAKE_FORM } from "@/lib/content";

/**
 * Result returned from the intake form server action.
 * `ok`: the submission was accepted by Google Forms
 * `error`: user-friendly message shown when validation or the POST fails
 */
export type IntakeState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; error: string; values?: Record<string, string> };

const CONTACT_RX = /^[+0-9()\-\s]{7,20}$/;
const NUMERIC_RX = /^\d{1,3}(?:\.\d{1,2})?$/;

/**
 * Server-side handler that forwards the intake fields to the FORGE
 * "Client fitness intake form" Google Form. Running server-side sidesteps
 * the CORS wall that blocks browser-side POSTs to docs.google.com — the
 * server just fires a plain form-encoded POST and Google Forms accepts it.
 *
 * We validate on the server too (never trust the client), and always
 * echo the submitted values back so the form can preserve state after a
 * failed submission.
 */
export async function submitIntake(
  _prev: IntakeState,
  formData: FormData,
): Promise<IntakeState> {
  const values = {
    fullName: String(formData.get("fullName") ?? "").trim(),
    age: String(formData.get("age") ?? "").trim(),
    contactNumber: String(formData.get("contactNumber") ?? "").trim(),
    weightKg: String(formData.get("weightKg") ?? "").trim(),
    height: String(formData.get("height") ?? "").trim(),
    goal: String(formData.get("goal") ?? "").trim(),
  };

  if (!values.fullName || values.fullName.length < 2) {
    return { status: "error", error: "Please enter your full name.", values };
  }
  if (!/^\d{1,3}$/.test(values.age) || Number(values.age) < 10 || Number(values.age) > 90) {
    return { status: "error", error: "Age should be a number between 10 and 90.", values };
  }
  if (!CONTACT_RX.test(values.contactNumber)) {
    return { status: "error", error: "Please enter a valid contact number.", values };
  }
  if (!NUMERIC_RX.test(values.weightKg)) {
    return { status: "error", error: "Weight should be a number in kilograms (e.g. 72 or 72.5).", values };
  }
  if (!values.height) {
    return { status: "error", error: "Please enter your height.", values };
  }
  if (!INTAKE_FORM.goals.includes(values.goal as (typeof INTAKE_FORM.goals)[number])) {
    return { status: "error", error: "Please pick a goal.", values };
  }

  const body = new URLSearchParams({
    [INTAKE_FORM.entries.fullName]: values.fullName,
    [INTAKE_FORM.entries.age]: values.age,
    [INTAKE_FORM.entries.contactNumber]: values.contactNumber,
    [INTAKE_FORM.entries.weightKg]: values.weightKg,
    [INTAKE_FORM.entries.height]: values.height,
    [INTAKE_FORM.entries.goal]: values.goal,
    fvv: "1",
    pageHistory: "0",
  });

  try {
    // Google Forms returns a 302 redirect to the confirmation page on
    // success. `redirect: manual` keeps the fetch from following it —
    // any 2xx or 3xx response means "accepted".
    const res = await fetch(
      `https://docs.google.com/forms/d/e/${INTAKE_FORM.formId}/formResponse`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
        redirect: "manual",
        cache: "no-store",
      },
    );

    if (res.status >= 200 && res.status < 400) {
      return { status: "ok" };
    }

    return {
      status: "error",
      error: `Google Forms rejected the submission (status ${res.status}). Try again in a moment.`,
      values,
    };
  } catch (err) {
    console.error("[submitIntake] fetch failed", err);
    return {
      status: "error",
      error: "Couldn't reach Google Forms right now. Please try again.",
      values,
    };
  }
}
