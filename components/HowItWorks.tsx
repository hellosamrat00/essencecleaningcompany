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
        style={{ backgroundImage: "url('/cleaning-process.jpg')" }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "var(--color-brand-green)", opacity: 0.95 }} />

      {/* Big text */}
      <div
        className="absolute bottom-0 left-0 right-0 text-center text-[180px] font-black leading-none select-none pointer-events-none"
        style={{ color: "var(--color-brand-gold)", opacity: 0.05, fontFamily: "var(--font-heading)" }}
      >
        Essence
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4" style={{ color: "var(--color-brand-gold)" }}>Simple Process</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight" style={{ color: "var(--color-brand-cream)" }}>
            How To Make Steps To<br />
            Get{" "}
            <span className="italic" style={{ color: "var(--color-brand-gold)" }}>Best Cleaning</span>{" "}
            Service
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] right-0 h-px" style={{ background: "linear-gradient(to right, var(--color-brand-gold), transparent)" }} />
              )}
              <div 
                className="relative inline-flex items-center justify-center w-16 h-16 rounded-full font-bold text-lg font-heading mb-6 group-hover:scale-110 transition-transform shadow-lg"
                style={{ backgroundColor: "var(--color-brand-gold)", color: "var(--color-brand-green-dark)", boxShadow: "0 10px 15px -3px rgba(225, 181, 96, 0.2)" }}
              >
                {step.num}
              </div>
              <h3 className="font-heading text-xl font-bold mb-3" style={{ color: "var(--color-brand-cream)" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-brand-cream)", opacity: 0.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
