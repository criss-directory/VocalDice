import React, { useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Zap, ShoppingCart, Clock, TrendingUp, Users, AlertCircle, ChevronDown, Calendar, MessageSquare, CreditCard, Package, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EcommerceWaveBackground } from '@/components/ui/ecommerce-wave-background';
import { LogosSlider } from '@/components/LogosSlider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { EcommerceUseCasesSection } from '@/components/ui/ecommerce-use-cases-section';
import { EcommerceAudioDemosSection } from '@/components/ui/ecommerce-audio-demos-glass';
import EcommerceCTAGlass from '@/components/ui/ecommerce-cta-glass';
import { PremiumTestimonialSection } from '@/components/ui/premium-testimonial-section';

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

const EcommerceCustomerSupport = () => {
  const ecommerceUseCases = [
    {
      icon: ShoppingCart,
      title: "Order Status & Delivery Queries",
      description: "Instant answers about shipping, delivery timelines, and order tracking without support agent involvement."
    },
    {
      icon: TrendingUp,
      title: "Return & Refund Assistance",
      description: "Guides customers through return procedures, policies, and refund timelines automatically."
    },
    {
      icon: Zap,
      title: "Product Information Requests",
      description: "Answers questions about availability, pricing, features, and product recommendations instantly."
    },
    {
      icon: Clock,
      title: "Abandoned Cart Recovery",
      description: "Reaches out to customers who left items behind and nudges them to complete their purchase."
    },
    {
      icon: MessageSquare,
      title: "Post-Purchase Follow-Ups",
      description: "Confirms orders, shares delivery updates, collects feedback, and promotes repeat purchases."
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Abandoned Cart Messages (India)",
      description: "AI sends personalized WhatsApp reminders to customers who abandoned carts—recovering 15-25% of lost revenue directly in India's preferred channel."
    },
    {
      icon: Phone,
      title: "WhatsApp Customer Support (India)",
      description: "Handle order status, returns, and product questions on WhatsApp—India's most-used channel—without adding support staff."
    },
    {
      icon: CreditCard,
      title: "Payment Method Support & Order Completion (India)",
      description: "AI assists with UPI, NetBanking, card payments, and buy-now-pay-later options. Guides customers through failed payments and checkout errors—critical for India where payment failures cause 30% cart abandonment."
    },
    {
      icon: Package,
      title: "Returns & Refund Processing (India/International)",
      description: "Collects return authorization requests, generates RMA numbers, arranges pickup, and explains refund timelines. Reduces return processing from 2 days to instant."
    },
    {
      icon: Star,
      title: "Upsell & Cross-Sell Recommendations",
      description: "AI suggests complementary products during checkout or customer service interactions, increasing average order value by 20-35%."
    }
  ];

  const howItWorks = [
    { step: "1", title: "Customer Calls", description: "Your store receives an incoming customer call." },
    { step: "2", title: "AI Answers Instantly", description: "Responds with a natural, brand-friendly voice." },
    { step: "3", title: "Understands Request", description: "Identifies order tracking, returns, products, or checkout help." },
    { step: "4", title: "Resolves Automatically", description: "Provides accurate information based on your systems and policies." },
    { step: "5", title: "Updates Your System", description: "Logs all call details and outcomes for visibility." }
  ];

  const benefits = [
    "Answer 100% of customer calls instantly",
    "Reduce support team workload and overhead",
    "Improve customer satisfaction and response time",
    "Recover lost revenue from abandoned carts",
    "Handle peak season volume without hiring more staff",
    "Provide consistent, always-available customer service"
  ];

  const faqs = [
    {
      q: "Can AI really handle customer support calls?",
      a: "Yes. Our AI can understand common queries and provide accurate responses using your store's data, inventory, policies, and order information."
    },
    {
      q: "Will this replace my support team?",
      a: "No. The AI handles repetitive calls so your team can focus on complex, high-value customer issues and relationship building."
    },
    {
      q: "Can it help recover abandoned carts?",
      a: "Yes. The AI can follow up with customers who didn't complete checkout and encourage them to return and finalize their purchase."
    },
    {
      q: "Does it support multiple languages?",
      a: "Yes. The AI can communicate with customers in multiple languages to improve accessibility, trust, and conversion rates across diverse markets."
    },
    {
      q: "Can the AI send WhatsApp messages (India)?",
      a: "Yes. The AI automatically sends WhatsApp messages to customers for abandoned cart reminders, order tracking, return/refund status, and promotions. WhatsApp is the most effective channel for India ecommerce, and our AI handles it natively."
    },
    {
      q: "How much can we recover in abandoned cart revenue?",
      a: "Typical ecommerce stores recover 15-25% of abandoned cart value through instant AI follow-ups. If you have 100 abandoned carts per month at $50 average, that's $750-$1,250 in recovered revenue monthly."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Abandoned Cart Recovery & WhatsApp Customer Support for Ecommerce | USA, India & UAE</title>
        <meta name="description" content="AI voice agent automating abandoned cart recovery, customer support calls, and order follow-ups via voice and WhatsApp. Multilingual support for ecommerce stores in USA, India, and UAE." />
        <meta name="keywords" content="AI ecommerce customer support, AI voice assistant for online stores, ecommerce AI call agent, AI customer service, abandoned cart recovery AI, WhatsApp customer support AI, AI for order tracking, ecommerce abandoned cart AI, multilingual ecommerce AI, AI sales assistant" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="author" content="VocalDice" />
        
        <meta property="og:title" content="AI Ecommerce Customer Support & Sales Voice Agent | 24/7 Automation" />
        <meta property="og:description" content="Automate customer calls, order support, and abandoned cart follow-ups with an AI voice agent. Multilingual ecommerce AI assistant for online stores in India and UAE." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vocaldice.com/ai-ecommerce-customer-support" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Ecommerce Customer Support & Sales Voice Agent | 24/7 Automation" />
        <meta name="twitter:description" content="Automate customer calls, order support, and abandoned cart follow-ups with an AI voice agent." />
        
        <link rel="canonical" href="https://vocaldice.com/ai-ecommerce-customer-support" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Ecommerce Customer Support",
            "description": "Automate customer calls, order support, and abandoned cart follow-ups with an AI voice agent",
            "provider": {
              "@type": "Organization",
              "name": "VocalDice"
            },
            "areaServed": ["IN", "AE"],
            "url": "https://vocaldice.com/ai-ecommerce-customer-support"
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-black overflow-y-auto">
        <Navigation />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-black">
          <EcommerceWaveBackground />
          
          <motion.div 
            className="max-w-4xl mx-auto text-center z-10 relative"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              <span className="text-sm font-medium text-purple-300">AI Ecommerce Support</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              The <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">24/7 AI Ecommerce Agent</span> That Slashes RTOs & Recovers Lost Sales
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop burning support hours on repetitive queries. We deploy a custom Customer Experience (CX) Agent that answers calls instantly, verifies COD orders to reduce returns, and actively calls to recover abandoned carts turning your support center into a profit engine.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                data-cal-link="vocaldice/strategy-session"
                data-cal-namespace="default"
                data-cal-origin="https://cal.id"
                data-cal-config='{"layout":"month_view"}'
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 text-lg group"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Strategy Call
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button 
                onClick={() => document.getElementById('ecommerce-audio-demos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-purple-500/30 text-white font-semibold rounded-full hover:bg-purple-500/10 transition-all duration-300 text-lg"
              >
                Hear Audio Demos
              </button>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base">
              ✓ Built for fast-growing ecommerce brands, marketplaces, and online retailers
            </motion.p>
          </motion.div>
        </section>

        <LogosSlider />

        {/* Problem Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-black to-gray-900/30">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ecommerce Customers Expect Instant Support
                  <br />
                  <span className="text-red-400">But Teams Can't Keep Up</span>
                </motion.h2>

                <motion.div variants={fadeInUp} className="space-y-4 mb-8">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Online stores deal with constant customer questions: "Where is my order?" "Can I change my address?" "When will my refund come?" "Is this product in stock?"
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    During peak seasons and sales, support lines get overwhelmed. Calls go unanswered, customers get frustrated, and many never complete their purchase.
                  </p>

                  <ul className="space-y-2 ml-4 pt-2">
                    <li className="text-gray-300 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>Unanswered calls during peak shopping hours</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>Frustrated customers abandon carts</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>No follow-up on abandoned purchases</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>Support team burnout and high costs</span>
                    </li>
                  </ul>

                  <p className="text-gray-300 text-lg leading-relaxed pt-2">
                    At the same time, abandoned carts pile up not because customers aren't interested, but because no one follows up.
                  </p>

                  <p className="text-red-400 font-semibold text-lg pt-4">
                    Slow support loses customers. Missed follow-ups lose sales.
                  </p>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="hidden md:block">
                <img 
                  src="/src/assets/automating-ecommerce-support-ai-voice-agent.png" 
                  alt="Automating Ecommerce Support with AI Voice Agent" 
                  className="w-full rounded-2xl shadow-2xl shadow-red-500/20"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="hidden md:block">
                <img 
                  src="/src/assets/ai-voice-sales-agent-crm-integration-workflow.png" 
                  alt="AI Voice Sales Agent CRM Integration Workflow" 
                  className="w-full rounded-2xl shadow-2xl shadow-purple-500/20"
                />
              </motion.div>

              <div>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Your 24/7 AI Ecommerce
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Customer Support Agent
                  </span>
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-gray-300 text-lg mb-6 leading-relaxed">
                  VocalDice provides an AI-powered ecommerce voice assistant that handles high call volumes, answers common questions, and follows up with customers automatically.
                </motion.p>

                <motion.p variants={fadeInUp} className="text-purple-400 font-semibold text-lg mb-8">
                  It works alongside your human team to improve response speed, customer satisfaction, and revenue recovery.
                </motion.p>

                <motion.div variants={staggerContainer} className="space-y-4 mb-8">
                  {[
                    "Answers Incoming Customer Calls Instantly so no more long wait times",
                    "Handles Order Tracking & Status Queries in real-time updates without agents",
                    "Manages Returns, Refunds, and Exchanges to guide customers through policies",
                    "Follows Up on Abandoned Carts to call shoppers and encourage checkout completion",
                    "Escalates Complex Issues to transfer difficult problems to human agents seamlessly"
                  ].map((benefit, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.button 
                  variants={fadeInUp} 
                  data-cal-link="vocaldice/strategy-session"
                  data-cal-namespace="default"
                  data-cal-origin="https://cal.id"
                  data-cal-config='{"layout":"month_view"}'
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 text-lg group"
                >
                  <span className="flex items-center gap-2">
                    Recover Lost Sales
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Multilingual Support Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/30">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Support Customers in Multiple Languages
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-300 text-lg max-w-3xl mx-auto">
                Ecommerce brands serve diverse customers across regions and backgrounds. Our AI voice agent supports multilingual conversations so customers feel comfortable and understood.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { title: "Multiple Languages", desc: "Handles customer calls in English and regional languages" },
                { title: "Clear Communication", desc: "Provides consistent, clear responses across all markets" },
                { title: "Wider Accessibility", desc: "Improves trust and accessibility for diverse customer base" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-900/10 to-pink-900/5 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-purple-400 font-semibold text-lg text-center mt-12"
            >
              Customers buy more when they feel understood.
            </motion.p>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
                What Our AI Ecommerce Assistant Handles Every Day
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <EcommerceUseCasesSection />
            </motion.div>
          </div>
        </section>

        {/* Audio Demos Section */}
        <section id="ecommerce-audio-demos">
          <EcommerceAudioDemosSection />
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/30 border-t border-purple-500/10">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
              How the AI Ecommerce Support System Works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              A seamless flow from customer inquiry to resolution in minutes
            </motion.p>

            {/* Desktop Flow - Hidden on Mobile */}
            <div className="hidden md:block">
              <div className="relative">
                {/* SVG Curved Lines */}
                <svg
                  className="absolute top-12 left-0 w-full h-16 pointer-events-none"
                  viewBox="0 0 1000 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="ecommerceFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 50 60 Q 250 20 450 60 T 950 60"
                    fill="none"
                    stroke="url(#ecommerceFlowGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Steps Container */}
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-5 gap-6 mt-8"
                >
                  {howItWorks.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="flex flex-col items-center relative z-10"
                    >
                      {/* Circular Node */}
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-50"></div>
                        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 hover:border-purple-500 transition-all">
                          <span className="text-2xl font-bold text-purple-300">{item.step}</span>
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Mobile Flow - Vertical Stack */}
            <div className="md:hidden">
              <motion.div variants={staggerContainer} className="relative">
                {/* Vertical Connecting Line */}
                <div className="absolute left-7 top-12 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-500/70 to-purple-500/30"></div>

                <div className="space-y-12">
                  {howItWorks.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="relative"
                    >
                      <div className="flex gap-6 items-start">
                        {/* Circular Node */}
                        <div className="flex-shrink-0 relative z-10">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-40"></div>
                          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/60 bg-black">
                            <span className="text-xl font-bold text-purple-300">{item.step}</span>
                          </div>
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 pt-2">
                          <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
                Why <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Ecommerce Brands</span> Are Switching to AI Voice Agents
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-300 text-center max-w-3xl mx-auto text-lg">
                Faster support, higher conversions, and lower operational overhead without expanding your support team.
              </motion.p>
            </motion.div>

            {/* Desktop Layout - Split Content + Visual */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="hidden md:grid md:grid-cols-2 gap-12 items-start mb-12"
            >
              {/* LEFT SIDE - Benefit Blocks */}
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Answer Every Customer Call Instantly",
                    description: "AI ecommerce voice agents ensure no customer call goes unanswered, improving response times and overall customer satisfaction."
                  },
                  {
                    icon: Users,
                    title: "Reduce Support Team Workload",
                    description: "Handle repetitive order tracking, delivery updates, and return queries automatically so your support team focuses on complex issues."
                  },
                  {
                    icon: TrendingUp,
                    title: "Recover Revenue from Abandoned Carts",
                    description: "AI follow-up calls re-engage shoppers who left items in their cart, increasing ecommerce conversion rates."
                  },
                  {
                    icon: Zap,
                    title: "Handle Peak Season Volume Without Hiring",
                    description: "During sales and festive spikes, the AI scales instantly to manage increased customer inquiries."
                  },
                  {
                    icon: Clock,
                    title: "Provide 24/7 Customer Support",
                    description: "Your AI voice assistant for ecommerce works around the clock, supporting customers across time zones and shopping hours."
                  },
                  {
                    icon: CheckCircle,
                    title: "Deliver Consistent, Brand-Aligned Communication",
                    description: "Unlike human variability, AI provides uniform responses that follow your policies and tone every time."
                  }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <item.icon className="w-5 h-5 text-purple-400 mt-1" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                        {i < 5 && <div className="mt-4 h-px bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* RIGHT SIDE - Visual Panel */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="sticky top-20">
                  <div className="relative flex items-center justify-between gap-3 mb-12 p-6 bg-gradient-to-br from-purple-900/5 to-pink-900/5 border border-purple-500/10 rounded-xl">
                    {/* Customer Call */}
                    <div className="flex-1 text-center group cursor-pointer">
                      <div className="relative">
                        <div className="absolute inset-0 bg-purple-500/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative bg-black border border-gray-700/50 rounded-lg p-4 group-hover:border-purple-500/30 transition-colors">
                          <Phone className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                          <p className="text-xs text-gray-500 font-medium">Customer Call</p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 h-1 w-8">
                      <svg className="w-full h-full" viewBox="0 0 32 4" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="arrowGradRight" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.7" />
                          </linearGradient>
                        </defs>
                        <line x1="0" y1="2" x2="28" y2="2" stroke="url(#arrowGradRight)" strokeWidth="2" strokeLinecap="round" />
                        <polygon points="32,2 28,0 28,4" fill="#a855f7" opacity="0.7" />
                      </svg>
                    </div>

                    {/* AI Voice Agent */}
                    <div className="flex-1 text-center group cursor-pointer">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-black to-black border-2 border-purple-500/60 rounded-lg p-4 group-hover:border-purple-500/90 transition-all">
                          <Zap className="w-5 h-5 text-purple-400 mx-auto mb-2 animate-pulse" />
                          <p className="text-xs font-bold"><span className="text-purple-400">AI Voice</span> <span className="text-gray-500">24/7</span></p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 h-1 w-8">
                      <svg className="w-full h-full" viewBox="0 0 32 4" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="arrowGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
                          </linearGradient>
                        </defs>
                        <line x1="4" y1="2" x2="32" y2="2" stroke="url(#arrowGradLeft)" strokeWidth="2" strokeLinecap="round" />
                        <polygon points="0,2 4,0 4,4" fill="#a855f7" opacity="0.7" />
                      </svg>
                    </div>

                    {/* Actions */}
                    <div className="flex-1">
                      <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-purple-500/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative bg-black border border-gray-700/50 rounded-lg p-4 group-hover:border-purple-500/30 transition-colors">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-purple-500/70"></div>
                              <span className="text-xs text-gray-500">Order Info</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-purple-500/70"></div>
                              <span className="text-xs text-gray-500">Cart Recovery</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-purple-500/70"></div>
                              <span className="text-xs text-gray-500">Callback</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-purple-500/70"></div>
                              <span className="text-xs text-gray-500">Ticket Update</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Power Statement */}
                  <div className="relative group p-6 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:border-purple-500/40 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <p className="relative text-center text-base font-bold text-white leading-relaxed">
                      More support doesn't have to mean more staff <span className="text-purple-400">AI handles the volume</span> while your team handles the value.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile Layout - Stacked */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:hidden space-y-6"
            >
              {/* Benefit Blocks */}
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Answer Every Customer Call Instantly",
                    description: "AI ecommerce voice agents ensure no customer call goes unanswered, improving response times and overall customer satisfaction."
                  },
                  {
                    icon: Users,
                    title: "Reduce Support Team Workload",
                    description: "Handle repetitive order tracking, delivery updates, and return queries automatically so your support team focuses on complex issues."
                  },
                  {
                    icon: TrendingUp,
                    title: "Recover Revenue from Abandoned Carts",
                    description: "AI follow-up calls re-engage shoppers who left items in their cart, increasing ecommerce conversion rates."
                  },
                  {
                    icon: Zap,
                    title: "Handle Peak Season Volume Without Hiring",
                    description: "During sales and festive spikes, the AI scales instantly to manage increased customer inquiries."
                  },
                  {
                    icon: Clock,
                    title: "Provide 24/7 Customer Support",
                    description: "Your AI voice assistant for ecommerce works around the clock, supporting customers across time zones and shopping hours."
                  },
                  {
                    icon: CheckCircle,
                    title: "Deliver Consistent, Brand-Aligned Communication",
                    description: "Unlike human variability, AI provides uniform responses that follow your policies and tone every time."
                  }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <item.icon className="w-5 h-5 text-purple-400 mt-1" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                        {i < 5 && <div className="mt-4 h-px bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Flow Diagram */}
              <div className="relative flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-purple-900/5 to-pink-900/5 border border-purple-500/10 rounded-xl mt-8">
                {/* Customer Call */}
                <div className="w-full text-center group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-black border border-gray-700/50 rounded-lg p-4 group-hover:border-purple-500/30 transition-colors">
                      <Phone className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-500 font-medium">Customer Call</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="h-3 w-0.5 bg-gradient-to-b from-purple-500/60 to-purple-500/20"></div>

                {/* AI Voice Agent */}
                <div className="w-full text-center group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-black to-black border-2 border-purple-500/60 rounded-lg p-4 group-hover:border-purple-500/90 transition-all">
                      <Zap className="w-5 h-5 text-purple-400 mx-auto mb-2 animate-pulse" />
                      <p className="text-xs font-bold"><span className="text-purple-400">AI Voice</span> <span className="text-gray-500">24/7</span></p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="h-3 w-0.5 bg-gradient-to-b from-purple-500/60 to-purple-500/20"></div>

                {/* Actions */}
                <div className="w-full">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-purple-500/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-black border border-gray-700/50 rounded-lg p-4 group-hover:border-purple-500/30 transition-colors">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-purple-500/70"></div>
                          <span className="text-xs text-gray-500">Order Info</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-purple-500/70"></div>
                          <span className="text-xs text-gray-500">Cart Recovery</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-purple-500/70"></div>
                          <span className="text-xs text-gray-500">Callback</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-purple-500/70"></div>
                          <span className="text-xs text-gray-500">Ticket Update</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Power Statement */}
              <div className="relative group p-6 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:border-purple-500/40 transition-colors mt-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="relative text-center text-base font-bold text-white leading-relaxed">
                  More support doesn't have to mean more staff — <span className="text-purple-400">AI handles the volume</span> while your team handles the value.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Built For Ecommerce Section */}
        <section className="relative py-32 px-4 bg-gradient-to-b from-black to-gray-900/30 overflow-hidden">
          {/* Background Pattern - Very Subtle */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-10 left-10 text-6xl text-gray-500">🛒</div>
            <div className="absolute top-1/3 right-20 text-6xl text-gray-500">🚚</div>
            <div className="absolute bottom-20 left-1/3 text-6xl text-gray-500">☎️</div>
            <div className="absolute bottom-10 right-10 text-6xl text-gray-500">〰️</div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Built for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">High-Volume Ecommerce</span> Brands That Can't Afford Slow Support
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Our AI ecommerce voice assistant is designed for online stores managing large order volumes, constant customer inquiries, and aggressive growth targets.
              </motion.p>
            </motion.div>

            {/* Premium Card Grid */}
            <motion.div 
              className="grid md:grid-cols-2 gap-6 mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  icon: TrendingUp,
                  title: "D2C Brands Scaling Paid Traffic",
                  description: "Online brands running performance marketing campaigns that generate continuous customer inquiries and post-purchase support calls."
                },
                {
                  icon: ShoppingCart,
                  title: "Marketplaces & Multi-Category Retailers",
                  description: "Ecommerce businesses handling high daily order volumes across multiple product categories."
                },
                {
                  icon: Clock,
                  title: "Fashion, Electronics, Beauty & Lifestyle Stores",
                  description: "High-SKU stores where customers frequently call about sizing, availability, delivery timelines, and returns."
                },
                {
                  icon: Zap,
                  title: "Brands Running Frequent Sales & Campaigns",
                  description: "Businesses experiencing call spikes during product launches, festive sales, and promotional events."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="relative h-full">
                    {/* Glassmorphism Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-purple-600/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Card Content */}
                    <div className="relative bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm border border-gray-800/50 group-hover:border-purple-500/40 rounded-xl p-6 transition-all duration-300 h-full">
                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/10 mb-4 group-hover:from-purple-500/30 group-hover:to-pink-500/20 transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                      </div>
                      
                      {/* Text Content */}
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>
                      
                      {/* Subtle Hover Line */}
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Geo Signal */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <p className="text-sm text-gray-500 font-medium tracking-wide">
                Supporting ecommerce brands serving customers across <span className="text-gray-400">India, UAE, and international markets</span>
              </p>
            </motion.div>

            {/* Power Line */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative group max-w-3xl mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-purple-900/10 to-pink-900/10 border border-purple-500/20 group-hover:border-purple-500/40 rounded-xl p-8 transition-all duration-300 text-center">
                <p className="text-xl font-bold text-white leading-relaxed">
                  When customer support is <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">instant</span>, satisfaction rises. When follow-up is <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">automated</span>, revenue grows.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Premium Testimonials Section */}
        <PremiumTestimonialSection
          title="Trusted by E-Commerce Leaders"
          niche="ecommerce"
          testimonials={[
            {
              id: 1,
              quote: "Our AI support team handles 92% of inquiries without human help. Support costs plummeted while satisfaction skyrocketed.",
              name: "Raj",
              role: "E-Commerce Store Owner",
              rating: 5,
              initials: "RP",
              caseStudyLink: "/case-studies/raj-ecommerce-support"
            },
            {
              id: 2,
              quote: "We have 24/7 customer support without maintaining expensive overnight staff. Our customers are happier and we're more profitable.",
              name: "Sophie",
              role: "E-Commerce Operations Manager",
              rating: 5,
              initials: "SL",
              caseStudyLink: "/case-studies/sophie-ecommerce-24-7"
            },
            {
              id: 3,
              quote: "Automating our returns process actually increased our NPS and customer lifetime value. VocalDice turns problems into opportunities.",
              name: "Priya",
              role: "E-Commerce Director",
              rating: 5,
              initials: "PK",
              caseStudyLink: "/case-studies/priya-ecommerce-nps"
            }
          ]}
        />

        {/* FAQs Section */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Frequently Asked Questions
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-300 text-lg">
                Everything you need to know about AI ecommerce support
              </motion.p>
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

            <motion.div 
              className="text-center mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-gray-400">
                Still have questions? <span className="text-purple-400 font-semibold cursor-pointer hover:text-purple-300">Contact us</span>
                {' '} | {' '}
                <Link to="/case-studies" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                  See Ecommerce Success Stories
                </Link>
              </p>

              {/* Cross-Linked Resources */}
              <div className="mt-8 pt-6 border-t border-purple-500/20 flex flex-wrap justify-center gap-4">
                <Link to="/virtual-receptionist" className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                  → AI Virtual Receptionist Service
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="/call-answering-service" className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                  → 24/7 Call Answering for Ecommerce
                </Link>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section with Glass Effect */}
        <section className="relative py-32 px-4 border-t border-purple-500/10 overflow-hidden">
          {/* Wave Background */}
          <div className="absolute inset-0 -z-20">
            <EcommerceWaveBackground />
          </div>
          
          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 -z-10"></div>
          <div className="absolute inset-0 backdrop-blur-sm -z-10"></div>
          
          {/* Gradient Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30 -z-10"></div>
          
          <EcommerceCTAGlass onDemoClick={() => {
            // Handle demo click - can integrate with your booking system
            console.log('Demo booked!');
          }} />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EcommerceCustomerSupport;
