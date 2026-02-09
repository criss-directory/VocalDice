"use client"

import React from 'react'
import { Sun, MapPin, Zap, Clock } from 'lucide-react'
import { AudioDemosSection } from '@/components/ui/audio-demos-glass'
import leadQualSolar from '@/assets/Solar/leadqualification_solar.mp3'
import repManageSolar from '@/assets/Solar/reputation_management_solar.mp3'

export function SolarAudioDemosSection() {
  const solarDemos = [
    {
      title: "Lead Qualification",
      description: "AI qualifies homeowners by assessing their solar interest and eligibility",
      audioSrc: leadQualSolar,
      icon: <Sun className="w-5 h-5 text-white" />,
      accentColor: "bg-amber-500"
    },
    {
      title: "Reputation Management",
      description: "AI gathers customer feedback and manages reputation reviews",
      audioSrc: repManageSolar,
      icon: <MapPin className="w-5 h-5 text-white" />,
      accentColor: "bg-amber-500"
    }
  ]

  return (
    <AudioDemosSection 
      demos={solarDemos}
      heading="Experience Our AI in Action"
      subheading="Listen to real examples of how our AI handles solar lead qualification"
      buttonColor="from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 hover:shadow-amber-500/50"
      buttonText="Hear Your Solar AI in Action"
    />
  )
}
