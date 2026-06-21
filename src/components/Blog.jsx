import Section from "./Section.jsx";
import { blog } from "../data/profile.js";
import { FiArrowRight } from "react-icons/fi";

export default function Blog() {
  return (
    <Section id="blog" title="Blog & Articles" subtitle="Writing I'm planning to share on my data science journey.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blog.map((post) => (
          <article key={post.title} className="glass p-6 flex flex-col hover:-translate-y-1 transition-transform">
            <span className="self-start text-xs px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/20 mb-4">
              {post.tag}
            </span>
            <h3 className="font-display font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-sm text-slate-400 flex-1">{post.excerpt}</p>
            <div className="flex items-center justify-between mt-5 text-sm">
              <span className="text-slate-500">{post.date}</span>
              <span className="inline-flex items-center gap-1 text-brand-300">
                Read <FiArrowRight />
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
