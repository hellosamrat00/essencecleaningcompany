"use client";
import { useState } from "react";

const faqs = [
  { q: "What types of services do you offer?", a: "We offer residential cleaning, commercial cleaning, specialized deep cleaning, move-in/move-out cleaning, post-construction cleaning, and regular maintenance services." },
  { q: "Are your cleaning products eco-friendly?", a: "Yes! We use certified green cleaning products that are safe for your family, pets, and the environment without compromising on cleaning power." },
  { q: "How do I book a cleaning service?", a: "Booking is easy! You can call us, use our online form, or message us directly. We'll schedule a convenient time and provide a free quote." },
  { q: "Do I need to be home during cleaning?", a: "Not necessarily. Many clients provide us with access while they're at work. We're fully insured and bonded for your peace of mind." },
  { q: "What if I'm not satisfied with the service?", a: "Your satisfaction is our priority. If you're not happy with any aspect of our service, we'll return and re-clean at no additional charge." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24" style={{ backgroundColor: "var(--color-brand-cream)" }}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="section-label mb-4">FAQ</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "var(--color-brand-green)" }}>
            You Have{" "}
            <span style={{ color: "var(--color-brand-gold)" }}>Questions,</span>
            <br />
            We Have Answers
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: "var(--color-brand-green)", opacity: 0.8 }}>
            Find answers to the most common questions about our cleaning services. Can't find what you're looking for? Contact us directly.
          </p>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border" style={{ borderColor: "rgba(5, 38, 27, 0.1)" }}>
            <img
              src="/cleaning-team.jpg"
              alt="Cleaning professional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"/>
          </div>
        </div>

        {/* Right - FAQs */}
        <div className="pt-8 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item rounded-xl p-6 bg-white shadow-sm border transition-all" style={{ borderColor: open === i ? "var(--color-brand-gold)" : "transparent" }}>
              <button
                className="w-full flex items-center justify-between text-left gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold transition-colors" style={{ color: open === i ? "var(--color-brand-green)" : "var(--color-brand-green)", opacity: open === i ? 1 : 0.9 }}>
                  {faq.q}
                </span>
                <span className="text-2xl flex-shrink-0 transition-transform" style={{ color: open === i ? "var(--color-brand-gold)" : "rgba(5,38,27,0.3)", transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed pr-8" style={{ color: "var(--color-brand-green)", opacity: 0.7 }}>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
