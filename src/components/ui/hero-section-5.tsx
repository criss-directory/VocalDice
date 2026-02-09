'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { ChevronRight, Phone, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { trackCTAClick, trackDemoRequest } from '@/lib/analytics'

export function HeroSection5() {
    return (
        <main className="overflow-x-hidden bg-background relative">
            {/* Enhanced Background with Gradients */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Dark gradient base */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80"></div>
                
                {/* Large gradient orbs */}
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                <div className="absolute -top-32 -left-32 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                
                {/* Animated grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>
            </div>

            <section>
                <div className="py-24 md:pb-32 lg:pb-36 lg:pt-40 relative z-10">
                    <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="inline-flex items-center gap-2 mb-6 rounded-full bg-primary/10 border border-primary/30 px-4 py-2 w-fit"
                            >
                                <span className="text-xs font-semibold text-primary">⚡ AI INSIDE SALES AGENT</span>
                            </motion.div>

                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mt-4 max-w-4xl text-balance text-5xl md:text-6xl lg:mt-4 xl:text-7xl font-bold leading-tight text-white"
                            >
                                Your Leads Are{" "}
                                <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                    Waiting.
                                </span>
                                <br />
                                Your Agents Are{" "}
                                <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                    Busy.
                                </span>
                                <br />
                                Deals Are{" "}
                                <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                    Dying.
                                </span>
                            </motion.h1>

                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-6 max-w-2xl text-base md:text-lg text-gray-300"
                            >
                                You're losing 20–40% of your deals every month because nobody replies fast enough.
                            </motion.p>

                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mt-3 max-w-2xl text-sm md:text-base text-gray-400"
                            >
                                AI replies in 30 seconds, qualifies buyers & sellers, books appointments automatically.
                            </motion.p>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
                            >
                                <Button
                                    size="lg"
                                    variant="luxury"
                                    className="h-12 rounded-full px-6 text-base font-semibold shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all"
                                    data-cal-link="sai-krishna/discovery-call"
                                    data-cal-namespace="default"
                                    onClick={() => {
                                        trackCTAClick("Calculate Your Lost Deals", "Hero Section 5");
                                        trackDemoRequest("Hero CTA");
                                    }}
                                >
                                    <Phone className="mr-2 w-5 h-5" />
                                    Calculate Your Lost Deals
                                    <ChevronRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="luxuryOutline"
                                    className="h-12 rounded-full px-6 text-base font-semibold border-2 hover:bg-primary/5 transition-all"
                                    onClick={() => document.getElementById('live-ai-demos')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Listen to Demo
                                </Button>
                            </motion.div>

                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="mt-5 text-xs sm:text-sm text-gray-500 font-medium"
                            >
                                ⚡ Limited to 3 Dubai teams per month
                            </motion.p>
                        </div>
                    </div>
                    
                    {/* Enhanced Hero Visual Section */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-20 mx-auto max-w-5xl px-6 lg:px-12 relative z-10"
                    >
                        <div className="relative aspect-video rounded-2xl lg:rounded-3xl overflow-hidden border border-blue-500/30">
                            {/* Background Layer 1: Dark blue base */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950"></div>
                            
                            {/* Background Layer 2: Center radial glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25)_0%,rgba(15,23,42,0.95)_60%)]"></div>
                            
                            {/* Background Layer 3: Grid pattern */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                            
                            {/* Floating accent orbs */}
                            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full filter blur-3xl opacity-40 mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
                            <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-primary/15 rounded-full filter blur-3xl opacity-30 mix-blend-screen" style={{ animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                            
                            {/* Content centered */}
                            <div className="relative h-full flex items-center justify-center z-10">
                                <div className="text-center">
                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="mb-6"
                                    >
                                        <TrendingUp className="w-24 h-24 text-blue-400 mx-auto opacity-90" strokeWidth={1.5} />
                                    </motion.div>
                                    <p className="text-white text-lg font-semibold">AI voice agent in action</p>
                                    <p className="text-gray-400 text-sm mt-2">Real-time lead qualification & booking</p>
                                </div>
                            </div>
                            
                            {/* Top highlight gradient line */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Logo Carousel - Trusted By Section */}
            <section className="bg-gradient-to-b from-background via-background to-background/50 border-t border-primary/10 relative z-10">
                <div className="group relative m-auto max-w-7xl px-6 lg:px-12 py-12">
                    <div className="flex flex-col items-center md:flex-row gap-8">
                        <div className="md:max-w-44 md:border-r md:pr-6 md:border-primary/20">
                            <p className="text-sm font-semibold text-gray-300 md:text-right">Trusted by Dubai's top agents</p>
                        </div>
                        <div className="relative w-full py-6 md:w-[calc(100%-11rem)]">
                            <InfiniteSlider
                                durationOnHover={20}
                                duration={40}
                                gap={112}
                            >
                                <div className="flex items-center whitespace-nowrap">
                                    <span className="text-xs md:text-sm font-semibold text-gray-400">Marina Realtors</span>
                                </div>
                                <div className="flex items-center whitespace-nowrap">
                                    <span className="text-xs md:text-sm font-semibold text-gray-400">JVC Properties</span>
                                </div>
                                <div className="flex items-center whitespace-nowrap">
                                    <span className="text-xs md:text-sm font-semibold text-gray-400">Palm Jumeirah</span>
                                </div>
                                <div className="flex items-center whitespace-nowrap">
                                    <span className="text-xs md:text-sm font-semibold text-gray-400">Downtown Dubai</span>
                                </div>
                                <div className="flex items-center whitespace-nowrap">
                                    <span className="text-xs md:text-sm font-semibold text-gray-400">Luxury Brokerages</span>
                                </div>
                                <div className="flex items-center whitespace-nowrap">
                                    <span className="text-xs md:text-sm font-semibold text-gray-400">Investment Teams</span>
                                </div>
                            </InfiniteSlider>

                            <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-12 md:w-20 pointer-events-none"></div>
                            <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-12 md:w-20 pointer-events-none"></div>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-20"
                                direction="left"
                                blurIntensity={0.8}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-20"
                                direction="right"
                                blurIntensity={0.8}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
