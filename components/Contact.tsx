"use client";
export default function Contact() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--color-brand-cream)" }}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="section-label mb-4">Contact Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "var(--color-brand-green)" }}>
            Get In <span style={{ color: "var(--color-brand-gold)" }}>Touch</span>
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: "var(--color-brand-green)", opacity: 0.8 }}>
            Have questions or need a quote? Reach out to us using the form or our contact details below. Our team is ready to help!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border shadow-sm" style={{ borderColor: "rgba(5, 38, 27, 0.05)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-brand-green-dark)", color: "var(--color-brand-gold)" }}>
                📍
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: "var(--color-brand-green)" }}>Location</h4>
                <p className="text-sm" style={{ color: "var(--color-brand-green)", opacity: 0.7 }}>Level 2, 45 George Street<br />Sydney NSW 2000, Australia</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border shadow-sm" style={{ borderColor: "rgba(5, 38, 27, 0.05)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-brand-green-dark)", color: "var(--color-brand-gold)" }}>
                📞
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: "var(--color-brand-green)" }}>Phone</h4>
                <p className="text-sm" style={{ color: "var(--color-brand-green)", opacity: 0.7 }}>+61 2 1234 5678<br />Mon-Fri 8am-8pm</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border shadow-sm" style={{ borderColor: "rgba(5, 38, 27, 0.05)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-brand-green-dark)", color: "var(--color-brand-gold)" }}>
                ✉️
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: "var(--color-brand-green)" }}>Email</h4>
                <p className="text-sm" style={{ color: "var(--color-brand-green)", opacity: 0.7 }}>support@essence.com.au<br />24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border shadow-md" style={{ borderColor: "rgba(5, 38, 27, 0.05)" }}>
          <h3 className="font-heading text-2xl font-bold mb-6" style={{ color: "var(--color-brand-green)" }}>Send us a message</h3>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-brand-green)" }}>First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2" style={{ borderColor: "rgba(5,38,27,0.1)", color: "var(--color-brand-green)" }} placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-brand-green)" }}>Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2" style={{ borderColor: "rgba(5,38,27,0.1)", color: "var(--color-brand-green)" }} placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-brand-green)" }}>Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2" style={{ borderColor: "rgba(5,38,27,0.1)", color: "var(--color-brand-green)" }} placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-brand-green)" }}>Service Required</label>
              <select className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 bg-white" style={{ borderColor: "rgba(5,38,27,0.1)", color: "var(--color-brand-green)" }}>
                <option>Residential Cleaning</option>
                <option>Commercial Cleaning</option>
                <option>Specialized Cleaning</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-brand-green)" }}>Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 resize-none" style={{ borderColor: "rgba(5,38,27,0.1)", color: "var(--color-brand-green)" }} placeholder="Tell us about your needs..."></textarea>
            </div>
            <button className="w-full py-4 rounded-xl font-heading font-semibold text-lg transition-transform hover:-translate-y-1" style={{ backgroundColor: "var(--color-brand-green-dark)", color: "var(--color-brand-gold)" }}>
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
