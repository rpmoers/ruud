import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioData } from "@/data/portfolio";

export function Hero() {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { personal, sections } = data;

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-20 pb-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Main headline — Google-style large, clean text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-foreground leading-[1.15] mb-5">
            {personal.tagline}
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
              className="inline-flex items-center justify-center h-12 px-6 sm:px-8 text-sm font-medium bg-primary text-primary-foreground rounded-full shadow-sm"
              whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(26,115,232,0.3)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
            >
              {sections.viewMyWork}
            </motion.a>
            <motion.a
              href={personal.links.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-6 sm:px-8 text-sm font-medium text-primary border border-border rounded-full hover:bg-accent"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
