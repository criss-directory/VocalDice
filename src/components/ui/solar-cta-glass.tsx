import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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

interface SolarCTAGlassProps {
  onDemoClick?: () => void;
}

const SolarCTAGlass: React.FC<SolarCTAGlassProps> = ({ onDemoClick }) => {
  const topRef = useRef(null);
  const rightRef = useRef(null);
  const bottomRef = useRef(null);
  const leftRef = useRef(null);
  
  useEffect(() => {
    const animateBorder = () => {
      const now = Date.now() / 1000;
      const speed = 0.5;
      
      const topX = Math.sin(now * speed) * 100;
      const rightY = Math.cos(now * speed) * 100;
      const bottomX = Math.sin(now * speed + Math.PI) * 100;
      const leftY = Math.cos(now * speed + Math.PI) * 100;
      
      if (topRef.current) topRef.current.style.transform = `translateX(${topX}%)`;
      if (rightRef.current) rightRef.current.style.transform = `translateY(${rightY}%)`;
      if (bottomRef.current) bottomRef.current.style.transform = `translateX(${bottomX}%)`;
      if (leftRef.current) leftRef.current.style.transform = `translateY(${leftY}%)`;
      
      requestAnimationFrame(animateBorder);
    };
    
    const animationId = requestAnimationFrame(animateBorder);
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full max-w-3xl mx-auto"
    >
      {/* Animated Glass Card - Amber/Orange */}
      <div className="relative bg-gradient-to-br from-amber-900/20 via-black/40 to-orange-900/20 backdrop-blur-2xl border border-amber-500/30 rounded-2xl p-8 md:p-12 overflow-hidden shadow-2xl shadow-amber-500/20">
        
        {/* Animated border elements - Amber/Orange */}
        <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
          <div 
            ref={topRef}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"
          ></div>
        </div>
        
        <div className="absolute top-0 right-0 w-0.5 h-full overflow-hidden">
          <div 
            ref={rightRef}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-orange-500/60 to-transparent"
          ></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
          <div 
            ref={bottomRef}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"
          ></div>
        </div>
        
        <div className="absolute top-0 left-0 w-0.5 h-full overflow-hidden">
          <div 
            ref={leftRef}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-orange-500/60 to-transparent"
          ></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Trust Banner */}
          <motion.div variants={fadeInUp} className="inline-block bg-black/50 backdrop-blur-sm border border-amber-500/30 rounded-lg px-6 py-3 mb-8">
            <p className="text-xs md:text-sm text-gray-300 font-medium">
              <span className="text-amber-400 font-bold">Solar Growth Engine:</span> Pre-Qualify Homeowners • Book Site Surveys • Sync with Zoho
            </p>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Turn Cold Inquiries <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Qualified Solar Site Surveys Instantly</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop dialing dead leads. Our team deploys and manages an AI Solar Appointment Setter that filters homeowners by roof type and bill amount, then books qualified meetings directly into your calendar.
          </motion.p>

          {/* Stats Grid */}
          <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-amber-500/20 hover:border-amber-500/40 transition-colors">
              <div className="text-2xl font-bold text-amber-400">5x</div>
              <div className="text-xs text-gray-400">More Qualified Demos</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-amber-500/20 hover:border-amber-500/40 transition-colors">
              <div className="text-2xl font-bold text-orange-400">60%</div>
              <div className="text-xs text-gray-400">Faster Speed-to-Lead</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-amber-500/20 hover:border-amber-500/40 transition-colors">
              <div className="text-2xl font-bold text-amber-400">35%</div>
              <div className="text-xs text-gray-400">Higher Close Rate</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            variants={fadeInUp}
            data-cal-link="vocaldice/strategy-session"
            data-cal-namespace="default"
            data-cal-origin="https://cal.id"
            data-cal-config='{"layout":"month_view"}'
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 text-lg"
          >
            <span className="flex items-center justify-center gap-2">
              Launch My Solar AI Agent
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </motion.button>

          <motion.p variants={fadeInUp} className="text-xs text-gray-500 mt-4">
            Lead Filtering • Zoho Sync • Proven ROI
          </motion.p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-amber-500 animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-orange-500 animate-pulse"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl"></div>
      </div>
    </motion.div>
  );
};

export default SolarCTAGlass;
