"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import useMeasure from "react-use-measure";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
  speedOnHover?: number;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const size = direction === "horizontal" ? width : height;
    
    if (size === 0) return;
    
    // Use linear animation for smooth continuous loop
    const contentSize = size;
    const to = -contentSize / 2;

    let animationId: number;
    let startTime: number | null = null;
    let currentProgress = 0;

    const animate = () => {
      const now = performance.now();
      if (startTime === null) startTime = now;
      
      const elapsed = now - startTime;
      const currentDuration = isHovering && durationOnHover ? durationOnHover : duration;
      const progress = (elapsed % (currentDuration * 1000)) / (currentDuration * 1000);
      currentProgress = progress;
      
      const currentValue = to * progress;
      translation.set(currentValue);
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [translation, duration, durationOnHover, isHovering, width, height, direction]);

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}