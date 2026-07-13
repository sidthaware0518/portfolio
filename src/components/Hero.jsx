import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiFolder, FiMail, FiMapPin, FiChevronDown } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile.js";
import Typing from "./Typing.jsx";

export default function Hero() {
  // If the photo file isn't there yet, fall back to showing the initials.
  const [photoError, setPhotoError] = useState(false);
  const initials = profile.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  // Resume dropdown — lets visitors pick a role-specific resume.
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef(null);
  useEffect(() => {
    const onClick = (e) => {
      if (resumeRef.current && !resumeRef.current.contains(e.target)) setResumeOpen(false);
    };
    // Close the menu on scroll so it never floats detached over the page.
    const onScroll = () => setResumeOpen(false);
    document.addEventListener("mousedown", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center px-5 pt-24 overflow-hidden">
      {/* Decorative animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float [animation-delay:2s]" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-brand-300 mb-6">
            <FiMapPin /> {profile.location}
          </span>

          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-slate-300 mb-5 h-9">
            <Typing words={profile.titles} />
          </p>

          <p className="text-slate-400 max-w-xl mb-8 leading-relaxed">{profile.tagline}</p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {/* Resume dropdown: choose a role-specific resume to download */}
            <div className="relative" ref={resumeRef}>
              <button
                type="button"
                onClick={() => setResumeOpen((o) => !o)}
                className="btn-primary"
                aria-haspopup="true"
                aria-expanded={resumeOpen}
              >
                <FiDownload /> Download Resume
                <FiChevronDown className={`transition-transform ${resumeOpen ? "rotate-180" : ""}`} />
              </button>
              {resumeOpen && (
                <div className="absolute left-0 top-full mt-2 w-60 glass p-2 z-20">
                  <div className="px-3 py-1.5 text-xs text-slate-400">Choose a role</div>
                  {profile.resumes.map((r) => (
                    <a
                      key={r.label}
                      href={r.url}
                      download
                      onClick={() => setResumeOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-white/10 transition-colors"
                    >
                      <FiDownload className="text-brand-400 shrink-0" size={16} /> {r.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#projects" className="btn-ghost">
              <FiFolder /> View Projects
            </a>
            <a href="#contact" className="btn-ghost">
              <FiMail /> Contact Me
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-brand-400 hover:-translate-y-1 transition-all" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-brand-400 hover:-translate-y-1 transition-all" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-brand-400 hover:-translate-y-1 transition-all" aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right: profile image placeholder */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-accent rounded-full blur-2xl opacity-40 animate-float" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full glass grid place-items-center overflow-hidden border-2 border-white/10">
              {profile.photo && !photoError ? (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <span className="font-display text-7xl gradient-text font-bold">{initials}</span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
