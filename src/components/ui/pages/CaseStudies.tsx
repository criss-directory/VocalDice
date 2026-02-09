import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const CaseStudies = () => {
  const caseStudiesByNiche = {
    'Real Estate': [
      {
        id: 1,
        quote: "We've seen a 40% increase in qualified leads since implementing VocalDice. The AI handles our initial screening perfectly.",
        name: "Sarah",
        role: "Real Estate Agent",
        location: "Mumbai, India",
        initials: "SJ",
        metric: "40% increase in qualified leads",
        color: "from-cyan-500 to-blue-500",
        slug: "sarah-real-estate-leads"
      },
      {
        id: 2,
        quote: "Never miss another lead. Our AI books viewings 24/7 while we sleep. Conversion has absolutely skyrocketed.",
        name: "Ahmed",
        role: "Agency Owner",
        location: "Dubai, UAE",
        initials: "AH",
        metric: "24/7 automated booking",
        color: "from-blue-500 to-cyan-500",
        slug: "ahmed-real-estate-booking"
      },
      {
        id: 3,
        quote: "ROI was immediate. We're closing 3x more deals per month with the same team size. This is a game changer.",
        name: "Fatima",
        role: "Brokerage Manager",
        location: "New York, USA",
        initials: "FM",
        metric: "3x more deals closed",
        color: "from-cyan-400 to-green-400",
        slug: "fatima-real-estate-deals"
      }
    ],
    'Solar Sales': [
      {
        id: 4,
        quote: "The AI prospecting system transformed our lead generation. We're now reaching 10x more homeowners at a fraction of the cost.",
        name: "Marcus",
        role: "Solar Sales Director",
        location: "California, USA",
        initials: "MR",
        metric: "10x more leads",
        color: "from-yellow-500 to-orange-500",
        slug: "marcus-solar-lead-generation"
      },
      {
        id: 5,
        quote: "Installation scheduling used to take hours. Now the AI books entire weeks of appointments automatically.",
        name: "Jennifer",
        role: "Operations Manager",
        location: "Austin, USA",
        initials: "JM",
        metric: "Weeks booked automatically",
        color: "from-orange-500 to-red-500",
        slug: "jennifer-solar-scheduling"
      },
      {
        id: 15,
        quote: "Our sales team increased revenue per representative by 45% in just 3 months. The AI handles the initial qualifying calls while they focus on closing.",
        name: "David",
        role: "Solar Company Owner",
        location: "Bangalore, India",
        initials: "DW",
        metric: "45% revenue increase per rep",
        color: "from-orange-400 to-yellow-500",
        slug: "david-solar-revenue"
      }
    ],
    'Healthcare': [
      {
        id: 6,
        quote: "Patient intake calls that used to bottleneck our system are now handled instantly. Appointment no-shows dropped by 35%.",
        name: "Dr. Patel",
        role: "Medical Practice Owner",
        location: "New Jersey, USA",
        initials: "DP",
        metric: "35% fewer no-shows",
        color: "from-green-500 to-cyan-500",
        slug: "dr-patel-healthcare-intake"
      },
      {
        id: 7,
        quote: "Our front desk staff can now focus on patient care instead of answering repetitive intake questions. Game-changer for workflow.",
        name: "Lisa",
        role: "Clinic Manager",
        location: "London, UK",
        initials: "LM",
        metric: "Staff efficiency increased",
        color: "from-cyan-500 to-blue-500",
        slug: "lisa-healthcare-efficiency"
      },
      {
        id: 16,
        quote: "We automated appointment reminders and follow-ups. Patient satisfaction scores improved by 28%, and our team can now handle 3x more patients daily.",
        name: "Dr. Gupta",
        role: "Hospital Administrator",
        location: "Delhi, India",
        initials: "DG",
        metric: "28% satisfaction increase",
        color: "from-green-400 to-teal-500",
        slug: "dr-gupta-healthcare-automation"
      }
    ],
    'E-Commerce Support': [
      {
        id: 8,
        quote: "Customer support tickets dropped by 50% after implementing VocalDice. The AI handles returns and inquiries flawlessly.",
        name: "Raj",
        role: "E-Commerce Operations Lead",
        location: "Pune, India",
        initials: "RJ",
        metric: "50% fewer support tickets",
        color: "from-purple-500 to-pink-500",
        slug: "raj-ecommerce-support"
      },
      {
        id: 9,
        quote: "24/7 customer support without the 24/7 overhead. Our customers are happier and our costs are down.",
        name: "Sophie",
        role: "Customer Success Manager",
        location: "Singapore",
        initials: "SM",
        metric: "24/7 support coverage",
        color: "from-pink-500 to-red-500",
        slug: "sophie-ecommerce-24-7"
      },
      {
        id: 17,
        quote: "Returns and refund requests that used to frustrate customers are now handled instantly. Net Promoter Score increased by 32 points.",
        name: "Priya",
        role: "E-Commerce Director",
        location: "Bangalore, India",
        initials: "PK",
        metric: "NPS increased 32 points",
        color: "from-purple-400 to-indigo-500",
        slug: "priya-ecommerce-nps"      },
      {
        id: 18,
        quote: "Abandoned cart recovery has become our strongest revenue driver. The AI sends personalized follow-ups and we've recovered $200K in potential lost sales.",
        name: "Marcus",
        role: "Founder & CEO",
        initials: "MB",
        metric: "$200K recovered revenue",
        color: "from-indigo-500 to-purple-600",
        slug: "marcus-ecommerce-recovery"      }
    ]
  };

  const TestimonialCard = ({ testimonial, index }) => (
    <Link to={`/case-studies/${testimonial.slug}`} className="group">
      <motion.div
        variants={fadeInUp}
        className="h-full group relative rounded-2xl p-8 backdrop-blur-xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-white/8 via-white/4 to-white/2 border border-white/15 hover:border-cyan-400/40 hover:from-white/12 hover:via-white/6 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
      >
        {/* Gradient shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          {/* Star Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-base text-gray-300 mb-6 leading-relaxed italic">
            "{testimonial.quote}"
          </p>

          {/* Metric Highlight */}
          <div className="mb-6 inline-block px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30">
            <p className="text-sm font-semibold text-cyan-300">{testimonial.metric}</p>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10 mb-4">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}>
              <span className="font-bold text-white text-sm">{testimonial.initials}</span>
            </div>
            <div>
              <h4 className="font-bold text-white">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
              {testimonial.location && (
                <p className="text-xs text-cyan-400/60">{testimonial.location}</p>
              )}
            </div>
          </div>

          {/* CTA Text */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-cyan-400/70 group-hover:text-cyan-400 transition-colors duration-300">
              Tap to read full case study →
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );

  return (
    <>
      <Helmet>
        <title>Case Studies & Success Stories | VocalDice</title>
        <meta name="description" content="See how businesses across real estate, solar sales, healthcare, and e-commerce are using VocalDice AI voice agents to transform their operations." />
        <meta name="keywords" content="case studies, success stories, AI voice agent, business transformation, customer testimonials" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
          <motion.div
            className="max-w-5xl mx-auto relative z-10 text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6 w-fit mx-auto">
              <span className="text-xs font-medium text-cyan-300">Success Stories</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400 leading-tight">
              How Top Teams Are Using VocalDice to Transform Their Operations
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed mx-auto">
              Real results from real businesses across multiple industries. See how AI voice agents are increasing conversions, reducing costs, and scaling operations without scaling headcount.
            </motion.p>
          </motion.div>
        </section>

        {/* Case Studies by Niche */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {Object.entries(caseStudiesByNiche).map(([ niche, testimonials ], nicheIndex) => (
              <motion.div
                key={nicheIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {/* Niche Heading */}
                <motion.div variants={fadeInUp} className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                      {niche}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-400">
                    Success stories from {niche.toLowerCase()} professionals
                  </p>
                </motion.div>

                {/* Testimonial Cards Grid */}
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {testimonials.map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                      index={testimonial.id}
                    />
                  ))}
                </motion.div>

                {/* Divider */}
                {nicheIndex < Object.entries(caseStudiesByNiche).length - 1 && (
                  <div className="mt-20 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Power Stats Section */}
        <section className="py-20 px-4 border-t border-cyan-500/10">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
              Proven Impact Across Industries
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { stat: "40%+", label: "Average Lead Quality Increase" },
                { stat: "3x", label: "More Conversions Closed" },
                { stat: "24/7", label: "Automated Follow-Up" },
                { stat: "50%", label: "Support Cost Reduction" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all"
                >
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2">
                    {item.stat}
                  </p>
                  <p className="text-gray-400">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 border-t border-cyan-500/10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Write Your Success Story?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's explore how VocalDice can transform your business with AI voice agents tailored to your unique needs.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment-booking"
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CaseStudies;
