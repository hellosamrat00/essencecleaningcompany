export default function StatsBanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0f1f14]">
      {/* Big background text */}
      <div
        className="absolute bottom-0 left-0 right-0 text-center text-[200px] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(45,140,78,0.08)", fontFamily: "serif" }}
      >
        ESSENCE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="section-label text-[#7ED957] mb-4">24/7 Service</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Smart Cleaning{" "}
            <span className="italic text-[#7ED957]">Solution</span>{" "}
            For You 24/7 Hours
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Available around the clock, our dedicated team ensures your space is always clean and welcoming. Book any time, we're ready.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="btn-primary">Book Now</a>
          
          </div>
        </div>

        {/* Right - Stats */}
        <div className="grid grid-cols-3 gap-6">
          {[
            { value: "299k", label: "Happy Clients" },
            { value: "364+", label: "Projects Done" },
            { value: "199+", label: "Page Views" },
          ].map(stat => (
            <div key={stat.label} className="text-center bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="font-heading text-4xl font-bold text-[#7ED957]">{stat.value}</div>
              <div className="text-gray-400 text-xs mt-2 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
