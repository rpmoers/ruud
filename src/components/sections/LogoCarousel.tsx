import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const logos: { name: string; src: string; className: string; heightClass?: string }[] = [
  {
    name: "WeAreReasonablePeople",
    src: "https://cdn.prod.website-files.com/661e812ebdc3422a64029d2e/661e812ebdc3422a64029e49_warplogo.svg",
    className: "logo-brand",
    heightClass: "h-8 sm:h-9 md:h-10",
  },
  {
    name: "ANWB",
    src: "https://static.anwb.nl/poncho/navigation/images/logo.svg",
    className: "logo-brand",
  },
  {
    name: "Unilever",
    src: "https://www.unilever.nl/core-assets/logos/logo-animated.svg",
    className: "logo-brand",
    heightClass: "h-12 sm:h-14 md:h-16",
  },
  {
    name: "Wolters Kluwer",
    src: "https://cdn.wolterskluwer.io/wk/jumpstart-v3-assets/0.x.x/logo/large.svg",
    className: "logo-brand",
  },
  {
    name: "Peterson",
    src: "/peterson-logo.svg",
    className: "logo-brand",
  },
  {
    name: "HERE",
    src: "https://images.here.com/x7rx8ayph7ee/45Ulm6tVkVRD5dpdtWx9Ea/99128403e01460a9e824f4b871869c5d/HERE_logo_32px.svg",
    className: "logo-brand",
  },
];

export function LogoCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="pt-8 pb-14 px-4 sm:px-6" aria-label="Companies I've worked with">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-center flex-wrap gap-6 sm:gap-8 md:gap-12 px-2 sm:px-4 md:px-12"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className={`${logo.heightClass ?? "h-6 sm:h-7 md:h-8"} w-auto max-w-[90px] sm:max-w-[120px] md:max-w-[150px] object-contain ${logo.className} select-none pointer-events-none transition-opacity duration-300 hover:opacity-80`}
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
