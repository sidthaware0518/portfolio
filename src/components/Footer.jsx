import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-5 text-center">
      <div className="max-w-6xl mx-auto">
        <a href="#home" className="font-display font-bold text-lg gradient-text">
          {"<DS />"}
        </a>
        <div className="flex justify-center gap-5 my-5">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-brand-400 transition-colors" aria-label="Email">
            <FiMail size={20} />
          </a>
        </div>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
