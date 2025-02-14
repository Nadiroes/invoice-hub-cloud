
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, CreditCard, Users, ChartBar, Bell, Lock, Download, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Smart Invoice Creation",
      description: "Create professional invoices in seconds with customizable templates and automatic calculations."
    },
    {
      icon: CreditCard,
      title: "Online Payments",
      description: "Accept payments directly through invoices with multiple payment gateway options."
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Manage your client information, history, and preferences in one place."
    },
    {
      icon: ChartBar,
      title: "Financial Analytics",
      description: "Get detailed insights into your business performance with visual reports."
    },
    {
      icon: Bell,
      title: "Payment Reminders",
      description: "Automated payment reminders to help you get paid faster."
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Your data is encrypted and securely stored in the cloud."
    },
    {
      icon: Download,
      title: "Export Options",
      description: "Export your data in multiple formats including PDF and Excel."
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Automate recurring invoices and payment follow-ups."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Powerful Features for Your Business</h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage your invoicing and get paid faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-sm"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
