"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  reverse?: boolean;
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  reverse = false,
  className,
}: InfiniteSliderProps) {

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full",
        className
      )}
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <div
        className="flex items-center justify-center animate-infinite-scroll"
        style={{
          gap: `${gap}px`,
          animation: `infinite-scroll ${duration}s linear infinite ${reverse ? "reverse" : ""}`,
          minWidth: 'max-content',
        }}
      >
        {/* First set of logos */}
        {children}
        {/* Duplicate for seamless loop */}
        {children}
        {/* Triple for better seamless effect */}
        {children}
      </div>

      <style>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333%));
          }
        }
      `}</style>
    </div>
  );
}