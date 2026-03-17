import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adviso – Crypto Advisory & Strategy",
  description:
    "Expert guidance on cryptocurrency investments, blockchain strategy, and digital asset management.",
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
