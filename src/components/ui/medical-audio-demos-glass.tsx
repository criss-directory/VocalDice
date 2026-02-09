"use client"

import React from 'react'
import { Phone, Calendar, Pill, Clock } from 'lucide-react'
import { AudioDemosSection } from '@/components/ui/audio-demos-glass'
import medicalGeneralEnquiry from '@/assets/Healthcare/medical_general_enquiry_demo.mp3'
import appointmentBooking from '@/assets/Healthcare/appointment_booking_medical.mp3'
import medicalFollowUp from '@/assets/Healthcare/medical_follow_up_demo.mp3'

export function MedicalAudioDemosSection() {
  const medicalDemos = [
    {
      title: "General Inquiry",
      description: "Patient calls with general inquiry about symptoms and services",
      audioSrc: medicalGeneralEnquiry,
      icon: <Calendar className="w-5 h-5 text-white" />,
      accentColor: "bg-emerald-500"
    },
    {
      title: "Appointment Booking",
      description: "Patient schedules appointment with medical facility",
      audioSrc: appointmentBooking,
      icon: <Pill className="w-5 h-5 text-white" />,
      accentColor: "bg-emerald-500"
    },
    {
      title: "Follow-up Call",
      description: "AI follows up with patient regarding previous visit",
      audioSrc: medicalFollowUp,
      icon: <Phone className="w-5 h-5 text-white" />,
      accentColor: "bg-emerald-500"
    }
  ]

  return (
    <AudioDemosSection 
      demos={medicalDemos}
      heading="Experience Our AI Receptionist in Action"
      subheading="Listen to real examples of how our AI handles patient calls and healthcare inquiries"
      buttonColor="from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:shadow-emerald-500/50"
      buttonText="Listen to Patient Care in Action"
    />
  )
}
