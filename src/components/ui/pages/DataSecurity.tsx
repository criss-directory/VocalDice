import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/seo";
import { Link } from "react-router-dom";
const DataSecurity = () => {
  return (
    <div className="bg-background text-foreground">
      <SEO 
      title="Data Security & Compliance"
      description="Learn about VocalDice's data security measures and compliance standards for AI phone agent services in Dubai."
      url="https://vocaldice.com/data-security"
      />
      <Navigation />
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground">Data Security & Compliance</h1>
          <p className="text-sm text-muted-foreground !mt-2">Last Updated: January 2025</p>
          <p>At VocalDice, data security is a core part of how we design and build our AI agents. We follow strict technical and organizational measures to protect your information and your clients' information.</p>
          <p><strong>Infrastructure & Security:</strong> All data is stored on encrypted cloud servers (AES-256) and encrypted in transit (TLS 1.2+). Access is restricted to authorized personnel.</p>
          <p><strong>Data Isolation:</strong> Your training data is used only for your AI agent. No cross-account mixing of data occurs. You retain full ownership of call summaries and lead information.</p>
          <p><strong>Compliance:</strong> We align with global privacy standards including GDPR, UAE Data Protection Law (DPL), India’s DPDP Act, and CPRA. No data is used for advertising or sold to third parties.</p>
          <p><strong>Call Handling:</strong> Our system follows international calling regulations and DNC compliance. We do not record calls unless you enable the feature and receive appropriate consent.</p>
          <p><strong>Data Retention & Deletion:</strong> You may request permanent deletion of your data anytime. Training data is deleted upon account closure, and summaries expire after 12 months.</p>
          <p><strong>Third-Party Services:</strong> We integrate securely with compliant partners like Twilio, WhatsApp, and major CRM platforms.</p>
          <p><strong>Incident Response:</strong> In the event of a data breach, we notify affected users promptly, isolate the incident, and perform a forensic investigation to prevent recurrence.</p>

          {/* Related Legal Documents */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3>Related Legal Documents</h3>
            <ul className="!list-none !pl-0">
              <li><Link to="/privacy-policy" className="text-primary hover:text-primary/80 font-semibold">→ Read our Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-primary hover:text-primary/80 font-semibold">→ Review Terms of Service</Link></li>
              <li><Link to="/" className="text-primary hover:text-primary/80 font-semibold">← Back to Home</Link></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataSecurity;