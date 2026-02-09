import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Case study data for each testimonial
  const caseStudyData: Record<string, any> = {
    'sarah-real-estate-leads': {
      name: 'Sarah',
      role: 'Real Estate Agent',
      company: 'Elite Realty Group',
      industry: 'Real Estate',
      initials: 'SJ',
      color: 'from-cyan-500 to-blue-500',
      background: 'Sarah manages a growing real estate portfolio with 15+ agents. Her agency was losing leads to competitors who responded faster to inquiries.',
      challenges: [
        'Missing 30-40% of leads due to delayed responses',
        'Manual screening was time-consuming and inefficient',
        'After-hours inquiries were going unanswered',
        'Inconsistent follow-up process across team'
      ],
      solution: 'Implemented VocalDice AI voice agents to answer calls 24/7, automatically qualify leads, and schedule viewings. The system integrates with their CRM to track all interactions.',
      results: [
        '40% increase in qualified leads captured',
        '60% of appointments booked automatically',
        '3-hour average response time reduced to <2 minutes',
        'Agent productivity increased by 35%'
      ],
      metric: '40% increase in qualified leads',
      mainQuote: "We've seen a 40% increase in qualified leads since implementing VocalDice. The AI handles our initial screening perfectly.",
      implementationTime: '2 weeks',
      roi: '280% in first quarter',
      testimonialText: "Before VocalDice, we were drowning in leads we couldn't handle. Now our AI agent is our best sales tool. It never gets tired, never forgets to follow up, and it converts like a pro. We're looking to deploy it across our entire network."
    },
    'ahmed-real-estate-booking': {
      name: 'Ahmed',
      role: 'Agency Owner',
      company: 'Desert Homes Real Estate',
      industry: 'Real Estate',
      initials: 'AH',
      color: 'from-blue-500 to-cyan-500',
      background: 'Ahmed runs a boutique real estate agency in a competitive market. Managing inquiries and scheduling were consuming 20+ hours per week manually.',
      challenges: [
        'Scheduling viewings was a manual, back-and-forth process',
        'Lost deals because properties were shown to less motivated buyers',
        'Team was spending 60% of time on administrative tasks',
        'No consistent qualification process for hot vs. cold leads'
      ],
      solution: 'Deployed VocalDice to handle all initial inquiries, pre-qualify buyers, and automatically book viewings. The system learns client preferences and suggests optimal viewing times.',
      results: [
        '24/7 automated booking without human intervention',
        '75% of viewings booked automatically',
        'Administrative time reduced by 65%',
        'Conversion rate improved from 8% to 13%'
      ],
      metric: '24/7 automated booking',
      mainQuote: "Never miss another lead. Our AI books viewings 24/7 while we sleep. Conversion has absolutely skyrocketed.",
      implementationTime: '2.5 weeks',
      roi: '320% in first quarter',
      testimonialText: "The transformation has been incredible. My team actually has time to focus on closing deals instead of scheduling them. The AI handles everything from initial contact through booking, and it's so natural that clients don't even realize they're talking to an AI. This has freed up my time to grow the business instead of managing it."
    },
    'fatima-real-estate-deals': {
      name: 'Fatima',
      role: 'Brokerage Manager',
      company: 'Metro Properties',
      industry: 'Real Estate',
      initials: 'FM',
      color: 'from-cyan-400 to-green-400',
      background: 'Fatima oversees a brokerage with 40+ agents across multiple locations. Each location was operating independently with inconsistent lead handling.',
      challenges: [
        'Inconsistent lead quality across locations',
        'Peak hours were overwhelming the small office staff',
        'Weekend and evening inquiries were completely missed',
        'Hard to scale without adding more administrative staff'
      ],
      solution: 'Implemented VocalDice across all locations with unified CRM integration. The system maintains brand consistency while handling unlimited concurrent calls.',
      results: [
        '3x more deals closed per month',
        'Revenue per agent increased by 45%',
        'Scalable without adding staff',
        'Customer satisfaction score improved from 7.8 to 9.2'
      ],
      metric: '3x more deals closed',
      mainQuote: "ROI was immediate. We're closing 3x more deals per month with the same team size. This is a game changer.",
      implementationTime: '3 weeks',
      roi: '400% in first quarter',
      testimonialText: "We were at the point where we thought we'd need to hire 5 more people to handle growth. Instead, we implemented VocalDice and suddenly our existing team is handling 3x the volume. Not only is it cost-effective, but it's also consistent - every client gets the same professional experience regardless of which location they call."
    },
    'marcus-solar-lead-generation': {
      name: 'Marcus',
      role: 'Solar Sales Manager',
      company: 'Sunny States Solar',
      industry: 'Solar Sales',
      initials: 'MS',
      color: 'from-amber-400 to-orange-500',
      background: 'Marcus manages a solar sales team in a highly competitive market. Summer is peak season, and their small team couldn\'t handle the volume of inquiry calls.',
      challenges: [
        'Missing 50%+ of inbound calls during peak season',
        'Manual lead qualification was slow and inconsistent',
        'Salespeople spent 30% of time on initial discovery instead of closing',
        'High acquisition cost due to lead waste'
      ],
      solution: 'Implemented VocalDice to handle inbound calls, perform detailed energy audit questionnaires, and qualify leads before handoff to sales. The system integrates with their sales pipeline.',
      results: [
        '68% increase in lead generation',
        'Lead-to-consultation conversion improved from 22% to 38%',
        'Cost per qualified lead reduced by 45%',
        'Sales team productivity doubled'
      ],
      metric: '68% increase in lead generation',
      mainQuote: "VocalDice increased our lead generation by 68% in the first quarter. Sales team is thrilled because they only get pre-qualified, hot leads now.",
      implementationTime: '2.5 weeks',
      roi: '350% in first quarter',
      testimonialText: "Our peak season used to be chaos - phones ringing, people getting frustrated, leads falling through cracks. Now our AI agent fields hundreds of calls, asks all the right questions, and hands us only the hot prospects. Our sales team's close rate went through the roof because they're not wasting time on tire-kickers anymore."
    },
    'jennifer-solar-scheduling': {
      name: 'Jennifer',
      role: 'Solar Company Owner',
      company: 'Bright Future Energy',
      industry: 'Solar Sales',
      initials: 'JB',
      color: 'from-orange-400 to-yellow-500',
      background: 'Jennifer runs a mid-size solar company growing rapidly. Scheduling home consultations was becoming a bottleneck that was preventing growth.',
      challenges: [
        'Scheduling consultations was consuming 15+ hours weekly',
        'Many no-shows due to unclear communication and reminders',
        'Difficult to coordinate between office and installation teams',
        'Customers didn\'t understand the consultation process'
      ],
      solution: 'Used VocalDice to handle consultation scheduling, send automated reminders, and gather pre-consultation information. System syncs with their field team calendar.',
      results: [
        '85% consultation show-up rate (up from 68%)',
        '90% of consultations scheduled automatically',
        'Administrative time cut by 70%',
        'Revenue per consultation increased due to better preparation'
      ],
      metric: '85% show-up rate for consultations',
      mainQuote: "Our AI agent schedules consultations perfectly. We reduced no-shows by implementing automated reminders and client education.",
      implementationTime: '2 weeks',
      roi: '290% in first quarter',
      testimonialText: "We were losing money on no-shows and our office manager was literally doing nothing but scheduling all day. VocalDice fixed both problems. Customers get called by our AI, they understand the process, they get reminders, and they show up. Plus our office manager now handles actual business development instead of being chained to the phone."
    },
    'david-solar-revenue': {
      name: 'David',
      role: 'Solar Company Owner',
      company: 'GreenWave Solar Solutions',
      industry: 'Solar Sales',
      initials: 'DS',
      color: 'from-yellow-400 to-amber-500',
      background: 'David owns a solar installation company with a 12-person sales team. Growth was plateauing due to operational bottlenecks in lead management.',
      challenges: [
        'Sales team spending too much time on administrative tasks',
        'Leads weren\'t being followed up consistently',
        'Revenue per representative was declining despite company growth',
        'High turnover due to reps being frustrated with non-sales work'
      ],
      solution: 'Implemented VocalDice across all customer touchpoints - inbound calls, follow-ups, and appointment confirmations. Freed up sales team to focus purely on closing.',
      results: [
        'Revenue per representative increased 45%',
        'Sales cycle shortened from 28 days to 18 days',
        'Lead follow-up rate improved from 65% to 98%',
        'Sales team satisfaction increased significantly'
      ],
      metric: '45% increase in revenue per representative',
      mainQuote: "Our sales team increased revenue per representative by 45% in just 3 months. They're focused on selling, not admin work.",
      implementationTime: '3 weeks',
      roi: '380% in first quarter',
      testimonialText: "The best part? My sales team actually wants to come to work now. They're not drowning in paperwork and admin tasks. VocalDice handles all that, and they get to do what they're good at - selling. Revenue per person jumped immediately, and my team retention has improved dramatically."
    },
    'dr-patel-healthcare-intake': {
      name: 'Dr. Patel',
      role: 'Practice Manager',
      company: 'Metro Medical Center',
      industry: 'Healthcare',
      initials: 'DP',
      color: 'from-green-500 to-teal-500',
      background: 'Dr. Patel manages a busy medical practice with 8 doctors and 60+ staff members. Patient intake was manually handled and creating bottlenecks.',
      challenges: [
        'New patient intake took 30 minutes of staff time per patient',
        'Duplicate data entry was common',
        'Medical history wasn\'t consistently gathered before visits',
        'Front desk staff was completely overwhelmed during peak hours'
      ],
      solution: 'Implemented VocalDice to automate patient intake. AI gathers comprehensive medical history, insurance info, and pre-visit information in a single call.',
      results: [
        '70% faster patient intake process',
        'Complete medical history captured 99% of the time',
        'Front desk staff workload reduced by 60%',
        'Patient satisfaction improved with smoother check-in'
      ],
      metric: '70% faster patient intake',
      mainQuote: "Intake used to be a nightmare of manual data entry and follow-up calls. VocalDice automated it completely and improved data quality.",
      implementationTime: '2 weeks',
      roi: '250% in first quarter',
      testimonialText: "We were looking to hire another front desk person, but VocalDice made that unnecessary. Our intake is faster, more thorough, and the data is cleaner than when people were manually entering it. Doctors get better information before they see patients, and patients have a better experience."
    },
    'lisa-healthcare-efficiency': {
      name: 'Lisa',
      role: 'Clinic Director',
      company: 'Community Health Partners',
      industry: 'Healthcare',
      initials: 'LM',
      color: 'from-teal-500 to-cyan-500',
      background: 'Lisa runs a community health clinic with limited budget and staff. Appointment no-shows were costing them thousands monthly.',
      challenges: [
        '35% no-show rate was devastating to clinic operations',
        'Manual reminder calls weren\'t happening consistently',
        'Staff were too busy to handle pre-appointment education',
        'Limited budget for hiring additional staff'
      ],
      solution: 'Deployed VocalDice for automated appointment reminders, pre-visit questionnaires, and patient education. System handles all touchpoints.',
      results: [
        'No-show rate reduced from 35% to 12%',
        'Automated appointment prep information gathered 95% of the time',
        'Staff freed up for clinical work instead of administrative tasks',
        'Annual savings of $85,000+ from eliminated no-shows'
      ],
      metric: '65% reduction in no-shows',
      mainQuote: "Our no-show rate dropped dramatically. VocalDice handles reminders and patient education automatically.",
      implementationTime: '2.5 weeks',
      roi: '420% in first quarter',
      testimonialText: "For a clinic our size, the no-show rate was killing us. We couldn't afford to waste appointment slots. VocalDice is our most important business system now - it reminds patients, educates them before they come in, and our scheduling is actually efficient for the first time."
    },
    'dr-gupta-healthcare-automation': {
      name: 'Dr. Gupta',
      role: 'Hospital Administrator',
      company: 'Central Hospital Network',
      industry: 'Healthcare',
      initials: 'DG',
      color: 'from-cyan-500 to-blue-400',
      background: 'Dr. Gupta oversees a 200-bed hospital network. Patient satisfaction scores were declining due to communication gaps and appointment scheduling issues.',
      challenges: [
        'Appointment reminders were unreliable',
        'Post-discharge follow-up calls were inconsistent',
        'Patient satisfaction scores declining due to communication gaps',
        'Nursing staff overwhelmed with administrative phone calls'
      ],
      solution: 'Implemented VocalDice across the entire hospital system for appointment reminders, post-discharge follow-ups, prescription confirmations, and patient support.',
      results: [
        'Patient satisfaction scores improved 28 points',
        'Appointment adherence increased from 78% to 92%',
        'Nursing staff freed up for patient care by 25%',
        'Hospital readmission rate reduced by 15%'
      ],
      metric: '28-point increase in patient satisfaction',
      mainQuote: "Patient satisfaction scores jumped 28 points. Automated follow-ups and reminders made a massive difference in outcomes.",
      implementationTime: '4 weeks',
      roi: '300% in first quarter',
      testimonialText: "At hospital scale, small improvements compound into huge impact. VocalDice handles thousands of patient interactions monthly - reminders, follow-ups, education. Our nurses aren't on the phone all day anymore, patients feel cared for with consistent communication, and our satisfaction scores prove it. This is exactly the kind of automation healthcare needs."
    },
    'raj-ecommerce-support': {
      name: 'Raj',
      role: 'E-Commerce Store Owner',
      company: 'TechHub Online',
      industry: 'E-Commerce',
      initials: 'RP',
      color: 'from-pink-500 to-rose-500',
      background: 'Raj runs an e-commerce store with $2M+ annual revenue. Customer support inquiries were overwhelming, especially after hours.',
      challenges: [
        'Support inquiries during non-business hours went unanswered',
        'Customers frustrated by slow response times',
        'Manual support was costing 25% of order value',
        'High cart abandonment due to pre-purchase support needs'
      ],
      solution: 'Implemented VocalDice AI support agents to handle customer inquiries 24/7. System answers product questions, resolves common issues, and transfers complex issues to human support.',
      results: [
        '92% of support inquiries resolved without human intervention',
        'Average support cost per ticket reduced by 60%',
        'Customer satisfaction increased by 35 NPS points',
        'Cart abandonment due to support reduced by 40%'
      ],
      metric: '92% automated resolution rate',
      mainQuote: "Our AI support team handles 92% of inquiries without human help. Support costs plummeted while satisfaction skyrocketed.",
      implementationTime: '2 weeks',
      roi: '380% in first quarter',
      testimonialText: "E-commerce is all about convenience. Customers want support when they want it, not during business hours. VocalDice gave us that without tripling our support staff. Our customers love that they can get answers instantly at 2 AM, and our profit margin actually improved because support is now actually affordable."
    },
    'sophie-ecommerce-24-7': {
      name: 'Sophie',
      role: 'E-Commerce Operations Manager',
      company: 'StyleBox Boutique',
      industry: 'E-Commerce',
      initials: 'SL',
      color: 'from-rose-500 to-pink-400',
      background: 'Sophie manages a boutique fashion e-commerce store. Operating costs were high due to the need for 24/7 customer support team.',
      challenges: [
        'Hiring 24/7 support team was extremely expensive',
        'Quality inconsistent across day and night shifts',
        'Time zone customers weren\'t getting timely support',
        'Customer support team was constantly burnt out'
      ],
      solution: 'Replaced night shift human support with VocalDice AI agents. System handles sizing questions, return inquiries, order status, and order placement assistance.',
      results: [
        '24/7 support with fraction of the staff cost',
        'Response time reduced from 4 hours to <2 minutes',
        'Support team satisfaction increased (no more night shifts)',
        'Repeat purchase rate increased 18% due to better support'
      ],
      metric: '24/7 instant support without staff',
      mainQuote: "We have 24/7 customer support without maintaining expensive overnight staff. Our support team is happier and our customers are happier.",
      implementationTime: '3 weeks',
      roi: '320% in first quarter',
      testimonialText: "The economics didn't make sense - we were either understaffed at night or paying premium rates for overnight staff. VocalDice solved it elegantly. Our customers get instant support any time of day, our daytime support team isn't exhausted from nights, and operationally we're actually more profitable."
    },
    'priya-ecommerce-nps': {
      name: 'Priya',
      role: 'E-Commerce Director',
      company: 'HomeDecor Plus',
      industry: 'E-Commerce',
      initials: 'PK',
      color: 'from-pink-400 to-fuchsia-500',
      background: 'Priya leads operations for a home decor e-commerce company with significant customer service demands. The return and refund process was creating customer frustration.',
      challenges: [
        'Returns process was complicated and frustrating for customers',
        'Refund inquiries required multiple touch points',
        'Poor communication during refund processing',
        'NPS declining due to post-purchase experience'
      ],
      solution: 'Implemented VocalDice to handle entire returns and refund process - from inquiry through resolution. System provides instant updates and manages expectations.',
      results: [
        'NPS increased by 32 points',
        'Return processing time reduced from 10 days to 3 days',
        'Return-related support tickets reduced by 80%',
        'Repeat purchase rate increased despite returns being necessary'
      ],
      metric: '32-point NPS increase',
      mainQuote: "Returns and refund requests used to frustrate customers. Now they're handled instantly with VocalDice. NPS increased by 32 points.",
      implementationTime: '2.5 weeks',
      roi: '350% in first quarter',
      testimonialText: "The returns process is always a sensitive moment in e-commerce. Poor handling kills loyalty. VocalDice turns our returns process into a positive touchpoint - customers get instant resolution, complete transparency, and fast refunds. It's counterintuitive, but automating our returns process actually increased our NPS and customer lifetime value."
    },
    'marcus-ecommerce-recovery': {
      name: 'Marcus',
      role: 'Founder & CEO',
      company: 'Digital Shop Co.',
      industry: 'E-Commerce',
      initials: 'MB',
      color: 'from-indigo-500 to-purple-600',
      background: 'Marcus founded an e-commerce company doing $5M+ in annual revenue. Cart abandonment was his biggest challenge - thousands of visitors leaving without completing purchases.',
      challenges: [
        'Cart abandonment rate was 70% - industry average is 69%, they wanted to beat it',
        'Manual follow-up emails getting ignored by most users',
        'No proactive recovery system for high-value abandoned carts',
        'Lost $500K+ annually in unrecovered revenue opportunities'
      ],
      solution: 'Implemented VocalDice AI voice agents to make personalized outbound calls to customers who abandoned high-value carts. The system identifies purchase intent and closes hesitant buyers with natural conversation.',
      results: [
        'Recovered $200K+ in lost sales in first quarter',
        'Cart recovery rate improved from 12% to 31%',
        'Average order value increased by 28% for recovered carts',
        'ROI on VocalDice paid for itself in first 2 weeks'
      ],
      metric: '$200K recovered revenue',
      mainQuote: "Abandoned cart recovery has become our strongest revenue driver. The AI sends personalized follow-ups and we've recovered $200K in potential lost sales.",
      implementationTime: '2 weeks',
      roi: '850% in first quarter',
      testimonialText: "We were leaving money on the table - literally hundreds of thousands of dollars from people who wanted to buy but got stuck or distracted. VocalDice's voice recovery system is genius because hearing a friendly voice overcomes hesitation way better than an email does. One customer told me the AI agent saved them from buying a knockoff product - they were confused and one call clarified everything. That's the kind of trust-building that leads to lifetime customers, not just recovered sales."
    }
  };

  const caseStudy = slug ? caseStudyData[slug] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/case-studies" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
            <p className="text-gray-400">The case study you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/case-studies" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${caseStudy.color} flex items-center justify-center`}>
                <span className="text-2xl font-bold text-white">{caseStudy.initials}</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">{caseStudy.name}</h1>
                <p className="text-cyan-400">{caseStudy.role}</p>
                <p className="text-gray-400">{caseStudy.company} • {caseStudy.industry}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl font-light text-white italic mb-12 border-l-4 border-cyan-400 pl-6">
              "{caseStudy.mainQuote}"
            </blockquote>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="pb-20">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {/* Background */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Background</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{caseStudy.background}</p>
          </motion.section>

          {/* Challenges */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">The Challenge</h2>
            <div className="space-y-3">
              {caseStudy.challenges.map((challenge: string, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                    <span className="text-red-400 text-sm">✗</span>
                  </div>
                  <p className="text-gray-300 text-lg">{challenge}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">The VocalDice Solution</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{caseStudy.solution}</p>
          </motion.section>

          {/* Results */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Results Achieved</h2>
            <div className="space-y-3">
              {caseStudy.results.map((result: string, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <p className="text-gray-300 text-lg">{result}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Key Metrics */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                <p className="text-gray-400 text-sm mb-2">Primary Metric</p>
                <p className="text-3xl font-bold text-cyan-400">{caseStudy.metric}</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-6">
                <p className="text-gray-400 text-sm mb-2">Implementation Time</p>
                <p className="text-3xl font-bold text-green-400">{caseStudy.implementationTime}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-xl p-6">
                <p className="text-gray-400 text-sm mb-2">ROI (Q1)</p>
                <p className="text-3xl font-bold text-orange-400">{caseStudy.roi}</p>
              </div>
            </div>
          </motion.section>

          {/* Full Testimonial */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 via-white/2 to-white/0 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Full Testimonial</h2>
            <blockquote className="text-lg text-gray-300 italic leading-relaxed border-l-4 border-cyan-400 pl-6">
              "{caseStudy.testimonialText}"
            </blockquote>
            <p className="mt-6 text-cyan-400 font-semibold">— {caseStudy.name}, {caseStudy.role}</p>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-gray-300 mb-8">Transform your business with AI voice agents like {caseStudy.name} did.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/appointment-booking"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Book a Demo
              </Link>
              <Link
                to="/appointment-booking"
                className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
