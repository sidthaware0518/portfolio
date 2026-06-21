import { useEffect, useState } from "react";

// A lightweight typing/deleting animation that cycles through `words`.
// No external library needed.
export default function Typing({ words, className = "" }) {
  const [index, setIndex] = useState(0); // which word
  const [text, setText] = useState(""); // currently shown text
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    // Type faster than you delete; pause when a word is complete.
    const speed = deleting ? 45 : 90;

    const timer = setTimeout(() => {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);

      if (!deleting && next === current) {
        setTimeout(() => setDeleting(true), 1200); // pause at full word
      } else if (deleting && next === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="text-brand-400 animate-blink">|</span>
    </span>
  );
}
