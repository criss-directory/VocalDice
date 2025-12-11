import React, { useEffect, useRef } from 'react';
import { Phone, Users, Target, Calendar, MessageSquare, Settings, Building } from "lucide-react";
import { cn } from "@/lib/utils";

// Reusable BentoItem component
interface BentoItemProps {
  className?: string;
  children: React.ReactNode;
}

const BentoItem = ({ className, children }: BentoItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
    };

    item.addEventListener('mousemove', handleMouseMove);

    return () => {
      item.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={itemRef} className={cn("bento-item", className)}>
      {children}
    </div>
  );
};

// Main Component
export const CyberneticBentoGrid = () => {
  return (
    <div className="w-full max-w-6xl mx-auto z-10">
      <div className="bento-grid">
        <BentoItem className="col-span-2 row-span-2 flex flex-col justify-between">
          <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 mb-4">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Answers All Dubai Property Enquiries 24/7</h2>
            <p className="mt-2 text-muted-foreground">Never miss international buyers calling outside working hours.</p>
          </div>
        </BentoItem>
        
        <BentoItem>
          <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 mb-4">
            <Users className="h-4 w-4" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Qualifies Serious Buyers vs Time-Wasters</h2>
          <p className="mt-2 text-muted-foreground text-sm">Filters out tourists, browsers, and fake buyers. Passes only ready-to-purchase clients to your team.</p>
        </BentoItem>
        
        <BentoItem>
          <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 mb-4">
            <Target className="h-4 w-4" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Handles Full Dubai Lead Qualification</h2>
          <p className="mt-2 text-muted-foreground text-sm">Captures budget, preferred communities, timeline, property type, investment intent, financing, and motivation.</p>
        </BentoItem>
        
        <BentoItem className="row-span-2">
          <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 mb-4">
            <Calendar className="h-4 w-4" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Books Site Visits Automatically</h2>
          <p className="mt-2 text-muted-foreground text-sm">Turns hot enquiries into confirmed appointments before they cool off.</p>
        </BentoItem>
        
        <BentoItem className="col-span-2">
          <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 mb-4">
            <MessageSquare className="h-4 w-4" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Sends Call Summary to WhatsApp + CRM</h2>
          <p className="mt-2 text-muted-foreground text-sm">Gives your team instant clarity on who to follow up with no missed details, no confusion.</p>
        </BentoItem>
        
        <BentoItem>
          <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 mb-4">
            <Settings className="h-4 w-4" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Trained on Your Listings and Agency Style</h2>
          <p className="mt-2 text-muted-foreground text-sm">Speaks like your top-performing agent, with full knowledge of your projects and Dubai property terminology.</p>
        </BentoItem>

        <BentoItem className="col-span-4">
          <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 mb-4">
            <Building className="h-4 w-4" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Built for Real Dubai Conversations</h2>
          <p className="mt-2 text-muted-foreground text-sm">Handles local buyer objections, urgent timelines, and community-specific questions with accuracy.</p>
        </BentoItem>
      </div>
    </div>
  );
};
