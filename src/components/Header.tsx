
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAuthenticated = location.pathname !== "/" && 
                         location.pathname !== "/login" && 
                         location.pathname !== "/signup";

  return (
    <header className="bg-background border-b">
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            InvoiceHub
          </Link>
          {isMobile ? (
            <>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-primary hover:bg-muted rounded-lg transition-colors"
              >
                <Menu size={24} />
              </button>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-6 mt-2 bg-card shadow-lg rounded-lg py-2 px-4 space-y-2 z-50"
                >
                  {isAuthenticated ? (
                    <>
                      <Link to="/dashboard" className="block py-2 hover:text-primary">Dashboard</Link>
                      <Link to="/invoices" className="block py-2 hover:text-primary">Invoices</Link>
                      <Link to="/clients" className="block py-2 hover:text-primary">Clients</Link>
                      <Link to="/settings" className="block py-2 hover:text-primary">Settings</Link>
                      <button className="block w-full text-left py-2 text-destructive hover:text-destructive/90">
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="block py-2 hover:text-primary">Login</Link>
                      <Link to="/signup" className="block py-2 px-4 bg-primary text-primary-foreground rounded-lg">
                        Get Started
                      </Link>
                    </>
                  )}
                </motion.div>
              )}
            </>
          ) : (
            <div className="space-x-6">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
                  <Link to="/invoices" className="hover:text-primary">Invoices</Link>
                  <Link to="/clients" className="hover:text-primary">Clients</Link>
                  <Link to="/settings" className="hover:text-primary">Settings</Link>
                  <button className="text-destructive hover:text-destructive/90">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="hover:text-primary">Login</Link>
                  <Link to="/signup" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg button-hover">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
