const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
    title: "Conflict-Free Schedules in Seconds",
    description:
      "Stop agonizing over time conflicts. Adviso automatically generates optimized class schedules that fit your needs, preferences, and major requirements.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25"
        />
      </svg>
    ),
    title: "Visual Degree Requirement Tracking",
    description:
      "See your entire degree map at a glance — which requirements you've met, what's left, and the fastest paths to your diploma.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
    title: "Seamless Transfer Credit Mapping",
    description:
      "No more guesswork when switching schools or majors. Adviso accurately maps your existing credits so you know exactly where you stand.",
  },
];

export default function StudentHub() {
  return (
    <section
      id="students"
      aria-labelledby="students-heading"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Section glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 10%, rgba(34,211,238,0.06) 0%, transparent 70%)",
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
            For Students
          </span>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left: copy */}
          <div>
            <h2
              id="students-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
            >
              Uncomplicate{" "}
              <span className="gradient-text">Your Degree</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Meet your 24/7 academic copilot. Adviso gives you instant
              clarity over your entire academic journey — from your first
              semester to graduation day — so you can focus on learning, not
              logistics.
            </p>

            {/* Feature list */}
            <ul className="space-y-6" role="list">
              {features.map((f) => (
                <li
                  key={f.title}
                  className="flex gap-4 group"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-cyan-400 transition-colors duration-200 group-hover:bg-cyan-400 group-hover:text-[#080c10]"
                    style={{ background: "rgba(34, 211, 238, 0.1)" }}
                    aria-hidden="true"
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {f.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: launch banner + CTA */}
          <div className="mt-12 lg:mt-0 space-y-6">
            {/* UC Davis launch banner */}
            <div
              className="rounded-xl p-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34, 211, 238, 0.12) 0%, rgba(71, 85, 105, 0.08) 100%)",
                border: "1px solid rgba(34, 211, 238, 0.3)",
                boxShadow: "0 0 40px rgba(34, 211, 238, 0.06) inset",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full bg-cyan-400"
                  style={{
                    boxShadow: "0 0 8px rgba(34, 211, 238, 0.8)",
                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                  aria-hidden="true"
                />
                <span className="text-xs font-bold tracking-widest uppercase text-cyan-400">
                  Exclusive Launch
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3">
                Rolling out exclusively at{" "}
                <span className="gradient-text">UC Davis</span> 🐄
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                We&apos;re starting local. UC Davis students get first access to
                Adviso&apos;s full suite — from schedule generation to degree
                mapping. Be first in line.
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "24/7", label: "Academic support, always on" },
                { value: "< 10s", label: "To generate your schedule" },
                { value: "100%", label: "Conflict-free guarantee" },
                { value: "0 hrs", label: "Wasted on guesswork" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg p-4 text-center"
                  style={{
                    background: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(34, 211, 238, 0.1)",
                  }}
                >
                  <p className="text-2xl font-extrabold gradient-text mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              className="block w-full text-center px-8 py-4 rounded-lg text-base font-bold text-[#080c10] bg-cyan-400 hover:bg-cyan-300 active:scale-95 transition-all duration-200"
              style={{ boxShadow: "0 0 24px rgba(34, 211, 238, 0.4)" }}
            >
              Join the Student Waitlist →
            </a>
            <p className="text-center text-xs text-slate-500">
              UC Davis students only · No spam · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
