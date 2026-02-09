import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does the AI understand heavy Indian or Middle Eastern accents?",
    answer:
      "Yes. Unlike generic US-based AI voice bots, VocalDice is specifically trained on regional dialects. It understands and speaks fluent Hinglish (Hindi + English) for markets like Mumbai, Delhi, and Bangalore, as well as Gulf Arabic and Neutral English for clients in Dubai, Saudi Arabia, and Bahrain. It handles fast-paced speech, interruptions, and colloquial phrases naturally just like a local agent.",
  },
  {
    question: "Can I integrate this with Zoho, Salesforce, or my existing CRM?",
    answer:
      "Absolutely. We provide native 1-click integrations with Zoho, Salesforce, HubSpot, and GoHighLevel. Whether you are a real estate agency in Hyderabad or a solar company in Abu Dhabi, the AI updates your leads, adds notes, and changes deal stages automatically after every call. Your CRM stays in sync 24/7 without manual data entry.",
  },
  {
    question: "Is this legal and compliant for cold calling in the UAE and India?",
    answer:
      "We prioritize compliance across all regions. Our system automatically handles DND (Do Not Disturb) scrubbing for India and adheres to TRA guidelines in the UAE. We configure the agent to only call opt-in leads and inbound inquiries, ensuring 100% compliance with local telecom regulations. Your business stays protected while maximizing outreach.",
  },
  {
    question: "How fast can I go live? Do I need a developer?",
    answer:
      "You do not need a developer. Our White-Glove Onboarding gets you live in under 48 hours. We handle the script setup, voice cloning, and CRM connection end-to-end. You just provide your login credentials and lead list, and your AI agent starts qualifying leads immediately no technical knowledge required.",
  },
  {
    question: "What happens if the AI doesn't know the answer?",
    answer:
      "The AI is trained to handle unknowns gracefully. If a lead asks a complex question outside the script, the AI can either 'park' the question ('Great question, let me have a senior manager call you back with that detail') or instantly transfer the call to a human agent's mobile number for live handoff. You never miss an opportunity.",
  },
  {
    question: "Does it work with WhatsApp?",
    answer:
      "Yes. In markets like India and the GCC, WhatsApp is the primary communication channel. Our AI automatically sends WhatsApp messages immediately after calls confirming appointment times, sending brochures, or following up if the lead didn't pick up. WhatsApp automation keeps your leads engaged and warm.",
  },
  {
    question: "Is VocalDice HIPAA-compliant for US healthcare practices?",
    answer:
      "Yes. We've built and deployed our AI agents with full HIPAA-compliance for US healthcare providers. We encrypt all patient data in transit and at rest, maintain HIPAA-compliant audit logs, and can sign BAAs (Business Associate Agreements). All patient information, appointment details, and medical notes are stored securely on HIPAA-compliant servers in the US, and our team manages all compliance requirements.",
  },
  {
    question: "Does VocalDice comply with TCPA regulations in the USA?",
    answer:
      "Yes, we ensure full TCPA compliance for all US calling. Our system automatically handles call consent management, do-not-call (DNC) scrubbing, and opt-out processing. All marketing calls include proper identification and disclosure, and we maintain complete audit logs of every call for compliance verification. You can call with confidence.",
  },
  {
    question: "Is the AI TRAI DND-compliant for India?",
    answer:
      "Yes, fully compliant. We integrate with the TRAI Do Not Disturb (DND) registry to automatically exclude opted-out numbers from your campaigns. Our system also handles TRAI regulations on calling hours and promotional content. You can scale outreach in India without compliance risk.",
  },
  {
    question: "Where is customer data stored, and does it meet UAE regulations?",
    answer:
      "All data for UAE customers is stored on servers physically located in the GCC region with full TRA (Telecommunications Regulatory Authority) compliance. We maintain data localization for all personal information and ensure compliance with UAE data protection and privacy regulations. Your business stays regulated and secure.",
  },
];


const FAQs = () => {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 opacity-0 animate-fade-in-up">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 opacity-0 animate-fade-in-up [animation-delay:200ms]">
          Get answers about AI voice agents for India, UAE, real estate, and solar sales. Compliance, integrations, and setup details.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
