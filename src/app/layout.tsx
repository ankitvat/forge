import type { Metadata, Viewport } from "next";
import { Anton } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Display face for the oversized all-caps headlines; Google Sans carries
// body copy and all small text.
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const googleSans = localFont({
  src: "./fonts/GoogleSans-Variable.ttf",
  variable: "--font-sans",
  display: "swap",
  weight: "400 700",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forge.example.com"),
  title: {
    default: "FORGE — Strength Club",
    template: "%s | FORGE",
  },
  description:
    "Coaching, programming and community for people who are done making excuses. Commit for 6 months — change your life forever.",
  openGraph: {
    title: "FORGE — Strength Club",
    description: "Build lean muscle. Drop body fat. Commit for 6 months — change your life forever.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Dark-only brand — the `dark` class pins the shadcn dark palette.
    <html
      lang="en"
      className={`${anton.variable} ${googleSans.variable} dark h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col overflow-x-clip">{children}</body>
    </html>
  );
}
