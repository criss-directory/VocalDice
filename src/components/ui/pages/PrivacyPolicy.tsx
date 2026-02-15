import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/seo";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-foreground">
      <SEO 
  title="Privacy Policy"
  description="VocalDice privacy policy - comprehensive data protection for AI voice agent services. GDPR, DPDP Act, and CPRA compliant. Learn how we protect your information."
  url="https://vocaldice.com/privacy-policy"
/>
      <Navigation />
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground !mt-2">Last Updated: February 2026</p>
          <p>VocalDice ("we", "our", "us") provides AI-powered voice agent services including automated call handling, lead qualification, and appointment booking for businesses across healthcare, real estate, solar, e-commerce, and related industries. This Privacy Policy explains how we collect, use, store, and protect personal information when you use our website, AI voice system, and related services.</p>
          <p>By using our services, you agree to this Privacy Policy.</p>
          <h3>Information We Collect</h3>
          <h4>Information You Provide As A Client</h4>
          <ul><li>Name, phone number, email address, business name and industry</li><li>Preferred languages for AI interaction</li><li>Call routing preferences</li><li>Training data you provide to customise your AI voice agent</li></ul>
          <h4>Information Collected Automatically</h4>
          <ul><li>Call logs including timestamps, duration, and call direction</li><li>AI-generated summaries and qualification notes</li><li>Website analytics including IP address, device type, and browsing behaviour</li></ul>
          <h4>End User Interaction Data</h4>
          <p>Our AI voice agent interacts with your customers, patients, leads, or prospects on your behalf. In the course of these interactions, the system may process the names, phone numbers, enquiry details, and requested actions of those individuals such as appointment bookings, product enquiries, or lead qualification responses. This data is processed solely to fulfil the function your business has configured and is never used for our own marketing or shared with third parties beyond what is necessary to deliver the service. We do not collect clinical health records, financial account details, or government identification data through our voice interactions.</p>
          <h3>How We Use Personal Information</h3>
          <p>We use collected information to:</p>
          <ul><li>Operate and improve your AI voice agent</li><li>Handle bookings, appointments, and lead qualification</li><li>Train and optimise AI performance for your specific business context</li><li>Provide customer support</li><li>Improve product reliability and security</li></ul>
          <h3>Legal Basis for Processing</h3>
          <p>We process personal data under:</p>
          <ul><li>Contract requirement to deliver the service</li><li>Legitimate business interest for fraud prevention and service improvement</li><li>User consent where required</li></ul>
          <p>For users in India, we process data in accordance with the Digital Personal Data Protection Act 2023 (DPDP Act). For users in the European Union or United Kingdom, we process data in accordance with GDPR. For users in the United States, we comply with applicable state privacy regulations including CPRA where relevant.</p>
          <h3>Data Storage and Security</h3>
          <ul><li>All data is stored on secure, encrypted cloud servers</li><li>Access is limited to authorised personnel only</li><li>We do not store raw call audio beyond what is required for quality assurance and AI training purposes</li></ul>
          <h3>Data Sharing</h3>
          <p>We only share data with:</p>
          <ul><li>Infrastructure providers such as cloud hosting and telephony API partners necessary to deliver the service</li><li>Compliance or legal authorities if required by law</li></ul>
          <p>We do not sell, rent, or share personal data for marketing or advertising purposes under any circumstances.</p>
          <h3>Data Retention</h3>
          <ul><li>AI call summaries and interaction logs are retained for up to 12 months</li><li>Training data is retained while your account is active</li><li>Account and billing information is stored until deletion is requested</li><li>You may request earlier deletion at any time</li></ul>
          <h3>Your Rights</h3>
          <p>Depending on your region you may:</p>
          <ul><li>Request access to your personal data</li><li>Request correction or deletion of your data</li><li>Request a portable export of your information</li><li>Request restriction of how your data is processed</li><li>Opt-out of non-essential data use</li></ul>
          <p>All requests can be sent to info@vocaldice.com. We will respond within 30 days.</p>
          <h3>Client Responsibility</h3>
          <p>If you use VocalDice to interact with your own customers or end users, you are responsible for ensuring those individuals are aware that AI-assisted communication may be used and that appropriate consent has been obtained where required by your local regulations. VocalDice provides the technology — compliance with industry-specific regulations in your sector remains your responsibility as the business operator.</p>
          <h3>Policy Updates</h3>
          <p>We may update this Privacy Policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of our services after an update indicates acceptance of the revised policy.</p>
          <h3>Contact</h3>
          <p>For any privacy-related queries contact us at <strong>info@vocaldice.com</strong></p>

          {/* Related Legal Documents */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3>Related Legal Documents</h3>
            <ul className="!list-none !pl-0">
              <li><Link to="/terms-of-service" className="text-primary hover:text-primary/80 font-semibold">→ View our Terms of Service</Link></li>
              <li><Link to="/data-security" className="text-primary hover:text-primary/80 font-semibold">→ Learn about Data Security & Compliance</Link></li>
              <li><Link to="/" className="text-primary hover:text-primary/80 font-semibold">← Back to Home</Link></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;