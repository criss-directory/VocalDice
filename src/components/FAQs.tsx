import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can the AI agent be deployed?",
    answer:
      "Your AI ISA is deployed in 7–14 days. We build and train it on your listings, communities, objection handling, qualification rules, and buyer behaviour so it performs like a Dubai-experienced agent from day one. No technical setup required on your side.",
  },
  {
    question: "Can the AI handle multiple languages?",
    answer:
      "Yes. The AI handles English and Arabic naturally, and can switch languages based on the caller’s preference. If your brokerage deals with Russians, Indians, Pakistanis, or European investors, we can also configure accents and language variants as needed.",
  },
  {
    question: "Will I get notified after each call?",
    answer:
      "Yes. After every interaction, you receive an instant summary via WhatsApp or your CRM with key details: caller name, budget, property interest, urgency level, and next steps. You stay in control without being on every call.",
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer:
      "The AI is programmed to recognize complex queries it can't handle. In those cases, it politely collects the caller's details, explains that you'll personally follow up, and sends you a detailed summary immediately.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing is customized based on your enquiry volume and requirements. Most agents find it costs less than hiring one junior team member, while delivering 24/7 availability and never missing a call. We'll discuss specifics during your strategy demo.",
  },
  {
    question: "Is there a contract or long-term commitment?",
    answer:
      "We offer flexible month-to-month arrangements for qualified partners. Our focus is on delivering results, not locking you into long contracts. Most clients stay because they see immediate ROI.",
  },
  {
    question: "Does this replace my agents or support team?",
    answer:
      "No, it supports them. The AI handles every inbound enquiry instantly so your agents can focus on viewings, negotiations, and closing. It’s like giving your team a 24/7 Inside Sales Assistant that never sleeps.",
  },
  {
    question: "Will it work with my CRM or WhatsApp?",
    answer:
      "Yes, We connect the AI to your existing workflow (GHL, CRM, pipelines, WhatsApp, or your manual workflow). You don’t need to change anything.",
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
          Everything you need to know about our AI sales agent
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
