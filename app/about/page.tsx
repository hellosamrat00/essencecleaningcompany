import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Page Hero */}
      <section className="pt-40 lg:pt-48 pb-20 relative overflow-hidden" style={{ backgroundColor: "var(--color-brand-green-dark)" }}>
        <div className="absolute inset-0 opacity-20 bg-[url('/background.png')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="section-label section-label--light mb-4">Our History</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            About <span className="italic" style={{ color: "var(--color-brand-gold)" }}>Essence</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
            Founded with a vision to redefine cleanliness, Essence Facility Group has been providing top-tier professional cleaning solutions tailored for every space.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24" style={{ backgroundColor: "var(--color-brand-cream)" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-square border" style={{ borderColor: "rgba(5, 38, 27, 0.1)" }}>
            <img src="/cleaning-team.jpg" alt="Our team" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6" style={{ color: "var(--color-brand-green)" }}>
              A Legacy of <span style={{ color: "var(--color-brand-gold)" }}>Spotless</span> Excellence
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-brand-green)", opacity: 0.8 }}>
              For over a decade, we have been committed to creating healthier, cleaner environments for our clients. What started as a small local service has grown into a leading facility management group trusted by hundreds of businesses and homeowners alike.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--color-brand-green)", opacity: 0.8 }}>
              Our dedicated team understands that every space is unique, which is why we approach every job with rigorous attention to detail, using only eco-friendly products to ensure the safety of your family, pets, and employees.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white border-t border-b" style={{ borderColor: "rgba(5,38,27,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold" style={{ color: "var(--color-brand-green)" }}>Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "We operate with full transparency and honesty in all our dealings, ensuring our clients always know they can trust us.", icon: "🤝" },
              { title: "Quality", desc: "We never cut corners. Our comprehensive training and quality assurance guarantee a perfect clean every time.", icon: "⭐" },
              { title: "Sustainability", desc: "We care about the planet just as much as your property. Our green cleaning initiatives reduce our environmental footprint.", icon: "🌿" }
            ].map((v) => (
              <div key={v.title} className="p-8 rounded-2xl border bg-gray-50/50 hover:-translate-y-2 transition-transform" style={{ borderColor: "rgba(5,38,27,0.05)" }}>
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-heading text-2xl font-bold mb-3" style={{ color: "var(--color-brand-green)" }}>{v.title}</h3>
                <p className="leading-relaxed" style={{ color: "var(--color-brand-green)", opacity: 0.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ backgroundColor: "var(--color-brand-green)" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Years Experience", value: "10+" },
            { label: "Happy Clients", value: "200+" },
            { label: "Projects Completed", value: "500+" },
            { label: "Expert Cleaners", value: "50+" },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-5xl font-bold mb-2" style={{ color: "var(--color-brand-gold)" }}>{stat.value}</div>
              <div className="text-sm uppercase tracking-wider text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <Footer />
    </main>
  );
}
