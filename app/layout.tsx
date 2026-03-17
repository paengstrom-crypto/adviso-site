import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adviso — Intelligent Academic Advising",
  description:
    "Adviso is a dual-sided academic advising platform that simplifies the student journey and automates administrative heavy lifting for institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
