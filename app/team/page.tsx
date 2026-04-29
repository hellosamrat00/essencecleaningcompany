import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TeamPage() {
  const leadership = [
    {
      name: "Eleanor Richards",
      role: "Chief Executive Officer",
      bio: "Eleanor brings 20 years of experience in the facility management sector, driving our vision of sustainable and premium cleaning services.",
      image: "/avatar-1.jpg",
    },
    {
      name: "Marcus Thorne",
      role: "Head of Operations",
      bio: "Marcus ensures every team is equipped and trained to deliver the impeccable standard Essence is known for.",
      image: "/avatar-2.jpg",
    }
  ];

  const teamMembers = [
    { name: "Sarah Jenkins", role: "Operations Manager", image: "/team-1.jpg" },
    { name: "David Chen", role: "Lead Cleaner", image: "/team-2.jpg" },
    { name: "Michael Thompson", role: "Quality Assurance", image: "/team-3.jpg" },
    { name: "Elena Rodriguez", role: "Specialized Deep Cleaner", image: "/team-1.jpg" },
    { name: "James Wilson", role: "Commercial Lead", image: "/team-2.jpg" },
    { name: "Anita Patel", role: "Residential Supervisor", image: "/team-3.jpg" },
  ];

  return (
    <main>
      <Navbar />
      
      {/* Page Hero */}
      <section className="pt-40 lg:pt-48 pb-20 relative overflow-hidden" style={{ backgroundColor: "var(--color-brand-green-dark)" }}>
        <div className="absolute inset-0 opacity-20 bg-[url('/background.png')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="section-label section-label--light mb-4">The Experts Behind The Clean</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Our <span className="italic" style={{ color: "var(--color-brand-gold)" }}>Team</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
            Meet the dedicated professionals who work tirelessly to ensure your spaces are spotless, safe, and welcoming.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24" style={{ backgroundColor: "var(--color-brand-cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold" style={{ color: "var(--color-brand-green)" }}>Leadership</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {leadership.map((leader, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-3xl border shadow-sm" style={{ borderColor: "rgba(5,38,27,0.05)" }}>
                <img src={leader.image} alt={leader.name} className="w-32 h-32 rounded-full object-cover border-4" style={{ borderColor: "var(--color-brand-cream-dark)" }} />
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-1" style={{ color: "var(--color-brand-green)" }}>{leader.name}</h3>
                  <p className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: "var(--color-brand-gold)" }}>{leader.role}</p>
                  <p className="leading-relaxed" style={{ color: "var(--color-brand-green)", opacity: 0.8 }}>{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Professionals Grid */}
      <section className="py-24 bg-white border-t" style={{ borderColor: "rgba(5,38,27,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4" style={{ color: "var(--color-brand-green)" }}>Cleaning Professionals</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--color-brand-green)", opacity: 0.8 }}>
              Fully vetted, highly trained, and passionate about what they do.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden bg-gray-50 border transition-all hover:shadow-xl hover:-translate-y-2" style={{ borderColor: "rgba(5, 38, 27, 0.05)" }}>
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-heading text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-sm font-medium" style={{ color: "var(--color-brand-gold)" }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: "var(--color-brand-green-dark)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">Want to join our team?</h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            We are always looking for dedicated and hardworking individuals to join our growing family. If you have a passion for excellence, we'd love to hear from you.
          </p>
          <a href="/contact" className="btn-gold text-lg px-8 py-4 inline-flex items-center gap-3">
            Apply Now
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
