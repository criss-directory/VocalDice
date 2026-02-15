import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/seo";
import { Link } from "react-router-dom";
const DataSecurity = () => {
  return (
    <div className="bg-background text-foreground">
      <SEO 
      title="Data Security & Compliance"
      description="VocalDice data security & compliance - GDPR, DPDP Act, CPRA, HIPAA, TCPA compliant AI voice agent services for healthcare, real estate, solar, ecommerce."
      url="https://vocaldice.com/data-security"
      />
      <Navigation />
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground">Data Security & Compliance</h1>
          <p className="text-sm text-muted-foreground !mt-2">Last Updated: February 2026</p>
          <p>At VocalDice, data security is a core part of how we design and build our AI agents. We follow strict technical and organizational measures to protect your information and your customers', patients', leads', and prospects' information. We are committed to regulatory compliance across all industries and regions we serve.</p>
          <p><strong>Infrastructure & Security:</strong> All data is stored on encrypted cloud servers (AES-256) and encrypted in transit (TLS 1.2+). Access is restricted to authorized personnel.</p>
          <p><strong>Data Isolation:</strong> Your training data is used only for your AI agent. No cross-account mixing of data occurs. You retain full ownership of call summaries and lead information.</p>
          <p><strong>Compliance:</strong> We align with global privacy and security standards:</p>
          <ul><li><strong>Privacy:</strong> GDPR (EU/UK), India DPDP Act 2023, USA CPRA, UAE Data Protection Law</li><li><strong>Healthcare:</strong> HIPAA compliance for healthcare customer data</li><li><strong>Telecom:</strong> TCPA (USA), TRAI/DND (India), local telecom regulations (UAE)</li><li><strong>Data Usage:</strong> No data is used for advertising or sold to third parties under any circumstances</li><li><strong>Consumer Rights:</strong> Full support for data portability, deletion, and access requests</li></ul>
          <p><strong>Call Handling & Consent:</strong> Our system follows international calling regulations and DNC compliance (TCPA, TRAI, local requirements). We do not record calls unless you enable the feature and maintain documentation of appropriate end-user consent. AI-assisted communication is disclosed to all end users to ensure transparency and regulatory compliance.</p>
          <p><strong>Data Retention & Deletion:</strong> You may request permanent deletion of your data anytime. AI call summaries and interaction logs are retained for up to 12 months for quality assurance and optimization. Training data is deleted upon account closure. Account and billing information is retained until deletion is requested. We respond to all deletion requests within 30 days.</p>
          <p><strong>Third-Party Services:</strong> We integrate securely with compliant partners including Twilio, WhatsApp, major CRM platforms, and other business-critical services. All integrations are vetted for security and compliance. We only share the minimum data necessary to deliver your configured service function.</p>
          <p><strong>Incident Response:</strong> In the event of a data breach, we notify all affected users and regulatory authorities within 72 hours as required by law. We immediately isolate the incident, perform comprehensive forensic investigation, implement corrective measures, and provide documentation of remediation steps. We maintain cyber liability insurance to protect our clients in the unlikely event of a breach.</p>
          <p><strong>Industry-Specific Security:</strong> Healthcare clients benefit from HIPAA-compliant infrastructure. All healthcare data is segregated and encrypted. Solar, real estate, and e-commerce clients receive industry-standard protections with encryption and access controls.</p>

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