import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  {
    name: "ANWB",
    src: "https://static.anwb.nl/poncho/navigation/images/logo.svg",
    className: "logo-brand",
  },
  {
    name: "Unilever",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Unilever_logo.png",
    className: "logo-brand",
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
    <section ref={ref} className="pt-8 pb-14 px-6" aria-label="Companies I've worked with">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-between gap-8 sm:gap-12 px-4 sm:px-12"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className={`h-7 sm:h-8 w-auto max-w-[120px] sm:max-w-[150px] object-contain ${logo.className} select-none pointer-events-none transition-opacity duration-300 hover:opacity-80`}
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
