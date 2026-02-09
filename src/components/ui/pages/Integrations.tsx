import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Calendar, Phone, Workflow, MessageSquare, CheckCircle2, Lock, Cpu, Code2, Music } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/seo";
import { motion } from "framer-motion";
import zohoLogo from "@/assets/zoho-logo.svg";
import salesforceLogo from "@/assets/Salesforce Logo.jpg";
import ghlLogo from "@/assets/logos/ghl-logo.jpg";
import plivoLogo from "@/assets/logos/Plivo_logo.png";
import vapiLogo from "@/assets/logos/vapi-logo.svg";

const Integrations = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  // CRM Tools - Grouped with "We Build This" badge
  const crmTools = [
    { 
      name: "Zoho CRM", 
      icon: zohoLogo, 
      detail: "Custom Deluge scripts & webhook configuration for lead mapping and automation.",
      category: "CRM"
    },
    { 
      name: "Salesforce", 
      icon: salesforceLogo, 
      detail: "Apex triggers, custom objects, and API orchestration for enterprise workflows.",
      category: "CRM"
    },
    { 
      name: "GoHighLevel", 
      icon: ghlLogo, 
      detail: "Snapshot updates, custom field mapping, and trigger-based automations.",
      category: "CRM"
    }
  ];

  const telephonyTools = [
    { name: "Twilio", icon: "", detail: "We design and manage voice, SMS, and WhatsApp routing with custom call handling logic tailored to your workflows." },
    { name: "Plivo", icon: plivoLogo, detail: "Used where cost-efficient international routing and high call quality are required. Fully configured and monitored by our team." },
    { name: "Vapi", icon: vapiLogo, detail: "Latency-optimized voice agent infrastructure, engineered and tuned by our team for real-time conversations and fast response times." }
  ];

  const omnichanelTools = [
    { name: "WhatsApp Business API", icon: "", detail: "We design and manage WhatsApp workflows for brochure delivery, appointment links, and customer follow-ups fully compliant and customized to your business." },
    { name: "Twilio SMS", icon: "", detail: "Our team builds and maintains automated SMS confirmations, reminders, and two way conversations to keep leads engaged and reduce no-shows." },
    { name: "Slack / Teams", icon: "", detail: "We configure real-time notifications for your internal teams routing hot leads, escalations, and call summaries to Slack, Teams, or other internal systems." }
  ];

  const automationTools = [
    { name: "Zapier", icon: "", detail: "We design and maintain automated workflows that connect your AI agents to thousands of external tools triggered by real call outcomes and business events." },
    { name: "Make (Integromat)", icon: "", detail: "Our engineers build complex, multi-step workflows with conditional logic and data transformations tailored to your exact processes." },
    { name: "Webhooks", icon: "", detail: "When off-the-shelf tools aren’t enough, we design and implement direct API integrations into your internal systems fully owned, monitored, and maintained by our team." }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Audit",
      description: "We analyze your current tech stack and identify integration points.",
      icon: "",
      details: ["Review your CRM", "Map your data flow", "Identify pain points"]
    },
    {
      number: "02",
      title: "Architect",
      description: "We design custom API flows, webhooks, and automation logic.",
      icon: "",
      details: ["Custom API design", "Webhook configuration", "Security setup"]
    },
    {
      number: "03",
      title: "Deploy",
      description: "We deploy, test, and monitor your live AI voice agent integration.",
      icon: "",
      details: ["Live deployment", "QA testing", "Performance tuning"]
    }
  ];

  // Agency Hook Component
  const AgencyHook = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="inline-block px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-400/40 backdrop-blur-xl"
    >
      <span className="text-sm font-bold text-cyan-300 uppercase tracking-wider">✓ 100% Done-For-You Setup</span>
    </motion.div>
  );

  // Tool Card with "We Build This" Badge
  const ToolCard = ({ icon, name, detail, isFeatured = false }) => (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className={`group relative rounded-2xl p-6 backdrop-blur-xl overflow-hidden transition-all duration-300 ${
        isFeatured
          ? "bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent border border-cyan-400/50 hover:border-cyan-400/80"
          : "bg-gradient-to-br from-white/8 via-white/4 to-white/2 border border-white/15 hover:border-cyan-400/40 hover:from-white/12 hover:via-white/6"
      }`}
    >
      {/* Gradient shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          {typeof icon === "string" && icon.includes(".") ? (
            <img src={icon} alt={name} className="h-14 w-14 object-contain group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300 origin-left">{icon}</div>
          )}
        </div>
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{name}</h3>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{detail}</p>
      </div>
    </motion.div>
  );

  // Process Step Card
  const ProcessCard = ({ step }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      {/* Connecting line for desktop */}
      {step.number !== "03" && (
        <div className="hidden md:block absolute left-[50%] top-[120px] w-px h-20 bg-gradient-to-b from-cyan-400/50 to-transparent transform -translate-x-1/2" />
      )}
      
      <div className="bg-gradient-to-br from-white/8 via-white/4 to-white/2 border border-white/15 rounded-2xl p-8 hover:from-white/12 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-xl group">
        {/* Step Number */}
        <div className="flex mb-6 h-14 w-14 rounded-full bg-gradient-to-br from-cyan-500/40 to-blue-500/30 border border-cyan-400/60 items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">{step.number}</span>
        </div>

        {/* Icon */}
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{step.title}</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>

        {/* Details */}
        <ul className="space-y-2">
          {step.details.map((detail, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <>
      <SEO
        title="Custom AI Voice Agent Integrations | Done-For-You Setup for Zoho, Salesforce & More"
        description="We build custom AI voice agents that integrate natively with your existing tech stack. From Zoho to WhatsApp, our engineers handle the entire setup for you."
        keywords="AI voice agent integrations, custom API setup, Zoho CRM automation, Salesforce voice bot, WhatsApp integration, done-for-you AI setup"
        url="https://vocaldice.com/integrations"
      />
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* HERO SECTION: White-Glove Promise */}
        <section className="relative py-24 container mx-auto px-4 mt-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Agency Hook */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8 flex justify-center"
            >
              <AgencyHook />
            </motion.div>

            {/* H1: Bespoke Engineering */}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              We Build AI Agents<br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                That Fit Your Tech Stack.
              </span>
            </h1>
            
            {/* Subheadline: No Coding Required */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              We analyze your current systems, design the integration architecture, and deploy AI agents that work seamlessly with your CRM and workflows. No internal development. No API headaches. <span className="text-cyan-300 font-semibold"> Our team handles everything end-to-end.</span>
            </p>

            {/* CTA Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-3 bg-cyan-500/15 border border-cyan-400/40 rounded-full backdrop-blur-sm"
            >
              <Lock className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-semibold text-cyan-300">Enterprise-Grade Security, Managed by Our Team</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Main Content Sections */}
        <section className="py-32 px-4 bg-background">
          <div className="max-w-6xl mx-auto space-y-40">

            {/* SECTION 1: Integration Process - We Don't Just Connect */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-5xl mx-auto w-full"
            >
              <motion.div variants={fadeInUp} className="mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  We Don't Just<br />
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                    "Integrate." We Engineer Solutions.
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                  Our engineers design, build, and manage custom AI systems tailored to your workflows, data, and business rules so the AI behaves exactly the way your operation requires.
                </p>
              </motion.div>

              {/* Three Pillars */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { title: "Custom Data Mapping", desc: "We analyze your CRM and internal systems, then design custom data mappings that align with your exact fields, properties, and business logic. Nothing generic. Nothing forced into templates." },
                  { title: "Business Logic Built Around Your Process", desc: "Our team designs and implements multi-step workflows based on real-world scenarios not presets. For example: when a lead says X, we configure the system to update your CRM, notify the right internal team, and trigger follow-up actions automatically." },
                  { title: "Security & Access Managed by Our Team", desc: "We take full responsibility for credentials, webhooks, and access controls. API keys, security rules, and integrations are handled, monitored, and maintained by our engineers — not pushed onto your team." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ y: -5 }}
                    className="group bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-400/40 rounded-2xl p-8 hover:border-cyan-400/70 transition-all duration-300 backdrop-blur-xl"
                  >
                    <h3 className="text-xl font-bold text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors">{item.title}</h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent my-20" />

            {/* SECTION 2: 3-Step Process Timeline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-5xl mx-auto w-full"
            >
              <motion.div variants={fadeInUp} className="mb-16 text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  How We<br />
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                    Integrate Your Stack
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  From audit to deployment, we handle every step.
                </p>
              </motion.div>

              {/* Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {processSteps.map((step, idx) => (
                  <ProcessCard key={idx} step={step} />
                ))}
              </div>
            </motion.div>

            {/* Visual Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent my-20" />

            {/* SECTION 3: CRM & Data - Source of Truth */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-5xl mx-auto w-full"
            >
              <motion.div variants={fadeInUp} className="mb-14">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Your CRM Remains the<br />
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                    "Source of Truth."
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                  We configure your custom agent to push data exactly where you want it. Every call log, transcript, and decision is captured in your system of record. Any data as per your need collected on the call.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-4 mt-16">
                {crmTools.map((tool, idx) => (
                  <ToolCard key={idx} icon={tool.icon} name={tool.name} detail={tool.detail} />
                ))}
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative rounded-2xl p-6 backdrop-blur-xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-white/8 via-white/4 to-white/2 border border-white/15 hover:border-cyan-400/40 hover:from-white/12 hover:via-white/6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 text-center">
                    <p className="text-sm text-gray-300 leading-relaxed">Can't find what you're looking for? <a href="mailto:support@vocaldice.com" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">Contact our support team</a></p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Visual Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent my-20" />

            {/* SECTION 4: Telephony - Infrastructure We Manage */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-5xl mx-auto w-full"
            >
              <motion.div variants={fadeInUp} className="mb-14">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Voice Infrastructure Partners <br />
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                    We Manage
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                  (Selected and operated by our engineering team based on your use case and region)
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
                {telephonyTools.map((tool, idx) => (
                  <ToolCard key={idx} icon={tool.icon} name={tool.name} detail={tool.detail} />
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent my-20" />

            {/* SECTION 5: Omnichannel - After-Call Automation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-5xl mx-auto w-full"
            >
              <motion.div variants={fadeInUp} className="mb-14">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  We Manage Everything That Happens <br />
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                     After the Call
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                  Our team builds and operates post-call workflows that handle customer follow-ups and internal notifications automatically. From WhatsApp messages to SMS confirmations and team alerts we take full ownership.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
                {omnichanelTools.map((tool, idx) => (
                  <ToolCard key={idx} icon={tool.icon} name={tool.name} detail={tool.detail} />
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent my-20" />

            {/* SECTION 6: Automation & Webhooks */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-5xl mx-auto w-full"
            >
              <motion.div variants={fadeInUp} className="mb-14">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  We Build and<br />
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                     Operate Your Integrations
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                  Our team engineers the data pipelines that connect your AI agents to your business systems. From automation platforms to custom backend integrations, we handle everything end to end.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {automationTools.map((tool, idx) => (
                  <ToolCard key={idx} icon={tool.icon} name={tool.name} detail={tool.detail} />
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Divider */}
            <div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

            {/* Custom Request Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-5xl mx-auto w-full mt-12"
            >
              <div className="bg-gradient-to-br from-purple-500/20 via-cyan-500/10 to-transparent border border-purple-400/40 rounded-3xl p-12 backdrop-blur-xl hover:border-purple-400/60 transition-all duration-300 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <Code2 className="w-8 h-8 text-purple-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">We Integrate What You Already Use</h3>
                    <p className="text-gray-300 leading-relaxed">
                    If your system has an API, our team will design and manage a custom integration for it. No work on your side, no brittle connectors just a solution engineered and maintained by us.                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-300 leading-relaxed">Can't find what you're looking for? <a href="mailto:support@vocaldice.com" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">Contact our support team</a></p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section - Combined Power Statement & CTA */}
        <section className="py-32 px-4 bg-background">
          <div className="max-w-5xl mx-auto">
            {/* Power Statement */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-12">
                <span className="text-white block mb-3">Stop Worrying About APIs.</span>
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent block"><br /> We Handle the Architecture.</span>
              </h2>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/60 via-blue-500/40 to-cyan-500/60 rounded-3xl blur-xl opacity-40" />
              
              {/* Content */}
              <div className="relative bg-black backdrop-blur-2xl border border-cyan-400/30 rounded-3xl p-12 md:p-16 text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-10 leading-tight">
                  We Build It. We Run It. <br/>You See the Results.
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Our team designs and manages all custom integrations required for your AI systems. No setup, no API work, no maintenance that responsibility stays with us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="luxury"
                    size="lg"
                    className="rounded-full hover:scale-105 transition-transform shadow-lg shadow-cyan-500/40 font-semibold"
                    data-cal-link="vocaldice/strategy-session"
                    data-cal-namespace="default"
                    data-cal-origin="https://cal.id"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Get A Custom Integration Plan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <a href="/#audio-demos">
                    <Button
                      variant="luxuryOutline"
                      size="lg"
                      className="rounded-full hover:scale-105 transition-transform border-2 font-semibold"
                    >

                      Back to Home
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Integrations;
