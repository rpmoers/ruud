import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioData, type Project } from "@/data/portfolio";

// ------------------------------------
// Filter pills: only these are filterable; only these are shown on cards
// ------------------------------------
const FILTER_PILLS = ["Design Systems", "User Research", "Product Design", "AI"] as const;

/** Which filter pill(s) each project belongs to (by project id). */
const PROJECT_ID_TO_FILTERS: Record<string, string[]> = {
  "here-design-system": ["Design Systems"],
  "peterson-portal": ["User Research", "Product Design"],
  "wk-design-systems": ["Design Systems"],
  "wk-portable-business": ["Product Design"],
  "wk-taskflow-ai": ["Product Design", "AI"],
  "unilever-food-solutions": ["User Research", "Product Design"],
  "anwb-wegenwacht": ["User Research", "Product Design"],
  "warp-ai": ["Design Systems", "AI"],
};

function getFiltersForProject(project: Project): Set<string> {
  const filters = PROJECT_ID_TO_FILTERS[project.id];
  return new Set(filters ?? []);
}

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

function ProjectCardTags({ filters }: { filters: Set<string> }) {
  const list = Array.from(filters);
  if (list.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {list.map((name) => (
        <TagPill key={name} tag={name} />
      ))}
    </div>
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
  labels: { viewProject: string; challenge: string; role: string; tasks: string; keyDecisions: string; example: string; outcome: string; lesson: string; context: string; back: string };
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  // Reset scroll position when project changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [project.id]);

  // Keyboard navigation (wraps: last → first, first → last)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(prevIndex);
      if (e.key === "ArrowRight") onNavigate(nextIndex);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNavigate, prevIndex, nextIndex]);

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
              onClick={() => onNavigate(prevIndex)}
              aria-label="Previous project"
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <span className="text-xs text-muted-foreground tabular-nums" aria-live="polite">
              {currentIndex + 1} / {projects.length}
            </span>
            <button
              onClick={() => onNavigate(nextIndex)}
              aria-label="Next project"
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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

          {/* Case study sections — max-w-prose keeps line length readable (~65ch) */}
          <div className="space-y-8 sm:space-y-12 text-base leading-relaxed max-w-prose">
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
                <ul className="list-disc list-outside pl-6 space-y-2 text-foreground leading-relaxed">
                  {project.tasks.map((task, i) => (
                    <li key={i} className="pl-1">{task}</li>
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
                        <figcaption className="px-4 py-3 text-sm text-muted-foreground bg-muted/50 text-center">
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
                <ul className="list-disc list-outside pl-6 space-y-2 text-foreground leading-relaxed">
                  {project.decisions.map((d, i) => (
                    <li key={i} className="pl-1">{d}</li>
                  ))}
                </ul>
                {project.quote && (
                  <blockquote className="mt-6 relative pl-6 pr-4 py-4 border-l-4 border-primary/40 bg-muted/40 rounded-r text-foreground italic before:content-['\201C'] before:absolute before:left-3 before:top-2 before:text-4xl before:font-serif before:text-primary/30 before:leading-none">
                    <span className="relative">{project.quote}</span>
                  </blockquote>
                )}
              </div>
            )}

            {project.example && (
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  {labels.example}
                </h2>
                <p className="text-foreground">{project.example}</p>
              </div>
            )}

            {project.outcome && (
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  {labels.outcome}
                </h2>
                <p className="text-foreground whitespace-pre-line">{project.outcome}</p>
              </div>
            )}

            {project.lesson && (
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  {labels.lesson}
                </h2>
                <p className="text-foreground">{project.lesson}</p>
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
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());

  const toggleFilter = useCallback((canonical: string) => {
    setSelectedFilters((prev) => {
      const next = new Set(prev);
      if (next.has(canonical)) next.delete(canonical);
      else next.add(canonical);
      return next;
    });
    setSelectedIndex(null);
  }, []);
  const clearFilters = useCallback(() => {
    setSelectedFilters(new Set());
    setSelectedIndex(null);
  }, []);
  const filteredProjects =
    selectedFilters.size === 0
      ? projects
      : projects.filter((p) => {
          const filters = getFiltersForProject(p);
          return [...selectedFilters].some((s) => filters.has(s));
        });

  const labels = language === "nl"
    ? { viewProject: sections.viewProject, challenge: "Uitdaging", role: "Rol", tasks: "Aanpak en verantwoordelijkheden", keyDecisions: "Kernbeslissingen en afwegingen", example: "Concreet voorbeeld", outcome: "Resultaat en impact", lesson: "Belangrijkste les", context: "Context", back: "Terug naar overzicht" }
    : { viewProject: sections.viewProject, challenge: "Challenge", role: "Role", tasks: "Approach and responsibilities", keyDecisions: "Key decisions and trade-offs", example: "Concrete example", outcome: "Result and impact", lesson: "Key lesson", context: "Context", back: "Back to overview" };

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
            {/* Tag filter — one group of pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={clearFilters}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  selectedFilters.size === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {language === "nl" ? "Alle" : "All"}
              </button>
              {FILTER_PILLS.map((filterName) => (
                <button
                  key={filterName}
                  onClick={() => toggleFilter(filterName)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    selectedFilters.has(filterName)
                      ? "bg-primary text-primary-foreground"
                      : `${getTagColor(filterName)} hover:opacity-90`
                  }`}
                >
                  {filterName}
                </button>
              ))}
            </div>
            {/* Projects grid — Google Store style text cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProjects.map((project, index) => {
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
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Scale/Complexity hint */}
                    {project.scale && (
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/80">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/40"></span>
                          {project.scale}
                        </span>
                      </div>
                    )}

                    {/* Only filterable pills (same as filter bar) */}
                    <ProjectCardTags filters={getFiltersForProject(project)} />
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-screen project detail */}
      <AnimatePresence>
        {selectedIndex !== null && filteredProjects[selectedIndex] && (
          <ProjectDetail
            project={filteredProjects[selectedIndex]}
            projects={filteredProjects}
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
