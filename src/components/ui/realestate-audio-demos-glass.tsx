"use client"

import React from 'react'
import { Phone, FileText, Home, Calendar } from 'lucide-react'
import { AudioDemosSection } from '@/components/ui/audio-demos-glass'
import coldPropertyEnquiry from '@/assets/Real estate/cold_property_enquiry.mp3'
import realEstateLeadQual from '@/assets/Real estate/Real estate Lead qualification.mp3'
import outreachDemo from '@/assets/Real estate/outreach_realestate_Demo.mp3'
import followupOutreach from '@/assets/Real estate/followup_outreach_RE.mp3'

export function RealEstateAudioDemosSection() {
  const realEstateDemos = [
    {
      title: "Cold Property Inquiry",
      description: "Potential buyer inquires about property details and availability",
      audioSrc: coldPropertyEnquiry,
      icon: <Home className="w-5 h-5 text-white" />,
      accentColor: "bg-cyan-500"
    },
    {
      title: "Lead Qualification",
      description: "AI qualifies leads by understanding their budget and requirements",
      audioSrc: realEstateLeadQual,
      icon: <Calendar className="w-5 h-5 text-white" />,
      accentColor: "bg-cyan-500"
    },
    {
      title: "Outreach Campaign",
      description: "AI reaches out to prospects with property recommendations",
      audioSrc: outreachDemo,
      icon: <FileText className="w-5 h-5 text-white" />,
      accentColor: "bg-cyan-500"
    },
    {
      title: "Follow-up Call",
      description: "AI follows up with interested leads to schedule viewings",
      audioSrc: followupOutreach,
      icon: <Phone className="w-5 h-5 text-white" />,
      accentColor: "bg-cyan-500"
    }
  ]

  return (
    <AudioDemosSection 
      demos={realEstateDemos}
      heading="Hear How Our AI Handles Real Calls"
      subheading="Listen to real examples of how our AI handles real estate inquiries and lead qualification"
      buttonColor="from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:shadow-cyan-500/50"
      buttonText="Hear Your Real Estate ISA in Action"
    />
  )
}
