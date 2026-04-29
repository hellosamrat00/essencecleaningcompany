"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      {/* Page Hero */}
      <section className="pt-40 lg:pt-48 pb-20 relative overflow-hidden" style={{ backgroundColor: "var(--color-brand-green-dark)" }}>
        <div className="absolute inset-0 opacity-20 bg-[url('/background.png')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="section-label section-label--light mb-4">Get In Touch</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Contact <span className="italic" style={{ color: "var(--color-brand-gold)" }}>Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
            We're here to answer any questions you have about our services or provide a free quote for your next cleaning project.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24" style={{ backgroundColor: "var(--color-brand-cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            
            {/* Contact Info (Left - 2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-brand-green)" }}>
                  Let's start a <span style={{ color: "var(--color-brand-gold)" }}>conversation</span>
                </h2>
                <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--color-brand-green)", opacity: 0.8 }}>
                  Reach out to us using the contact details below, or fill out the inquiry form. Our support team is available 24/7.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border shadow-sm transition-transform hover:-translate-y-1" style={{ borderColor: "rgba(5, 38, 27, 0.05)" }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 text-xl" style={{ backgroundColor: "var(--color-brand-green-dark)", color: "var(--color-brand-gold)" }}>
                    📍
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold mb-2" style={{ color: "var(--color-brand-green)" }}>Our Office</h4>
                    <p className="text-base leading-relaxed" style={{ color: "var(--color-brand-green)", opacity: 0.7 }}>Level 2, 45 George Street<br />Sydney NSW 2000, Australia</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border shadow-sm transition-transform hover:-translate-y-1" style={{ borderColor: "rgba(5, 38, 27, 0.05)" }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 text-xl" style={{ backgroundColor: "var(--color-brand-green-dark)", color: "var(--color-brand-gold)" }}>
                    📞
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold mb-2" style={{ color: "var(--color-brand-green)" }}>Phone Support</h4>
                    <p className="text-base leading-relaxed" style={{ color: "var(--color-brand-green)", opacity: 0.7 }}>+61 2 1234 5678<br />Monday - Friday, 8am - 8pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border shadow-sm transition-transform hover:-translate-y-1" style={{ borderColor: "rgba(5, 38, 27, 0.05)" }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 text-xl" style={{ backgroundColor: "var(--color-brand-green-dark)", color: "var(--color-brand-gold)" }}>
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold mb-2" style={{ color: "var(--color-brand-green)" }}>Email Address</h4>
                    <p className="text-base leading-relaxed" style={{ color: "var(--color-brand-green)", opacity: 0.7 }}>support@essence.com.au<br />24/7 Response time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form (Right - 3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-[2rem] p-8 md:p-12 border shadow-lg" style={{ borderColor: "rgba(5, 38, 27, 0.05)" }}>
                <h3 className="font-heading text-3xl font-bold mb-2" style={{ color: "var(--color-brand-green)" }}>Send an Inquiry</h3>
                <p className="mb-8" style={{ color: "var(--color-brand-green)", opacity: 0.7 }}>We usually respond within a few hours.</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: "var(--color-brand-green)" }}>First Name <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-colors" style={{ borderColor: "rgba(5,38,27,0.1)", color: "var(--color-brand-green)", '--tw-ring-color': 'var(--color-brand-gold)' } as React.CSSProperties} placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: "var(--color-brand-green)" }}>Last Name</label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-colors" style={{ borderColor: "rgba(5,38,27,0.1)", color: "var(--color-brand-green)", '--tw-ring-color': 'var(--color-brand-gold)' } as React.CSSProperties} placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: "var(--color-brand-green)" }}>Email Address <span className="text-red-500">*</span></label>
                      <input type="email" className="w-full px-5 py-4 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-colors" style={{ borderColor: "rgba(5,38,27,0.1)", color: "var(--color-brand-green)", '--tw-ring-color': 'var(--color-brand-gold)' } as React.CSSProperties} placeholder="john@example.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: "var(--color-brand-green)" }}>Phone Number</label>
                      <input type="tel" className="w-full px-5 py-4 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-colors" style={{ borderColor: "rgba(5,38,27,0.1)", color: "var(--color-brand-green)", '--tw-ring-color': 'var(--color-brand-gold)' } as React.CSSProperties} placeholder="+61 4XX XXX XXX" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: "var(--color-brand-green)" }}>Service Required <span className="text-red-500">*</span></label>
                    <select className="w-full px-5 py-4 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-colors appearance-none" style={{ borderColor: "rgba(5,38,27,0.1)", color: "var(--color-brand-green)", '--tw-ring-color': 'var(--color-brand-gold)' } as React.CSSProperties} required>
                      <option value="">Select a service...</option>
                      <option value="residential">Residential Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="specialized">Specialized Deep Clean</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: "var(--color-brand-green)" }}>Your Message <span className="text-red-500">*</span></label>
                    <textarea rows={5} className="w-full px-5 py-4 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-colors resize-none" style={{ borderColor: "rgba(5,38,27,0.1)", color: "var(--color-brand-green)", '--tw-ring-color': 'var(--color-brand-gold)' } as React.CSSProperties} placeholder="Tell us about your cleaning needs in detail..." required></textarea>
                  </div>

                  <button className="w-full py-5 rounded-xl font-heading font-bold text-lg transition-all hover:scale-[1.02] shadow-lg flex justify-center items-center gap-3" style={{ backgroundColor: "var(--color-brand-green-dark)", color: "var(--color-brand-gold)" }}>
                    Send Message
                    <span className="text-xl">→</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
