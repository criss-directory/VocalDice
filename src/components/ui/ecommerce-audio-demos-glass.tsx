"use client"

import React from 'react'
import { ShoppingCart, RotateCcw, Trash2, Package } from 'lucide-react'
import { AudioDemosSection } from '@/components/ui/audio-demos-glass'
import abandonCart from '@/assets/Ecommerce/abandon_cart_followup.mp3'
import orderStatus from '@/assets/Ecommerce/order_status_ecom.mp3'
import returnRefund from '@/assets/Ecommerce/Return&refund_ecom.mp3'
import postPurchase from '@/assets/Ecommerce/post_purchase_followup.mp3'

export function EcommerceAudioDemosSection() {
  const ecommerceDemos = [
    {
      title: "Abandoned Cart Follow-up",
      description: "AI re-engages customer with personalized product recommendations",
      audioSrc: abandonCart,
      icon: <ShoppingCart className="w-5 h-5 text-white" />,
      accentColor: "bg-purple-600"
    },
    {
      title: "Order Status Query",
      description: "Customer asks about their delivery status and tracking information",
      audioSrc: orderStatus,
      icon: <Package className="w-5 h-5 text-white" />,
      accentColor: "bg-purple-600"
    },
    {
      title: "Return & Refund Request",
      description: "Customer initiates a product return and asks about refund timeline",
      audioSrc: returnRefund,
      icon: <RotateCcw className="w-5 h-5 text-white" />,
      accentColor: "bg-purple-600"
    },
    {
      title: "Post-Purchase Follow-up",
      description: "AI checks satisfaction and gathers feedback after delivery",
      audioSrc: postPurchase,
      icon: <Trash2 className="w-5 h-5 text-white" />,
      accentColor: "bg-purple-600"
    }
  ]

  return (
    <AudioDemosSection 
      demos={ecommerceDemos}
      heading="Experience Our AI in Action"
      subheading="Listen to real examples of how our AI handles common customer interactions"
      buttonColor="from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-purple-500/50"
      buttonText="Hear Your E-Commerce AI in Action"
    />
  )
}
