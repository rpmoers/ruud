import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PasswordGateProps {
  children: React.ReactNode;
  password: string;
}

export function PasswordGate({ children, password }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(false);

  // Password expires after 30 minutes
  const EXPIRATION_MINUTES = 30;
  const EXPIRATION_MS = EXPIRATION_MINUTES * 60 * 1000;

  useEffect(() => {
    // Check if already authenticated (stored in localStorage with expiration)
    const authData = localStorage.getItem("portfolio_authenticated");
    if (authData) {
      try {
        const { timestamp } = JSON.parse(authData);
        const now = Date.now();
        // Check if authentication is still valid (not expired)
        if (now - timestamp < EXPIRATION_MS) {
          setIsAuthenticated(true);
        } else {
          // Expired, remove it
          localStorage.removeItem("portfolio_authenticated");
        }
      } catch {
        // Invalid data, remove it
        localStorage.removeItem("portfolio_authenticated");
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsAuthenticated(true);
      // Store authentication with timestamp
      localStorage.setItem(
        "portfolio_authenticated",
        JSON.stringify({ timestamp: Date.now() })
      );
      setError(false);
    } else {
      setError(true);
      setInputPassword("");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight mb-2">
              Portfolio Protected
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              Please enter the password to access this portfolio
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={inputPassword}
                onChange={(e) => {
                  setInputPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                autoFocus
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-destructive"
                >
                  Incorrect password. Please try again.
                </motion.p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
            >
              Access Portfolio
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
