'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { Phone, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackCTAClick, trackDemoRequest } from '@/lib/analytics';
import AnimatedShaderBackground from './animated-shader-background';

gsap.registerPlugin(SplitText);

// ===================== HERO =====================
interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
  microDetails?: Array<string>;
}

export default function Hero({
  title,
  description,
  badgeText = "24/7 Inside Sales Agent",
  badgeLabel = "AI POWERED",
  ctaButtons = [
    { text: "Calculate Your Lost Deals", href: "#get-started", primary: true },
    { text: "Listen to Demo", href: "#live-ai-demos" }
  ],
  microDetails = ["Real-time qualification", "Dynamic conversations", "Zero missed calls"]
}: HeroProps) {
  const sectionRef = useRef<HTMLSection | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const microRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    document.fonts.ready.then(() => {
      const split = new SplitText(headerRef.current!, {
        type: 'lines',
        wordsClass: 'lines',
      });

      gsap.set(split.lines, {
        filter: 'blur(16px)',
        yPercent: 30,
        autoAlpha: 0,
        scale: 1.06,
        transformOrigin: '50% 100%',
      });

      if (badgeRef.current) {
        gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
      }
      if (paraRef.current) {
        gsap.set(paraRef.current, { autoAlpha: 0, y: 8 });
      }
      if (ctaRef.current) {
        gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
      }
      if (microRef.current) {
        gsap.set(microRef.current, { autoAlpha: 0, y: 6 });
      }

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      if (badgeRef.current) {
        tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.0);
      }

      tl.to(
        split.lines,
        {
          filter: 'blur(0px)',
          yPercent: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.15,
        },
        0.1,
      );

      if (paraRef.current) {
        tl.to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.55');
      }
      if (ctaRef.current) {
        tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.35');
      }
      if (microRef.current) {
        tl.to(microRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.25');
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Animated Shader Background */}
      <AnimatedShaderBackground />

      {/* Content Container - Left aligned like reference image */}
      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">{badgeLabel}</span>
              <span className="text-cyan-500">•</span>
              <span className="text-sm font-light text-cyan-300">{badgeText}</span>
            </div>

            {/* Heading - Large and bold like reference */}
            <h1 ref={headerRef} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6 font-sans">
              {title}
            </h1>

            {/* Description */}
            <p ref={paraRef} className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl font-light">
              {description}
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-12">
              {ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.primary ? "luxury" : "luxuryOutline"}
                  size="lg"
                  className="rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/30 text-base px-8 py-3"
                  data-cal-link="sai-krishna/discovery-call"
                  data-cal-namespace="default"
                  onClick={() => {
                    if (button.primary) {
                      trackCTAClick(button.text, "Hero Section");
                      trackDemoRequest("Hero CTA");
                    }
                  }}
                  asChild={!button.primary}
                >
                  {button.primary ? (
                    <>
                      {button.text.toUpperCase()}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  ) : (
                    <a href={button.href} className="flex items-center gap-2">
                      {button.text}
                      <Play className="w-4 h-4" />
                    </a>
                  )}
                </Button>
              ))}
            </div>

            {/* Micro Details */}
            <ul ref={microRef} className="flex flex-wrap gap-8 text-sm text-gray-500">
              {microDetails.map((detail, index) => (
                <li key={index} className="flex items-center gap-2 font-light">
                  <span className="w-2 h-2 rounded-full bg-cyan-500/60" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent z-20" />
    </section>
  );
}
