import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Clock, MessageSquare, BarChart3, Users, Zap, Shield, TrendingUp, AlertCircle, ChevronDown, DollarSign, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const CallAnsweringService = () => {
  const features = [
    {
      icon: Phone,
      title: "Inbound Call Answering 24/7",
      description: "Answer all incoming calls instantly. Every call gets professional treatment no missed opportunities, no message-taking delays."
    },
    {
      icon: MessageSquare,
      title: "Message Taking & Callback Requests",
      description: "Capture detailed messages, contact information, and callback preferences. Never lose customer information again."
    },
    {
      icon: Clock,
      title: "After-Hours & Holiday Coverage",
      description: "Cover all business hours gaps: evenings, weekends, holidays. Your customers always reach a live voice."
    },
    {
      icon: Smartphone,
      title: "Multilingual Support",
      description: "Answer calls in 40+ languages. Serve customers in USA, India, UAE, and beyond without language barriers."
    },
    {
      icon: BarChart3,
      title: "Call Logging & Analytics",
      description: "Track call volume, duration, resolution rates. Understand customer calling patterns and pain points."
    },
    {
      icon: Zap,
      title: "Emergency Call Routing",
      description: "Instantly route urgent calls to your team or emergency contacts. Never miss critical situations."
    },
    {
      icon: Users,
      title: "Caller Screening & Qualification",
      description: "AI screens calls before connecting. Filter spam, sales calls, and route qualified leads to your sales team."
    },
    {
      icon: Shield,
      title: "Confidential & Compliant",
      description: "HIPAA-compliant for healthcare. TRAI DND compliant for India. Data encrypted and secure."
    }
  ];

  const comparisonData = [
    {
      feature: "Cost model",
      traditional: "$1.50-$3.00 per call (unpredictable)",
      vocaldice: "Custom pricing based on volume"
    },
    {
      feature: "Monthly investment",
      traditional: "$1,500-$3,000+ (fixed)",
      vocaldice: "Fits your budget & call volume"
    },
    {
      feature: "Deployment time",
      traditional: "2-4 weeks",
      vocaldice: "24-48 hours"
    },
    {
      feature: "Onboarding & training",
      traditional: "Yes (extensive, ongoing)",
      vocaldice: "Fully handled by our team"
    },
    {
      feature: "Call quality",
      traditional: "Variable (depends on agent)",
      vocaldice: "100% consistent, professionally managed"
    },
    {
      feature: "24/7 & after-hours coverage",
      traditional: "Additional cost ($500-$1,000/mo)",
      vocaldice: "Included in our service"
    },
    {
      feature: "Scalability during peak seasons",
      traditional: "Limited (hire more staff)",
      vocaldice: "Our team scales with you"
    }
  ];

  const faqs = [
    {
      q: "How is this different from a traditional answering service?",
      a: "Traditional answering services only take messages and transfer calls. We design and deploy AI agents that actually handle calls—answering questions, qualifying leads, processing requests, and integrating with your CRM. You get intelligent conversation handled by our team, not just message-taking from an external service."
    },
    {
      q: "What if I want to customize how calls are answered?",
      a: "Complete customization. Our team trains your AI agents on your specific business language, FAQs, policies, and brand voice. We configure custom greeting messages, call flows, and handling instructions. Your AI agents are uniquely built for your business, not a generic solution."
    },
    {
      q: "Will callers know they're talking to an AI?",
      a: "Most won't. We've engineered our AI agents with natural voice technology that sounds genuine proper inflection, pacing, interruption handling, and emotional intelligence. If callers do realize it's AI, they appreciate the instant response, professionalism, and our team's expert handling."
    },
    {
      q: "How does call quality compare to human answering services?",
      a: "Our AI agents consistently exceed human answering services. Unlike human agents who get tired, moody, or distracted, our AI delivers 100% consistent quality on every single call, every time. No variation based on shift changes or staff mood just professional, reliable service managed by our team."
    },
    {
      q: "Can we integrate with our existing phone system?",
      a: "Yes. Our team integrates with most VoIP systems, traditional PBX systems, and cloud phone systems. We handle the full setup in 24-48 hours. Your customers won't know anything changed they just experience better service."
    },
    {
      q: "What about call recordings and compliance?",
      a: "All calls are recorded for quality assurance and compliance. HIPAA-compliant for healthcare, TCPA-compliant for USA telemarketing, TRAI DND-compliant for India, and TRA-compliant for UAE. Full audit trails available."
    },
    {
      q: "How much can we save compared to hiring staff?",
      a: "A full-time answering service staff person costs $28,000-$50,000/year. Traditional answering services cost $1,500-$3,000/month. When we deploy your AI Call Answering Service, you completely eliminate these costs while handling exponentially more call volume. Most of our clients recover their investment within 30 days."
    },
    {
      q: "What if the AI encounters a question it can't answer?",
      a: "Our AI agents are trained to handle unknowns gracefully. They can transfer the call to a human team member with complete context, or 'park' the question and arrange for your team to call back. This intelligent handling ensures you never lose a customer."
    },
    {
      q: "Can we track metrics and reporting?",
      a: "Yes. Our team provides you with comprehensive real-time reporting and analytics showing call volume, duration, resolution rate, caller satisfaction, and trend analysis. All data integrates with your CRM for complete visibility. We handle all the tracking and reporting complexity."
    },
    {
      q: "How do we get started?",
      a: "Our White-Glove Onboarding team deploys your Call Answering Service live in 24-48 hours. We handle everything: setup, AI training, phone system integration, and full testing. You provide your business details and desired call flows, and our team handles the rest."
    }
  ];

  const benefits = [
    "Our team ensures 100% of calls are answered professionally",
    "Dedicated 24/7 coverage without additional staff costs",
    "Handle peak seasons with our scalable service (no hiring needed)",
    "Consistent, professional call quality on every interaction",
    "Improved customer satisfaction through instant responses",
    "Complete call analytics and performance reporting",
    "Full compliance with healthcare, telemarketing, and regional regulations",
    "Fast deployment live in 48 hours, not weeks",
    "No training burden, no staff turnover, no continuity gaps",
    "Our team manages everything you focus on your core business"
  ];

  return (
    <>
      <Helmet>
        <title>AI Call Answering Service - 24/7 Inbound Call Handling for Businesses | VocalDice</title>
        <meta name="description" content="Professional AI call answering service for businesses in USA, India & UAE. Our agency designs, builds, and manages 24/7 AI call handling, screening, message management, and CRM integration. Replace traditional answering services with expert AI solutions." />
        <meta name="keywords" content="call answering service, virtual answering service, inbound call management, 24/7 call answering, answering service alternative, AI call handling, automated call answering, call center solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="author" content="VocalDice" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "VocalDice AI Call Answering Service",
            "serviceType": "AI Call Answering Services",
            "description": "Done-for-you AI call answering service. Our agency designs, builds, deploys, and manages 24/7 call handling systems that replace expensive traditional answering services with professional AI-powered call answering, call screening, message management, and CRM integration. Fully customized and managed by our team.",
            "url": "https://vocaldice.com/call-answering-service",
            "provider": {
              "@type": "Organization",
              "name": "VocalDice",
              "url": "https://vocaldice.com"
            },
            "areaServed": [
              { "@type": "Country", "name": "United States" },
              { "@type": "Country", "name": "India" },
              { "@type": "Country", "name": "United Arab Emirates" }
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://vocaldice.com/call-answering-service"
            },
            "serviceCapabilities": [
              "24/7 Inbound Call Answering",
              "Professional Message Taking",
              "After-Hours & Holiday Coverage",
              "Multilingual Support (40+ languages)",
              "Call Logging & Analytics",
              "Emergency Call Routing",
              "Caller Screening & Qualification",
              "HIPAA, TCPA, TRAI DND, and TRA Compliance"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "450",
              "bestRating": "5",
              "worstRating": "1"
            },
            "potentialAction": {
              "@type": "OrderAction",
              "target": "https://vocaldice.ai/call-answering-service"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does an AI call answering service work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI answers every inbound call with a natural, human-like voice. It understands context, screens calls, logs information, and either handles the issue directly or transfers to your team. All calls are documented in your CRM automatically."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost compared to traditional answering services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Traditional answering services cost $1,500-$3,000/month with limited capabilities. When we design and deploy your AI Call Answering Service, pricing is customized based on your call volume and requirements. Our team discusses your specific needs to provide an accurate proposal. Most clients find the investment immediately justified by improved service quality and call handling."
                }
              },
              {
                "@type": "Question",
                "name": "Is the call answering service compliant with healthcare and telemarketing regulations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our service is HIPAA-compliant for healthcare, TCPA-compliant for telemarketing, and adheres to TRAI DND regulations in India and TRA guidelines in UAE. All calls are logged, encrypted, and secure."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
          <motion.div
            className="max-w-5xl mx-auto relative z-10 text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6 w-fit mx-auto">
              <span className="text-xs font-medium text-purple-300">Call Answering Service</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-300 leading-tight">
              AI Call Answering Service: <br /> 24/7 Coverage, Expert Management
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed mx-auto">
              Replace expensive human answering services with AI that answers every call, 24/7. Professional, compliant, and delivers exceptional value compared to traditional services.
            </motion.p>

            <motion.div variants={fadeInUp} className="text-lg text-purple-300 mb-8">
              <p className="font-semibold">Custom pricing based on your call volume & requirements</p>
              <p className="text-sm">Our team designs a solution that fits your needs and budget</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 border-t border-purple-500/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                What Your Call Answering Service Can Do
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="p-6 rounded-lg bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <Icon className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="font-semibold text-white mb-2 text-lg">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent border-t border-purple-500/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                VocalDice vs. Traditional Answering Services
              </h2>
              <p className="text-lg text-gray-400">
                See why AI call answering is the future
              </p>
              <p className="text-sm text-purple-300 mt-4 font-medium">
                💡 Works for real estate, healthcare, solar, ecommerce, and any business that answers customer calls. Let's discuss your specific needs.
              </p>
            </motion.div>

            <motion.div
              className="overflow-x-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="text-left py-4 px-6 text-white font-semibold">Feature</th>
                    <th className="text-left py-4 px-6 text-gray-400 font-semibold">Traditional Service</th>
                    <th className="text-left py-4 px-6 text-purple-400 font-semibold">VocalDice AI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <motion.tr
                      key={index}
                      variants={fadeInUp}
                      className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors"
                    >
                      <td className="py-4 px-6 text-white font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-gray-400">{row.traditional}</td>
                      <td className="py-4 px-6 text-purple-300 font-semibold">{row.vocaldice}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 border-t border-purple-500/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Why AI Call Answering Wins
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 rounded-lg bg-purple-900/10 border border-purple-500/20"
                >
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <p className="text-white">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industry Applications & CTA */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent border-t border-purple-500/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Replace Your Answering Service?
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-4">
                Whether you're in real estate, healthcare, solar, ecommerce, or any other industry our AI call answering works for you. Stop paying 10x more than you need to.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-sm text-purple-300 mb-8 font-medium">
                📞 See exactly how much you could save. Book a 30-minute consultation to discuss your call volume and service requirements.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/appointment-booking" className="block">
                  <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    Book a Free Consultation
                  </button>
                </Link>
                <Link 
                  to="/virtual-receptionist"
                  className="px-10 py-4 rounded-xl bg-purple-600/20 border-2 border-purple-500 text-purple-200 font-bold text-lg hover:bg-purple-600/40 hover:border-purple-400 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-sm"
                >
                  Compare with Virtual Receptionist
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 border-t border-purple-500/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <AccordionItem value={`item-${i}`} className="bg-gradient-to-r from-purple-900/10 to-pink-900/5 border border-purple-500/20 rounded-lg px-6">
                      <AccordionTrigger className="hover:text-purple-400 transition-colors py-4">
                        <span className="text-left text-lg font-semibold text-white">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-4 border-t border-purple-500/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30"></div>
          
          <motion.div
            className="max-w-4xl mx-auto relative z-10 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Replace Expensive Answering Services Today
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get professional AI call answering that delivers exceptional value compared to traditional services. See how we can transform your call handling.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment-booking" className="block">
                <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Book Demo
                </button>
              </Link>
              <Link 
                to="/virtual-receptionist"
                className="px-10 py-4 rounded-xl bg-purple-600/20 border-2 border-purple-500 text-purple-200 font-bold text-lg hover:bg-purple-600/40 hover:border-purple-400 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-sm"
              >
                Compare with Virtual Receptionist
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CallAnsweringService;
