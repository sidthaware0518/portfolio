import { motion } from "framer-motion";
import Section from "./Section.jsx";
import { skills } from "../data/profile.js";

// A single animated progress bar.
function Bar({ name, value }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium">{name}</span>
        <span className="text-slate-400">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies" subtitle="My technical toolbox, organized by category.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group) => (
          <div key={group.category} className="glass p-6 hover:-translate-y-1 transition-transform">
            <h3 className="font-display font-semibold text-lg mb-5 gradient-text">{group.category}</h3>
            <div className="space-y-4">
              {group.items.map((item) => (
                <Bar key={item.name} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
