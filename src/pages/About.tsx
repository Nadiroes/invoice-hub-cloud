
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Trophy, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { value: "50,000+", label: "Active Users", icon: Users },
    { value: "10+ Years", label: "Experience", icon: Trophy },
    { value: "100+", label: "Countries", icon: Globe },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 text-center">About InvoiceHub</h1>
          <p className="text-lg text-muted-foreground mb-8">
            InvoiceHub was founded with a simple mission: to make invoicing and payment collection 
            effortless for freelancers and small businesses. We understand the challenges of running 
            a business, and we're here to help you focus on what matters most.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-8">
            Founded in 2014, InvoiceHub has grown from a simple invoicing tool to a comprehensive 
            financial management platform. Our team of dedicated professionals works tirelessly to 
            bring you the best possible experience in managing your business finances.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            We're on a mission to simplify financial management for businesses worldwide. By providing 
            intuitive tools and exceptional support, we help our users save time, get paid faster, 
            and focus on growing their businesses.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
