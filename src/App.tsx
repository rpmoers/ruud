import {
  Header,
  Hero,
  LogoCarousel,
  Projects,
  About,
  Experience,
  Testimonials,
  Footer,
} from "@/components/sections";
import { PasswordGate } from "@/components/PasswordGate";

// Get password from environment variable or use default
const PORTFOLIO_PASSWORD = import.meta.env.VITE_PORTFOLIO_PASSWORD || "portfolio2026";

function App() {
  const content = (
    <div className="min-h-screen bg-background">
      <a href="#work" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <LogoCarousel />
        <Projects />
        <Experience />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );

  // If no password is set (or it's empty), show content directly
  if (!PORTFOLIO_PASSWORD || PORTFOLIO_PASSWORD === "") {
    return content;
  }

  return <PasswordGate password={PORTFOLIO_PASSWORD}>{content}</PasswordGate>;
}

export default App;
