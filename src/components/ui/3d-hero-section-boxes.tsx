"use client";

import React from 'react';
import SonicWaveformHero from '@/components/ui/sonic-waveform';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Sonic Waveform Hero Section */}
      <SonicWaveformHero
        title="AI Receptionist That Answers Calls & Books Appointments 24/7"
        description="Stop losing leads to missed calls. VocalDice Builds Ai Agents that answers instantly, qualify callers, and book appointments directly into your calendar."
        badgeText="24/7 Inside Sales Agent"
        primaryCTA={{ text: "Book a 30 min call", href: "#get-started" }}
        secondaryCTA={{ text: "Watch Demo", href: "#live-ai-demos" }}
        bullets={[
          "Answer every call in under 10 second",
          "Qualify leads with your script",
          "Book appointments automatically"
        ]}
      />
    </div>
  );
};

export { HeroSection };
