
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const Templates = () => {
  const templates = [
    {
      name: "Professional",
      description: "Clean and modern design for professional services",
      image: "/placeholder.svg",
      category: "Service"
    },
    {
      name: "Creative",
      description: "Stylish template for creative professionals",
      image: "/placeholder.svg",
      category: "Creative"
    },
    {
      name: "Minimal",
      description: "Simple and elegant design for any business",
      image: "/placeholder.svg",
      category: "General"
    },
    {
      name: "Corporate",
      description: "Traditional template for corporate businesses",
      image: "/placeholder.svg",
      category: "Business"
    },
    {
      name: "Freelancer",
      description: "Perfect for independent contractors",
      image: "/placeholder.svg",
      category: "Freelance"
    },
    {
      name: "E-commerce",
      description: "Designed for online retail businesses",
      image: "/placeholder.svg",
      category: "Retail"
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
          <h1 className="text-4xl font-bold mb-6">Professional Invoice Templates</h1>
          <p className="text-lg text-muted-foreground">
            Choose from our collection of professionally designed templates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden"
            >
              <img
                src={template.image}
                alt={template.name}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-black px-6 py-2 rounded-lg flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span>Preview</span>
                </button>
              </div>
              <div className="p-6">
                <span className="text-sm text-muted-foreground">{template.category}</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">{template.name}</h3>
                <p className="text-muted-foreground">{template.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
