import { useState } from "react";
import {
  FiEye,
  FiDownload,
  FiMessageSquare,
  FiClock,
  FiCheckCircle,
  FiInfo,
} from "react-icons/fi";
import { RESOURCE_TYPES, TYPE_BADGES } from "../../data/notes.js";
import FeedbackModal from "./FeedbackModal.jsx";

// Turn a Google Drive "view" link into a direct-download link when possible;
// otherwise just reuse the given URL. Keeps the data file simple (paste one link).
function toDownloadUrl(url) {
  if (!url) return url;
  const m = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (m) return `https://drive.google.com/uc?export=download&id=${m[1]}`;
  return url;
}

export default function SubjectCard({ subject }) {
  const [activeKey, setActiveKey] = useState("notes");
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const badge = TYPE_BADGES[subject.type] || TYPE_BADGES.core;
  const activeType = RESOURCE_TYPES.find((r) => r.key === activeKey);
  const activeResource = subject.resources[activeKey];

  // Info-only subjects (e.g. OJT) don't show resource tabs — just an info note.
  if (subject.infoOnly) {
    return (
      <div className="glass p-5">
        <SubjectHeader subject={subject} badge={badge} />
        <div className="mt-4 flex gap-3 text-sm text-slate-300 bg-white/5 rounded-xl p-4">
          <FiInfo className="shrink-0 mt-0.5 text-brand-300" />
          <p className="leading-relaxed">{subject.info}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass p-5">
      <div className="flex items-start justify-between gap-3">
        <SubjectHeader subject={subject} badge={badge} />
        <button
          onClick={() => setFeedbackOpen(true)}
          aria-label={`Give feedback for ${subject.code}`}
          title="Share feedback"
          className="grid place-items-center w-9 h-9 shrink-0 rounded-xl glass hover:text-brand-400 transition-colors"
        >
          <FiMessageSquare size={17} />
        </button>
      </div>

      {/* Tags */}
      {subject.tags?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {subject.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Resource tabs — horizontally scrollable strip on small screens */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {RESOURCE_TYPES.map((rt) => {
          const isActive = rt.key === activeKey;
          const available = subject.resources[rt.key]?.available;
          return (
            <button
              key={rt.key}
              onClick={() => setActiveKey(rt.key)}
              className={`shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors flex items-center gap-1.5 ${
                isActive
                  ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white border-transparent"
                  : "border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20"
              }`}
            >
              {rt.label}
              {available ? (
                <FiCheckCircle
                  size={12}
                  className={isActive ? "text-white/90" : "text-emerald-400"}
                />
              ) : (
                <FiClock size={12} className="opacity-60" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active resource panel */}
      <div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-4">
        {/* Lab practicals checklist (shown inside the Practicals tab for -MJP labs) */}
        {activeKey === "practicals" && subject.practicalList?.length > 0 && (
          <div className="mb-4">
            <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
              Practical / Assignment list
            </p>
            <ul className="space-y-1.5">
              {subject.practicalList.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-300">
                  <span className="text-brand-300 shrink-0">{i + 1}.</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeResource?.available && activeResource.url ? (
          <div className="flex flex-wrap gap-2">
            <a
              href={activeResource.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-sm px-4 py-2"
            >
              <FiEye /> View
            </a>
            <a
              href={toDownloadUrl(activeResource.url)}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost text-sm px-4 py-2"
            >
              <FiDownload /> Download
            </a>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-sm text-slate-400">
              <FiClock /> {activeType.label} — Coming Soon
            </span>
            <div className="flex gap-2 opacity-40 pointer-events-none select-none">
              <span className="btn-primary text-sm px-4 py-2">
                <FiEye /> View
              </span>
              <span className="btn-ghost text-sm px-4 py-2">
                <FiDownload /> Download
              </span>
            </div>
          </div>
        )}
      </div>

      {feedbackOpen && (
        <FeedbackModal
          subject={subject}
          activeResource={activeType}
          onClose={() => setFeedbackOpen(false)}
        />
      )}
    </div>
  );
}

function SubjectHeader({ subject, badge }) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-mono text-brand-300">{subject.code}</span>
        <span
          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${badge.className}`}
        >
          {badge.label}
        </span>
      </div>
      {/* h3 keeps subject names crawlable for SEO */}
      <h3 className="font-display font-semibold text-base md:text-lg mt-1 leading-snug">
        {subject.title}
      </h3>
    </div>
  );
}
