"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#students", label: "For Students" },
    { href: "#institutions", label: "For Institutions" },
    { href: "#about", label: "About" },
  ];

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(8, 12, 16, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(34, 211, 238, 0.12)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          aria-label="Adviso home"
        >
          <Image
            src="/images/adviso-logo.svg"
            alt="Adviso logo"
            width={160}
            height={38}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#students"
            className="ml-2 px-4 py-2 rounded-md text-sm font-semibold text-[#080c10] bg-cyan-400 hover:bg-cyan-300 transition-colors duration-200"
            style={{ boxShadow: "0 0 16px rgba(34, 211, 238, 0.4)" }}
          >
            Get Started
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-slate-400 hover:text-cyan-400 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden px-4 pb-4 pt-2 space-y-3"
          style={{ borderTop: "1px solid rgba(34, 211, 238, 0.1)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#students"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-4 py-2 rounded-md text-sm font-semibold text-[#080c10] bg-cyan-400 hover:bg-cyan-300 transition-colors duration-200 mt-2"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
