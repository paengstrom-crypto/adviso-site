export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16"
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(34,211,238,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Grid texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow badge */}
        <span
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
          style={{
            background: "rgba(34, 211, 238, 0.1)",
            border: "1px solid rgba(34, 211, 238, 0.3)",
            color: "#22d3ee",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"
            aria-hidden="true"
          />
          Now launching at UC Davis
        </span>

        {/* Main headline */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-5"
        >
          Intelligent Academic{" "}
          <span className="gradient-text">Advising</span> for the Modern Campus
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Simplify the student journey from enrollment to graduation — while
          automating the administrative heavy lifting that slows institutions
          down.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          {/* Student CTA — solid cyan */}
          <a
            href="#students"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-bold text-[#080c10] bg-cyan-400 hover:bg-cyan-300 active:scale-95 transition-all duration-200"
            style={{ boxShadow: "0 0 24px rgba(34, 211, 238, 0.5)" }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            I&apos;m a Student
          </a>

          {/* Institution CTA — gradient-outline */}
          <a
            href="#institutions"
            className="cyan-glow-border w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-bold text-slate-200 hover:text-white active:scale-95 transition-all duration-200"
            style={{ background: "rgba(15, 23, 42, 0.7)" }}
          >
            <svg
              className="w-5 h-5 text-cyan-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>
            I&apos;m an Institution
          </a>
        </div>

        {/* Pain-point blockquote */}
        <blockquote
          className="relative max-w-2xl mx-auto text-left rounded-xl px-6 py-5"
          style={{
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(34, 211, 238, 0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            aria-hidden="true"
            className="absolute -top-3 left-6 text-5xl leading-none text-cyan-400 font-serif select-none"
          >
            &ldquo;
          </span>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
            Students face an{" "}
            <strong className="text-white">inefficient maze</strong> of
            requirements, deadlines, and conflicting advice — while counselors
            are buried in{" "}
            <strong className="text-white">
              repetitive schedule-checking
            </strong>{" "}
            that leaves no time for meaningful mentorship. The advising
            ecosystem is overdue for a rethink.
          </p>
          <footer className="mt-3 text-xs text-slate-500 tracking-wider uppercase">
            — The advising gap Adviso was built to close
          </footer>
        </blockquote>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
      >
        <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
        <span className="text-xs text-slate-500 tracking-widest uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
}
