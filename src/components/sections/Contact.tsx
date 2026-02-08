import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioData } from "@/data/portfolio";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { personal, sections } = data;

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-6">
            {sections.contactHeading}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            {sections.contactDescription}
          </p>

          {/* Email link — Google Store style filled pill button */}
          <motion.a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center justify-center h-14 px-10 text-base font-medium bg-primary text-primary-foreground rounded-full shadow-sm"
            whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(26,115,232,0.3)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
          >
            {personal.email}
          </motion.a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {personal.links.linkedin && (
              <motion.a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                aria-label="LinkedIn (opens in new tab)"
              >
                LinkedIn
                <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden />
              </motion.a>
            )}
            <span className="text-border">·</span>
            <span className="text-muted-foreground text-sm">
              {personal.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
