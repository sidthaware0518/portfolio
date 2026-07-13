import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiSearch,
  FiChevronDown,
  FiExternalLink,
  FiDownload,
  FiFileText,
  FiInbox,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import ThemeToggle from "../components/ThemeToggle.jsx";
import GyaanVaultLogo from "../components/GyaanVaultLogo.jsx";
import SubjectCard from "../components/notes/SubjectCard.jsx";
import { profile } from "../data/profile.js";
import {
  semesters,
  generalResources,
  RESOURCE_TYPES,
} from "../data/notes.js";

// NotesPage uses its OWN minimal header ("← Back to Portfolio") and footer
// rather than the homepage Navbar/Footer. Rationale (design choice): it keeps
// App.jsx / Navbar's hash-anchor navigation completely untouched (those links
// only make sense on the homepage), and gives the notes app a focused, distinct
// context while still reusing the site's glass + gradient design tokens so it
// looks like the same product.
export default function NotesPage() {
  const { semester } = useParams(); // e.g. "semester-1" for deep links / SEO
  const [query, setQuery] = useState("");
  const [typeFilters, setTypeFilters] = useState([]); // resource-type keys

  // Which semesters are expanded. Deep-linked semester opens by default,
  // otherwise Semester I is open so the page never looks empty.
  const initialOpen = useMemo(() => {
    const match = semesters.find((s) => s.slug === semester);
    return new Set([match ? match.id : semesters[0].id]);
  }, [semester]);
  const [open, setOpen] = useState(initialOpen);

  function toggleSemester(id) {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function toggleTypeFilter(key) {
    setTypeFilters((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }

  // Filter subjects by search text (code / title / tag) and resource-type chips.
  const q = query.trim().toLowerCase();
  const filteredSemesters = useMemo(() => {
    return semesters.map((sem) => {
      const subjects = sem.subjects.filter((sub) => {
        const matchesQuery =
          !q ||
          sub.code.toLowerCase().includes(q) ||
          sub.title.toLowerCase().includes(q) ||
          sub.tags?.some((t) => t.toLowerCase().includes(q));
        const matchesType =
          typeFilters.length === 0 ||
          typeFilters.some((k) => sub.resources[k]?.available);
        return matchesQuery && matchesType;
      });
      return { ...sem, subjects };
    });
  }, [q, typeFilters]);

  const totalResults = filteredSemesters.reduce(
    (n, s) => n + s.subjects.length,
    0
  );
  const isSearching = q !== "" || typeFilters.length > 0;

  // Headline stats for the banner (data-driven, so they stay accurate as you
  // add material). Counts total subjects and how many notes PDFs are live.
  const bannerStats = useMemo(() => {
    const all = semesters.flatMap((s) => s.subjects);
    const notesLive = all.filter((s) => s.resources?.notes?.available).length;
    return [
      { value: notesLive, label: "Notes live" },
      { value: all.length, label: "Subjects" },
      { value: "Free", label: "Forever" },
    ];
  }, []);

  // ── SEO: dynamic title/canonical (per-semester deep links) + JSON-LD ──────
  // NOTE: update SITE_URL if you attach a custom domain later.
  const SITE_URL = "https://portfolio-sidt0518.onrender.com";
  const seo = useMemo(() => {
    const sem = semesters.find((s) => s.slug === semester);
    const path = sem ? `/notes/${sem.slug}` : "/notes";
    const title = sem
      ? `${sem.title} Notes — SPPU M.Sc. Data Science | GyaanVault`
      : "SPPU M.Sc. Data Science Notes (Free, Semester-wise) | GyaanVault";
    const description = sem
      ? `Free ${sem.title} notes for SPPU (Savitribai Phule Pune University) M.Sc. Data Science — ${sem.subjects
          .map((s) => s.title)
          .slice(0, 4)
          .join(", ")} and more. View & download, exam-ready.`
      : "Free semester-wise notes, question papers, practicals and interview prep for SPPU (Savitribai Phule Pune University) M.Sc. Data Science students. Download exam-ready PDFs for Statistics, Machine Learning, Deep Learning, Big Data, Python and more.";
    return { title, description, canonical: `${SITE_URL}${path}` };
  }, [semester]);

  // Structured data helps Google understand & rich-list the page.
  const jsonLd = useMemo(() => {
    const courses = semesters
      .flatMap((s) => s.subjects)
      .map((s) => ({
        "@type": "Course",
        name: `${s.code} ${s.title}`,
        description: `SPPU M.Sc. Data Science — ${s.title} (${s.code}) notes & study material.`,
        provider: {
          "@type": "CollegeOrUniversity",
          name: "Savitribai Phule Pune University (SPPU)",
          sameAs: "https://www.unipune.ac.in/",
        },
      }));
    return [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "GyaanVault — SPPU M.Sc. Data Science Notes",
        description: seo.description,
        url: `${SITE_URL}/notes`,
        inLanguage: "en",
        about: "SPPU M.Sc. Data Science semester-wise notes, question papers, practicals and interview preparation",
        isAccessibleForFree: true,
        hasPart: courses,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Portfolio", item: SITE_URL + "/" },
          { "@type": "ListItem", position: 2, name: "GyaanVault Notes", item: SITE_URL + "/notes" },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where can I get free SPPU M.Sc. Data Science notes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "GyaanVault offers free, semester-wise notes, question papers, practicals and interview prep for SPPU (Savitribai Phule Pune University) M.Sc. Data Science students — all free to view and download.",
            },
          },
          {
            "@type": "Question",
            name: "Which subjects are covered?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Semester I & II are covered, including Statistics for Data Science, Computational Mathematics, Fundamentals of Data Science, Data Mining, Artificial Intelligence, Database Technologies, Machine Learning, Python Programming, Big Data and Deep Learning. Semester III & IV are coming soon.",
            },
          },
        ],
      },
    ];
  }, [seo.description]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta
          name="keywords"
          content="SPPU MSc Data Science Notes, MSc Data Science students, Savitribai Phule Pune University, Pune University Data Science notes, Data Science notes PDF, semester wise notes, question papers, practicals, interview preparation, GyaanVault, free download, Statistics for Data Science, Machine Learning notes, Deep Learning notes, Big Data notes"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={seo.canonical} />
        <meta name="author" content="Siddheshwar Thaware" />

        {/* Open Graph / social preview */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GyaanVault" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:image" content={`${SITE_URL}/gyaanvault-banner.svg`} />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={`${SITE_URL}/gyaanvault-banner.svg`} />

        {/* Structured data for rich results */}
        {jsonLd.map((obj, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(obj)}
          </script>
        ))}
      </Helmet>

      {/* ── Minimal header ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 glass rounded-none border-x-0 border-t-0">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand-400 transition-colors"
          >
            <FiArrowLeft /> Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <GyaanVaultLogo size={30} withWordmark />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ── Hero / intro ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-5 pt-14 pb-8">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
            <div className="absolute top-10 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
          </div>
          <div className="max-w-6xl mx-auto">
            {/* Banner card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass relative overflow-hidden px-6 py-10 md:px-12 md:py-12 text-center"
            >
              {/* Decorative background banner image (SVG, self-contained) */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url('/gyaanvault-banner.svg')" }}
                aria-hidden="true"
              />
              {/* Readability overlay + glow so the banner never fights the text */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/40 via-navy-950/60 to-navy-950/80" />
              <div className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 w-[28rem] h-40 bg-brand-500/20 blur-3xl rounded-full" />

              <div className="flex justify-center mb-5">
                <GyaanVaultLogo size={72} className="animate-float drop-shadow-xl" />
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold">
                <span className="gradient-text">GyaanVault</span>
              </h1>
              <p className="mt-3 text-lg text-slate-300">
                SPPU M.Sc. Data Science — Semester-wise Notes
              </p>
              {/* Static summary paragraph — for students and search engines */}
              <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-relaxed">
                Free, exam-ready study material for Savitribai Phule Pune
                University (SPPU) M.Sc. Data Science students under the NEP 2020
                CBCS pattern. Browse each semester for notes, past question
                papers, practical manuals and topic-wise interview preparation —
                all free to view and download.
              </p>

              {/* Stat pills */}
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                {bannerStats.map((s) => (
                  <div
                    key={s.label}
                    className="px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="font-display text-xl font-bold gradient-text leading-none">
                      {s.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-wide text-slate-400 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Search */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="glass flex items-center gap-3 px-4 py-3">
                <FiSearch className="text-slate-400 shrink-0" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by course code, subject or topic…"
                  aria-label="Search subjects"
                  className="w-full bg-transparent outline-none text-sm placeholder:text-slate-500"
                />
              </div>

              {/* Resource-type filter row */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs text-slate-500 mr-1">Filter:</span>
                {RESOURCE_TYPES.map((rt) => {
                  const active = typeFilters.includes(rt.key);
                  return (
                    <button
                      key={rt.key}
                      onClick={() => toggleTypeFilter(rt.key)}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                        active
                          ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white border-transparent"
                          : "border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20"
                      }`}
                    >
                      {rt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Motivational Bhagavad Gita verse ─────────────────────────── */}
        <section className="px-5 py-6">
          <div className="max-w-4xl mx-auto">
            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="glass relative overflow-hidden p-6 md:p-8 text-center"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-600/10 via-transparent to-accent/10" />
              {/* Decorative Om + reference */}
              <div className="text-3xl gradient-text font-display mb-2" aria-hidden="true">
                ॐ
              </div>
              <p className="font-display text-lg md:text-xl text-slate-800 dark:text-slate-100 leading-relaxed">
                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
                <br />
                मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
              </p>
              <p className="mt-3 text-sm md:text-base text-brand-600 dark:text-brand-300 italic">
                “karmaṇy-evādhikāras te mā phaleṣu kadācana; mā karma-phala-hetur
                bhūr mā te saṅgo 'stv akarmaṇi”
              </p>
              <figcaption className="mt-3 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Bhagavad Gita · Chapter 2, Verse 47
              </figcaption>
              <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Meaning:</span> You
                have the right to perform your duty, but never to the fruits of
                your actions. Do not let the results be your motive, and never be
                attached to inaction. — In other words, focus fully on your
                studies and effort; do not be anxious about marks or outcomes.
                Sincere, consistent work is itself the goal.
              </p>
            </motion.figure>
          </div>
        </section>

        {/* ── General Resources strip ──────────────────────────────────── */}
        <section className="px-5 py-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-lg font-semibold mb-3 text-slate-300">
              General Resources
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {generalResources.map((r) => (
                <div key={r.title} className="glass p-5 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <FiFileText className="text-brand-300 shrink-0" />
                    <h3 className="font-semibold text-sm">{r.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed flex-1">
                    {r.description}
                  </p>
                  <div className="mt-4 flex gap-2">
                    {r.url ? (
                      <>
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary text-xs px-3 py-2"
                        >
                          <FiExternalLink /> View
                        </a>
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-ghost text-xs px-3 py-2"
                        >
                          <FiDownload /> Download
                        </a>
                      </>
                    ) : (
                      <span className="text-xs text-slate-500">Coming Soon</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Semester accordions ──────────────────────────────────────── */}
        <section className="px-5 py-6">
          <div className="max-w-6xl mx-auto space-y-4">
            {isSearching && totalResults === 0 ? (
              <div className="glass p-10 text-center">
                <FiInbox className="mx-auto text-slate-500 mb-3" size={34} />
                <p className="font-medium">No subjects found</p>
                <p className="text-sm text-slate-400 mt-1">
                  Try a different course code, subject name or topic — or clear
                  your filters.
                </p>
              </div>
            ) : (
              filteredSemesters.map((sem) => {
                // While searching, hide semesters that have no matches so the
                // results aren't cluttered; and force-expand the ones that do.
                if (isSearching && sem.subjects.length === 0) return null;
                const expanded = isSearching || open.has(sem.id);
                return (
                  <div key={sem.id} className="glass overflow-hidden">
                    <button
                      onClick={() => toggleSemester(sem.id)}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                      aria-expanded={expanded}
                    >
                      <div className="flex items-center gap-3 flex-wrap">
                        {/* h2 for crawlable semester headings */}
                        <h2 className="font-display text-xl font-bold">
                          {sem.title}
                        </h2>
                        {sem.comingSoon && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                            Coming Soon
                          </span>
                        )}
                        <span className="text-xs text-slate-500">
                          {sem.subjects.length} subjects
                        </span>
                      </div>
                      <FiChevronDown
                        className={`shrink-0 transition-transform ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-5">
                            {sem.comingSoon && (
                              <p className="text-sm text-slate-400 mb-4">
                                Structure is listed below — notes and resources
                                for {sem.title} will be added soon.
                              </p>
                            )}
                            <div className="grid gap-4 md:grid-cols-2">
                              {sem.subjects.map((sub) => (
                                <SubjectCard key={sub.code} subject={sub} />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>
        </section>

        {/* ── Get in touch / Report an issue ───────────────────────────── */}
        <section className="px-5 py-12">
          <div className="max-w-3xl mx-auto glass p-8 text-center">
            <h2 className="font-display text-2xl font-bold mb-2">
              <span className="gradient-text">Get in touch</span>
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Found a broken link, a mistake, or want to request notes for a
              subject? Reach out — happy to help.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-brand-400 hover:-translate-y-1 transition-all"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-brand-400 hover:-translate-y-1 transition-all"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-brand-400 hover:-translate-y-1 transition-all"
              >
                <FiMail size={20} />
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                aria-label="Phone"
                className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-brand-400 hover:-translate-y-1 transition-all"
              >
                <FiPhone size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="border-t border-white/10 py-8 px-5 text-center">
        <p className="text-sm text-slate-400">
          <span className="gradient-text font-display font-semibold">
            GyaanVault
          </span>{" "}
          — free notes for SPPU M.Sc. Data Science students.
        </p>
        <p className="text-xs text-slate-500 mt-2">
          © {new Date().getFullYear()} {profile.name}.{" "}
          <Link to="/" className="hover:text-brand-400 transition-colors">
            Back to Portfolio
          </Link>
        </p>
      </footer>
    </div>
  );
}
