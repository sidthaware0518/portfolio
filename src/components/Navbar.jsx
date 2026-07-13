import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle.jsx";

const LINKS = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Blog", "blog"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a glassy background once the user scrolls down a bit.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass rounded-none border-x-0 border-t-0 py-2" : "py-4"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-xl">
          <span className="gradient-text">{"<DS />"}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
          {LINKS.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-brand-400 transition-colors">
                {label}
              </a>
            </li>
          ))}
          {/* Routed link to the GyaanVault notes platform (not a hash anchor) */}
          <li>
            <Link to="/notes" className="text-brand-300 hover:text-brand-400 transition-colors">
              Notes Section
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden grid place-items-center w-10 h-10 rounded-xl glass"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden glass mx-5 mt-2 p-4 flex flex-col gap-2 text-sm font-medium">
          {LINKS.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/notes"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg text-brand-300 hover:bg-white/10 transition-colors"
            >
              Notes Section
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
