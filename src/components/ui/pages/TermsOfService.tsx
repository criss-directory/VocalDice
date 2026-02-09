import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/seo";
const TermsOfService = () => {
  return (
    <div className="bg-background text-foreground">
      <SEO 
      title="Terms of Service"
      description="VocalDice terms of service for AI phone agent solutions for Dubai real estate brokerages."
      url="https://vocaldice.com/terms-of-service"
      />
      <Navigation />
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
          <p className="text-sm text-muted-foreground !mt-2">Last Updated: January 2026</p>
          <p>These Terms of Service ("Terms") govern the engagement with VocalDice for our AI calling and qualification services. By engaging with us, you agree to these Terms.</p>
          <h4>1. Use of Service</h4>
          <p>You may use VocalDice only for lawful business purposes related to real estate operations. You agree not to use the AI agent for spam, violate telecommunication laws, provide misleading data, or attempt to reverse engineer our systems.</p>
          <h4>2. AI Agent Behaviour</h4>
          <p>You understand that AI responses are dynamically generated and VocalDice cannot guarantee 100% accuracy. You are responsible for reviewing summaries and leads. The AI does not provide legal or financial advice.</p>
          <h4>3. Account Responsibilities</h4>
          <p>You agree to provide accurate information, maintain control of your integrations, and ensure compliance with regional calling laws. You are responsible for all activity under your account.</p>
          <h4>4. Service Agreement & Payment</h4>
          <p>Service fees are billed monthly or annually and are non-refundable. Late payments may result in service interruption. This is a service engagement, not a software subscription.</p>
          <h4>5. Lead & Call Data</h4>
          <p>You retain full ownership of your lead data, call summaries, and training materials. VocalDice retains rights to our AI system logic and may use aggregate anonymized data to improve service reliability.</p>
          <h4>6. Service Availability</h4>
          <p>We strive for maximum uptime but do not guarantee uninterrupted service due to maintenance or third-party outages.</p>
          <h4>7. Limitation of Liability</h4>
          <p>VocalDice is not liable for missed calls due to external systems, decisions made based on AI output, or business losses. Our liability is limited to the amount paid in the last 30 days.</p>
          <h4>8. Termination</h4>
          <p>We may suspend accounts for policy violations. You may cancel anytime by contacting support.</p>
          <h4>9. Governing Law</h4>
          <p>These Terms are governed by the laws of the United Arab Emirates (for Dubai clients) and India (for international clients).</p>
          <h4>10. Contact</h4>
          <p>For questions, email: info@vocaldice.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;