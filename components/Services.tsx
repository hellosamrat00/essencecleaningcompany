const services = [
  {
    icon: "🏠",
    title: "Residential Services",
    desc: "Complete home cleaning solutions tailored to your lifestyle and schedule.",
  },
  {
    icon: "🏢",
    title: "Commercial Services",
    desc: "Professional office and commercial space cleaning for productive environments.",
  },
  {
    icon: "✨",
    title: "Specialized Cleaning",
    desc: "Deep cleaning, post-construction, and specialized surface treatments.",
  },
  {
    icon: "🏛️",
    title: "Office Cleaning",
    desc: "Maintain a clean and hygienic workspace for your team and clients.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: "var(--color-brand-cream)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="section-label mb-3">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight" style={{ color: "var(--color-brand-green)" }}>
            We Offer A{" "}
            <span style={{ color: "var(--color-brand-green)" }}>Wide Range</span>{" "}
            Of Specialist Cleaning Services.
          </h2>
        </div>
        <p className="text-center max-w-xl mx-auto mb-14 leading-relaxed" style={{ color: "var(--color-brand-green)", opacity: 0.8 }}>
          From routine household cleaning to specialized commercial services, we have the expertise and equipment to handle any cleaning challenge.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="service-card group flex flex-col h-full">
              <div className="text-4xl mb-4">{s.icon}</div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-lg font-bold transition-colors" style={{ color: "var(--color-brand-green)" }}>
                  {s.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-brand-green)", opacity: 0.7 }}>{s.desc}</p>
              <a href="/services" className="mt-auto pt-5 flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all" style={{ color: "var(--color-brand-green)" }}>
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
