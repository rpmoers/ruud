import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioData } from "@/data/portfolio";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { personal, sections } = data;

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/40 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[-0.02em] mb-6 sm:mb-8 leading-tight">
                {sections.aboutHeading}
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {personal.bio}
              </p>
              
              {personal.links.linkedin && (
                <motion.a
                  href={personal.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {sections.connectLinkedIn}
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
