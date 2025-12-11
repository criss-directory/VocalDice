import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/seo";

const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-foreground">
      <SEO 
  title="Privacy Policy"
  description="VocalDice privacy policy for AI phone agent services. Learn how we protect your data and comply with UAE regulations."
  url="https://vocaldice.com/privacy-policy"
/>
      <Navigation />
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground !mt-2">Last Updated: January 2025</p>
          <p>VocalDice (“we”, “our”, “us”) provides AI-powered calling and qualification services for real estate professionals. This Privacy Policy explains how we collect, use, store, and protect personal information when you use our website, AI calling system, and related services.</p>
          <p>By using our services, you agree to this Privacy Policy.</p>
          <h3>Information We Collect</h3>
          <h4>1. Information You Provide</h4>
          <ul><li>Name, phone number, email address</li><li>Business details (brokerage name, listings, CRM information)</li><li>Call routing preferences</li><li>Training data provided to customize your AI agent</li></ul>
          <h4>2. Information Collected Automatically</h4>
          <ul><li>Call logs (timestamps, duration, call direction)</li><li>AI-generated summaries and qualification notes</li><li>Website analytics (IP address, device type, browsing data)</li></ul>
          <h4>3. Lead & Customer Information</h4>
          <p>As part of our service, we may process:</p>
          <ul><li>Buyer and seller enquiry details</li><li>Budget, timeline, location preferences</li><li>Property details and objections</li><li>Communication records (AI conversation transcripts, when applicable)</li></ul>
          <p><strong>We never sell personal data to third parties.</strong></p>
          <h3>How We Use Personal Information</h3>
          <p>We use collected information to:</p>
          <ul><li>Run and improve your AI Sales Agent</li><li>Qualify leads, schedule appointments, and deliver summaries</li><li>Train and optimize AI performance</li><li>Provide customer support</li><li>Improve product reliability and security</li></ul>
          <p>All AI training is used only for your account unless you explicitly allow otherwise.</p>
          <h3>Legal Basis for Processing</h3>
          <p>We process personal data under:</p>
          <ul><li>Contract requirement (to deliver the service)</li><li>Legitimate business interest (fraud prevention, service improvement)</li><li>User consent (where required, depending on region)</li></ul>
          <h3>Data Storage & Security</h3>
          <ul><li>All data is stored on secure, encrypted cloud servers.</li><li>Access is limited to authorized personnel only.</li><li>We follow GDPR, CPRA, and applicable UAE data protection regulations.</li></ul>
          <h3>Data Sharing</h3>
          <p>We only share data with:</p>
          <ul><li>Infrastructure providers (cloud hosting, telephony APIs)</li><li>CRM systems you choose to integrate</li><li>Compliance partners (if legally required)</li></ul>
          <p>We do not share or sell data for marketing purposes.</p>
          <h3>Data Retention</h3>
          <ul><li>AI call summaries: up to 12 months</li><li>Training data: retained while your account is active</li><li>Account information: stored until deletion is requested</li></ul>
          <h3>Your Rights</h3>
          <p>Depending on your region, you may request:</p>
          <ul><li>Access to your data</li><li>Correction or deletion</li><li>Export of your information</li><li>Restriction of processing</li><li>Opt-out of non-essential data use</li></ul>
          <p>Requests can be sent to info@vocaldice.com.</p>
          <h3>Policy Updates</h3>
          <p>We may update this Privacy Policy occasionally. Continued use of the service indicates acceptance.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;