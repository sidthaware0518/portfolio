import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

// Dark / light mode toggle. Adds or removes the "dark" class on <html>
// and remembers the choice in localStorage.
export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true; // default to dark
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="grid place-items-center w-10 h-10 rounded-xl glass hover:text-brand-400 transition-colors"
    >
      {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
