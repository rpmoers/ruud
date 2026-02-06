import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export type Language = "nl" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("portfolio-lang");
    return (stored === "nl" || stored === "en") ? stored : "nl";
  });

  // WCAG: update lang attribute on <html> to match current language
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("portfolio-lang", lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    handleSetLanguage(language === "nl" ? "en" : "nl");
  }, [language, handleSetLanguage]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
