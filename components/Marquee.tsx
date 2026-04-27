export default function Marquee() {
  const items = ["VACUUM", "✦", "CLEANING", "✦", "SWEEPING", "✦", "MOPPING", "✦", "DISINFECTING", "✦"];

  return (
    <div className="bg-white border-y border-gray-100 py-5 overflow-hidden">
      <div className="flex whitespace-nowrap marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-8 text-sm font-bold tracking-[0.3em] uppercase ${
              item === "✦" ? "text-[#2D8C4E]" :
              item === "CLEANING" ? "text-[#2D8C4E] text-base" :
              "text-gray-400"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
