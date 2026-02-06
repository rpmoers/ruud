import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioData, type Project } from "@/data/portfolio";

// ------------------------------------
// Color-coded tag system
// ------------------------------------
const tagColorMap: Record<string, string> = {
  // Blues — Design systems & components
  "design systems": "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  "design system": "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  "componenten": "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  "components": "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  "component library": "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  // Purple — Tools & software
  "figma": "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  "cursor": "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  "prototyping": "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  // Green — Research & testing
  "gebruikersonderzoek": "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  "user research": "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  "usability testing": "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  "onderzoek": "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  "research": "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  // Orange — Business & domains
  "b2b": "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  "logistiek": "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  "logistics": "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  "enterprise": "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  "saas": "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  "multi-country": "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  // Pink — AI & automation
  "ai": "bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300",
  "artificial intelligence": "bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300",
  "automatisering": "bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300",
  "automation": "bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300",
  "machine learning": "bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300",
  // Cyan — UX & interaction
  "ux design": "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
  "interaction design": "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
  "interactieontwerp": "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
  "information architecture": "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
  "informatiearchitectuur": "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
  // Amber — Strategy & process
  "stakeholdermanagement": "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  "stakeholder management": "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  "agile": "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  "workshop facilitation": "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  "design strategie": "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  "design strategy": "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  // Teal — Mobile & platforms
  "mobile": "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
  "app design": "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
  "responsive": "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
  "cross-platform": "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
  "white label": "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
  // Indigo — Data & dashboards
  "dashboard": "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
  "dashboards": "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
  "data visualisatie": "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
  "data visualization": "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
  // Rose — Front-end
  "front-end": "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  "react": "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  "documentatie": "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  "documentation": "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
};

const defaultTagColor = "bg-muted text-muted-foreground";

function getTagColor(tag: string): string {
  const key = tag.toLowerCase();
  return tagColorMap[key] ?? defaultTagColor;
}

function TagPill({ tag }: { tag: string }) {
  return (
    <span className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full ${getTagColor(tag)}`}>
      {tag}
    </span>
  );
}

function TagPillLarge({ tag }: { tag: string }) {
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTagColor(tag)}`}>
      {tag}
    </span>
  );
}

// ------------------------------------
// Company-specific card colors
// ------------------------------------
const companyColors: Record<string, { bg: string; text: string }> = {
  // HERE — green
  "HERE": { bg: "bg-emerald-50 dark:bg-emerald-950/40", text: "text-emerald-700 dark:text-emerald-400" },
  "HERE Technologies — via WeAreReasonablePeople": { bg: "bg-emerald-50 dark:bg-emerald-950/40", text: "text-emerald-700 dark:text-emerald-400" },
  // Peterson — navy
  "Peterson": { bg: "bg-slate-100 dark:bg-slate-900/50", text: "text-slate-700 dark:text-slate-400" },
  "Peterson Logistics — via WeAreReasonablePeople": { bg: "bg-slate-100 dark:bg-slate-900/50", text: "text-slate-700 dark:text-slate-400" },
  // WARP — coral/red
  "WeAreReasonablePeople": { bg: "bg-rose-50 dark:bg-rose-950/40", text: "text-rose-700 dark:text-rose-400" },
  // Wolters Kluwer — teal
  "Wolters Kluwer": { bg: "bg-teal-50 dark:bg-teal-950/40", text: "text-teal-700 dark:text-teal-400" },
  // Unilever — blue
  "Unilever": { bg: "bg-blue-50 dark:bg-blue-950/40", text: "text-blue-700 dark:text-blue-400" },
  // ANWB — amber
  "ANWB": { bg: "bg-amber-50 dark:bg-amber-950/40", text: "text-amber-700 dark:text-amber-400" },
};

const defaultCompanyColor = { bg: "bg-muted", text: "text-muted-foreground" };

function getCompanyColor(company: string) {
  return companyColors[company] ?? defaultCompanyColor;
}

// ------------------------------------
// Full-screen project detail view
// ------------------------------------
function ProjectDetail({
  project,
  projects,
  currentIndex,
  onClose,
  onNavigate,
  labels,
}: {
  project: Project;
  projects: Project[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  labels: { viewProject: string; challenge: string; role: string; tasks: string; keyDecisions: string; outcome: string; context: string; back: string };
}) {
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < projects.length - 1;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Reset scroll position when project changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [project.id]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && hasNext) onNavigate(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNavigate, currentIndex, hasPrev, hasNext]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      ref={scrollContainerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 top-16 z-40 bg-background overflow-y-auto"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      {/* Project navigation bar */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          <motion.button
            onClick={onClose}
            className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ x: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">{labels.back}</span>
            <span className="sm:hidden">Terug</span>
          </motion.button>

          {/* Prev / Next */}
          <div className="flex items-center gap-2" role="navigation" aria-label="Project navigation">
            <button
              onClick={() => hasPrev && onNavigate(currentIndex - 1)}
              disabled={!hasPrev}
              aria-label="Previous project"
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <span className="text-xs text-muted-foreground tabular-nums" aria-live="polite">
              {currentIndex + 1} / {projects.length}
            </span>
            <button
              onClick={() => hasNext && onNavigate(currentIndex + 1)}
              disabled={!hasNext}
              aria-label="Next project"
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
        >
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight mb-2">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">{project.subtitle}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {project.tags.map((tag) => (
              <TagPillLarge key={tag} tag={tag} />
            ))}
          </div>

          {/* Case study sections */}
          <div className="space-y-8 sm:space-y-12 text-sm sm:text-base leading-relaxed">
            {project.context && (
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  {labels.context}
                </h2>
                <p className="text-foreground">{project.context}</p>
              </div>
            )}

            {project.challenge && (
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  {labels.challenge}
                </h2>
                <p className="text-foreground">{project.challenge}</p>
              </div>
            )}


            {project.role && (
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  {labels.role}
                </h2>
                <p className="text-foreground">{project.role}</p>
              </div>
            )}

            {project.tasks && project.tasks.length > 0 && (
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  {labels.tasks}
                </h2>
                <ul className="list-disc list-inside space-y-1.5 text-foreground">
                  {project.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Show images after tasks */}
            {project.images && project.images.length > 0 && (() => {
              const allMobileFrames = project.images.every(img => img.mobileFrame);
              
              return (
                <div className={allMobileFrames && project.images.length > 1 ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"}>
                  {project.images.map((img, i) => (
                    <figure key={i} className={img.mobileFrame ? "" : "rounded-xl overflow-hidden border border-border/40"}>
                      {img.mobileFrame ? (
                        <div className="mobile-frame mx-auto">
                          <div className="mobile-frame-content">
                            <img
                              src={img.src}
                              alt={img.alt}
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ) : (
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      )}
                      {img.caption && (
                        <figcaption className="px-4 py-3 text-xs text-muted-foreground bg-muted/50 text-center">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              );
            })()}

            {project.decisions && project.decisions.length > 0 && (
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  {labels.keyDecisions}
                </h2>
                <ul className="list-disc list-inside space-y-1.5 text-foreground">
                  {project.decisions.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.outcome && (
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  {labels.outcome}
                </h2>
                <p className="text-foreground">{project.outcome}</p>
              </div>
            )}
          </div>

          {/* External link */}
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-12 text-sm font-medium text-primary hover:underline"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {labels.viewProject}
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

// ------------------------------------
// Projects section
// ------------------------------------
export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { projects, sections } = data;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const labels = language === "nl"
    ? { viewProject: sections.viewProject, challenge: "Uitdaging", role: "Rol", tasks: "Taken", keyDecisions: "Focusgebieden", outcome: "Resultaat", context: "Context", back: "Terug naar overzicht" }
    : { viewProject: sections.viewProject, challenge: "Challenge", role: "Role", tasks: "Tasks", keyDecisions: "Focus areas", outcome: "Outcome", context: "Context", back: "Back to overview" };

  const handleNavigate = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Close detail when header navigation is used
  useEffect(() => {
    const close = () => setSelectedIndex(null);
    window.addEventListener("close-project-detail", close);
    return () => window.removeEventListener("close-project-detail", close);
  }, []);

  return (
    <>
      <section id="work" className="pt-16 pb-24 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Projects grid — Google Store style text cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project, index) => {
                const color = getCompanyColor(project.company);
                return (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.03,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className={`group cursor-pointer rounded-2xl ${color.bg} p-5 sm:p-6 md:p-8 transition-all duration-300 shadow-sm hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
                    onClick={() => setSelectedIndex(index)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedIndex(index); } }}
                    tabIndex={0}
                    role="button"
                    aria-label={`${project.title} — ${project.company}`}
                  >
                    {/* Company */}
                    <p className={`text-xs font-medium mb-3 ${color.text}`}>
                      {project.company}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-normal tracking-tight text-foreground mb-2 leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <TagPill key={tag} tag={tag} />
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-screen project detail */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <ProjectDetail
            project={projects[selectedIndex]}
            projects={projects}
            currentIndex={selectedIndex}
            onClose={handleClose}
            onNavigate={handleNavigate}
            labels={labels}
          />
        )}
      </AnimatePresence>
    </>
  );
}
