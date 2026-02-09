import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Search, Sparkles, Layers, TrendingUp, Phone, Music, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/seo";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <>
      <SEO
        title="How AI Voice Agents Work for Businesses | VocalDice"
        description="Learn how VocalDice AI voice agents qualify leads, handle customer calls, book appointments, and integrate with your systems using natural, human-like conversations."
        keywords="how AI voice agents work, AI call assistant workflow, AI voice automation process, AI phone agent for business, AI appointment booking system"
        url="https://vocaldice.com/how-it-works"
      />
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 container mx-auto px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Design & Run AI Voice Agents<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Inside Your Business
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From call handling to follow-ups and system updates, we take responsibility for how AI agents work inside your workflows from setup to ongoing optimization.
            </p>
          </motion.div>

          {/* Section 1: The Big Picture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
             From Incoming Call to Completed Action, <br/> Managed End to End
            </h2>
            <div className="bg-card/50 border border-border/50 rounded-xl p-8 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We take responsibility for the entire call lifecycle. From answering calls to completing downstream actions, our engineers design and manage AI-driven workflows that run reliably inside your business.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">The AI doesn't just talk it listens, processes, and takes action in real time.</span>
              </p>
            </div>
          </motion.div>

          {/* Section 2: Step-by-Step Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Step-by-Step: How the AI Handles Every Conversation
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  number: 1,
                  title: "A Call or Lead Comes In",
                  icon: <Phone className="h-6 w-6" />,
                  points: [
                    "A customer calls your business number",
                    "A lead submits a form",
                    "A missed call needs follow-up",
                    "A follow-up campaign is triggered"
                  ]
                },
                {
                  number: 2,
                  title: "AI Understands the Caller's Intent",
                  icon: <Sparkles className="h-6 w-6" />,
                  points: [
                    "Using advanced speech recognition and natural language processing",
                    "Appointment booking",
                    "Product or service questions",
                    "Lead qualification & Order or status queries"
                  ]
                },
                {
                  number: 3,
                  title: "Smart, Human-Like Conversation",
                  icon: <Layers className="h-6 w-6" />,
                  content: "The AI responds naturally, asks relevant questions, and follows a trained conversation flow tailored to your business.",
                  industries: [
                    { name: "Real estate", detail: "Budget, location, timeline" },
                    { name: "Solar", detail: "Roof type, electricity usage, ownership" },
                    { name: "Healthcare", detail: "Appointment type, department, availability" },
                    { name: "Ecommerce", detail: "Order status, returns, product info" }
                  ]
                },
                {
                  number: 4,
                  title: "Action Is Taken Instantly",
                  icon: <TrendingUp className="h-6 w-6" />,
                  points: [
                    "Books appointments",
                    "Schedules site visits",
                    "Updates CRM or system records",
                    "Sends confirmations via SMS or WhatsApp"
                  ]
                },
                {
                  number: 5,
                  title: "Data Is Logged Automatically",
                  icon: <Search className="h-6 w-6" />,
                  points: [
                    "Call outcome recorded",
                    "Lead or customer details captured",
                    "Conversation summary generated",
                    "Team stays fully informed"
                  ]
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 pb-4"
                >
                  {/* Vertical connector line */}
                  {index < 4 && (
                    <div className="absolute left-5 top-12 w-0.5 h-20 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                  
                  {/* Step circle */}
                  <div className="absolute -left-1 top-0 h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/50 flex items-center justify-center">
                    <span className="text-primary font-bold">{step.number}</span>
                  </div>

                  <div className="bg-card/50 border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="text-primary mt-1">{step.icon}</div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    
                    {step.content && (
                      <p className="text-muted-foreground mb-4">{step.content}</p>
                    )}

                    {step.points && (
                      <ul className="space-y-2">
                        {step.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {step.industries && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.industries.map((ind, idx) => (
                          <div key={idx} className="bg-background/50 rounded-lg p-3 border border-border/30">
                            <p className="font-semibold text-sm text-primary">{ind.name}</p>
                            <p className="text-xs text-muted-foreground">{ind.detail}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 3: AI Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Customized to Sound and Work Like Your Team
            </h2>
            <div className="bg-card/50 border border-border/50 rounded-xl p-8">
              <p className="text-lg text-muted-foreground mb-6">
                Your AI voice agent is not generic. We configure it using:
              </p>
              <ul className="space-y-3">
                {[
                  "Your business services and workflows",
                  "Your frequently asked questions",
                  "Your qualification criteria",
                  "Your appointment scheduling rules"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 italic">
                This ensures the AI speaks in your brand tone and follows your exact process.
              </p>
            </div>
          </motion.div>

          {/* Section 4: Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Works With the Tools You Already Use
            </h2>
            <div className="bg-card/50 border border-border/50 rounded-xl p-8">
              <p className="text-lg text-muted-foreground mb-6">
                AI voice agents connect with your existing systems so actions happen automatically.
              </p>
              <p className="text-muted-foreground mb-6">Possible integrations include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  "CRM systems",
                  "Appointment scheduling tools",
                  "Helpdesk or support platforms",
                  "Custom business software"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground italic">
                This ensures no manual data entry is required.
              </p>
            </div>
          </motion.div>

          {/* Section 5: Human Handoff */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI Handles Routine Calls. Humans Handle Complex Cases.
            </h2>
            <div className="bg-card/50 border border-border/50 rounded-xl p-8">
              <p className="text-lg text-muted-foreground mb-6">
                When a conversation requires human judgment, the AI can:
              </p>
              <ul className="space-y-3">
                {[
                  "Transfer the call to your team",
                  "Collect key details before handoff",
                  "Create a callback request"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 italic">
                This ensures smooth collaboration between AI and human staff.
              </p>
            </div>
          </motion.div>

          {/* Section 6: Multilingual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Communicates With Customers in Multiple Languages
            </h2>
            <div className="bg-card/50 border border-border/50 rounded-xl p-8">
              <p className="text-lg text-muted-foreground">
                The AI voice agent can interact with callers in multiple languages, helping businesses serve diverse customer bases and improve accessibility.
              </p>
            </div>
          </motion.div>

          {/* Section 7: Control & Reliability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We Give You Full Transparency
            </h2>
            <div className="bg-card/50 border border-border/50 rounded-xl p-8">
              <p className="text-lg text-muted-foreground mb-6">
                Our team provides you complete visibility into every call and interaction:
              </p>
              <ul className="space-y-3">
                {[
                  "Full call recordings of every conversation",
                  "Detailed conversation transcripts for quality assurance",
                  "Comprehensive lead and appointment reports showing results"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 italic">
                You're never in the dark. We manage the AI, and you always know exactly what's happening with your calls and leads.
              </p>
            </div>
          </motion.div>

          {/* Section 8: Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What This Means for Your Business
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Faster response times",
                "Higher lead conversion",
                "More booked appointments",
                "Reduced staff workload",
                "Better customer experience"
              ].map((result, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6 flex items-center gap-3"
                >
                  <TrendingUp className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-white font-semibold">{result}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-dark-surface/30 mt-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-3xl p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to See How This Would Work in Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We'll configure a custom demo based on your industry, workflows, and call scenarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="luxury"
                  size="lg"
                  className="rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/30"
                  data-cal-link="vocaldice/strategy-session"
                  data-cal-namespace="default"
                  data-cal-origin="https://cal.id"
                  data-cal-config='{"layout":"month_view"}'
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Request a Custom Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <a href="/#audio-demos">
                  <Button
                    variant="luxuryOutline"
                    size="lg"
                    className="rounded-full hover:scale-105 transition-transform border-2"
                  >
                    Back to Home
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HowItWorks;
