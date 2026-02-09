import React, { useEffect, useMemo, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";

interface BentoFeature {
  title: string;
  blurb: string;
  meta: string;
  icon?: LucideIcon;
}

interface BentoCardProps {
  span?: string;
  title: string;
  blurb: string;
  meta: string;
  icon?: LucideIcon;
}

function BentoCard({ span = "", title, blurb, meta, icon: Icon }: BentoCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/8 to-blue-500/8 p-6 md:p-8 transition hover:border-cyan-500/60 hover:bg-cyan-500/15 hover:shadow-lg hover:shadow-cyan-500/20 ${span}`}
    >
      <div className="flex flex-col gap-4 h-full">
        {/* Icon + Meta Tag */}
        <div className="flex items-start justify-between gap-4">
          {Icon && (
            <div className="flex-shrink-0">
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
            </div>
          )}
          {meta && (
            <span className="ml-auto rounded-full border border-cyan-500/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-300/90 bg-cyan-500/10 whitespace-nowrap">
              {meta}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold leading-snug text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-300 leading-relaxed flex-grow">
          {blurb}
        </p>

        {/* Hover glow effect */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute -inset-1 rounded-xl border border-cyan-500/10"
            style={{ mixBlendMode: "screen" }}
          />
        </div>
      </div>
    </article>
  );
}

interface FeaturesGridProps {
  features: BentoFeature[];
  title?: string;
  subtitle?: string;
}

function BentoFeaturesGrid({ features, title = "Features", subtitle = "Optimized for modern teams" }: FeaturesGridProps) {
  const spiralRef = useRef(null);

  const [cfg] = useState({
    points: 800,
    dotRadius: 1.6,
    duration: 3,
    gradient: "none",
    color: "#06b6d4",
    pulseEffect: true,
    opacityMin: 0.25,
    opacityMax: 0.9,
    sizeMin: 0.5,
    sizeMax: 1.35,
    background: "transparent",
  });

  const gradients = useMemo(
    () => ({
      none: [],
      grayscale: ["#06b6d4", "#0ea5e9", "#0284c7"],
    }),
    []
  );

  useEffect(() => {
    if (!spiralRef.current) return;

    const SIZE = 620;
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
    const N = cfg.points;
    const DOT = cfg.dotRadius;
    const CENTER = SIZE / 2;
    const PADDING = 4;
    const MAX_R = CENTER - PADDING - DOT;

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", String(SIZE));
    svg.setAttribute("height", String(SIZE));
    svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);

    if (cfg.gradient !== "none") {
      const defs = document.createElementNS(svgNS, "defs");
      const g = document.createElementNS(svgNS, "linearGradient");
      g.setAttribute("id", "spiralGradient");
      g.setAttribute("gradientUnits", "userSpaceOnUse");
      g.setAttribute("x1", "0%");
      g.setAttribute("y1", "0%");
      g.setAttribute("x2", "100%");
      g.setAttribute("y2", "100%");
      gradients[cfg.gradient].forEach((color, idx, arr) => {
        const stop = document.createElementNS(svgNS, "stop");
        stop.setAttribute("offset", `${(idx * 100) / (arr.length - 1)}%`);
        stop.setAttribute("stop-color", color);
        g.appendChild(stop);
      });
      defs.appendChild(g);
      svg.appendChild(defs);
    }

    for (let i = 0; i < N; i++) {
      const idx = i + 0.5;
      const frac = idx / N;
      const r = Math.sqrt(frac) * MAX_R;
      const theta = idx * GOLDEN_ANGLE;
      const x = CENTER + r * Math.cos(theta);
      const y = CENTER + r * Math.sin(theta);

      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("cx", x.toFixed(3));
      c.setAttribute("cy", y.toFixed(3));
      c.setAttribute("r", String(DOT));
      c.setAttribute("fill", cfg.gradient === "none" ? cfg.color : "url(#spiralGradient)");
      c.setAttribute("opacity", "0.6");

      if (cfg.pulseEffect) {
        const animR = document.createElementNS(svgNS, "animate");
        animR.setAttribute("attributeName", "r");
        animR.setAttribute("values", `${DOT * cfg.sizeMin};${DOT * cfg.sizeMax};${DOT * cfg.sizeMin}`);
        animR.setAttribute("dur", `${cfg.duration}s`);
        animR.setAttribute("begin", `${(frac * cfg.duration).toFixed(3)}s`);
        animR.setAttribute("repeatCount", "indefinite");
        c.appendChild(animR);

        const animO = document.createElementNS(svgNS, "animate");
        animO.setAttribute("attributeName", "opacity");
        animO.setAttribute("values", `${cfg.opacityMin};${cfg.opacityMax};${cfg.opacityMin}`);
        animO.setAttribute("dur", `${cfg.duration}s`);
        animO.setAttribute("begin", `${(frac * cfg.duration).toFixed(3)}s`);
        animO.setAttribute("repeatCount", "indefinite");
        c.appendChild(animO);
      }

      svg.appendChild(c);
    }

    spiralRef.current.innerHTML = "";
    spiralRef.current.appendChild(svg);
  }, [cfg, gradients]);

  const spans = [
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
  ];

  return (
    <div className="relative w-full">
      <section className="relative mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 text-white">
        {/* Background Spiral */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15 [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1),rgba(255,255,255,0.1)_60%,transparent_75%)]"
          style={{ mixBlendMode: "screen" }}
        >
          <div ref={spiralRef} />
        </div>

        <header className="relative mb-12 md:mb-16 flex flex-col gap-3">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">{title}</h2>
            <p className="mt-4 text-sm md:text-base text-gray-400">
              {subtitle}
            </p>
          </div>
        </header>

        <div className="relative grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-6 auto-rows-[minmax(140px,auto)]">
          {features.map((f, i) => (
            <BentoCard 
              key={i} 
              span={spans[i]} 
              title={f.title} 
              blurb={f.blurb} 
              meta={f.meta}
              icon={f.icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default BentoFeaturesGrid;
export { BentoFeaturesGrid, BentoCard };

