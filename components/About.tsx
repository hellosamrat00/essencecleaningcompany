export default function About() {
  const features = [
    { icon: "🤝", title: "Top Ranked Companies", desc: "Recognized among the top cleaning service providers nationally." },
    { icon: "⭐", title: "High Quality", desc: "Premium cleaning products and techniques for superior results." },
    { icon: "🌿", title: "Green Cleaning Products", desc: "Eco-friendly solutions safe for your family and the planet." },
  ];

  return (
    <section className="py-0 overflow-hidden">
      {/* Dark top section */}
      <div className="bg-[#0f1f14] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="section-label text-[#7ED957] mb-4">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              The Perfect{" "}
              <span className="italic text-[#7ED957]">Solution</span>{" "}
              For Living Space
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              With over a decade of experience, Essence delivers exceptional cleaning services that transform your space. Our trained professionals use the latest techniques and eco-friendly products.
            </p>
            <div className="space-y-5">
              {features.map(f => (
                <div key={f.title} className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl flex-shrink-0">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{f.title}</h4>
                    <p className="text-gray-400 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80"
                alt="Cleaning team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f14]/60 to-transparent"/>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#2D8C4E] text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-3xl font-bold font-heading">10+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            {/* Sparkle */}
            <div className="absolute top-6 right-6 text-[#7ED957] text-4xl animate-spin-slow">✦</div>
          </div>
        </div>
      </div>
    </section>
  );
}
