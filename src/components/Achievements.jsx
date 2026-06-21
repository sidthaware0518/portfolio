import Section from "./Section.jsx";
import { achievements } from "../data/profile.js";
import { FiStar } from "react-icons/fi";

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements" subtitle="Milestones from my data science journey.">
      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {achievements.map((a) => (
          <div key={a} className="glass p-5 flex items-start gap-3 hover:-translate-y-1 transition-transform">
            <FiStar className="text-accent shrink-0 mt-1" size={20} />
            <p className="text-slate-300">{a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
