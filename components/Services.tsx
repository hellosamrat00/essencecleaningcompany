const services = [
  {
    icon: "🏠",
    title: "Residential Services",
    count: "12",
    desc: "Complete home cleaning solutions tailored to your lifestyle and schedule.",
  },
  {
    icon: "🏢",
    title: "Commercial Services",
    count: "08",
    desc: "Professional office and commercial space cleaning for productive environments.",
  },
  {
    icon: "✨",
    title: "Specialized Cleaning",
    count: "15",
    desc: "Deep cleaning, post-construction, and specialized surface treatments.",
  },
  {
    icon: "🏛️",
    title: "Office Cleaning",
    count: "10",
    desc: "Maintain a clean and hygienic workspace for your team and clients.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#f7f8f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="section-label mb-3">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl mx-auto leading-tight">
            We Offer A{" "}
            <span className="text-[#2D8C4E]">Wide Range</span>{" "}
            Of Specialist Cleaning Services.
          </h2>
        </div>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-14 leading-relaxed">
          From routine household cleaning to specialized commercial services, we have the expertise and equipment to handle any cleaning challenge.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="service-card group">
              <div className="text-4xl mb-4">{s.icon}</div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-lg font-bold text-gray-900 group-hover:text-[#2D8C4E] transition-colors">
                  {s.title}
                </h3>
                <span className="text-[#2D8C4E] font-bold text-sm bg-green-50 rounded-full px-2 py-0.5">{s.count}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              <a href="#" className="mt-5 flex items-center gap-2 text-[#2D8C4E] font-semibold text-sm group-hover:gap-3 transition-all">
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
