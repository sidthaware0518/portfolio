// Reusable vertical timeline used by Experience and Education.
export default function Timeline({ items }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* vertical line */}
      <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 to-accent md:-translate-x-1/2" />

      <div className="space-y-10">
        {items.map((item, i) => (
          <div
            key={i}
            className={`relative pl-10 md:pl-0 md:w-1/2 ${
              i % 2 === 0 ? "md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
            }`}
          >
            {/* dot */}
            <span
              className={`absolute top-1.5 left-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20 md:left-auto ${
                i % 2 === 0 ? "md:-right-1.5" : "md:-left-1.5"
              }`}
            />
            <div className="glass p-5">
              <span className="text-xs font-semibold text-brand-300">{item.period}</span>
              <h3 className="font-display font-bold text-lg mt-1">{item.role || item.degree}</h3>
              <p className="text-sm text-slate-400 mb-3">{item.org}</p>
              <ul className={`space-y-1 text-sm text-slate-300 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
