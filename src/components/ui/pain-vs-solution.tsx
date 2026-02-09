"use client";

import React, { useState } from 'react';
import { Clock, DollarSign, Users, Zap, InfinityIcon, TrendingUp, PhoneOff, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ComparisonCardProps {
  title: string;
  painHeadline: string;
  painCopy: React.ReactNode;
  solutionHeadline: string;
  solutionCopy: React.ReactNode;
  painIcon: React.ReactNode;
  solutionIcon: React.ReactNode;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  title,
  painHeadline,
  painCopy,
  solutionHeadline,
  solutionCopy,
  painIcon,
  solutionIcon,
  isHovered,
  onHover,
}) => {
  return (
    <motion.div
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative"
    >
      {/* Frosted Glass Container */}
      <div className={`relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 ${
        isHovered ? 'bg-white/15 border-white/40 shadow-2xl' : ''
      }`}>
        
        {/* Animated gradient background on hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none"
          />
        )}

        {/* Main Content Grid - Stacks vertically on mobile, horizontally on md+ */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
          
          {/* LEFT SIDE - THE PAIN (Grey/Red) */}
          <motion.div
            animate={isHovered ? { x: -8 } : { x: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 md:p-8 pt-16 md:pt-16 relative z-10 bg-gradient-to-br from-red-950/30 to-gray-900/30 md:border-r border-white/10"
          >
            <div className="mb-4 text-red-400">
              {painIcon}
            </div>
            
            <h3 className="text-lg md:text-xl font-bold text-red-300 mb-2">
              {painHeadline}
            </h3>
            
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              {painCopy}
            </p>
          </motion.div>

          {/* RIGHT SIDE - THE SOLUTION (Brand Blue) */}
          <motion.div
            animate={isHovered ? { x: 8, scale: 1.02 } : { x: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6 md:p-8 pt-16 md:pt-16 relative z-10 bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4 text-blue-300">
                {solutionIcon}
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-blue-200 mb-2">
                {solutionHeadline}
              </h3>
              
              <p className="text-sm md:text-base text-blue-100 leading-relaxed">
                {solutionCopy}
              </p>
            </div>
            
            {/* Animated highlight on hover */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.1 }}
                className="mt-4 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              />
            )}
          </motion.div>
        </div>

        {/* Title Badge at Top - Centered */}
        <div className="absolute top-4 left-0 right-0 z-20 flex justify-center">
          <motion.div
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/30"
          >
            {title}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const PainVsSolutionSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Speed Problem",
      painHeadline: "The 5-Minute Death Zone",
      painCopy: <><strong className="text-gray-100">78%</strong> of customers buy from the first business that responds. If your team takes hours to call back, that lead is already gone.</>,
      solutionHeadline: "Instant Response",
      solutionCopy: <>VocalDice help you answer in <strong className="text-blue-50">under 2 seconds</strong>, qualifying leads while your competitors are still dialing.</>,
      painIcon: <Clock className="w-8 h-8" />,
      solutionIcon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Availability Problem",
      painHeadline: "The 5 PM Cutoff",
      painCopy: <>Your customers don't stop searching at <strong className="text-gray-100">5 PM</strong>. Sending them to voicemail proves you are 'closed for business.'</>,
      solutionHeadline: "24/7 AI Answering",
      solutionCopy: <>Capture after-hours revenue with an AI Answering Service that runs <strong className="text-blue-50">24/7</strong> while you sleep.</>,
      painIcon: <PhoneOff className="w-8 h-8" />,
      solutionIcon: <InfinityIcon className="w-8 h-8" />,
    },
    {
      title: "Cost Problem",
      painHeadline: "The Hiring Trap",
      painCopy: "Scaling a human team is expensive, slow, and risky. Managing more staff often means more overhead, not more profit.",
      solutionHeadline: "Digital Workforce",
      solutionCopy: <>Hire a Digital Workforce for a <strong className="text-blue-50">fraction of the cost</strong>. Scale from 10 to <strong className="text-blue-50">10,000 calls</strong> instantly without hiring a single person.</>,
      painIcon: <DollarSign className="w-8 h-8" />,
      solutionIcon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 md:py-32 container mx-auto px-4 relative">
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
        >
          Your Business Has a{' '}
          <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Leaking Bucket.
          </span>
          {' '}<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">We Plug the Holes.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 leading-relaxed"
        >
          Humans need sleep, breaks, and training. VocalDice builds AI that scales infinitely, answers instantly, and never misses a revenue opportunity.
        </motion.p>
      </div>

      {/* Comparison Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <ComparisonCard
            key={index}
            {...card}
            isHovered={hoveredCard === index}
            onHover={(hovered) => setHoveredCard(hovered ? index : null)}
          />
        ))}
      </div>

      {/* Bottom CTA or Additional Context */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-400 text-base md:text-lg mb-8">
          <span className="font-semibold text-white">Revenue stops leaking.</span> Growth starts accelerating.
        </p>

        {/* CTA Button - Stop Losing Revenue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            className="rounded-full px-8 py-3 text-lg font-bold bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-transform shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60"
            data-cal-link="vocaldice/strategy-session"
            data-cal-namespace="default"
            data-cal-origin="https://cal.id"
            data-cal-config='{"layout":"month_view"}'
          >
            Stop Losing Revenue
          </button>
        </motion.div>

        {/* Subtext below button */}
        <p className="text-gray-500 text-sm mt-4">
          Integrates with your CRM in under 14 days
        </p>
      </motion.div>
    </section>
  );
};

export default PainVsSolutionSection;
