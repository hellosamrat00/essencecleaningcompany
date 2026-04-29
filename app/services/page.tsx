import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Services",
      desc: "Complete home cleaning solutions tailored to your lifestyle and schedule.",
      details: ["Dusting & Polishing", "Vacuuming & Mopping", "Kitchen Deep Clean", "Bathroom Sanitization", "Window Cleaning"],
      image: "/cleaning-process.jpg",
      reverse: false
    },
    {
      title: "Commercial Cleaning",
      desc: "Professional office and commercial space cleaning for productive environments.",
      details: ["Daily Office Cleaning", "Waste Management", "Carpet Extraction", "Hard Floor Care", "Restroom Maintenance"],
      image: "/cleaning-team.jpg",
      reverse: true
    },
    {
      title: "Specialized Deep Clean",
      desc: "Deep cleaning, post-construction, and specialized surface treatments.",
      details: ["Post-Construction Cleanup", "Move-in / Move-out", "Pressure Washing", "High-Dusting", "Upholstery Cleaning"],
      image: "/background.png", // reusing existing images
      reverse: false
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Page Hero */}
      <section className="pt-40 lg:pt-48 pb-20 relative overflow-hidden" style={{ backgroundColor: "var(--color-brand-green-dark)" }}>
        <div className="absolute inset-0 opacity-20 bg-[url('/background.png')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="section-label section-label--light mb-4">What We Offer</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Our <span className="italic" style={{ color: "var(--color-brand-gold)" }}>Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
            From routine household maintenance to comprehensive commercial janitorial services, we deliver a pristine clean every single time.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24" style={{ backgroundColor: "var(--color-brand-cream)" }}>
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((svc, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${svc.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${svc.reverse ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border shadow-lg" style={{ borderColor: "rgba(5, 38, 27, 0.1)" }}>
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={`${svc.reverse ? 'lg:order-1' : ''}`}>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--color-brand-green)" }}>
                  {svc.title}
                </h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-brand-green)", opacity: 0.8 }}>
                  {svc.desc}
                </p>
                <ul className="space-y-4 mb-8">
                  {svc.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-3 font-medium" style={{ color: "var(--color-brand-green)" }}>
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: "var(--color-brand-gold)", color: "var(--color-brand-green-dark)" }}>✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="btn-primary inline-flex">
                  Request Service
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-t" style={{ borderColor: "rgba(5,38,27,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl font-bold mb-16" style={{ color: "var(--color-brand-green)" }}>Why Choose Essence?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Insured & Bonded", icon: "🛡️" },
              { title: "Eco-Friendly Products", icon: "🌱" },
              { title: "Experienced Staff", icon: "👥" },
              { title: "100% Satisfaction", icon: "💯" }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-gray-50/50" style={{ borderColor: "rgba(5,38,27,0.05)" }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-heading text-xl font-bold" style={{ color: "var(--color-brand-green)" }}>{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
