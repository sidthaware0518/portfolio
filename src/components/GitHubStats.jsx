import Section from "./Section.jsx";
import { profile } from "../data/profile.js";

// Uses free, no-setup image services that render live GitHub stats.
// They read the public profile of `profile.githubUsername`.
export default function GitHubStats() {
  const u = profile.githubUsername;
  const theme = "tokyonight"; // matches the dark navy/blue look

  return (
    <Section id="github" title="GitHub Dashboard" subtitle="My open-source activity and most-used languages, live from GitHub.">
      <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="glass p-4 grid place-items-center">
          <img
            className="w-full max-w-md rounded-lg"
            src={`https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&hide_border=true&theme=${theme}&bg_color=00000000`}
            alt="GitHub stats"
            loading="lazy"
          />
        </div>
        <div className="glass p-4 grid place-items-center">
          <img
            className="w-full max-w-md rounded-lg"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${u}&hide_border=true&theme=tokyonight&background=00000000`}
            alt="GitHub streak"
            loading="lazy"
          />
        </div>
        <div className="glass p-4 grid place-items-center">
          <img
            className="w-full max-w-md rounded-lg"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&hide_border=true&theme=${theme}&bg_color=00000000`}
            alt="Most used languages"
            loading="lazy"
          />
        </div>
        <div className="glass p-4 grid place-items-center overflow-hidden">
          <img
            className="w-full rounded-lg"
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${u}&theme=react-dark&hide_border=true&bg_color=00000000&color=60a5fa&line=22d3ee&point=ffffff`}
            alt="Contribution graph"
            loading="lazy"
          />
        </div>
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
