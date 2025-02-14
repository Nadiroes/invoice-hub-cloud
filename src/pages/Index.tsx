
import { motion } from "framer-motion";
import { FileText, ChartBar, Users, CreditCard, Menu, FileCheck, BarChart3, Wallet, Globe, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const features = [
  {
    icon: FileCheck,
    title: "Smart Invoicing",
    description: "Create and send professional invoices in seconds"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track your business performance in real-time"
  },
  {
    icon: Wallet,
    title: "Secure Payments",
    description: "Accept payments online with top-tier security"
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "24/7 support in multiple languages"
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Automate recurring invoices and reminders"
  },
  {
    icon: Shield,
    title: "Data Protection",
    description: "Enterprise-grade security for your data"
  }
];

const Index = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="container mx-auto px-6 py-6 relative">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary flex items-center gap-2">
            <FileText className="h-8 w-8 text-primary" />
            InvoiceHub
          </div>
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
                  <Link
                    to="/login"
                    className="block py-2 text-secondary-foreground hover:text-primary transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block py-2 px-4 bg-primary text-primary-foreground rounded-lg button-hover"
                  >
                    Get Started
                  </Link>
                </motion.div>
              )}
            </>
          ) : (
            <div className="space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 text-secondary-foreground hover:text-primary transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg button-hover"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-12 md:pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Professional workspace"
              className="rounded-2xl shadow-2xl w-full aspect-video object-cover mb-12"
            />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Professional Invoicing Made Simple
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8">
            Create, send, and track invoices effortlessly. Perfect for freelancers
            and small businesses.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg text-lg button-hover"
          >
            Start Free Trial
          </Link>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl shadow-sm card-hover"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl -z-10" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to streamline your invoicing?</h2>
          <p className="text-secondary mb-8">
            Join thousands of freelancers and small businesses who trust InvoiceHub
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg button-hover"
          >
            Get Started Now
          </Link>
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Professional working environment"
            className="mt-12 rounded-xl shadow-xl w-full max-w-4xl mx-auto"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
