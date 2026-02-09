import React, { useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Zap, Heart, Clock, TrendingUp, Users, AlertCircle, ChevronDown, Calendar, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MedicalWaveBackground } from '@/components/ui/medical-wave-background';
import { LogosSlider } from '@/components/LogosSlider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MedicalAudioDemosSection } from '@/components/ui/medical-audio-demos-glass';
import MedicalCTAGlass from '@/components/ui/medical-cta-glass';
import medicalProblemImage from '@/assets/manual-sales-process-challenges-and-bottlenecks.png';
import medicalSolutionImage from '@/assets/healthcare-ai-receptionist-automating-patient-scheduling.png';
import { MedicalFeaturesSection } from '@/components/ui/medical-features-section';
import { MedicalBenefitsSection } from '@/components/ui/medical-benefits-section';
import { MedicalBuiltForSection } from '@/components/ui/medical-built-for-section';
import { MedicalQualificationSection } from '@/components/ui/medical-qualification-section';
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

const MedicalReceptionist = () => {
  const medicalUseCases = [
    {
      icon: Phone,
      title: "New Patient Appointment Booking",
      description: "The AI schedules consultations with the appropriate doctor or department instantly."
    },
    {
      icon: Calendar,
      title: "Follow-Up Appointment Scheduling",
      description: "Books review visits and post-treatment checkups automatically."
    },
    {
      icon: Zap,
      title: "Test & Diagnostic Coordination",
      description: "Helps patients book lab tests, scans, and diagnostic procedures."
    },
    {
      icon: Heart,
      title: "General Information Support",
      description: "Answers questions about services, departments, timings, and procedures."
    },
    {
      icon: Clock,
      title: "After-Hours Call Handling",
      description: "Ensures patients can leave inquiries and receive guidance outside clinic hours."
    },
    {
      icon: Phone,
      title: "HIPAA-Compliant Patient Intake (USA)",
      description: "Securely collects medical history, insurance info, and pre-existing conditions before appointments—HIPAA-compliant with encrypted storage."
    },
    {
      icon: MessageSquare,
      title: "Insurance Verification & Pre-Screening (India/UAE)",
      description: "Verifies patient insurance coverage and corporate health policy eligibility before appointments, reducing billing disputes and no-shows."
    },
    {
      icon: Heart,
      title: "Post-Appointment Follow-Up (HIPAA/GDPR Compliant)",
      description: "Calls patients 48-72 hours after visits to track recovery, ask for feedback, and schedule follow-up appointments—all compliant with patient privacy regulations."
    },
    {
      icon: Clock,
      title: "Chronic Disease Management Reminders",
      description: "Automated medication reminders, lab test due date notifications, and appointment follow-ups for diabetes, hypertension, and cardiac patients—improving patient compliance."
    }
  ];

  const howItWorks = [
    { step: "1", title: "Patient Calls", description: "Your clinic receives an incoming patient call." },
    { step: "2", title: "AI Answers Instantly", description: "The AI responds with a natural, human-like voice." },
    { step: "3", title: "Understands Request", description: "Identifies appointment booking, rescheduling, or information needs." },
    { step: "4", title: "Handles Automatically", description: "Books appointments or provides accurate information." },
    { step: "5", title: "Updates Your System", description: "All details are logged in your clinic management system." }
  ];

  const benefits = [
    "Reduce front-desk workload and staff burnout",
    "Answer 100% of incoming patient calls",
    "Improve patient satisfaction with faster response times",
    "Minimize missed appointments and no-shows",
    "Maintain consistent communication across all patients",
    "Operate beyond regular clinic hours without extra staffing"
  ];

  const faqs = [
    {
      q: "Can an AI really talk to patients over the phone?",
      a: "Yes. Our AI uses advanced voice technology to understand and respond naturally to patient requests, handling everything from appointment bookings to general inquiries."
    },
    {
      q: "Will this replace my reception staff?",
      a: "No. The AI supports your team by handling repetitive calls so staff can focus on in-person patient care and complex interactions."
    },
    {
      q: "Is patient information handled securely?",
      a: "Yes. We've built our AI agents to follow strict data handling and privacy practices, with secure integration to your clinic management system and full compliance with healthcare regulations."
    },
    {
      q: "Can it handle multiple languages?",
      a: "Yes. The AI can communicate with patients in multiple languages to improve accessibility and patient satisfaction across diverse communities."
    },
    {
      q: "Is VocalDice HIPAA-compliant for US healthcare practices?",
      a: "Yes. We've deployed our AI Medical Receptionist with full HIPAA-compliance: encrypted data transmission, audit logs, Business Associate Agreements (BAAs), and HIPAA-certified infrastructure. All patient information and medical records are stored securely on our HIPAA-certified servers, and our team manages all compliance requirements."
    },
    {
      q: "Does this comply with TRAI DND regulations in India?",
      a: "Yes. We've engineered our AI Medical Receptionist to be fully compliant with TRAI DND regulations for India. We automatically exclude opted-out numbers, handle calling hour restrictions, and maintain detailed call logs for regulatory audits. Healthcare organizations can operate confidently within Indian regulations with our team managing compliance."
    },
    {
      q: "Where is patient data stored for UAE healthcare providers?",
      a: "All patient data for UAE clinics is stored on TRA-compliant servers physically located in the GCC region. We maintain full data localization and compliance with UAE healthcare data protection and privacy regulations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>HIPAA-Compliant AI Medical Receptionist & Appointment Booking in USA, India & UAE | VocalDice</title>
        <meta name="description" content="HIPAA-compliant AI medical receptionist automating appointment bookings, patient inquiry handling, and follow-ups 24/7. TRAI DND & TRA compliant for USA, India, and UAE healthcare clinics and practices." />
        <meta name="keywords" content="AI medical receptionist, HIPAA compliant AI, healthcare voice agent, AI appointment scheduling for medical, AI medical assistant, automated patient follow-up, medical call center automation, HIPAA-compliant AI voice, DND compliant healthcare, healthcare AI assistant" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="author" content="VocalDice" />
        
        <meta property="og:title" content="AI Medical Receptionist for Private Clinics | 24/7 Patient Call Automation" />
        <meta property="og:description" content="Automate patient calls and appointment scheduling for busy clinics. Works alongside your existing receptionist." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vocaldice.com/ai-medical-receptionist" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Medical Receptionist for Private Clinics | 24/7 Patient Call Automation" />
        <meta name="twitter:description" content="Automate patient calls and appointment scheduling for busy clinics." />
        
        <link rel="canonical" href="https://vocaldice.com/ai-medical-receptionist" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Medical Receptionist",
            "description": "Automate patient calls, appointment scheduling, and FAQs with an AI medical receptionist",
            "provider": {
              "@type": "Organization",
              "name": "VocalDice"
            },
            "areaServed": ["IN", "AE"],
            "url": "https://vocaldice.com/ai-medical-receptionist"
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-black overflow-y-auto">
        <Navigation />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-black">
          <MedicalWaveBackground />
          
          <motion.div 
            className="max-w-4xl mx-auto text-center z-10 relative"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-medium text-emerald-300">AI Medical Receptionist</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              We Deploy <br/>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                24/7 AI Medical Receptionists
              </span>
              <br/>
              That Answer Every Patient Call.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Reduce front-desk overload and never miss a patient call. Our AI answers inquiries, schedules appointments, and handles common questions instantly and accurately.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                data-cal-link="vocaldice/strategy-session"
                data-cal-namespace="default"
                data-cal-origin="https://cal.id"
                data-cal-config='{"layout":"month_view"}'
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 text-lg group"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Strategy Call
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button 
                onClick={() => document.getElementById('medical-audio-demos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-emerald-500/30 text-white font-semibold rounded-full hover:bg-emerald-500/10 transition-all duration-300 text-lg"
              >
                Hear Audio Demos
              </button>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base">
              ✓ Built for busy private clinics and specialty practices across India
            </motion.p>
          </motion.div>
        </section>

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
                  Your Front Desk Is
                  <br />
                  <span className="text-red-400">Overwhelmed</span>
                </motion.h2>

                <motion.div variants={fadeInUp} className="space-y-4 mb-8">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Healthcare facilities receive hundreds of calls daily for appointment bookings, rescheduling, doctor availability, test result queries, and general information.
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    But during peak hours, calls go unanswered, patients are kept waiting, and staff get burned out juggling phones and in-person patients.
                  </p>

                  <ul className="space-y-2 ml-4 pt-2">
                    <li className="text-gray-300 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>Long hold times during peak hours</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>Missed calls go unanswered</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>Staff burnout from juggling phones and patients</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>Inconsistent patient communication</span>
                    </li>
                  </ul>

                  <p className="text-gray-300 text-lg leading-relaxed pt-2">
                    Missed calls don't just mean inconvenience they mean lost appointments and poor patient experience.
                  </p>

                  <p className="text-red-400 font-semibold text-lg pt-4">
                    When patients can't reach your clinic easily, they call the next one.
                  </p>

                  <p className="text-emerald-400 font-semibold text-lg pt-6 bg-emerald-500/10 px-4 py-3 rounded-lg border border-emerald-500/30">
                    Most clinics lose 5–15 patient calls every day. That's ₹50,000–₹2,00,000 in lost revenue every month. Our AI makes sure every single one is answered and converted into an appointment.
                  </p>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="hidden md:block">
                <img 
                  src={medicalProblemImage}
                  alt="Manual Sales Process Challenges and Bottlenecks"
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
                  src={medicalSolutionImage}
                  alt="Healthcare AI Receptionist Automating Patient Scheduling"
                  className="w-full rounded-2xl shadow-2xl shadow-emerald-500/20"
                />
              </motion.div>

              <div>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Your 24/7 AI Medical
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Receptionist
                  </span>
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-gray-300 text-lg mb-6 leading-relaxed">
                  VocalDice provides an AI-powered healthcare voice assistant that answers calls instantly, speaks naturally, and handles routine patient interactions without adding pressure to your staff.
                </motion.p>

                <motion.p variants={fadeInUp} className="text-emerald-400 font-semibold text-lg mb-8">
                  No more long hold times. No more missed calls. No more staff burnout.
                </motion.p>

                <motion.div variants={staggerContainer} className="space-y-4 mb-8">
                  {[
                    "Answers Incoming Patient Calls Instantly leads to no more missed calls",
                    "Books, Reschedules, and Cancels Appointments in real-time integration",
                    "Handles Frequently Asked Questions like clinic hours, availability, procedures",
                    "Routes Critical Calls to Staff in emergency cases transferred immediately",
                    "Sends Appointment Confirmations & Reminders that reduces no-shows via SMS/WhatsApp"
                  ].map((benefit, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
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
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 text-lg group"
                >
                  <span className="flex items-center gap-2">
                    Schedule a Demo
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Qualification Section */}
        <MedicalQualificationSection />

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
                Serve Patients in Multiple Languages
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-300 text-lg max-w-3xl mx-auto">
                Healthcare providers serve diverse communities. Our AI medical receptionist can communicate in multiple languages, helping patients feel comfortable and understood.
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
                { title: "Multilingual Support", desc: "Handles patient calls in English and regional languages" },
                { title: "Diverse Communities", desc: "Serves diverse patient populations across urban and metro regions" },
                { title: "Consistent Quality", desc: "Delivers consistent, polite, and clear communication every time" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-emerald-900/10 to-teal-900/5 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all"
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
              className="text-emerald-400 font-semibold text-lg text-center mt-12"
            >
              Better communication leads to better patient experience.
            </motion.p>
          </div>
        </section>

        {/* India-Specific Relevance Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-900/30 to-black">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent border border-emerald-500/30 rounded-2xl p-8 md:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Perfect for Growing Clinics Across India
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Already being adopted by fast-growing private clinics and specialty practices in Bangalore, Mumbai, Hyderabad, Delhi, and Chennai. Our AI works alongside your existing receptionist no new software for your staff to learn.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Built for the Indian clinic environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Handles Hindi, English, and regional languages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Integrates with popular clinic management software</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Delivers the work of multiple receptionists 24/7</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Section with Cybernetic Bento Grid */}
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
                What Our AI Medical Receptionist Handles Every Day
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-300 text-lg max-w-3xl mx-auto">
                From appointment bookings to after-hours patient inquiries, our AI healthcare voice assistant manages routine calls so your staff can focus on patient care.
              </motion.p>
            </motion.div>

            <MedicalFeaturesSection />

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center pt-12 border-t border-emerald-500/20"
            >
              <p className="text-emerald-400 font-semibold text-lg">
                Fewer calls at the front desk. Faster responses for patients. Better focus for your staff.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Audio Demos Section */}
        <section id="medical-audio-demos">
          <MedicalAudioDemosSection />
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/30 border-t border-emerald-500/10">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
              How the AI Medical Receptionist Works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              A seamless flow from patient call to scheduled appointment in minutes
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
                    <linearGradient id="medicalFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#14b8a6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 50 60 Q 250 20 450 60 T 950 60"
                    fill="none"
                    stroke="url(#medicalFlowGradient)"
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
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-lg opacity-50"></div>
                        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-2 border-emerald-500/50 hover:border-emerald-500 transition-all">
                          <span className="text-2xl font-bold text-emerald-300">{item.step}</span>
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
                <div className="absolute left-7 top-12 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/70 to-emerald-500/30"></div>

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
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-lg opacity-40"></div>
                          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-2 border-emerald-500/60 bg-black">
                            <span className="text-xl font-bold text-emerald-300">{item.step}</span>
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
        <MedicalBenefitsSection />

        {/* Built For Healthcare Section */}
        <MedicalBuiltForSection />

        {/* Premium Testimonials Section */}
        <PremiumTestimonialSection
          title="Trusted by Healthcare Providers"
          niche="medical"
          testimonials={[
            {
              id: 1,
              quote: "Intake used to be a nightmare of manual data entry. VocalDice automated it completely and improved data quality.",
              name: "Dr. Patel",
              role: "Practice Manager",
              rating: 5,
              initials: "DP",
              caseStudyLink: "/case-studies/dr-patel-healthcare-intake"
            },
            {
              id: 2,
              quote: "Our no-show rate dropped dramatically. VocalDice is our most important business system now.",
              name: "Lisa",
              role: "Clinic Director",
              rating: 5,
              initials: "LM",
              caseStudyLink: "/case-studies/lisa-healthcare-efficiency"
            },
            {
              id: 3,
              quote: "Patient satisfaction scores jumped 28 points. Automated follow-ups and reminders made a massive difference in outcomes.",
              name: "Dr. Gupta",
              role: "Hospital Administrator",
              rating: 5,
              initials: "DG",
              caseStudyLink: "/case-studies/dr-gupta-healthcare-automation"
            }
          ]}
        />

        {/* FAQs Section */}
        <section className="py-20 px-4 bg-black">
          <LogosSlider />
          
          <div className="max-w-3xl mx-auto mt-16">
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
                Everything you need to know about AI medical receptionists
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
                    <AccordionItem value={`item-${i}`} className="bg-gradient-to-r from-emerald-900/10 to-teal-900/5 border border-emerald-500/20 rounded-lg px-6">
                      <AccordionTrigger className="hover:text-emerald-400 transition-colors py-4">
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
                Have more questions? <span className="text-emerald-400 font-semibold cursor-pointer hover:text-emerald-300">Contact us</span>
                {' '} | {' '}
                <Link to="/case-studies" className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
                  See Healthcare Success Stories
                </Link>
              </p>

              {/* Cross-Linked Resources */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 pt-8 border-t border-emerald-500/20 flex flex-wrap justify-center gap-4"
              >
                <Link to="/virtual-receptionist" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                  → Explore Virtual Receptionist Solution
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="/call-answering-service" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                  → Call Answering Service for Clinics
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section with Glass Effect */}
        <section className="relative py-32 px-4 border-t border-emerald-500/10 overflow-hidden">
          {/* Wave Background */}
          <div className="absolute inset-0 -z-20">
            <MedicalWaveBackground />
          </div>
          
          {/* Gradient Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-30"></div>
          
          <MedicalCTAGlass onDemoClick={() => {
            // Handle demo click - can integrate with your booking system
            console.log('Demo booked!');
          }} />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MedicalReceptionist;
