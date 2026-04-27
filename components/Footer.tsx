export default function Footer() {
  return (
    <footer className="bg-[#0a150e] text-gray-400">
      {/* Newsletter */}
  

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-full bg-[#2D8C4E] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 7v10l8 5 8-5V7L12 2z" fill="white"/>
              </svg>
            </div>
            <span className="font-heading text-xl font-bold text-white">Essence</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Professional cleaning services for homes and businesses. Delivering spotless results with eco-friendly solutions.
          </p>
          <div className="flex gap-3">
            {["f", "t", "in", "ig"].map(s => (
              <a key={s} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold hover:border-[#2D8C4E] hover:text-[#7ED957] transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Working Days */}
        <div>
          <h4 className="text-white font-bold mb-5">Working Days</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span>Monday – Friday</span>
              <span className="text-[#7ED957]">8am – 8pm</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span className="text-[#7ED957]">9am – 6pm</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="text-[#7ED957]">Emergency Only</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {["Home","About Us","Services","Portfolio","Blog","Contact Us"].map(l => (
              <li key={l}>
                <a href="#" className="hover:text-[#7ED957] transition-colors flex items-center gap-2">
                  <span className="text-[#2D8C4E]">›</span> {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-5">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-[#7ED957] mt-0.5">📍</span>
              <span>123 Clean Street, New York, NY 10001</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#7ED957]">📞</span>
              <a href="tel:+12345678890" className="hover:text-[#7ED957] transition-colors">+1 234 567 890</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#7ED957]">✉️</span>
              <a href="mailto:support@essence.com" className="hover:text-[#7ED957] transition-colors">support@Essence.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <span>© 2024 Essence Cleaning Services. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#7ED957] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#7ED957] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#7ED957] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
