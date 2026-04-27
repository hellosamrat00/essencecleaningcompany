export default function Hero() {
  const avatars = [
    "https://i.pravatar.cc/40?img=11",
    "https://i.pravatar.cc/40?img=22",
    "https://i.pravatar.cc/40?img=33",
    "https://i.pravatar.cc/40?img=44",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background image from /public/background.png */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
      />

      {/* Dark overlay — heavier on left for text legibility (Tailwind v4: bg-linear-to-r) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(2,17,12,0.88) 0%, rgba(5,38,27,0.65) 50%, rgba(5,38,27,0.30) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(2,17,12,0.75) 0%, transparent 100%)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col max-w-[1600px] mx-auto w-full px-6 lg:px-14 xl:px-20 pt-36 pb-14">

        {/* Trust badge — top left */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="client"
                width={36}
                height={36}
                className="w-9 h-9 rounded-full object-cover border-2"
                style={{
                  borderColor: "#e1b560",
                  marginLeft: i === 0 ? 0 : -10,
                  zIndex: avatars.length - i,
                  position: "relative",
                }}
              />
            ))}
          </div>
          <span className="text-white/80 text-sm font-medium">
            Trusted by{" "}
            <span className="font-bold" style={{ color: "#e1b560" }}>
              200+
            </span>{" "}
            businesses
          </span>
          <span style={{ color: "#e1b560", opacity: 0.7 }}>→</span>
        </div>

        {/* HEADLINE */}
        <div className="max-w-3xl">
          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-[6.5rem] font-medium text-white leading-[1.05] tracking-tight">
            Clean <span className="italic" style={{ color: "#e1b560" }}>space</span>
            <br />
            starts here
          </h1>
        </div>

        {/* Bottom row: Subtitle left + Glass card right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mt-auto pt-12 flex-1">

          {/* BOTTOM-LEFT — Subtitle */}
          <p className="text-white/70 text-lg leading-relaxed max-w-lg italic mb-6 lg:mb-5">
            Professional cleaning services for offices, homes, and commercial spaces – done right, every time.
          </p>

          {/* RIGHT — Glassmorphism CTA card */}
          <div
            className="lg:max-w-sm w-full flex flex-col"
            style={{

              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              border: "1px solid rgba(225, 181, 96, 0.35)",
              borderRadius: "20px",
              padding: "24px 24px 20px",
            }}
          >
            {/* Attractive points */}
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-white/95 text-base font-medium leading-snug">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                  style={{ background: "#e1b560" }}
                />
                Top-rated cleaning professionals
              </li>
              <li className="flex items-start gap-3 text-white/95 text-base font-medium leading-snug">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                  style={{ background: "#e1b560" }}
                />
                Eco-friendly & safe products
              </li>
              <li className="flex items-start gap-3 text-white/95 text-base font-medium leading-snug">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                  style={{ background: "#e1b560" }}
                />
                100% satisfaction guarantee
              </li>
            </ul>

            {/* CTA Button */}
            <div className="pt-2 mt-auto">
              <a
                href="#contact"
                className="btn-primary w-full justify-center font-heading text-lg py-4"
                style={{
                  background: "#e1b560",
                  color: "#02110c",
                }}
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
