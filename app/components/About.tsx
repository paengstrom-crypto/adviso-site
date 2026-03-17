import Image from "next/image";

const founders = [
  {
    name: "Phillip Engstrom",
    role: "Co-Founder",
    initials: "PE",
  },
  {
    name: "Olivia Mehta",
    role: "Co-Founder",
    initials: "OM",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(34,211,238,0.04) 0%, transparent 70%)",
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
            Our Story
          </span>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: narrative */}
          <div>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6"
            >
              Built by Students,{" "}
              <span className="gradient-text">for the Modern Campus</span>
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed text-base">
              <p>
                Adviso was born out of frustration. As students at UC Davis,{" "}
                <strong className="text-white">Phillip Engstrom</strong> and{" "}
                <strong className="text-white">Olivia Mehta</strong> experienced
                firsthand how unnecessarily complicated the academic journey
                could be — conflicting requirements, confusing transfer credit
                rules, and advisors stretched too thin to provide the guidance
                students genuinely needed.
              </p>
              <p>
                At the same time, they watched their advisors drown in
                repetitive administrative tasks — questions that a well-designed
                system could answer instantly. It became clear that both sides
                of the advising desk were failing each other — not from lack of
                care, but lack of the right tools.
              </p>
              <p>
                Adviso is their answer: an intelligent platform that gives
                students clarity and control, while giving advisors back their
                time and purpose. We believe great advising is still deeply
                human — Adviso just handles everything else.
              </p>
            </div>

            {/* Mission statement */}
            <div
              className="mt-8 rounded-xl p-5"
              style={{
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(34, 211, 238, 0.15)",
              }}
            >
              <p className="text-sm italic text-slate-300 leading-relaxed">
                &ldquo;Our mission is to make academic advising as intelligent,
                accessible, and humane as it should have been all along — for
                every student, at every institution.&rdquo;
              </p>
            </div>

            {/* Founder chips */}
            <div className="mt-8 flex flex-wrap gap-4">
              {founders.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center gap-3 rounded-lg px-4 py-3"
                  style={{
                    background: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(34, 211, 238, 0.12)",
                  }}
                >
                  {/* Avatar placeholder */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-cyan-400"
                    style={{ background: "rgba(34, 211, 238, 0.12)" }}
                    aria-hidden="true"
                  >
                    {f.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {f.name}
                    </p>
                    <p className="text-xs text-slate-500">{f.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: founders image */}
          <div className="mt-12 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {/*
               * PHOTO SWAP:
               * Drop the real founders/campus photo at:
               *   public/images/founders.jpg  (or .png / .webp)
               * Then change the src below from
               *   "/images/founders-placeholder.svg"
               * to
               *   "/images/founders.jpg"
               * No other code changes needed.
               */}
              <Image
                src="/images/founders-placeholder.svg"
                alt="Adviso co-founders Phillip Engstrom and Olivia Mehta on the UC Davis campus"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,12,16,0.6) 0%, transparent 60%)",
                }}
              />
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs text-slate-400">
                  UC Davis — where Adviso was founded
                </p>
              </div>
              {/* Cyan border frame */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: "1px solid rgba(34, 211, 238, 0.2)",
                }}
              />
            </div>

            {/* UC Davis callout */}
            <div
              className="mt-4 rounded-lg px-5 py-3 flex items-center gap-3"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(34, 211, 238, 0.1)",
              }}
            >
              <svg
                className="w-5 h-5 text-cyan-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="text-sm text-slate-400">
                Founded at <strong className="text-white">UC Davis</strong> — Class of &apos;25
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
