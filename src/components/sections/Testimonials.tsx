import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioData } from "@/data/portfolio";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { testimonials, sections } = data;

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section header */}
          <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.02em] mb-14">
            {sections.testimonialsHeading}
          </h2>

          {/* Testimonials — Google-style cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <p className="text-sm leading-relaxed text-foreground mb-6 flex-1">
                  "{testimonial.quote}"
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0 flex items-center justify-center text-sm font-medium text-muted-foreground">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-muted-foreground text-xs truncate">
                      {testimonial.title}
                    </div>
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
