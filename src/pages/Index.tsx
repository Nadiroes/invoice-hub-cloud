
import { motion } from "framer-motion";
import { FileText, ChartBar, Users, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: FileText,
    title: "Invoice Creation",
    description: "Create professional invoices in seconds with our intuitive editor",
  },
  {
    icon: ChartBar,
    title: "Financial Insights",
    description: "Track your revenue and get detailed financial analytics",
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Manage your clients and their payment history effortlessly",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Accept payments online and track them in real-time",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">InvoiceHub</div>
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
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-primary mb-6">
            Professional Invoicing Made Simple
          </h1>
          <p className="text-xl text-secondary mb-8">
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

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-sm card-hover"
            >
              <feature.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to streamline your invoicing?</h2>
          <p className="text-secondary mb-8">
            Join thousands of freelancers and small businesses who trust InvoiceHub
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg button-hover"
          >
            Get Started Now
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
