import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Clock, BarChart3, Users, Zap, Heart, Shield, TrendingUp, AlertCircle, ChevronDown, Calendar, MessageSquare, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

const VirtualReceptionist = () => {
  const useCases = [
    {
      icon: Phone,
      title: "24/7 Inbound Call Handling",
      description: "Answer all incoming calls during business hours and after-hours. Never miss a customer call again whether it's at 3 AM, weekends, or holidays."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling & Confirmations",
      description: "Automatically book appointments, send confirmations via SMS/WhatsApp, and reduce no-shows with intelligent reminder systems."
    },
    {
      icon: Zap,
      title: "Intelligent Call Routing",
      description: "Qualify callers and transfer warm leads directly to your sales team. Route emergency calls instantly to appropriate departments."
    },
    {
      icon: Users,
      title: "Multi-Industry Support",
      description: "Works for real estate, healthcare, solar, ecommerce, professional services, and any business handling high call volumes."
    },
    {
      icon: BarChart3,
      title: "CRM & System Integration",
      description: "Automatically logs all call details into Zoho, Salesforce, HubSpot. Updates customer records in real-time without manual data entry."
    },
    {
      icon: MessageSquare,
      title: "Voice + WhatsApp Support",
      description: "Handle inquiries on both voice calls and WhatsApp the two most important channels for customers in India, USA, and UAE."
    },
    {
      icon: Heart,
      title: "HIPAA & Compliance Ready",
      description: "HIPAA-compliant for USA healthcare, TRAI DND compliant for India, TRA compliant for UAE. We provide built-in compliance from day one no extra configuration needed."
    },
    {
      icon: TrendingUp,
      title: "Lead Qualification & Scoring",
      description: "AI automatically qualifies inbound leads, asks discovery questions, and scores prospects by intent level hot leads go to your team immediately."
    }
  ];

  const faqs = [
    {
      q: "How is a Virtual Receptionist different from a traditional answering service?",
      a: "Traditional answering services cost $1,000-$3,000/month and just take messages. VocalDice's AI actually handles customer needs booking appointments, answering FAQs, qualifying leads, and integrating with your CRM. You get intelligent conversation, not just message-taking."
    },
    {
      q: "Can this really understand different accents and dialects?",
      a: "Yes. VocalDice is specifically trained on regional dialects. It understands Hinglish (Hindi+English) for India, Gulf accents for Middle East, and regional US English. It handles fast-paced speech, interruptions, and natural conversation patterns just like a local receptionist."
    },
    {
      q: "What if the AI doesn't know the answer to a customer question?",
      a: "The AI is trained to handle unknowns gracefully. It can 'park' the question by saying 'Great question, let me have a manager call you back with that detail' or transfer the call instantly to your team's phone. You never lose a customer or miss an opportunity."
    },
    {
      q: "How does it integrate with my CRM/scheduling system?",
      a: "We build native integrations with Zoho, Salesforce, HubSpot, Calendly, Google Calendar, and 50+ business tools. Our team configures everything so that appointments, customer details, and call notes sync automatically in real-time to your systems. Your team always has complete context."
    },
    {
      q: "Is this actually HIPAA-compliant for healthcare?",
      a: "Yes. We've built and deployed our AI agents with full HIPAA-compliance: encrypted data transmission, audit logs, Business Associate Agreements (BAAs), and HIPAA-certified infrastructure. Our team handles all compliance setup and ongoing management. Healthcare practices can confidently use this for patient intake."
    },
    {
      q: "How much can we save compared to hiring a receptionist?",
      a: "A full-time receptionist costs $28,000-$45,000/year plus benefits. When we build and deploy your AI Virtual Receptionist, you eliminate those costs entirely while handling 5-10x the call volume without any agent fatigue. Most of our clients recover their investment within 30-60 days."
    },
    {
      q: "What about call quality? Will customers think they're talking to a bot?",
      a: "No. We've engineered our AI agents with advanced voice technology that sounds remarkably natural proper inflection, pacing, interruption handling, and emotional context. Most customers don't realize they're talking to an AI. Our agents consistently achieve NPS scores of 7.8/10 from actual customer calls."
    },
    {
      q: "How quickly can we go live?",
      a: "Our White-Glove Onboarding team designs, builds, integrates, and deploys your AI Virtual Receptionist in 24-48 hours. We handle everything: script setup, voice cloning matched to your brand, CRM integration, and full testing. You provide your call flows and requirements, and our team handles the rest."
    },
    {
      q: "Can the AI handle calls in multiple languages?",
      a: "Yes. VocalDice supports 40+ languages and can switch mid-conversation. Ideal for multilingual teams in USA, India, UAE, and other diverse markets."
    },
    {
      q: "What if we need to customize the AI's responses for our business?",
      a: "Complete customization. We train and fine-tune your AI agent on your specific business language, FAQs, policies, and brand tone. Want your agent to sound formal, friendly, or casual? Our team configures it to match your brand voice exactly. We refine it continuously based on your feedback."
    }
  ];

  const benefits = [
    "Handle 100% of inbound calls without hiring staff",
    "Reduce operational costs by 60-80% vs. traditional reception",
    "Never miss a customer call again",
    "Provide 24/7 customer availability",
    "Instantly qualify and score inbound leads",
    "Reduce appointment no-shows by 35%+",
    "Improve customer satisfaction with faster response times",
    "Free up your team to focus on closing deals, not answering phones",
    "Scale during busy seasons without hiring temporary staff",
    "Maintain compliance across USA, India, and UAE regulations"
  ];

  return (
    <>
      <Helmet>
        <title>AI Virtual Receptionist for Businesses in USA, India & UAE | 24/7 Call Handling | VocalDice</title>
        <meta name="description" content="AI Virtual Receptionist that answers all inbound calls 24/7, books appointments, qualifies leads, and integrates with your CRM. HIPAA, TRAI DND, and TRA compliant. Works for real estate, healthcare, solar, and ecommerce." />
        <meta name="keywords" content="virtual receptionist, AI receptionist, answering service alternative, 24/7 call handling, AI phone answering, business phone system, automated receptionist, virtual secretary, call answering service" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="author" content="VocalDice" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "VocalDice AI Virtual Receptionist Service",
            "serviceType": "AI Virtual Receptionist Services",
            "description": "Done-for-you AI virtual receptionist service. Our agency designs, builds, deploys, and manages 24/7 AI voice agents that answer all inbound calls, book appointments, qualify leads, and integrate with your CRM. Custom-built for your business, fully managed by our team.",
            "url": "https://vocaldice.com/virtual-receptionist",
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
              "serviceUrl": "https://vocaldice.com/virtual-receptionist"
            },
            "serviceCapabilities": [
              "24/7 Inbound Call Answering",
              "Appointment Scheduling & Confirmations",
              "Intelligent Call Routing",
              "Lead Qualification & Scoring",
              "CRM Integration",
              "HIPAA-Compliant Healthcare Handling",
              "TCPA-Compliant USA Telemarketing",
              "TRAI DND Compliance for India",
              "TRA Compliance for UAE",
              "Multilingual Support (40+ languages)"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "500"
            }
          })}
        </script>

        {/* FAQSchema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a Virtual Receptionist?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An AI Virtual Receptionist is a cloud-based system that answers all your inbound calls 24/7, books appointments, qualifies leads, and integrates with your CRM. It replaces traditional answering services at a fraction of the cost."
                }
              },
              {
                "@type": "Question",
                "name": "Is this HIPAA-compliant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, fully HIPAA-compliant for healthcare practices. Encrypted data transmission, HIPAA-certified servers, Business Associate Agreements, and annual security audits."
                }
              },
              {
                "@type": "Question",
                "name": "How much does Virtual Receptionist cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pricing is customized based on call volume, customization requirements, and integrations needed. Schedule a consultation with our team to discuss your specific needs and get an accurate quote."
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
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
          <motion.div
            className="max-w-5xl mx-auto relative z-10 text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6 w-fit mx-auto">
              <span className="text-xs font-medium text-blue-300">Virtual Receptionist</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-300 leading-tight">
              Your AI Virtual Receptionist: <br /> Answer Every Call, 24/7
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed mx-auto">
              Stop losing customers to missed calls. VocalDice's AI Virtual Receptionist answers all inbound calls, books appointments, qualifies leads, and integrates with your CRM no hiring, no training, no missed opportunities.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-blue-300 mb-8">
              Used by 15+ businesses in USA, India, and UAE
            </motion.p>
          </motion.div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 border-t border-blue-500/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                What Your Virtual Receptionist Can Do
              </h2>
              <p className="text-lg text-gray-400">
                Comprehensive call handling and customer service automation
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="p-6 rounded-lg bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <Icon className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="font-semibold text-white mb-2 text-lg">{useCase.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent border-t border-blue-500/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                The Impact of AI Virtual Receptionist
              </h2>
              <p className="text-lg text-gray-400">
                What you gain by replacing traditional reception
              </p>
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
                  className="flex items-start gap-4 p-4 rounded-lg bg-blue-900/10 border border-blue-500/20"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-white">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industry-Specific Solutions */}
        <section className="py-20 px-4 border-t border-blue-500/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                AI Virtual Receptionist for Your Industry
              </h2>
              <p className="text-lg text-gray-400">
                See how we've transformed call handling for businesses like yours
              </p>
              <p className="text-sm text-blue-300 mt-4 font-medium">
                👉 Running a different type of business? We can customize this for you. Schedule a call to discuss.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link to="/ai-real-estate-assistant" className="group">
                <motion.div
                  variants={fadeInUp}
                  className="p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300 h-full"
                >
                  <Building className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2 text-lg">Real Estate</h3>
                  <p className="text-gray-300 text-sm">Lead qualification, appointment booking, 24/7 property inquiries</p>
                </motion.div>
              </Link>

              <Link to="/ai-medical-receptionist" className="group">
                <motion.div
                  variants={fadeInUp}
                  className="p-6 rounded-lg bg-gradient-to-br from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-300 h-full"
                >
                  <Heart className="w-10 h-10 text-emerald-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2 text-lg">Healthcare</h3>
                  <p className="text-gray-300 text-sm">HIPAA-compliant patient intake, appointment scheduling, follow-ups</p>
                </motion.div>
              </Link>

              <Link to="/ai-solar-lead-qualification" className="group">
                <motion.div
                  variants={fadeInUp}
                  className="p-6 rounded-lg bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 group-hover:border-amber-500/50 transition-all duration-300 h-full"
                >
                  <Zap className="w-10 h-10 text-amber-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2 text-lg">Solar & Home Services</h3>
                  <p className="text-gray-300 text-sm">Lead qualification, site survey scheduling, sales enablement</p>
                </motion.div>
              </Link>

              <Link to="/ai-ecommerce-customer-support" className="group">
                <motion.div
                  variants={fadeInUp}
                  className="p-6 rounded-lg bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 h-full"
                >
                  <MessageSquare className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2 text-lg">E-Commerce</h3>
                  <p className="text-gray-300 text-sm">Abandoned cart recovery, WhatsApp support, customer service 24/7</p>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 border-t border-blue-500/10">
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
              <p className="text-lg text-gray-400">
                Everything you need to know about AI Virtual Receptionists
              </p>
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
                    <AccordionItem value={`item-${i}`} className="bg-gradient-to-r from-blue-900/10 to-cyan-900/5 border border-blue-500/20 rounded-lg px-6">
                      <AccordionTrigger className="hover:text-blue-400 transition-colors py-4">
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

            <motion.div 
              className="text-center mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-gray-400">
                Still have questions?{' '}
                <a href="mailto:support@vocaldice.com" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                  Contact us
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-4 border-t border-blue-500/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
          
          <motion.div
            className="max-w-4xl mx-auto relative z-10 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Cross-Linked Resources */}
            <motion.div 
              variants={fadeInUp}
              className="mb-12 pb-12 border-b border-blue-500/20"
            >
              <p className="text-sm text-gray-400 mb-4">Explore Related Solutions</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/call-answering-service" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  → Call Answering Service Alternative
                </Link>
              </div>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Stop Losing Calls. Start Converting Customers.
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Your AI Virtual Receptionist is ready to answer every call, 24/7. See how much time and money you'll save.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment-booking" className="block">
                <Button className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 hover:scale-105 gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Book Demo
                </Button>
              </Link>
              <Link to="/how-it-works" className="block">
                <Button variant="outline" className="px-10 py-4 rounded-xl bg-blue-600/20 border-2 border-blue-500 text-blue-200 font-bold text-lg hover:bg-blue-600/40 hover:border-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 w-full sm:w-auto backdrop-blur-sm">
                  See How It Works
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default VirtualReceptionist;
