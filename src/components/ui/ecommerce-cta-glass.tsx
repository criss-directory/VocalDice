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

interface EcommerceCTAGlassProps {
  onDemoClick?: () => void;
}

const EcommerceCTAGlass: React.FC<EcommerceCTAGlassProps> = ({ onDemoClick }) => {
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
      {/* Animated Glass Card */}
      <div className="relative bg-gradient-to-br from-purple-900/20 via-black/40 to-pink-900/20 backdrop-blur-2xl border border-purple-500/30 rounded-2xl p-8 md:p-12 overflow-hidden shadow-2xl shadow-purple-500/20">
        
        {/* Animated border elements - Purple/Pink */}
        <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
          <div 
            ref={topRef}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"
          ></div>
        </div>
        
        <div className="absolute top-0 right-0 w-0.5 h-full overflow-hidden">
          <div 
            ref={rightRef}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-pink-500/60 to-transparent"
          ></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
          <div 
            ref={bottomRef}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"
          ></div>
        </div>
        
        <div className="absolute top-0 left-0 w-0.5 h-full overflow-hidden">
          <div 
            ref={leftRef}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-pink-500/60 to-transparent"
          ></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Trust Banner */}
          <motion.div variants={fadeInUp} className="inline-block bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg px-6 py-3 mb-8">
            <p className="text-xs md:text-sm text-gray-300 font-medium">
              <span className="text-purple-400 font-bold">Results that Scale:</span> 30% Lower RTO Rates • 24/7 Order Support • 18% Cart Recovery Rate
            </p>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Stop Losing Revenue to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Fake Orders & Abandoned Carts</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our team deploys and manages a COD Verification & Cart Recovery Agent that integrates with Shopify & WooCommerce. We verify orders instantly to slash RTOs and turn 'Add to Cart' into 'Purchase Complete' while you focus on growth.
          </motion.p>

          {/* Stats Grid */}
          <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="text-2xl font-bold text-purple-400">30%</div>
              <div className="text-xs text-gray-400">Lower RTO Rates</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="text-2xl font-bold text-pink-400">24/7</div>
              <div className="text-xs text-gray-400">Order Support</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="text-2xl font-bold text-purple-400">18%</div>
              <div className="text-xs text-gray-400">Cart Recovery</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            variants={fadeInUp}
            data-cal-link="vocaldice/strategy-session"
            data-cal-namespace="default"
            data-cal-origin="https://cal.id"
            data-cal-config='{"layout":"month_view"}'
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 text-lg"
          >
            <span className="flex items-center justify-center gap-2">
              Slash My RTO Rates Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </motion.button>

          <motion.p variants={fadeInUp} className="text-xs text-gray-500 mt-4">
            Works with Shopify & WooCommerce • Free integration • Results in 48 hours
          </motion.p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-purple-500 animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-pink-500 animate-pulse"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-pink-500/5 blur-3xl"></div>
      </div>
    </motion.div>
  );
};

export default EcommerceCTAGlass;
