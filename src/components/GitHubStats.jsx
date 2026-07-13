import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Section from "./Section.jsx";
import { profile } from "../data/profile.js";

// Live GitHub cards from free, no-setup image services that read the public
// profile of `profile.githubUsername`. Each card degrades gracefully: if a
// third-party service is down or rate-limited, we show a tidy fallback link
// instead of a broken-image icon.
function StatCard({ src, alt, className = "w-full max-w-md" }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="glass p-4 grid place-items-center overflow-hidden min-h-[150px]">
      {failed ? (
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-brand-400 transition-colors py-6"
        >
          <FaGithub size={28} />
          <span className="text-sm">{alt} — view on GitHub</span>
        </a>
      ) : (
        <img
          className={`${className} rounded-lg`}
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function GitHubStats() {
  const u = profile.githubUsername;
  const theme = "tokyonight"; // matches the dark navy/blue look

  return (
    <Section id="github" title="GitHub Dashboard" subtitle="My open-source activity and most-used languages, live from GitHub.">
      <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <StatCard
          alt="GitHub stats"
          src={`https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&hide_border=true&theme=${theme}&bg_color=00000000`}
        />
        {/* Heroku free tier was retired — use the maintained demolab mirror. */}
        <StatCard
          alt="GitHub streak"
          src={`https://streak-stats.demolab.com/?user=${u}&hide_border=true&theme=tokyonight&background=00000000`}
        />
        <StatCard
          alt="Most used languages"
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&hide_border=true&theme=${theme}&bg_color=00000000`}
        />
        <StatCard
          alt="Contribution graph"
          className="w-full"
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${u}&theme=react-dark&hide_border=true&bg_color=00000000&color=60a5fa&line=22d3ee&point=ffffff`}
        />
      </div>
      <p className="text-center text-xs text-slate-500 mt-6">
        Stats update automatically from{" "}
        <a className="text-brand-300" href={profile.socials.github} target="_blank" rel="noreferrer">
          github.com/{u}
        </a>
      </p>
    </Section>
  );
}
