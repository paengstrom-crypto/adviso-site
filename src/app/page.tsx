export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="text-xl font-semibold tracking-tight">Adviso</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm px-4 py-1.5 rounded-full mb-6">
          Crypto Advisory & Strategy
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Navigate the Future<br />of Digital Assets
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Expert guidance on cryptocurrency investments, blockchain strategy, and digital asset management.
          We help individuals and institutions thrive in the evolving crypto landscape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-4">What We Offer</h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
          Comprehensive advisory services tailored for the digital asset ecosystem.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📈",
              title: "Investment Strategy",
              desc: "Data-driven portfolio analysis and investment strategies for crypto markets.",
            },
            {
              icon: "🔐",
              title: "Security & Custody",
              desc: "Best practices for securing digital assets and choosing the right custody solutions.",
            },
            {
              icon: "⚖️",
              title: "Regulatory Guidance",
              desc: "Stay compliant with evolving crypto regulations across different jurisdictions.",
            },
            {
              icon: "🔗",
              title: "Blockchain Consulting",
              desc: "Strategic advice for businesses looking to integrate blockchain technology.",
            },
            {
              icon: "💼",
              title: "Institutional Services",
              desc: "Tailored solutions for funds, family offices, and institutional investors.",
            },
            {
              icon: "🎓",
              title: "Education & Training",
              desc: "Workshops and training programs on crypto fundamentals and advanced topics.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-colors"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">About Adviso</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Adviso is a leading crypto advisory firm dedicated to helping clients make informed decisions
              in the digital asset space. Founded by experienced professionals from finance and technology,
              we bridge the gap between traditional finance and the new digital economy.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our team has deep expertise in blockchain technology, DeFi protocols, tokenomics, and
              regulatory compliance—giving you the confidence to navigate this rapidly evolving landscape.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-6">
            {[
              { value: "500+", label: "Clients Served" },
              { value: "$2B+", label: "Assets Advised" },
              { value: "50+", label: "Countries" },
              { value: "8+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Contact us today to schedule a free consultation and learn how Adviso can help you achieve
          your digital asset goals.
        </p>
        <a
          href="mailto:hello@adviso.io"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-10 py-4 rounded-lg transition-colors text-lg"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
            <span>Adviso</span>
          </div>
          <p>© {new Date().getFullYear()} Adviso. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
