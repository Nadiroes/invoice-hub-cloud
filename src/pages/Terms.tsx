
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto prose"
        >
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <p className="text-muted-foreground mb-6">
            Last updated: March 20, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using InvoiceHub, you accept and agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground">
              InvoiceHub provides invoice management and payment processing services for businesses.
              We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Maintain accurate account information</li>
              <li>Protect account credentials</li>
              <li>Comply with applicable laws</li>
              <li>Use the service responsibly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
            <p className="text-muted-foreground">
              Subscription fees are billed in advance. Free trial periods may be offered at our discretion.
              All fees are non-refundable unless required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Contact Information</h2>
            <p className="text-muted-foreground">
              For any questions regarding these Terms of Service, please contact us at
              legal@invoicehub.com
            </p>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
