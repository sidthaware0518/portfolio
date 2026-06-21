import { useState } from "react";
import Section from "./Section.jsx";
import { profile } from "../data/profile.js";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    // Opens the visitor's email client pre-filled. Works with no backend.
    // To use a real form service instead, swap this for a Formspree POST.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const contactItems = [
    { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiMapPin, label: "Location", value: profile.location, href: null },
    { icon: FaGithub, label: "GitHub", value: profile.socials.github.replace("https://", ""), href: profile.socials.github },
    { icon: FaLinkedin, label: "LinkedIn", value: profile.socials.linkedin.replace("https://", ""), href: profile.socials.linkedin },
  ];

  return (
    <Section id="contact" title="Get In Touch" subtitle="Have an opportunity or just want to connect? Let's talk.">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact info */}
        <div className="space-y-4">
          {contactItems.map((c) => {
            const Inner = (
              <div className="glass p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-600 to-accent shrink-0">
                  <c.icon className="text-white" size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-400">{c.label}</div>
                  <div className="font-medium truncate">{c.value}</div>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="block">
                {Inner}
              </a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}
        </div>

        {/* Contact form */}
        <form onSubmit={onSubmit} className="glass p-6 space-y-4">
          <div>
            <label className="text-sm text-slate-400">Name</label>
            <input
              name="name" value={form.name} onChange={update} required
              className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-400 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400">Email</label>
            <input
              type="email" name="email" value={form.email} onChange={update} required
              className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-400 transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400">Message</label>
            <textarea
              name="message" value={form.message} onChange={update} required rows={5}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-400 transition-colors resize-none"
              placeholder="Your message…"
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            <FiSend /> Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}
