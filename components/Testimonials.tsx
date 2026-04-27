const testimonials = [
  {
    name: "Victor Dawson",
    role: "Home Owner",
    avatar: "https://i.pravatar.cc/80?img=11",
    text: "Essence transformed my home! Their attention to detail is remarkable. Every corner was spotless and the team was professional and friendly throughout.",
    rating: 5,
  },
  {
    name: "Peter Channing",
    role: "Office Manager",
    avatar: "https://i.pravatar.cc/80?img=33",
    text: "Our office has never looked better. The team is reliable, efficient, and uses products that don't trigger allergies. Highly recommend for commercial spaces.",
    rating: 5,
  },
  {
    name: "Victor Cleaning",
    role: "Restaurant Owner",
    avatar: "https://i.pravatar.cc/80?img=44",
    text: "After trying several cleaning companies, Essence is by far the best. Their specialized kitchen deep-clean service is exceptional and thorough.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f7f8f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Testimonials</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hear What Our{" "}
            <span className="text-[#2D8C4E]">Global Clients</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover"/>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
