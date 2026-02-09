"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// A utility function for class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Sonic Waveform Canvas Component
const SonicWaveformCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const lineCount = 60;
            const segmentCount = 80;
            const height = canvas.height / 2;
            
            for (let i = 0; i < lineCount; i++) {
                ctx.beginPath();
                const progress = i / lineCount;
                const colorIntensity = Math.sin(progress * Math.PI);
                
                // VocalDice brand colors: subtle blues, purples, and teals
                const hue = 200 + i * 1.5; // Blue to purple range
                const saturation = 50 + colorIntensity * 30;
                const lightness = 50 + colorIntensity * 10;
                ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${colorIntensity * 0.4})`;
                ctx.lineWidth = 1.5;

                for (let j = 0; j < segmentCount + 1; j++) {
                    const x = (j / segmentCount) * canvas.width;
                    
                    // Mouse influence
                    const distToMouse = Math.hypot(x - mouse.x, (height) - mouse.y);
                    const mouseEffect = Math.max(0, 1 - distToMouse / 400);

                    // Wave calculation
                    const noise = Math.sin(j * 0.1 + time + i * 0.2) * 20;
                    const spike = Math.cos(j * 0.2 + time + i * 0.1) * Math.sin(j * 0.05 + time) * 50;
                    const y = height + noise + spike * (1 + mouseEffect * 2);
                    
                    if (j === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            }

            time += 0.02;
            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        
        resizeCanvas();
        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full bg-black" />;
};

// Props for the main hero component
interface SonicWaveformHeroProps {
    title?: string;
    description?: string;
    badgeText?: string;
    primaryCTA?: { text: string; href?: string };
    secondaryCTA?: { text: string; href?: string };
    bullets?: string[];
}

// The main hero component
const SonicWaveformHero = ({
    title = "Your Leads Are Waiting. Your Agents Are Busy.",
    description = "Deals Are Dying. You're losing 20–40% of your deals every month because nobody replies fast enough. AI replies in 30 seconds, qualifies buyers & sellers, books appointments automatically.",
    badgeText = "24/7 Inside Sales Agent",
    primaryCTA = { text: "Schedule a Live Demo", href: "#get-started" },
    secondaryCTA = { text: "Listen to Demo", href: "#live-ai-demos" },
    bullets = []
}: SonicWaveformHeroProps) => {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2 + 0.5,
                duration: 0.8,
            },
        }),
    };

    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "VocalDice",
                    "description": "Done-for-you AI receptionist service. Our agency designs, builds, deploys, and manages 24/7 AI agents that answer calls, book appointments, and handle customer inquiries for your business.",
                    "serviceType": "AI Voice Agent Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "VocalDice",
                        "url": "https://vocaldice.com"
                    },
                    "areaServed": [
                        { "@type": "Country", "name": "United States" },
                        { "@type": "Country", "name": "India" },
                        { "@type": "Country", "name": "United Arab Emirates" }
                    ],
                    "serviceCapabilities": [
                        "24/7 Inbound Call Answering",
                        "Appointment Booking & Scheduling",
                        "Lead Qualification",
                        "Message Taking & Management",
                        "CRM Integration"
                    ],
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "ratingCount": "50000"
                    }
                })}
            </script>
            <div 
                className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
                role="main"
            >
            <SonicWaveformCanvas />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>

            {/* Overlay HTML Content */}
            <div className="relative z-20 text-center p-6 max-w-4xl mx-auto pt-24 md:pt-32">
                <motion.div
                    custom={0} variants={fadeUpVariants} initial="hidden" animate="visible"
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm"
                >
                    <BarChart2 className="h-4 w-4 text-blue-300" />
                    <span className="text-sm font-medium text-gray-200">
                        {badgeText}
                    </span>
                </motion.div>

                <motion.h1
                    custom={1} variants={fadeUpVariants} initial="hidden" animate="visible"
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                    aria-label={title}
                >
                    {title}
                </motion.h1>

                <motion.p
                    custom={2} variants={fadeUpVariants} initial="hidden" animate="visible"
                    className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 mb-10 leading-relaxed"
                    aria-label="Product description"
                >
                    {description}
                </motion.p>

                {bullets.length > 0 && (
                    <motion.div
                        custom={2.5} variants={fadeUpVariants} initial="hidden" animate="visible"
                        className="max-w-2xl mx-auto mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
                    >
                        {bullets.map((bullet, index) => (
                            <div key={index} className="flex items-start gap-3 text-left">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/30 border border-blue-400/50 flex items-center justify-center mt-1">
                                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                                </div>
                                <p className="text-sm sm:text-base text-gray-200">{bullet}</p>
                            </div>
                        ))}
                    </motion.div>
                )}

                <motion.div
                    custom={3} variants={fadeUpVariants} initial="hidden" animate="visible"
                    className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full max-w-2xl mx-auto"
                    role="group"
                    aria-label="Call to action buttons"
                >
                    <button 
                        data-cal-namespace="default"
                        data-cal-link="vocaldice/strategy-session"
                        data-cal-origin="https://cal.id"
                        data-cal-config='{"layout":"month_view"}'
                        className="w-full sm:w-auto px-10 py-4 text-lg bg-gradient-to-r from-primary via-primary to-accent text-white font-bold rounded-full shadow-xl shadow-primary/50 hover:shadow-2xl hover:shadow-primary/70 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap" 
                        title={primaryCTA.text}
                        aria-label={primaryCTA.text}
                    >
                        {primaryCTA.text}
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button 
                        onClick={() => document.getElementById('audio-demos')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full sm:w-auto px-10 py-4 text-lg border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap" 
                        title={secondaryCTA.text}
                        aria-label={secondaryCTA.text}
                    >
                        {secondaryCTA.text}
                    </button>
                </motion.div>
            </div>
            </div>
        </>
    );
};

export default SonicWaveformHero;
export { SonicWaveformCanvas, SonicWaveformHero };
