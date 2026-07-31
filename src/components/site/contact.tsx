"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { submitIntake, type IntakeState } from "@/app/actions";
import { CONTACT_INFO, INTAKE_FORM } from "@/lib/content";
import { cn } from "@/lib/utils";

const initialState: IntakeState = { status: "idle" };

export function Contact() {
  const [state, formAction] = useActionState(submitIntake, initialState);
  const values = state.status === "error" ? state.values : undefined;

  return (
    <section id="contact" className="border-t border-white/5">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:py-32 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Get Started
            </p>
          </Reveal>
          <h2 className="font-display text-5xl uppercase sm:text-6xl">
            <SplitWords text="Tell me about you." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Six quick fields — enough to build your first week and price you into the right plan.
              I read every one myself and reply personally.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <dl className="mt-10 space-y-2 text-sm">
              <div className="flex gap-3">
                <dt className="w-28 shrink-0 text-muted-foreground">WhatsApp</dt>
                <dd>
                  <a
                    href={CONTACT_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    {CONTACT_INFO.whatsapp}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-28 shrink-0 text-muted-foreground">Email</dt>
                <dd>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary">
                    {CONTACT_INFO.email}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-muted-foreground">{CONTACT_INFO.replyWithin}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="border border-white/10 bg-card/40 p-6 sm:p-8">
            {state.status === "ok" ? (
              <SuccessPanel />
            ) : (
              <form action={formAction} className="space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    name="fullName"
                    placeholder="Your full name"
                    autoComplete="name"
                    defaultValue={values?.fullName}
                    required
                  />
                  <Field
                    label="Age"
                    name="age"
                    type="number"
                    min={10}
                    max={90}
                    placeholder="27"
                    defaultValue={values?.age}
                    required
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    label="Contact Number"
                    name="contactNumber"
                    type="tel"
                    placeholder="+91"
                    autoComplete="tel"
                    defaultValue={values?.contactNumber}
                    required
                  />
                  <Field
                    label="Current Body Weight (kg)"
                    name="weightKg"
                    type="number"
                    step="0.1"
                    placeholder="72"
                    defaultValue={values?.weightKg}
                    required
                  />
                </div>

                <Field
                  label="Height (cm/ft)"
                  name="height"
                  placeholder="175 cm or 5'9"
                  defaultValue={values?.height}
                  required
                />

                <fieldset>
                  <legend className="mb-3 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Goal
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {INTAKE_FORM.goals.map((goal, i) => (
                      <label
                        key={goal}
                        className={cn(
                          "inline-flex cursor-pointer items-center border border-white/15 bg-card px-4 py-2 text-sm transition-colors",
                          "hover:border-primary/60",
                          "has-checked:border-primary has-checked:bg-primary has-checked:text-primary-foreground",
                        )}
                      >
                        <input
                          type="radio"
                          name="goal"
                          value={goal}
                          defaultChecked={values ? values.goal === goal : i === 0}
                          className="sr-only"
                        />
                        {goal}
                      </label>
                    ))}
                  </div>
                </fieldset>

                {state.status === "error" && (
                  <p role="alert" className="text-sm text-destructive">
                    {state.error}
                  </p>
                )}

                <SubmitButton />

                <p className="text-xs text-muted-foreground">
                  Submissions land in the FORGE client intake sheet. We never share your data.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// --- helpers ----------------------------------------------------------------

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

function Field({ label, name, className, ...rest }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
        {label}
      </span>
      <input
        name={name}
        className={cn(
          "w-full border-b border-white/15 bg-transparent px-0 py-2 text-sm text-foreground",
          "placeholder:text-muted-foreground/60",
          "focus:border-primary focus:outline-none",
          "transition-colors",
          className,
        )}
        {...rest}
      />
    </label>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full font-semibold uppercase" disabled={pending}>
      {pending ? "Sending..." : "Send it over"}
    </Button>
  );
}

function SuccessPanel() {
  return (
    <div className="flex flex-col items-center gap-4 py-12 text-center">
      <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
      <h3 className="font-display text-3xl uppercase">You&apos;re in.</h3>
      <p className="max-w-sm text-sm text-muted-foreground">
        Thanks for the details. I&apos;ll be in touch within 24 hours over WhatsApp or email — and
        we&apos;ll take it from there.
      </p>
    </div>
  );
}
