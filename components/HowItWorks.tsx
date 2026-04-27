export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Book Online", desc: "Choose your service and schedule a convenient time through our easy booking system." },
    { num: "02", title: "We Arrive", desc: "Our professional team arrives on time with all equipment and eco-friendly products." },
    { num: "03", title: "We Clean", desc: "Our experts thoroughly clean every corner using proven techniques and best products." },
    { num: "04", title: "You Relax", desc: "Enjoy your spotlessly clean space while we handle all the hard work for you." },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-[#0f1f14]/90"/>

      {/* Big text */}
      <div
        className="absolute bottom-0 left-0 right-0 text-center text-[180px] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(45,140,78,0.07)", fontFamily: "serif" }}
      >
        Essence
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label text-[#7ED957] mb-4">Simple Process</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
            How To Make Steps To<br />
            Get{" "}
            <span className="italic text-[#7ED957]">Best Cleaning</span>{" "}
            Service
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] right-0 h-px bg-gradient-to-r from-[#2D8C4E] to-transparent"/>
              )}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2D8C4E] text-white font-bold text-lg font-heading mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-900/30">
                {step.num}
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
