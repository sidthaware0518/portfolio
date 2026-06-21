import { motion } from "framer-motion";

// Reusable section wrapper that fades + slides its content in on scroll.
// Every page section uses this for consistent spacing and animation.
export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`py-20 md:py-28 px-5 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            {title && (
              <h2 className="section-title">
                <span className="gradient-text">{title}</span>
              </h2>
            )}
            {subtitle && <p className="section-sub">{subtitle}</p>}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
