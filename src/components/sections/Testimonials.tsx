import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioData } from "@/data/portfolio";

export function Testimonials() {
  const ref = useRef(null);
  const isSectionInView = useInView(ref, { once: false, margin: "-80px" });
  const [hasRevealed, setHasRevealed] = useState(false);
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { testimonials, sections } = data;

  useEffect(() => {
    if (isSectionInView) setHasRevealed(true);
  }, [isSectionInView]);

  const headingParts = sections.testimonialsHeading.split(/(\s+)/);
  const wordCount = headingParts.filter((p) => p.trim()).length;
  const WORD_DURATION = 0.5;
  const WORD_DELAY = 0.16;

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section header — words appear one by one when section in view, reverse when scrolling up */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[-0.02em] mb-10 sm:mb-14">
            {headingParts.map((part, i) => {
              if (!part.trim()) return <span key={i}>{part}</span>;
              const wordIndex = headingParts.slice(0, i).filter((p) => p.trim()).length;
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={
                    isSectionInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 8 }
                  }
                  transition={{
                    duration: WORD_DURATION,
                    delay: isSectionInView
                      ? wordIndex * WORD_DELAY
                      : (wordCount - 1 - wordIndex) * WORD_DELAY,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="inline-block"
                >
                  {part}
                </motion.span>
              );
            })}
          </h2>

          {/* Testimonials — Google-style cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 16 }}
                animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="testimonial-card bg-card rounded-2xl border border-border/60 p-6 shadow-sm transition-all duration-300 flex flex-col hover:border-border hover:bg-card/95 dark:hover:border-border dark:hover:bg-accent/50"
              >
                <p className="text-sm leading-relaxed text-foreground mb-6 flex-1">
                  "{testimonial.quote}"
                </p>
                <footer className="flex items-start gap-3">
                  <div className="relative w-10 h-10 rounded-full bg-muted flex-shrink-0 overflow-hidden flex items-center justify-center text-sm font-medium text-muted-foreground">
                    {testimonial.avatar && (
                      <img
                        src={testimonial.avatar}
                        alt=""
                        className="w-full h-full object-cover absolute inset-0"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                    )}
                    <span
                      className="w-full h-full flex items-center justify-center"
                      style={{ display: testimonial.avatar ? "none" : "flex" }}
                    >
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-muted-foreground text-xs leading-snug break-words">
                      {testimonial.title.includes(" @ ")
                        ? testimonial.title.split(" @ ")[0].trim()
                        : testimonial.title}
                    </div>
                    {testimonial.company && (
                      <div className="text-muted-foreground text-xs leading-snug break-words">
                        @ {testimonial.company}
                      </div>
                    )}
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
