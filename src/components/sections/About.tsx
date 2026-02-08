import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioData } from "@/data/portfolio";

export function About() {
  const ref = useRef(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { personal, sections } = data;

  const [line1Active, setLine1Active] = useState(0);
  const [line2Active, setLine2Active] = useState(0);
  const [line3Active, setLine3Active] = useState(0);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const topRatio = rect.top / vh;
      setLine1Active(topRatio <= 0.80 ? 1 : 0);
      setLine2Active(topRatio <= 0.65 ? 1 : 0);
      setLine3Active(topRatio <= 0.50 ? 1 : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

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
            <div
              ref={headingRef}
              className="about-heading-wrapper"
              style={
                {
                  "--about-line1-active": line1Active,
                  "--about-line2-active": line2Active,
                  "--about-line3-active": line3Active,
                } as React.CSSProperties
              }
            >
              <h2 className="about-heading-title text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6 sm:mb-8 leading-tight">
                {sections.aboutHeadingLine1 && sections.aboutHeadingLine2 && sections.aboutHeadingLine3 ? (
                  <>
                    <span className="block about-heading-line about-heading-line1">{sections.aboutHeadingLine1}</span>
                    <span className="block about-heading-line about-heading-line2">{sections.aboutHeadingLine2}</span>
                    <span className="block about-heading-line about-heading-line3">{sections.aboutHeadingLine3}</span>
                  </>
                ) : (
                  sections.aboutHeading
                )}
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
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  aria-label={`${sections.connectLinkedIn} (opens in new tab)`}
                >
                  {sections.connectLinkedIn}
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden />
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
