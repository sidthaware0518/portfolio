import Section from "./Section.jsx";
import { projects } from "../data/profile.js";
import { FiGithub, FiExternalLink, FiCheckCircle } from "react-icons/fi";

function ProjectCard({ p }) {
  return (
    <div className="glass overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 group">
      {/* Image / gradient header */}
      <div className="h-44 relative overflow-hidden">
        {p.image ? (
          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy-700 via-brand-600/40 to-accent/30 grid place-items-center">
            <span className="font-display text-2xl font-bold text-white/90 px-6 text-center">{p.name}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg mb-2">{p.name}</h3>

        <p className="text-sm text-slate-400 mb-3">
          <span className="text-brand-300 font-medium">Problem: </span>
          {p.problem}
        </p>

        {p.dataset && (
          <p className="text-xs text-slate-500 mb-3">
            <span className="font-medium text-slate-400">Dataset: </span>
            {p.dataset}
          </p>
        )}

        {/* Features */}
        <ul className="space-y-1.5 mb-4">
          {p.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-slate-300">
              <FiCheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Results & impact */}
        <div className="text-sm space-y-1 mb-4">
          <p><span className="text-brand-300 font-medium">Results: </span><span className="text-slate-400">{p.results}</span></p>
          <p><span className="text-brand-300 font-medium">Impact: </span><span className="text-slate-400">{p.impact}</span></p>
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {p.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-brand-500/15 text-brand-300 border border-brand-500/20">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex gap-3">
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 text-sm flex-1 justify-center">
              <FiGithub /> Code
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2 text-sm flex-1 justify-center">
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Real, hands-on work — from data analysis to full-stack deployment.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </Section>
  );
}
