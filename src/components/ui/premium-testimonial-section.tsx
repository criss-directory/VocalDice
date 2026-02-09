import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  caseStudyLink?: string;
  rating?: number;
  initials?: string;
}

type NicheType = "medical" | "solar" | "real-estate" | "ecommerce";

interface NicheColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  glow: string;
  border: string;
  backgroundGradient: string;
}

const nicheColorSchemes: Record<NicheType, NicheColorScheme> = {
  medical: {
    primary: "emerald",
    secondary: "emerald-400",
    accent: "emerald-500",
    glow: "emerald",
    border: "emerald-500/10",
    backgroundGradient: "from-emerald-500/5"
  },
  solar: {
    primary: "amber",
    secondary: "amber-400",
    accent: "amber-500",
    glow: "amber",
    border: "amber-500/10",
    backgroundGradient: "from-amber-500/5"
  },
  "real-estate": {
    primary: "cyan",
    secondary: "cyan-400",
    accent: "cyan-500",
    glow: "cyan",
    border: "cyan-500/10",
    backgroundGradient: "from-cyan-500/5"
  },
  ecommerce: {
    primary: "purple",
    secondary: "purple-400",
    accent: "purple-500",
    glow: "purple",
    border: "purple-500/10",
    backgroundGradient: "from-purple-500/5"
  }
};

interface PremiumTestimonialSectionProps {
  title?: string;
  testimonials: Testimonial[];
  niche?: NicheType;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

export function PremiumTestimonialSection({
  title = "What Our Clients Say",
  testimonials,
  niche = "medical",
}: PremiumTestimonialSectionProps) {
  const colors = nicheColorSchemes[niche];

  return (
    <section className={`py-24 px-4 bg-black relative overflow-hidden border-t border-${colors.accent}/10`}>
      {/* Subtle background glow with niche color */}
      <div className={`absolute inset-0 bg-gradient-to-b ${colors.backgroundGradient} via-transparent to-transparent pointer-events-none`} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </motion.h2>
        </motion.div>

        {/* Premium Testimonial Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial) => {
            const initials =
              testimonial.initials ||
              testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase();

            return (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                className="group relative"
              >
                {/* Card with premium styling - niche-specific colors */}
                <div className={`h-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-${colors.accent}/40 hover:shadow-2xl hover:shadow-${colors.accent}/10 hover:from-white/15 hover:to-white/8`}>
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 fill-${colors.secondary} text-${colors.secondary}`}
                        />
                      ))}
                    </div>

                    {/* Quote Icon */}
                    <Quote className={`w-8 h-8 text-${colors.primary}-400/40 mb-4`} />

                    {/* Quote Text */}
                    <blockquote className="text-gray-200 text-base leading-relaxed mb-8 flex-grow italic">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${colors.accent} to-${colors.accent}/50 flex items-center justify-center text-white font-bold text-sm`}>
                          {initials}
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Case Study Link */}
                    {testimonial.caseStudyLink && (
                      <Link
                        to={testimonial.caseStudyLink}
                        className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold text-${colors.secondary} hover:text-${colors.secondary}/80 transition-colors group/link`}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
