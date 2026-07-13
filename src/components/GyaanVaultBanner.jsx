import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";
import GyaanVaultLogo from "./GyaanVaultLogo.jsx";

// Single, self-contained entry point to GyaanVault shown on the homepage.
// It is a compact banner/card (NOT a full section) so it doesn't disturb the
// flow of the existing sections. Styled entirely with the site's existing
// glass + gradient tokens to match the premium aesthetic.
export default function GyaanVaultBanner() {
  return (
    <div className="px-5 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="glass relative overflow-hidden p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
          {/* Soft brand glow to echo the hero blobs */}
          <div className="pointer-events-none absolute -top-16 -right-10 w-64 h-64 bg-brand-600/20 rounded-full blur-3xl" />

          <div className="flex items-center gap-4 min-w-0">
            <GyaanVaultLogo size={56} className="shrink-0 drop-shadow-lg" />
            <div className="min-w-0">
              <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                <span className="gradient-text">GyaanVault</span>
              </h3>
              <p className="text-slate-400 text-sm md:text-base">
                Free, exam-ready notes for SPPU M.Sc. Data Science students.
              </p>
            </div>
          </div>

          <div className="md:ml-auto shrink-0">
            <Link to="/notes" className="btn-primary">
              <FiBookOpen /> Notes Section <FiArrowRight />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
