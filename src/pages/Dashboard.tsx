
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Users, CreditCard, ChartBar } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Total Invoices", value: "145", icon: FileText, change: "+12.3%" },
    { title: "Active Clients", value: "48", icon: Users, change: "+4.5%" },
    { title: "Revenue", value: "$12,450", icon: CreditCard, change: "+15.8%" },
    { title: "Pending", value: "$2,340", icon: ChartBar, change: "-2.3%" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your business overview.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-success' : 'text-destructive'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Invoices</h2>
            <div className="space-y-4">
              {/* Placeholder for recent invoices list */}
              <p className="text-muted-foreground">No recent invoices</p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
            <div className="h-64 flex items-center justify-center">
              {/* Placeholder for revenue chart */}
              <p className="text-muted-foreground">Chart coming soon</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
