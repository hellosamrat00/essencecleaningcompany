export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Jenkins",
      role: "Operations Manager",
      image: "/team-1.jpg",
    },
    {
      name: "David Chen",
      role: "Lead Cleaner",
      image: "/team-2.jpg",
    },
    {
      name: "Michael Thompson",
      role: "Quality Assurance",
      image: "/team-3.jpg",
    },
  ];

  return (
    <section id="team" className="py-24" style={{ backgroundColor: "var(--color-brand-cream-dark)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-3" style={{ color: "var(--color-brand-green)" }}>Our Experts</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight" style={{ color: "var(--color-brand-green)" }}>
            Meet The <span style={{ color: "var(--color-brand-gold)" }}>Professionals</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--color-brand-green)", opacity: 0.8 }}>
            Our dedicated team is highly trained, fully vetted, and committed to delivering the highest standard of cleanliness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border transition-all hover:shadow-xl hover:-translate-y-2" style={{ borderColor: "rgba(5, 38, 27, 0.05)" }}>
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              
              {/* Info section floating over image bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="font-heading text-xl font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-sm font-medium" style={{ color: "var(--color-brand-gold)" }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
