import React, { useState, useRef, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, MapPin, Calendar, BarChart3, Users, Zap, Clock, TrendingDown, AlertCircle, SkipForward } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SonicWaveformCanvas } from '@/components/ui/sonic-waveform';
import { LogosSlider } from '@/components/LogosSlider';
import { BentoFeaturesGrid } from '@/components/ui/bento-features';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { RealEstateAudioDemosSection } from '@/components/ui/realestate-audio-demos-glass';
import RealEstateCTAGlass from '@/components/ui/real-estate-cta-glass';
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

const RealEstateAssistant = () => {
  const usesCases = [
    {
      icon: Phone,
      title: "Lead Qualification Calls",
      description: "The AI calls every new inquiry and filters serious buyers from casual browsers using budget, timeline, and property type questions."
    },
    {
      icon: Calendar,
      title: "Site Visit Appointment Booking",
      description: "Automatically schedules property visits and sends confirmations via SMS or WhatsApp."
    },
    {
      icon: Zap,
      title: "Missed Call Follow-Ups",
      description: "Every missed call is called back instantly by AI – no opportunity lost."
    },
    {
      icon: BarChart3,
      title: "Property Inquiry Handling",
      description: "Answers questions about listings, availability, pricing ranges, and project details."
    },
    {
      icon: Users,
      title: "Cold Lead Re-Engagement",
      description: "Reactivates old leads from your CRM and books fresh appointments."
    },
    {
      icon: Phone,
      title: "India Portal Lead Auto-Follow-Up (99acres, MagicBricks)",
      description: "AI automatically calls leads from 99acres, MagicBricks, and PropertyShark portals within minutes—capturing serious buyers before competitors do."
    },
    {
      icon: MapPin,
      title: "USA MLS Lead Syndication (MLS, Zillow, Realtor.com)",
      description: "Instant follow-up to MLS and syndicated portal leads. Qualify serious buyers in the first 60 seconds before they call your competitors."
    },
    {
      icon: Zap,
      title: "Financing Pre-Qualification & Follow-Up",
      description: "AI asks about pre-approval status, financing type, and timeline. Passes warm qualified buyers directly to your sales team."
    }
  ];

  const howItWorks = [
    { step: "1", title: "Lead Comes In", description: "From property portals, Facebook ads, website forms, or direct calls." },
    { step: "2", title: "AI Calls Instantly", description: "The AI voice assistant reaches out within seconds." },
    { step: "3", title: "Smart Qualification", description: "Collects budget, location preference, property type, and purchase timeline." },
    { step: "4", title: "Appointment Booking", description: "Books a site visit or agent consultation automatically." },
    { step: "5", title: "CRM Update", description: "All call notes and lead status are logged in your system." }
  ];

  const benefits = [
    "Respond to 100% of leads instantly",
    "Increase site visit bookings without increasing staff",
    "Filter out low-intent inquiries automatically",
    "Reduce agent time wasted on unqualified leads",
    "Never miss leads outside office hours",
    "Scale follow-ups during campaign spikes"
  ];

  const faqs = [
    {
      q: "Can an AI really talk to property buyers over the phone?",
      a: "Yes. The AI uses natural voice technology to hold real conversations, ask qualification questions, and respond based on the buyer's answers."
    },
    {
      q: "Will this replace my sales agents?",
      a: "No. The AI handles early-stage qualification and appointment booking so your agents focus only on serious prospects."
    },
    {
      q: "Does it work with property portal leads?",
      a: "Yes. The AI can call leads from portals, website forms, ads, and CRM databases."
    },
    {
      q: "Is this useful for real estate teams in USA, India and UAE?",
      a: "Absolutely. Markets with high inquiry volumes benefit the most because the AI ensures instant response and consistent follow-ups."
    },
    {
      q: "Does this work with 99acres, MagicBricks, and PropertyShark (India)?",
      a: "Yes. The AI integrates with all major Indian real estate portals including 99acres, MagicBricks, PropertyShark, and Housing.com. It pulls leads automatically and calls them in real-time, capturing qualified buyer information directly into your CRM."
    },
    {
      q: "What real estate CRMs does VocalDice integrate with?",
      a: "We build integrations with all major real estate CRMs including Zoho CRM, Salesforce, HubSpot, Propertybase, Realogy Workplace, and Google Sheets. Our team configures everything so leads are logged automatically with call notes, follow-up status, and buyer preferences captured."
    }
  ];

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>AI Real Estate ISA & Lead Qualification for Agents in USA, India & UAE | VocalDice</title>
        <meta name="description" content="AI real estate agent that automates lead qualification, follow-ups, and property visit bookings. Works 24/7 for real estate agents, teams, and brokerages in USA, India, and UAE. Integrates with property portals, MLS, and CRM systems." />
        <meta name="keywords" content="AI real estate assistant, real estate AI voice agent, AI appointment setter for real estate, real estate lead qualification AI, AI ISA for real estate, automated follow up for real estate leads, AI calling agent for realtors, property inquiry call automation, real estate ISA, virtual real estate assistant" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="author" content="VocalDice" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="/ai-real-estate-assistant" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Real Estate Assistant for Lead Qualification & Appointment Booking | VocalDice" />
        <meta property="og:description" content="Automate lead follow-ups, qualification, and property visit bookings with an AI real estate voice assistant. Works 24/7 for agents, teams, and brokerages in India and UAE." />
        <meta property="og:url" content="/ai-real-estate-assistant" />
        <meta property="og:site_name" content="VocalDice" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Real Estate Assistant for Lead Qualification & Appointment Booking | VocalDice" />
        <meta name="twitter:description" content="Automate lead follow-ups, qualification, and property visit bookings with an AI real estate voice assistant. Works 24/7 for agents, teams, and brokerages in India and UAE." />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        
        {/* Structured Data / Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "VocalDice Real Estate AI Agent Service",
            "description": "Done-for-you AI real estate assistant service. Our agency designs, builds, deploys, and manages custom AI agents that qualify leads and book site visits automatically for real estate agents and brokerages.",
            "serviceType": "AI Real Estate Agent Services",
            "url": "/ai-real-estate-assistant",
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
            "serviceCapabilities": [
              "Lead Qualification & Filtering",
              "Appointment Scheduling",
              "Site Visit Booking",
              "CRM Integration",
              "24/7 Inbound Call Handling"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "50000"
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center justify-center">
          <SonicWaveformCanvas />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <motion.div
            className="max-w-5xl mx-auto relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6 w-fit">
              <span className="text-xs font-medium text-cyan-300">Real Estate Solution</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400 leading-tight">
              The 24/7 AI Inside Sales Agent (ISA) That Qualifies Leads & Books Viewings.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              Stop losing commissions to voicemail. We deploy a custom AI Real Estate Agent that answers inquiries instantly, filters out window shoppers, and books qualified site visits directly into your CRM so you only focus on closing.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                data-cal-link="vocaldice/strategy-session"
                data-cal-namespace="default"
                data-cal-origin="https://cal.id"
                data-cal-config='{"layout":"month_view"}'
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Book Strategy Call →
              </button>
              <button 
                onClick={() => document.getElementById('real-estate-audio-demos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-cyan-500/50 text-white font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300"
              >
                Hear Audio Demos
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-sm text-gray-400">
              <p>Built for real estate agents, property consultants, and brokerages across USA, India and UAE</p>
            </motion.div>
          </motion.div>
        </section>

        <LogosSlider />

        {/* Problem Section */}
        <section className="py-20 px-4 border-t border-cyan-500/10 bg-gradient-to-b from-black via-cyan-500/5 to-black">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-12">
              {/* LEFT SIDE - Emotional Hook */}
              <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-400">
                  Most Real Estate Leads Are Lost Before Your Team Even Calls
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                  You're paying for leads. But slow follow-ups, missed calls, and unqualified inquiries are silently killing your conversions every single day.
                </p>
                <motion.div variants={fadeInUp} className="inline-block mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 w-fit">
                  <p className="text-sm font-semibold text-red-300">
                    ⚡ Leads contacted within 5 minutes are up to 10x more likely to convert
                  </p>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE - Pain Points with Icons */}
              <motion.div variants={staggerContainer} className="space-y-4 flex flex-col">
                {[
                  {
                    icon: Clock,
                    title: "You Miss Leads Outside Working Hours",
                    text: "Property inquiries come in at night, during site visits, or when your team is busy. By the time you call back, the buyer has already spoken to another agent."
                  },
                  {
                    icon: AlertCircle,
                    title: "Your Team Wastes Time on Low-Intent Buyers",
                    text: "Agents spend hours calling people who are 'just checking prices,' have no budget clarity, or aren't planning to buy anytime soon."
                  },
                  {
                    icon: TrendingDown,
                    title: "Portal Leads Go Cold in Minutes",
                    text: "On platforms like PropertyFinder, 99acres, Bayut, Magicbricks, and Housing, buyers contact multiple agents at once. The fastest responder wins."
                  },
                  {
                    icon: SkipForward,
                    title: "Follow-Ups Don't Happen Consistently",
                    text: "Hot leads slip through the cracks because manual follow-ups depend on reminders, memory, and workload."
                  },
                  {
                    icon: TrendingDown,
                    title: "You're Paying for Ads That Don't Convert",
                    text: "Facebook and Google ads generate inquiries but without instant qualification, most of that ad spend turns into wasted opportunity."
                  }
                ].map((pain, idx) => {
                  const PainIcon = pain.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="flex gap-4 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <PainIcon className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-sm">{pain.title}</h4>
                        <p className="text-xs md:text-sm text-gray-400">{pain.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Full Width Closing Line */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 pt-12 border-t border-cyan-500/20 flex justify-center"
            >
              <div className="text-center max-w-3xl">
                <p className="text-xl md:text-2xl font-bold bg-clip-text text-white">
                  Speed to lead is no longer an advantage in real estate. It's survival.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent border-t border-cyan-500/10">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-12">
              {/* LEFT SIDE - Big Promise + Emotional Relief */}
              <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
                  Your 24/7 AI Real Estate ISA That Responds Before Your Competitor Does
                </h2>
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    VocalDice acts as your AI-powered real estate inside sales agent calling new property inquiries instantly, qualifying serious buyers, and booking site visits automatically.
                  </p>
                  <p className="text-lg font-semibold text-cyan-300">
                    No delays. No missed calls. No wasted agent time.
                  </p>
                </div>
                <motion.div variants={fadeInUp} className="inline-block mt-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 w-fit">
                  <p className="text-sm font-semibold text-blue-300">
                    💡 Real estate teams using AI follow-up respond 5–10x faster and book more site visits without increasing staff.
                  </p>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE - Outcome-Driven Benefits */}
              <motion.div variants={staggerContainer} className="space-y-4 flex flex-col">
                {[
                  {
                    title: "Every New Lead Gets an Instant Call",
                    text: "The moment a buyer inquires, the AI real estate voice assistant calls within seconds dramatically increasing connection and response rates."
                  },
                  {
                    title: "Only Serious Buyers Reach Your Agents",
                    text: "The AI asks about budget, location preference, property type, and timeline filtering out low-intent inquiries automatically."
                  },
                  {
                    title: "More Site Visits, Booked Automatically",
                    text: "Qualified prospects are scheduled directly into your calendar for property visits or consultation calls."
                  },
                  {
                    title: "No Lead Slips Through the Cracks",
                    text: "Missed calls, late-night inquiries, and ad-generated leads are followed up 24/7 without depending on staff availability."
                  },
                  {
                    title: "Your CRM Updates Itself",
                    text: "Call outcomes, buyer preferences, and qualification notes are logged automatically in your real estate CRM."
                  }
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex gap-4 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm">{benefit.title}</h4>
                      <p className="text-xs md:text-sm text-gray-400">{benefit.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Full Width Power Line */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 pt-12 border-t border-cyan-500/20 flex flex-col items-center gap-8"
            >
              <div className="text-center max-w-3xl">
                <p className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
                  Your agents stop chasing leads. They start closing qualified buyers.
                </p>
              </div>
              <motion.button
                variants={fadeInUp}
                data-cal-link="vocaldice/strategy-session"
                data-cal-namespace="default"
                data-cal-origin="https://cal.id"
                data-cal-config='{"layout":"month_view"}'
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-lg"
              >
                See Your AI in Action
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Use Cases Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-y-auto py-20 border-t border-cyan-500/10">
          <motion.div
            className="max-w-5xl mx-auto w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <BentoFeaturesGrid 
              title="What Our AI Real Estate Assistant Handles"
              subtitle="Comprehensive lead management and appointment automation"
              features={[
                {
                  title: "Lead Qualification Calls",
                  blurb: "The AI calls every new inquiry and filters serious buyers from casual browsers using budget, timeline, and property type questions.",
                  meta: "Qualification",
                  icon: Phone
                },
                {
                  title: "Site Visit Appointment Booking",
                  blurb: "Automatically schedules property visits and sends confirmations via SMS or WhatsApp.",
                  meta: "Booking",
                  icon: Calendar
                },
                {
                  title: "Missed Call Follow-Ups",
                  blurb: "Every missed call is called back instantly by AI – no opportunity lost.",
                  meta: "Follow-up",
                  icon: Zap
                },
                {
                  title: "Property Inquiry Handling",
                  blurb: "Answers questions about listings, availability, pricing ranges, and project details.",
                  meta: "Support",
                  icon: BarChart3
                },
                {
                  title: "Cold Lead Re-Engagement",
                  blurb: "Reactivates old leads from your CRM and books fresh appointments.",
                  meta: "Re-engagement",
                  icon: Users
                }
              ]}
            />
          </motion.div>
        </section>

        {/* Audio Demos Section */}
        <section id="real-estate-audio-demos">
          <RealEstateAudioDemosSection />
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent border-t border-cyan-500/10">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
              How the AI Real Estate Voice Agent Works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              A seamless flow from lead intake to qualified appointment in minutes
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
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 50 60 Q 250 20 450 60 T 950 60"
                    fill="none"
                    stroke="url(#flowGradient)"
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
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50"></div>
                        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 hover:border-cyan-500 transition-all">
                          <span className="text-2xl font-bold text-cyan-300">{item.step}</span>
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
                <div className="absolute left-7 top-12 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-500/70 to-cyan-500/30"></div>

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
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-40"></div>
                          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/60 bg-black">
                            <span className="text-xl font-bold text-cyan-300">{item.step}</span>
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

        {/* Benefits Section - Comparison */}
        <section className="py-20 px-4 border-t border-cyan-500/10">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Why Modern Real Estate Teams Use AI Instead of Hiring More Callers
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Scaling your follow-up doesn't have to mean increasing payroll, training time, and management overhead.
              </p>
            </motion.div>

            {/* Two Column Comparison */}
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8 mb-12">
              {/* LEFT SIDE - Hiring More Callers (Pain) */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <h3 className="text-2xl font-bold text-white">Hiring More Callers</h3>
                </div>
                {[
                  {
                    title: "Slow Response During Lead Surges",
                    text: "When campaigns perform well, your team gets overwhelmed. Leads wait, and conversion drops."
                  },
                  {
                    title: "High Salary + Training Costs",
                    text: "Recruiting, onboarding, and retaining callers costs more every year and performance still varies."
                  },
                  {
                    title: "Limited Working Hours",
                    text: "Human teams can't respond 24/7, especially to late night property inquiries."
                  },
                  {
                    title: "Inconsistent Follow-Ups",
                    text: "Manual calling depends on reminders, mood, workload, and supervision."
                  },
                  {
                    title: "Time Wasted on Low-Quality Leads",
                    text: "Your agents still spend hours talking to buyers with no budget clarity or timeline."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="p-4 rounded-lg bg-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-all group"
                  >
                    <h4 className="font-semibold text-white mb-1 text-sm group-hover:text-red-200">{item.title}</h4>
                    <p className="text-xs md:text-sm text-gray-400">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* RIGHT SIDE - AI Real Estate Assistant (Solution) */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                  <h3 className="text-2xl font-bold text-white">AI Real Estate Assistant</h3>
                </div>
                {[
                  {
                    title: "Instant Response to Every Inquiry",
                    text: "The AI real estate voice agent calls new leads within seconds, increasing connection rates dramatically."
                  },
                  {
                    title: "No Hiring, Training, or Management",
                    text: "Your AI appointment setter works from day one with no performance drop or attrition."
                  },
                  {
                    title: "24/7 Lead Follow-Up",
                    text: "Handle property inquiries anytime nights, weekends, holidays."
                  },
                  {
                    title: "Consistent Qualification",
                    text: "The AI asks the right questions on every call, ensuring standardized real estate lead qualification."
                  },
                  {
                    title: "Only Serious Buyers Reach Agents",
                    text: "Low-intent and price-check inquiries are filtered automatically."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all group"
                  >
                    <h4 className="font-semibold text-white mb-1 text-sm group-hover:text-cyan-200">{item.title}</h4>
                    <p className="text-xs md:text-sm text-gray-400">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Comparison Table */}
            <motion.div variants={fadeInUp} className="mb-12 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-cyan-500/20">
                    <th className="text-left py-4 px-4 text-white font-bold">Feature</th>
                    <th className="text-center py-4 px-4 text-red-400 font-semibold text-sm">Hiring Callers</th>
                    <th className="text-center py-4 px-4 text-cyan-400 font-semibold text-sm">AI Assistant</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Responds Instantly", hiring: "❌ Depends on staff", ai: "✅ Within seconds" },
                    { feature: "Works 24/7", hiring: "❌ No", ai: "✅ Yes" },
                    { feature: "Scales During Campaigns", hiring: "⚠️ Hard & Costly", ai: "✅ Automatic" },
                    { feature: "Qualification Quality", hiring: "⚠️ Inconsistent", ai: "✅ Standardized" },
                    { feature: "Cost Growth", hiring: "📈 Increases yearly", ai: "📉 Predictable" }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors">
                      <td className="py-4 px-4 text-gray-300 font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-sm text-gray-400">{row.hiring}</td>
                      <td className="py-4 px-4 text-center text-sm text-cyan-300">{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Power Comparison Line */}
            <motion.div
              variants={fadeInUp}
              className="text-center py-8 border-t border-cyan-500/20"
            >
              <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-cyan-400 to-green-400">
                More callers increase costs. AI increases conversions.
              </p>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              variants={fadeInUp}
              className="text-center mt-12"
            >
              <p className="text-white text-xl font-bold mb-6">Stop Scaling Your Costs. Start Scaling Your Conversions.</p>
              <motion.button
                variants={fadeInUp}
                data-cal-link="vocaldice/strategy-session"
                data-cal-namespace="default"
                data-cal-origin="https://cal.id"
                data-cal-config='{"layout":"month_view"}'
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-lg"
              >
                See How the AI Works
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Who This Is Built For Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent border-t border-cyan-500/10">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Built for High-Ticket Real Estate Teams in India and UAE
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Designed for agents and brokerages handling premium, high-volume property inquiries where speed and qualification decide who wins the deal.
              </p>
            </motion.div>

            {/* Target Audience Cards */}
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "Luxury Residential & Commercial Developers",
                  description: "High-value apartments, villas, and premium commercial properties."
                },
                {
                  title: "Real Estate Teams & Brokerages",
                  description: "Handling 50+ inbound inquiries per day from portals, ads, and direct calls."
                },
                {
                  title: "High-Intent Buyer Markets",
                  description: "Dubai, Abu Dhabi, Mumbai, Bangalore, Delhi NCR, and similar metro cities."
                },
                {
                  title: "Teams That Care About Lead Quality",
                  description: "Where unqualified calls waste real money and agent time."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="p-6 rounded-lg border-l-2 border-cyan-500/60 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Geographic & Market Signal */}
            <motion.div variants={fadeInUp} className="border-y border-cyan-500/20 py-8 mb-12">
              <p className="text-center text-gray-300 mb-4 text-sm uppercase tracking-widest">Supported Markets</p>
              <p className="text-center text-lg text-gray-400">
                <span className="text-cyan-300 font-semibold">India</span> • <span className="text-cyan-300 font-semibold">UAE</span> • <span className="text-cyan-300 font-semibold">USA</span> • GCC-focused property buyers • NRI inquiries
              </p>
            </motion.div>

            {/* Power Statement */}
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                If every missed call can cost you a six-figure deal, this AI was built for you.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Premium Testimonials Section */}
        <PremiumTestimonialSection
          title="Trusted by Real Estate Professionals"
          niche="real-estate"
          testimonials={[
            {
              id: 1,
              quote: "We've seen a 40% increase in qualified leads since implementing VocalDice. The AI handles our initial screening perfectly.",
              name: "Sarah",
              role: "Real Estate Agent",
              rating: 5,
              initials: "SJ",
              caseStudyLink: "/case-studies/sarah-real-estate-leads"
            },
            {
              id: 2,
              quote: "Never miss another lead. Our AI books viewings 24/7 while we sleep. Conversion has absolutely skyrocketed.",
              name: "Ahmed",
              role: "Agency Owner",
              rating: 5,
              initials: "AH",
              caseStudyLink: "/case-studies/ahmed-real-estate-booking"
            },
            {
              id: 3,
              quote: "ROI was immediate. We're closing 3x more deals per month with the same team size. This is a game changer.",
              name: "Fatima",
              role: "Brokerage Manager",
              rating: 5,
              initials: "FM",
              caseStudyLink: "/case-studies/fatima-real-estate-deals"
            }
          ]}
        />

        {/* FAQs Section */}
        <section className="py-20 px-4 border-t border-cyan-500/10">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-400">
                Everything you need to know about VocalDice AI Real Estate Assistant
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mx-auto max-w-2xl">
              <Accordion
                type="single"
                collapsible
                className="w-full"
              >
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-dashed"
                  >
                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-white hover:text-cyan-300">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      <p className="text-base leading-relaxed">{faq.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <motion.p
                variants={fadeInUp}
                className="mt-8 text-center text-gray-400"
              >
                Can't find what you're looking for?{' '}
                <a href="mailto:support@vocaldice.com" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                  Contact our support team
                </a>
                {' '} | {' '}
                <Link to="/case-studies" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                  See Real Estate Success Stories
                </Link>
              </motion.p>

              {/* Cross-Linked Resources */}
              <motion.div
                variants={fadeInUp}
                className="mt-16 pt-8 border-t border-cyan-500/20 flex flex-wrap justify-center gap-4"
              >
                <Link to="/virtual-receptionist" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                  → Compare with Virtual Receptionist
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="/call-answering-service" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                  → Call Answering Service Alternative
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Final CTA Section with Glass Effect */}
        <section className="relative py-32 px-4 border-t border-cyan-500/10 overflow-hidden">
          {/* Gradient Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30"></div>
          
          <RealEstateCTAGlass onDemoClick={() => {
            // Handle demo click - can integrate with your booking system
            console.log('Demo booked!');
          }} />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RealEstateAssistant;
