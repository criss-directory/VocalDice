import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Users, Volume2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../Navigation";
import Footer from "../../Footer";

export default function ThankYouBooking() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const homeworkItems = [
    {
      icon: Volume2,
      title: "Be in a Quiet Place",
      description: "We will be testing live voice AI during our call",
    },
    {
      icon: Users,
      title: "Bring Key Decision-Makers",
      description: "Ensure any decision-makers are present for the discussion",
    },
    {
      icon: Calendar,
      title: "Accept the Calendar Invite",
      description: "Check your email and accept the invite to secure the time",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Strategy Session Confirmed - VocalDice</title>
        <meta name="description" content="Your strategy session is confirmed! Review the homework and prepare for your AI voice assistant consultation." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-black">
        {/* Animated Background Grid */}
        <div className="fixed inset-0 bg-gradient-to-b from-emerald-950/20 via-black to-black pointer-events-none" />
        <div className="fixed inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-24">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-6"
              >
                {/* Success Badge */}
                <motion.div variants={fadeInUp} className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl" />
                    <CheckCircle2 className="relative w-20 h-20 text-emerald-400" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-6xl font-bold text-white leading-tight"
                >
                  Your Strategy Session is <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Confirmed!</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                >
                  I've sent a calendar invite to your email. <span className="text-emerald-400 font-semibold">Please accept it</span> so we don't get double-booked.
                </motion.p>

                {/* Confirmation Message */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-8 p-6 rounded-xl bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/30"
                >
                  <p className="text-gray-300 text-center">
                    <span className="text-emerald-400 font-semibold">Calendar invite sent</span> to your email. You'll get a reminder 24 hours before our call.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Homework Section */}
          <section className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-12"
              >
                {/* Section Header */}
                <motion.div variants={fadeInUp} className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Before Our Call
                  </h2>
                  <p className="text-lg text-gray-400">
                    To make our 30 minutes valuable, please prepare:
                  </p>
                </motion.div>

                {/* Homework Cards Grid */}
                <motion.div
                  variants={staggerContainer}
                  className="grid md:grid-cols-3 gap-6"
                >
                  {homeworkItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="relative group"
                      >
                        {/* Card Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Card */}
                        <div className="relative p-8 rounded-xl bg-gradient-to-br from-emerald-900/10 to-teal-900/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                          {/* Icon */}
                          <div className="mb-6 inline-block p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                            <Icon className="w-6 h-6 text-emerald-400" strokeWidth={1.5} />
                          </div>

                          {/* Content */}
                          <h3 className="text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {item.description}
                          </p>

                          {/* Check Mark */}
                          <div className="mt-4 flex items-center space-x-2">
                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            </div>
                            <span className="text-xs text-emerald-400 font-semibold">Required</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* What to Expect Section */}
          <section className="py-20 px-4 border-t border-emerald-500/10">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white text-center">
                  What to Expect
                </motion.h2>

                <motion.div
                  variants={staggerContainer}
                  className="space-y-4"
                >
                  {[
                    "We'll discuss your specific customer support challenges",
                    "Live demo of AI voice assistant handling real scenarios",
                    "Custom ROI projection for your business",
                    "Implementation roadmap and timeline",
                    "Clear next steps if it's a good fit",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-emerald-900/5 border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" strokeWidth={1.5} />
                      </div>
                      <p className="text-gray-300 text-lg">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-white">
                  Questions Before the Call?
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-400 text-lg mt-4">
                  Check your email for the calendar invite and feel free to reach out if you have any questions.
                </motion.p>

                <motion.div variants={fadeInUp} className="mt-8">
                  <a
                    href="mailto:hello@vocaldice.com"
                    className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
                  >
                    Email Us
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Decorative Element */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        </div>
      </div>

      <Footer />
    </>
  );
}
