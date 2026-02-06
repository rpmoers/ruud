import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioData } from "@/data/portfolio";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { experiences, sections } = data;

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section header */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[-0.02em] mb-12 sm:mb-16">
            {sections.experienceHeading}
          </h2>

          {/* Experience list */}
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="group py-6 sm:py-10 border-b border-border/60 first:border-t first:border-border/60"
              >
                <div className="grid sm:grid-cols-12 gap-3 sm:gap-4 md:gap-6 items-start">
                  {/* Date */}
                  <div className="sm:col-span-3 text-xs sm:text-sm text-muted-foreground font-medium mb-2 sm:mb-0">
                    {exp.startDate} — {exp.endDate}
                  </div>

                  {/* Content */}
                  <div className="sm:col-span-9">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors duration-200">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      {(exp.endDate === "Present" || exp.endDate === "Heden") && (
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {sections.current}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
