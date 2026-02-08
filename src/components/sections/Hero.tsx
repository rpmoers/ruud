import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioData } from "@/data/portfolio";

export function Hero() {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { personal, sections } = data;

  return (
    <section className="hero-section min-h-[70vh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-20 pb-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Main headline — two lines: both scroll in sync (large at top, small after scroll) */}
          <h1 className="hero-headline tracking-[-0.02em] leading-[1.15] mb-5 overflow-visible">
            {personal.taglineLine1 && personal.taglineLine2 ? (
              <>
                <span className="block font-medium text-foreground hero-line1-scroll">
                  {personal.taglineLine1}
                </span>
                <span className="block font-semibold hero-gradient-text hero-line2-scroll mt-1">
                  {personal.taglineLine2}
                </span>
              </>
            ) : (
              <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
                {personal.tagline}
              </span>
            )}
          </h1>

          {/* Description */}
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {language === "nl"
              ? `Ik ontwerp digitale producten die complexe systemen eenvoudig en intuïtief maken. Gevestigd in ${personal.location.split(",")[0]}.`
              : `I design digital products that make complex systems simple and intuitive. Based in ${personal.location.split(",")[0]}.`}
          </motion.p>

          {/* CTA — Google Store style buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <motion.a
              href="#work"
              className="hero-cta-primary inline-flex items-center justify-center h-12 px-6 sm:px-8 text-sm font-medium rounded-full shadow-sm"
              whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(99,57,219,0.35)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
            >
              {sections.viewMyWork}
            </motion.a>
            <motion.a
              href={personal.links.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 sm:px-8 text-sm font-medium text-primary border border-border rounded-full hover:bg-accent"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              aria-label="LinkedIn (opens in new tab)"
            >
              LinkedIn
              <ExternalLink className="w-4 h-4 shrink-0" aria-hidden />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
