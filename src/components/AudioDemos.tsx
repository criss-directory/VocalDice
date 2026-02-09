"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import outreachRealEstate from '@/assets/Real estate/outreach_realestate_Demo.mp3';
import leadQualSolar from '@/assets/Solar/leadqualification_solar.mp3';
import appointmentMedical from '@/assets/Healthcare/appointment_booking_medical.mp3';
import abandonEcommerce from '@/assets/Ecommerce/abandon_cart_followup.mp3';

const demos = [
  {
    id: "real-estate",
    label: "Real Estate",
    title: "Property Outreach Campaign",
    subtitle: "AI reaches out to prospects with personalized property recommendations.",
    badge: "🏠 Real Estate Agent",
    audioSrc: outreachRealEstate,
    points: [
      "Personalized Outreach: Identifies prospect interests and property preferences.",
      "Property Details: Provides relevant information about available listings.",
      "Availability Check: Confirms prospect availability for viewings.",
      "Booking Confirmation: Schedules property tours efficiently."
    ]
  },
  {
    id: "solar",
    label: "Solar",
    title: "Solar Lead Qualification",
    subtitle: "AI qualifies homeowners by assessing their solar interest and eligibility.",
    badge: "☀️ Solar Specialist",
    audioSrc: leadQualSolar,
    points: [
      "Eligibility Assessment: Determines homeowner suitability for solar installation.",
      "Energy Analysis: Gathers information about current energy consumption.",
      "Savings Potential: Explains ROI and potential monthly savings.",
      "Next Steps: Schedules site survey for qualified leads."
    ]
  },
  {
    id: "medical",
    label: "Medical",
    title: "Appointment Booking",
    subtitle: "Seamlessly scheduling medical appointments with patient details capture.",
    badge: "🏥 Medical Coordinator",
    audioSrc: appointmentMedical,
    points: [
      "Patient Information: Gathers relevant medical history and symptoms.",
      "Time Slot Selection: Offers available appointment times.",
      "Doctor Preference: Confirms preferred physician if available.",
      "Confirmation: Provides appointment details and reminders."
    ]
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    title: "Abandoned Cart Recovery",
    subtitle: "AI re-engages customers with personalized product recommendations.",
    badge: "🛒 Sales Agent",
    audioSrc: abandonEcommerce,
    points: [
      "Cart Recognition: Identifies abandoned shopping items.",
      "Incentive Offer: Provides special discounts or offers to encourage purchase.",
      "Product Questions: Addresses customer concerns about products.",
      "Checkout Assistance: Guides customer through final purchase steps."
    ]
  }
];

export const AudioDemos: React.FC = () => {
  const [activeTab, setActiveTab] = useState("real-estate");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const activeDemo = demos.find(d => d.id === activeTab) || demos[0];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
    }
  };

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [activeTab]);

  return (
    <section id="audio-demos" className="py-20 md:py-32 container mx-auto px-4 relative">
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
        >
          Hear It in{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Action.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 leading-relaxed"
        >
          Real AI conversations across industries. Click a tab to hear how we help qualify leads, handle objections, and convert in seconds with our Agents.
        </motion.p>
      </div>

      {/* Tabbed Interface */}
      <div className="max-w-4xl mx-auto">
        {/* Desktop Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex gap-3 mb-8 bg-black/40 backdrop-blur-sm p-2 rounded-xl border border-white/10"
        >
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveTab(demo.id)}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === demo.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {demo.label}
            </button>
          ))}
        </motion.div>

        {/* Mobile Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:hidden mb-8 relative"
        >
          <div className="relative">
            {/* Dropdown Trigger Button */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-5 py-3.5 pr-15 bg-gradient-to-b from-slate-800 to-slate-900 border border-cyan-500/30 rounded-xl text-white font-semibold focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all cursor-pointer hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 text-left flex items-center justify-between"
            >
              <span>{activeDemo.label}</span>
              <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Options */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden shadow-2xl shadow-black/50 z-50"
                >
                  {demos.map((demo) => (
                    <button
                      key={demo.id}
                      onClick={() => {
                        setActiveTab(demo.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-5 py-3 text-left font-medium transition-colors ${
                        activeTab === demo.id
                          ? 'bg-cyan-500/30 text-cyan-100 border-l-2 border-cyan-500 pl-4'
                          : 'text-gray-200 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {demo.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Demo Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 bg-gradient-to-br from-slate-900/50 to-black/50 border-white/20 backdrop-blur-sm">
            {/* Badge */}
            <motion.div 
              className="mb-4 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                {activeDemo.badge}
              </span>
            </motion.div>

            {/* Title and Subtitle */}
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-2 text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              {activeDemo.title}
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {activeDemo.subtitle}
            </motion.p>

            {/* Audio Player and Waveform */}
            <motion.div 
              className="mb-8 p-6 bg-black/40 rounded-lg border border-white/10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              {/* Waveform Visualization */}
              <div className="flex items-center justify-center gap-1 mb-6 h-16">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-full"
                    animate={isPlaying ? { height: [8, 32, 12, 28, 16] } : { height: 8 }}
                    transition={{
                      duration: 0.5,
                      repeat: isPlaying ? Infinity : 0,
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>

              {/* Play Button */}
              <div className="flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </motion.button>
              </div>

              {/* Hidden audio element */}
              <audio
                ref={audioRef}
                src={activeDemo.audioSrc}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                crossOrigin="anonymous"
              />
            </motion.div>

            {/* What to Listen For Collapsible */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="group flex items-center gap-2 w-full text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors">
                  <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                  What to Listen For
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6 space-y-3 pt-2">
                {activeDemo.points.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <p className="text-sm text-gray-300">{point}</p>
                  </motion.div>
                ))}
              </CollapsibleContent>
              </Collapsible>
            </motion.div>
          </Card>
        </motion.div>

        {/* Bottom CTA Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.p 
            className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            These are real AI conversations trained on industry-specific patterns. Every demo happens in seconds no scripts, no robots, just instant qualification and booking.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              className="rounded-full px-8 py-3 text-lg font-bold bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-transform shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 flex items-center gap-2"
              data-cal-link="vocaldice/strategy-session"
              data-cal-namespace="default"
              data-cal-origin="https://cal.id"
              data-cal-config='{"layout":"month_view"}'
            >
              Build My AI Sales Agent
              <ArrowRight className="ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
