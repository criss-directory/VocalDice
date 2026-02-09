import React, { useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Zap, Sun, Home, Clock, TrendingUp, Users, AlertCircle, ChevronDown, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SolarWaveBackground } from '@/components/ui/solar-wave-background';
import { LogosSlider } from '@/components/LogosSlider';
import { BentoFeaturesGrid } from '@/components/ui/bento-features';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { SolarAudioDemosSection } from '@/components/ui/solar-audio-demos-glass';
import SolarCTAGlass from '@/components/ui/solar-cta-glass';
import { PremiumTestimonialSection } from '@/components/ui/premium-testimonial-section';
import solarBottlenecksImage from '@/assets/solar-appointment-setting-process-bottlenecks.png';
import solarSolutionImage from '@/assets/solar-sales-challenges-ai-solution.png';

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

const SolarLeadQualification = () => {
  const solarUseCases = [
    {
      icon: Phone,
      title: "Outbound Power Dialer",
      description: "Dials thousands of cold leads or aged data daily. Identifies homeowners, checks bill amounts, and passes only interested prospects to your closers."
    },
    {
      icon: Zap,
      title: "Instant Speed-to-Lead",
      description: "Calls paid ad leads (Facebook/Google) within seconds of submission. Qualifies intent and books site surveys 24/7, ensuring zero lead leakage."
    },
    {
      icon: Calendar,
      title: "Pipeline Protection",
      description: "Automatically confirms upcoming appointments and chases down \"no-shows\" to reschedule them immediately, keeping your engineers' calendars full."
    },
    {
      icon: Users,
      title: "Live Warm Transfers",
      description: "The moment a lead signals \"ready to buy,\" the AI patches them directly to your human sales floor for an instant closing opportunity."
    },
    {
      icon: TrendingUp,
      title: "Lifetime Nurture & Upsell",
      description: "Re-engages dead leads with long-term follow-ups and calls past customers to upsell batteries, roofing, or cleaning services."
    },
    {
      icon: CheckCircle,
      title: "Reputation Management",
      description: "Calls customers post-installation to resolve issues instantly and secure 5-star GMB (Google My Business) reviews on autopilot."
    },
    {
      icon: Home,
      title: "Roof Suitability Pre-Screening (USA)",
      description: "AI asks about roof age, orientation, and shade coverage eliminating unsuitable prospects before sending engineers, saving 2+ hours per unqualified lead."
    },
    {
      icon: Zap,
      title: "Federal Tax Credit & Savings Calculator (USA)",
      description: "Explains 30% Federal Tax Credits, state incentives, and monthly electricity savings during qualification calls converting price objections into closed deals."
    },
    {
      icon: Home,
      title: "India Electricity Bill Analysis",
      description: "AI analyzes monthly bill images for consumption patterns and calculates solar viability + payback in months vs. years. Critical for Indian market where savings justification differs."
    },
    {
      icon: TrendingUp,
      title: "Follow-Up Nurturing Sequences",
      description: "Automated 7-call sequences for undecided prospects with fresh incentive information each time, increasing conversion by 40%."
    }
  ];

  const howItWorks = [
    { step: "1", title: "Lead Arrives", description: "From ads, landing pages, WhatsApp, or marketplace listings." },
    { step: "2", title: "AI Calls Instantly", description: "Reaches homeowner within seconds with natural conversation." },
    { step: "3", title: "Smart Qualification", description: "Collects property type, roof details, electricity usage, and ownership status." },
    { step: "4", title: "Books Appointment", description: "Schedules site survey or sales consultation automatically." },
    { step: "5", title: "CRM Syncs Data", description: "All qualification data and call notes logged for your team." }
  ];

  const benefits = [
    "Respond to 100% of leads instantly",
    "Increase site survey bookings without adding staff",
    "Filter out renters and low-consumption homes automatically",
    "Stop wasting sales time on unqualified prospects",
    "Operate beyond office hours and weekends",
    "Scale campaigns without increasing payroll"
  ];

  const faqs = [
    {
      q: "Can AI really talk to homeowners about solar eligibility?",
      a: "Yes. Our AI uses natural voice technology to ask qualification questions about property ownership, roof type, and electricity usage, and responds intelligently based on homeowner answers."
    },
    {
      q: "Will this replace my sales team?",
      a: "No. The AI handles early-stage qualification and appointment booking so your sales reps focus only on pre-qualified homeowners ready to discuss installations."
    },
    {
      q: "Can it actually filter unqualified solar leads?",
      a: "Yes. The AI pre-qualifies based on ownership status, monthly electricity consumption, roof suitability, and property location to remove renters and casual inquiries automatically."
    },
    {
      q: "Does this work for solar companies in India and UAE?",
      a: "Absolutely. High-volume residential solar markets benefit the most because instant response times dramatically increase appointment booking and conversion rates."
    },
    {
      q: "Can the AI explain Federal Tax Credits and net metering benefits (USA)?",
      a: "Yes. The AI is trained to explain Federal Tax Credits (ITC), state-specific rebates, net metering benefits, and potential ROI timelines. It helps homeowners understand financial incentives and can answer basic questions about government programs."
    },
    {
      q: "Does it work with Indian solar companies and electricity bill analysis?",
      a: "Yes. The AI can analyze electricity bill amounts and usage patterns to estimate solar savings and payback periods specific to Indian solar rates and state policies. It helps homeowners understand savings potential immediately during the call."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solar Lead Qualification & Roof Pre-Screening for USA, India & UAE | VocalDice</title>
        <meta name="description" content="AI solar lead qualification agent that automates appointment setting, roof suitability screening, and electricity bill savings analysis. Works 24/7 for residential and commercial solar companies in USA, India, and UAE." />
        <meta name="keywords" content="AI solar lead qualification, solar appointment setting AI, AI voice agent for solar, solar lead follow-up automation, roof pre-screening AI, residential solar AI, commercial solar AI, solar sales automation, AI solar call center" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="author" content="VocalDice" />
        
        <meta property="og:title" content="AI Solar Lead Qualification & Appointment Setting | VocalDice" />
        <meta property="og:description" content="Automate solar lead follow-ups, qualification, and site survey bookings with an AI voice agent. Built for high-volume solar companies in India and UAE." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vocaldice.com/ai-solar-lead-qualification" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Solar Lead Qualification & Appointment Setting | VocalDice" />
        <meta name="twitter:description" content="Automate solar lead follow-ups, qualification, and site survey bookings with an AI voice agent." />
        
        <link rel="canonical" href="https://vocaldice.com/ai-solar-lead-qualification" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Solar Lead Qualification",
            "description": "Automate solar lead follow-ups, qualification, and site survey bookings with an AI voice agent",
            "provider": {
              "@type": "Organization",
              "name": "VocalDice"
            },
            "areaServed": ["IN", "AE"],
            "url": "https://vocaldice.com/ai-solar-lead-qualification"
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-black overflow-y-auto">
        <Navigation />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-black">
          <SolarWaveBackground />
          
          <motion.div 
            className="max-w-4xl mx-auto text-center z-10 relative"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-sm font-medium text-amber-300">AI Solar Assistant</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              The 
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                {" "}AI Solar Appointment Setter{" "}
              </span>
              That Qualifies Leads & Books Site Surveys.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
             Stop burning sales time on renters and low-bill leads. We deploy a custom AI Inside Sales Agent (ISA) that calls inquiries in less than 1 minute, verifies homeownership, checks electric bill usage, and schedules qualified site surveys directly on your closer's calendar.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                data-cal-link="vocaldice/strategy-session"
                data-cal-namespace="default"
                data-cal-origin="https://cal.id"
                data-cal-config='{"layout":"month_view"}'
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 text-lg group"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Strategy Call
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button 
                onClick={() => document.getElementById('solar-audio-demos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-amber-500/30 text-white font-semibold rounded-full hover:bg-amber-500/10 transition-all duration-300 text-lg"
              >
                Hear Audio Demos
              </button>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base">
              ✓ Built for fast-growing solar companies handling high volumes of residential inquiries
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
                  Most Solar Leads Never Turn Into
                  <br />
                  <span className="text-red-400">Installations</span>
                </motion.h2>

                <motion.div variants={fadeInUp} className="space-y-4 mb-8">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Solar ads and marketplaces generate a high volume of inquiries but most homeowners are not ready, not eligible, or just price shopping.
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Your team spends hours calling:
                  </p>

                  <ul className="space-y-2 ml-4">
                    <li className="text-gray-300 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>Homes with no proper roof space</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>Renters instead of homeowners</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>People with low electricity bills</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>Leads who never answer follow-up calls</span>
                    </li>
                  </ul>

                  <p className="text-gray-300 text-lg leading-relaxed pt-2">
                    Meanwhile, serious prospects go cold because response time is slow.
                  </p>

                  <p className="text-red-400 font-semibold text-lg pt-4">
                    That's where your pipeline leaks.
                  </p>
                </motion.div>

                <motion.p variants={fadeInUp} className="text-gray-400 border-l-2 border-red-400 pl-4 italic">
                  "Every unqualified call wastes sales time. Every delayed call loses serious buyers."
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="hidden md:block">
                <img 
                  src={solarBottlenecksImage}
                  alt="Solar Appointment Setting Process Bottlenecks"
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
                  src={solarSolutionImage}
                  alt="Solar Sales Challenges AI Solution"
                  className="w-full rounded-2xl shadow-2xl shadow-amber-500/20"
                />
              </motion.div>

              <div>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Your 24/7 AI Solar Lead
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Qualification Agent
                  </span>
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-gray-300 text-lg mb-6 leading-relaxed">
                  VocalDice acts as an AI-powered solar sales assistant that calls new leads instantly, qualifies homeowners, and books site survey appointments automatically.
                </motion.p>

                <motion.p variants={fadeInUp} className="text-amber-400 font-semibold text-lg mb-8">
                  No delays. No manual chasing. No wasted sales effort.
                </motion.p>

                <motion.div variants={staggerContainer} className="space-y-4 mb-8">
                  {[
                    "Instant Call to Every New Inquiry responding within seconds",
                    "Homeowner & Property Qualification which confirms ownership and roof suitability",
                    "Filters Out Low-Intent Leads to remove renters and unsuitable properties",
                    "Schedules Site Survey Appointments which books qualified prospects automatically",
                    "CRM Updates After Every Call which logs data and qualification status"
                  ].map((benefit, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
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
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 text-lg group"
                >
                  <span className="flex items-center gap-2">
                    See Your ROI in Action
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What the AI Handles Section */}
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
                What Our AI Solar Voice Agent Takes Care Of
              </motion.h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { title: "New Lead Follow-Up Calls", desc: "Every ad or website inquiry gets an immediate callback" },
                { title: "Eligibility Pre-Screening", desc: "Checks roof type, electricity bill, and installation suitability" },
                { title: "Site Survey Booking", desc: "Qualified homeowners are scheduled for engineer visits" },
                { title: "Missed Call Recovery", desc: "Every missed call is automatically returned" },
                { title: "Re-Engaging Old Leads", desc: "Dormant leads in your CRM are contacted and requalified" },
                { title: "Property Data Collection", desc: "Captures all relevant details for your sales team" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-amber-900/10 to-orange-900/5 border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/40 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Built for High-Volume Solar Markets
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-300 text-lg max-w-3xl mx-auto">
                In fast-growing residential solar markets, speed and qualification determine who wins the customer.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
            >
              {solarUseCases.map((feature, i) => (
                <FeatureCard 
                  key={i} 
                  feature={{
                    title: feature.title,
                    icon: feature.icon,
                    description: feature.description
                  }}
                  accentColor="from-amber-600/20 to-orange-600/20"
                />
              ))}
            </motion.div>

            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-amber-400 font-semibold text-lg text-center mt-12"
            >
              When every qualified roof matters, you can't afford slow follow-ups.
            </motion.p>
          </div>
        </section>

        {/* Audio Demos Section */}
        <section id="solar-audio-demos">
          <SolarAudioDemosSection />
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/30 border-t border-amber-500/10">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
              How the AI Solar Lead System Works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              A seamless flow from lead inquiry to qualified site survey in minutes
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
                    <linearGradient id="solarFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 50 60 Q 250 20 450 60 T 950 60"
                    fill="none"
                    stroke="url(#solarFlowGradient)"
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
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-lg opacity-50"></div>
                        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-2 border-amber-500/50 hover:border-amber-500 transition-all">
                          <span className="text-2xl font-bold text-amber-300">{item.step}</span>
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
                <div className="absolute left-7 top-12 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-500/70 to-amber-500/30"></div>

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
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-lg opacity-40"></div>
                          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-2 border-amber-500/60 bg-black">
                            <span className="text-xl font-bold text-amber-300">{item.step}</span>
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
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Why Solar Companies Are Replacing Manual Calling with AI Lead Qualification
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Hiring more callers increases payroll. Using an AI solar voice agent increases qualified site visits without increasing overhead.
                </motion.p>

                <motion.div variants={staggerContainer} className="space-y-6">
                  {[
                    {
                      title: "Respond to Every Solar Lead Instantly",
                      desc: "AI solar call agents follow up within seconds of a form submission, improving contact rates and lead conversion."
                    },
                    {
                      title: "Increase Site Survey Bookings Without Hiring",
                      desc: "Qualified homeowners are automatically scheduled for solar site visits, helping your sales team focus on serious prospects."
                    },
                    {
                      title: "Filter Out Low-Quality Solar Leads Automatically",
                      desc: "The AI filters renters, low electricity usage homes, and casual inquiries before they reach your sales team."
                    },
                    {
                      title: "Stop Wasting Sales Time on Unqualified Prospects",
                      desc: "Your sales reps only speak to homeowners who meet basic solar installation criteria."
                    },
                    {
                      title: "Operate Beyond Office Hours and Weekends",
                      desc: "The AI solar appointment setting system handles leads 24/7, capturing inquiries when competitors are offline."
                    },
                    {
                      title: "Scale Campaigns Without Increasing Payroll",
                      desc: "As ad campaigns grow, the AI scales instantly to handle higher lead volumes without adding staff."
                    }
                  ].map((benefit, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4">
                      <Zap className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p variants={fadeInUp} className="text-amber-400 font-semibold text-lg mt-10 pt-8 border-t border-amber-500/20">
                  More callers increase costs. AI increases qualified solar appointments.
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="hidden md:block">
                <div className="relative bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-black border border-amber-500/30 rounded-3xl p-10 overflow-hidden">
                  {/* Animated Background Blur */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl opacity-40"></div>
                  
                  <div className="space-y-8 relative z-10">
                    {/* Flow Start */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center justify-center"
                    >
                      <div className="text-center">
                        <div className="bg-gradient-to-r from-amber-600 to-amber-500 shadow-xl shadow-amber-500/30 rounded-xl px-6 py-4 inline-block hover:shadow-2xl hover:shadow-amber-500/50 transition-all">
                          <p className="text-white font-bold text-base">Solar Lead Arrives</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Arrow Down with Animation */}
                    <motion.div 
                      className="flex justify-center"
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-1 h-8 bg-gradient-to-b from-amber-500 via-amber-400 to-transparent rounded-full"></div>
                    </motion.div>

                    {/* AI Call */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex items-center justify-center"
                    >
                      <div className="text-center">
                        <div className="bg-gradient-to-r from-yellow-500 to-amber-400 shadow-xl shadow-yellow-500/30 rounded-xl px-6 py-4 inline-block hover:shadow-2xl hover:shadow-yellow-500/50 transition-all">
                          <p className="text-black font-bold text-base">↓ AI Calls Instantly ↓</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Arrow Down */}
                    <motion.div 
                      className="flex justify-center"
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    >
                      <div className="w-1 h-8 bg-gradient-to-b from-amber-500 via-amber-400 to-transparent rounded-full"></div>
                    </motion.div>

                    {/* Qualification Checks */}
                    <div className="space-y-3">
                      {[
                        "Homeowner Confirmed",
                        "Roof Suitability Checked",
                        "Electricity Usage Verified"
                      ].map((check, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-4 bg-gradient-to-r from-amber-500/15 to-orange-500/10 px-5 py-4 rounded-xl border border-amber-400/40 hover:border-amber-400/60 transition-all backdrop-blur-sm"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-black" />
                          </div>
                          <span className="text-gray-100 font-medium text-sm">{check}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Arrow Down */}
                    <motion.div 
                      className="flex justify-center"
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    >
                      <div className="w-1 h-8 bg-gradient-to-b from-amber-500 via-amber-400 to-transparent rounded-full"></div>
                    </motion.div>

                    {/* Result */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="flex items-center justify-center"
                    >
                      <div className="text-center">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 shadow-xl shadow-amber-600/40 rounded-xl px-6 py-4 inline-block hover:shadow-2xl hover:shadow-amber-600/60 transition-all">
                          <p className="text-white font-bold text-base flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Site Survey Booked
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Premium Testimonials Section */}
        <PremiumTestimonialSection
          title="Trusted by Solar Companies"
          niche="solar"
          testimonials={[
            {
              id: 1,
              quote: "VocalDice increased our lead generation by 68% in the first quarter. Sales team is thrilled because they only get pre-qualified, hot leads now.",
              name: "Marcus",
              role: "Solar Sales Manager",
              rating: 5,
              initials: "MS",
              caseStudyLink: "/case-studies/marcus-solar-lead-generation"
            },
            {
              id: 2,
              quote: "Our AI agent schedules consultations perfectly. We reduced no-shows by implementing automated reminders and client education.",
              name: "Jennifer",
              role: "Solar Company Owner",
              rating: 5,
              initials: "JB",
              caseStudyLink: "/case-studies/jennifer-solar-scheduling"
            },
            {
              id: 3,
              quote: "Our sales team increased revenue per representative by 45% in just 3 months. They're focused on selling, not admin work.",
              name: "David",
              role: "Solar Company Owner",
              rating: 5,
              initials: "DS",
              caseStudyLink: "/case-studies/david-solar-revenue"
            }
          ]}
        />

        {/* FAQs Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/30">
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
                Everything you need to know about AI solar lead qualification
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
                    <AccordionItem value={`item-${i}`} className="bg-gradient-to-r from-amber-900/10 to-orange-900/5 border border-amber-500/20 rounded-lg px-6">
                      <AccordionTrigger className="hover:text-amber-400 transition-colors py-4">
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
                Still have questions? <span className="text-amber-400 font-semibold cursor-pointer hover:text-amber-300">Contact us</span>
                {' '} | {' '}
                <Link to="/case-studies" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">
                  See Solar Success Stories
                </Link>
              </p>

              {/* Cross-Linked Resources */}
              <div className="mt-8 pt-6 border-t border-amber-500/20 flex flex-wrap justify-center gap-4">
                <Link to="/virtual-receptionist" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
                  → Full Virtual Receptionist Details
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="/call-answering-service" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
                  → Call Answering for Solar
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section with Glass Effect */}
        <section className="relative py-32 px-4 border-t border-amber-500/10 overflow-hidden">
          {/* Wave Background */}
          <div className="absolute inset-0 -z-20">
            <SolarWaveBackground />
          </div>
          
          {/* Gradient Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl opacity-30"></div>
          
          <SolarCTAGlass onDemoClick={() => {
            // Handle demo click - can integrate with your booking system
            console.log('Demo booked!');
          }} />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SolarLeadQualification;
