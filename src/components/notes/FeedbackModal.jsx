import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiX, FiSend } from "react-icons/fi";
import { profile } from "../../data/profile.js";

// Lightweight feedback modal. Feedback is auto-tagged with the subject code and
// the resource tab that was active when the icon was clicked, so it's obvious
// exactly what a student is reacting to. With no backend it opens the user's
// mail client pre-filled — swap the onSubmit for a Google Form / Formspree POST
// later if you prefer (the auto-tag string is ready to embed either way).
export default function FeedbackModal({ subject, activeResource, onClose }) {
  const [message, setMessage] = useState("");

  // Close on Escape for accessibility.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const tag = `[${subject.code} · ${activeResource.label}]`;

  function onSubmit(e) {
    e.preventDefault();
    const subjectLine = encodeURIComponent(`GyaanVault feedback ${tag}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nSubject: ${subject.code} — ${subject.title}\nResource tab: ${activeResource.label}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subjectLine}&body=${body}`;
    onClose();
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] grid place-items-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Feedback for ${subject.code}`}
    >
      <div className="glass w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-display text-lg font-bold">Share feedback</h3>
            <p className="text-xs text-slate-400 mt-1">
              {subject.code} — {subject.title}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close feedback"
            className="grid place-items-center w-9 h-9 rounded-xl glass hover:text-brand-400 transition-colors"
          >
            <FiX size={18} />
          </button>
        </div>

        <div className="mb-3 text-xs">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-500/15 text-brand-300 border border-brand-400/30">
            Auto-tagged: {tag}
          </span>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            autoFocus
            placeholder="What's missing, broken, or helpful? Let me know…"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-400 transition-colors resize-none"
          />
          <button type="submit" className="btn-primary w-full justify-center">
            <FiSend /> Send Feedback
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
