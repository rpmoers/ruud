import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioData } from "@/data/portfolio";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const data = getPortfolioData(language);

  const navLinks = [
    { href: "#work", label: data.nav.work },
    { href: "#about", label: data.nav.about },
    { href: "#experience", label: data.nav.experience },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // Unlock immediately when menu closes
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-sm sm:text-base font-semibold tracking-tight text-foreground"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.15 }}
            aria-label={`${data.personal.name} — home`}
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent("close-project-detail"));
            }}
          >
            {data.personal.name}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                whileTap={{ scale: 0.97 }}
                role="listitem"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("close-project-detail"));
                  const target = document.querySelector(link.href);
                  if (target) {
                    const headerHeight = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1">
            {/* Language toggle */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="h-8 sm:h-9 px-2 sm:px-3 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label={language === "nl" ? "Switch to English" : "Schakel naar Nederlands"}
              >
                {language === "nl" ? "EN" : "NL"}
              </Button>
            </motion.div>

            {/* Theme toggle — min 44px touch target on mobile (WCAG 2.5.5) */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className="h-9 w-9 min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 rounded-full hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </motion.div>

            {/* Mobile menu button — min 44px touch target (WCAG 2.5.5) */}
            <motion.button
              className="sm:hidden flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full hover:bg-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="sm:hidden overflow-hidden border-t border-border/50 bg-background relative z-10">
            <div className="py-4 space-y-1 relative z-10">
              {navLinks.map((link) => {
                const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  
                  // Close menu and scroll immediately - no delays
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent("close-project-detail"));
                  
                  if (target) {
                    // Use immediate scroll, then smooth if needed
                    target.scrollIntoView({ 
                      behavior: "smooth", 
                      block: "start" 
                    });
                    window.history.pushState(null, "", link.href);
                  }
                };
                
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center min-h-[44px] px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors duration-150 cursor-pointer relative z-10 active:bg-accent"
                    onClick={handleClick}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
