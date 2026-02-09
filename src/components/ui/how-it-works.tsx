"use client";

import { cn } from "@/lib/utils";
import { Search, Sparkles, Layers, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type React from "react";

interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {}

interface StepCardProps {
  icon: React.ReactNode;
  number: number;
  headline: string;
  description: string;
  seo: string;
}

const StepCard: React.FC<StepCardProps> = ({
  icon,
  number,
  headline,
  description,
  seo,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={cn(
      "relative rounded-2xl border bg-card p-6 text-card-foreground transition-all duration-300 ease-in-out",
      "hover:scale-105 hover:shadow-lg hover:border-primary/50 hover:bg-muted"
    )}
  >
    {/* Mobile Badge - visible on mobile, hidden on desktop */}
    <div className="md:hidden absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-accent/40 text-xs font-bold text-primary">
      {number}
    </div>
    
    {/* Icon */}
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary">
      {icon}
    </div>
    {/* Headline and Description */}
    <h3 className="mb-2 text-xl font-semibold">{headline}</h3>
    <p className="mb-6 text-muted-foreground">{description}</p>
    {/* SEO Text */}
    <p className="text-xs text-primary/90 italic border-t border-border/30 pt-4 font-medium">
      {seo}
    </p>
  </motion.div>
);

export const HowItWorks: React.FC<HowItWorksProps> = ({
  className,
  ...props
}) => {
  const stepsData = [
    {
      icon: <Search className="h-6 w-6" />,
      headline: "We Map Your Sales DNA.",
      description:
        "We analyze your best sales calls to build a script that understands local nuance whether it's 'Dubai Real Estate lingo' or 'Indian Consumer behavior.'",
      seo: "Custom sales scripts, local dialect analysis.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      headline: "We Clone Your Top Performer.",
      description:
        "Our engineers train the voice model on Hinglish, Arabic, or English accents. We stress-test it against real objections until it sounds indistinguishable from a human.",
      seo: "AI voice cloning, objection handling training, accent customization.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      headline: "We Plug Into Your Stack.",
      description:
        "We connect the agent to your Zoho, Salesforce, or WhatsApp. We run 'Shadow Tests' to ensure it handles interruptions and bad connections perfectly.",
      seo: "CRM integration, WhatsApp API setup, AI quality assurance.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      headline: "Your 24/7 Agent Starts Selling.",
      description:
        "Flip the switch. Your AI starts qualifying leads instantly. Watch appointments fill your calendar and follow-ups happen automatically while you sleep.",
      seo: "Automated lead qualification, 24/7 inside sales agent.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className={cn("w-full bg-background py-16 sm:py-24", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            From Onboarding to Automation in <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              4 Simple Steps.
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No complex coding. No long training periods. We handle the heavy lifting to get your custom AI agent live and selling in days.
          </p>
        </motion.div>

        {/* Step Indicators with Connecting Line - hidden on mobile */}
        <div className="hidden md:block relative mx-auto mb-8 w-full max-w-6xl">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] top-1/2 h-0.5 w-[75%] -translate-y-1/2 bg-border"
          ></div>
          {/* Use grid to align numbers with the card grid below */}
          <div className="relative grid grid-cols-4">
            {stepsData.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-muted font-semibold text-foreground ring-4 ring-background"
              >
                {index + 1}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              number={index + 1}
              icon={step.icon}
              headline={step.headline}
              description={step.description}
              seo={step.seo}
            />
          ))}
        </div>

        {/* Know More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Link to="/how-it-works">
            <Button 
              variant="luxury" 
              size="lg" 
              className="rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/30"
            >
              Know More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
