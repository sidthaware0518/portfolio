import Section from "./Section.jsx";
import { certifications } from "../data/profile.js";
import { FiAward } from "react-icons/fi";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Courses and credentials that sharpen my skills.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((c) => (
          <div key={c.name} className="glass p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform">
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-accent shrink-0">
              <FiAward className="text-white" size={22} />
            </div>
            <div>
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-sm text-slate-400">{c.issuer}</p>
              <span className="text-xs text-brand-300 font-medium">{c.year}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
