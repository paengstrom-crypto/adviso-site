const benefits = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    ),
    title: "Automate Repetitive Degree Checks",
    description:
      "Free your advisors from answering the same schedule and requirement questions. Let Adviso handle routine checks automatically, instantly, and accurately.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Reclaim Time for High-Value Mentorship",
    description:
      "When the logistics are automated, advisors can focus on what matters — career guidance, mental health check-ins, and holistic life mentorship.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
    title: "Improve Scalability & Retention",
    description:
      "Scale your advising capacity without scaling your headcount. Students who stay on track graduate on time — directly improving your institution's retention rates.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Always-On Student Access",
    description:
      "Replace bottlenecked 15-minute appointments with 24/7 self-serve tools. Students get answers when they need them — not when a slot opens up.",
  },
];

export default function EnterpriseHub() {
  return (
    <section
      id="institutions"
      aria-labelledby="institutions-heading"
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "rgba(15, 23, 42, 0.4)" }}
    >
      {/* Divider line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)",
        }}
      />

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 20% 90%, rgba(34,211,238,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="w-8 h-px"
            style={{
              background: "linear-gradient(90deg, #22d3ee, transparent)",
            }}
            aria-hidden="true"
          />
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">
            For Institutions
          </span>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left: copy */}
          <div>
            <h2
              id="institutions-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
            >
              Empower Your{" "}
              <span className="gradient-text">Advisors</span>
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Adviso is built to{" "}
              <strong className="text-white">augment, not replace</strong>,
              your advising staff. By automating the repetitive logistics layer,
              your team gets back to what they do best — building real
              relationships with students.
            </p>

            {/* Contrast callout */}
            <div
              className="rounded-xl p-5 mb-8"
              style={{
                background: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(34, 211, 238, 0.15)",
              }}
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="py-3">
                  <p className="text-3xl font-extrabold text-slate-500 mb-1">
                    15 min
                  </p>
                  <p className="text-xs text-slate-600 uppercase tracking-wider">
                    Typical appointment
                  </p>
                </div>
                <div
                  className="py-3 rounded-lg"
                  style={{ background: "rgba(34, 211, 238, 0.07)" }}
                >
                  <p className="text-3xl font-extrabold gradient-text mb-1">
                    24/7
                  </p>
                  <p className="text-xs text-cyan-600 uppercase tracking-wider">
                    With Adviso
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 text-center mt-3">
                Students should never have to wait a week for a 15-minute slot
                to ask a routine question.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="cyan-glow-border inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-bold text-slate-200 hover:text-white active:scale-95 transition-all duration-200 group"
              style={{ background: "rgba(15, 23, 42, 0.8)" }}
            >
              <svg
                className="w-5 h-5 text-cyan-400 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              Request a Demo
            </a>
          </div>

          {/* Right: benefit cards */}
          <div className="mt-12 lg:mt-0 space-y-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex gap-4 rounded-xl p-5 group transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/25"
                style={{
                  background: "rgba(15, 23, 42, 0.7)",
                  border: "1px solid rgba(34, 211, 238, 0.08)",
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-cyan-400"
                  style={{ background: "rgba(34, 211, 238, 0.1)" }}
                  aria-hidden="true"
                >
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {b.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(34,211,238,0.2), transparent)",
        }}
      />
    </section>
  );
}
