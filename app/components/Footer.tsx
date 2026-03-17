import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="relative border-t px-4 py-12"
      style={{ borderColor: "rgba(34, 211, 238, 0.1)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-flex items-center mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
              aria-label="Adviso home"
            >
              <Image
                src="/images/adviso-logo.svg"
                alt="Adviso logo"
                width={130}
                height={32}
              />
            </a>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Intelligent academic advising for students and institutions. Born
              at UC Davis, built for every campus.
            </p>
          </div>

          {/* Links: Product */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm" role="list">
              {[
                { href: "#students", label: "For Students" },
                { href: "#institutions", label: "For Institutions" },
                { href: "#about", label: "Our Story" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
              Contact & Partnerships
            </h3>
            <ul className="space-y-3 text-sm" role="list">
              <li>
                <a
                  href="mailto:hello@adviso.app"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  hello@adviso.app
                </a>
              </li>
              <li>
                <a
                  href="mailto:partnerships@adviso.app"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  partnerships@adviso.app
                </a>
              </li>
              <li>
                {/* Replace href with real LinkedIn or social link */}
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  aria-label="Adviso on LinkedIn (link placeholder)"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(34, 211, 238, 0.08)" }}
        >
          <p className="text-xs text-slate-600">
            &copy; {year} Adviso. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            {/* Replace these with real policy pages when available */}
            <a
              href="#"
              className="hover:text-slate-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-slate-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
