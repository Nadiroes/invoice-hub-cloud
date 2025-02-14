
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "10 Tips for Efficient Invoice Management",
      excerpt: "Learn how to streamline your invoicing process and get paid faster.",
      date: "March 15, 2024",
      category: "Tips & Tricks",
      image: "/placeholder.svg"
    },
    {
      title: "The Future of Digital Invoicing",
      excerpt: "Discover the latest trends in digital invoicing and payment processing.",
      date: "March 10, 2024",
      category: "Industry News",
      image: "/placeholder.svg"
    },
    {
      title: "Managing Late Payments Effectively",
      excerpt: "Strategies to handle late payments and maintain healthy cash flow.",
      date: "March 5, 2024",
      category: "Business",
      image: "/placeholder.svg"
    },
    {
      title: "Tax Season Preparation Guide",
      excerpt: "Everything you need to know to prepare for tax season.",
      date: "March 1, 2024",
      category: "Finance",
      image: "/placeholder.svg"
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Latest Updates</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Insights, guides, and news from the InvoiceHub team
          </p>

          <div className="space-y-12">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover rounded-lg"
                />
                <div>
                  <span className="text-sm text-primary font-medium">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-bold mt-2 mb-3">
                    <Link to="#" className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
