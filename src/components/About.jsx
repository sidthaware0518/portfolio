import Section from "./Section.jsx";
import { about, profile } from "../data/profile.js";
import { FiTarget, FiCode, FiTrendingUp, FiZap } from "react-icons/fi";

const ICONS = [FiTarget, FiCode, FiTrendingUp, FiZap];

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Get to know the person behind the data.">
      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Intro + objective */}
        <div className="md:col-span-3 glass p-8">
          <p className="text-lg leading-relaxed mb-5">{about.intro}</p>
          <p className="text-slate-400 leading-relaxed">{profile.objective}</p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {about.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight cards */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
          {about.highlights.map((h, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={h.title} className="glass p-5 hover:-translate-y-1 transition-transform">
                <Icon className="text-brand-400 mb-3" size={24} />
                <h3 className="font-semibold mb-1">{h.title}</h3>
                <p className="text-sm text-slate-400">{h.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
