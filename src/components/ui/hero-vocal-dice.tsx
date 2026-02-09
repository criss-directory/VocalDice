"use client";

import { useState } from "react";
import { ArrowRight, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { trackCTAClick, trackDemoRequest } from "@/lib/analytics";

const HeroVocalDice = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background pt-20">
      {/* Gradient background with VocalDice colors */}
      <div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0">
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-primary/40 to-accent/40"></div>
        <div className="h-[10rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-primary/30 to-accent/30"></div>
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-accent/40 to-primary/40"></div>
      </div>
      <div className="absolute inset-0 z-0 opacity-10"></div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Badge */}
        <div className="mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-white">
            24/7 AI Inside Sales Agent for Dubai Real Estate
          </span>
          <ArrowRight className="h-4 w-4 text-white" />
        </div>

        {/* Hero section */}
        <div className="container mx-auto mt-12 px-4 text-center">
          <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Your Leads Are{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Waiting.
            </span>
            <br />
            Your Agents Are{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Busy.
            </span>
            <br />
            Deals Are{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Dying.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            You're losing 20–40% of your deals every month because nobody replies
            fast enough.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
            AI replies in 30 seconds, qualifies buyers & sellers, books
            appointments automatically. Never miss a deal while you're on site or
            driving between viewings.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              variant="luxury"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:scale-105 transition-transform shadow-lg shadow-primary/30"
              data-cal-link="sai-krishna/discovery-call"
              data-cal-namespace="default"
              data-cal-origin="https://cal.id"
              data-cal-config='{"layout":"month_view"}'
              onClick={() => {
                trackCTAClick("Calculate Your Lost Deals", "Hero Section");
                trackDemoRequest("Hero CTA");
              }}
            >
              <Phone className="mr-2 w-4 h-4" />
              Calculate Your Lost Deals
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              variant="luxuryOutline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:scale-105 transition-transform border-2 border-white/40"
              onClick={() =>
                document.getElementById("live-ai-demos")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <ArrowRight className="mr-2 w-4 h-4" />
              Listen to Demo
            </Button>
          </div>

          <p className="mx-auto mt-4 text-xs sm:text-sm text-muted-foreground">
            ⚡ Limited to 3 Dubai teams per month
          </p>

          {/* Stats Grid */}
          <div className="relative mx-auto my-20 w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <StatCard
                value="50K+"
                label="Calls Answered Instantly"
                description="24/7 with zero missed leads"
              />
              <StatCard
                value="1.2K+"
                label="Deals Closed"
                description="Through automated qualification & booking"
              />
              <StatCard
                value="$8.5M+"
                label="Revenue Generated"
                description="By capturing leads competitors miss"
              />
              <StatCard
                value="30-60%"
                label="More Viewings Booked"
                description="By responding instantly 24/7"
              />
            </div>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm opacity-0 animate-fade-in-up [animation-delay:450ms]">
            <span className="text-white/80">
              ✓ Trusted by Dubai agents handling high enquiry volumes
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

function StatCard({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 hover:bg-white/[0.08] transition-all"
    >
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <p className="font-semibold text-white mb-1">{label}</p>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  );
}

export { HeroVocalDice };
