export default function About() {
  const features = [
    { icon: "🤝", title: "Top Ranked Companies", desc: "Recognized among the top cleaning service providers nationally." },
    { icon: "⭐", title: "High Quality", desc: "Premium cleaning products and techniques for superior results." },
    { icon: "🌿", title: "Green Cleaning Products", desc: "Eco-friendly solutions safe for your family and the planet." },
  ];

  const stats = [
    { value: "299k", label: "Happy Clients" },
    { value: "364+", label: "Projects Done" },
    { value: "199+", label: "Page Views" },
  ];

  return (
    <section id="about" className="py-24" style={{ backgroundColor: "var(--color-brand-green)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Text Content */}
          <div>
            <p className="section-label mb-4" style={{ color: "var(--color-brand-gold)" }}>About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "var(--color-brand-cream)" }}>
              The Perfect{" "}
              <span className="italic" style={{ color: "var(--color-brand-gold)" }}>Solution</span>{" "}
              For Living Space
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: "var(--color-brand-cream)", opacity: 0.8 }}>
              With over a decade of experience, Essence delivers exceptional cleaning services that transform your space. Our trained professionals use the latest techniques and eco-friendly products. Available around the clock, our dedicated team ensures your space is always clean and welcoming.
            </p>
            
            <div className="space-y-5 mb-10">
              {features.map(f => (
                <div key={f.title} className="flex items-start gap-4 rounded-xl p-4 border" style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}>
                  <div className="text-2xl flex-shrink-0">{f.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: "var(--color-brand-cream)" }}>{f.title}</h4>
                    <p className="text-sm" style={{ color: "var(--color-brand-cream)", opacity: 0.7 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-gold font-heading text-lg inline-flex" style={{ backgroundColor: "var(--color-brand-gold)", color: "var(--color-brand-green-dark)" }}>
              Get a Free Quote
            </a>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border" style={{ borderColor: "rgba(225, 181, 96, 0.35)" }}>
              <img
                src="/cleaning-team.jpg"
                alt="Cleaning team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 text-white rounded-2xl px-6 py-4 shadow-xl border" style={{ backgroundColor: "var(--color-brand-green-dark)", borderColor: "var(--color-brand-gold)" }}>
              <div className="text-3xl font-bold font-heading" style={{ color: "var(--color-brand-gold)" }}>10+</div>
              <div className="text-sm opacity-80" style={{ color: "var(--color-brand-cream)" }}>Years Experience</div>
            </div>
            {/* Sparkle */}
            <div className="absolute top-6 right-6 text-4xl animate-spin-slow" style={{ color: "var(--color-brand-gold)" }}>✦</div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          {stats.map(stat => (
            <div key={stat.label} className="text-center rounded-2xl p-8 border transition-transform hover:-translate-y-1" style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}>
              <div className="font-heading text-5xl font-bold mb-3" style={{ color: "var(--color-brand-gold)" }}>{stat.value}</div>
              <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: "var(--color-brand-cream)", opacity: 0.8 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
