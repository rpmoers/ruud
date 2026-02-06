import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioData } from "@/data/portfolio";

export function Footer() {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { personal } = data;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground text-center">
          © {currentYear} {personal.name}
        </p>
      </div>
    </footer>
  );
}
