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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="section-label mb-4">FAQ</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            You Have{" "}
            <span className="text-[#2D8C4E]">Questions,</span>
            <br />
            We Have Answers
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Find answers to the most common questions about our cleaning services. Can't find what you're looking for? Contact us directly.
          </p>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=700&q=80"
              alt="Cleaning professional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2D8C4E]/20"/>
          </div>
        </div>

        {/* Right - FAQs */}
        <div className="pt-8">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className="w-full flex items-center justify-between text-left gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold ${open === i ? "text-[#2D8C4E]" : "text-gray-800"} group-hover:text-[#2D8C4E] transition-colors`}>
                  {faq.q}
                </span>
                <span className={`text-2xl flex-shrink-0 transition-transform ${open === i ? "rotate-45 text-[#2D8C4E]" : "text-gray-400"}`}>+</span>
              </button>
              {open === i && (
                <p className="mt-3 text-gray-500 text-sm leading-relaxed pr-8">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
