import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";
import { easeOut } from "framer-motion";
import { Link } from "react-router-dom";

// TypeScript interface for a single testimonial object
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  niche: "Real Estate" | "Solar" | "Medical" | "E-Commerce";
  caseStudyLink?: string;
  rating?: number;
  initials?: string;
}

// TypeScript interface for the component's props
interface TestimonialSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

/**
 * A responsive section component to display customer testimonials.
 * It features a title, subtitle, and a grid of animated testimonial cards
 * with gradient backgrounds and avatar initials instead of photos.
 */
export const TestimonialSection = ({
  title,
  subtitle,
  testimonials,
}: TestimonialSectionProps) => {
  // Animation variants for the container to orchestrate staggered children animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation variants for each testimonial card
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  // Default gradient colors for avatars
  const defaultGradients = [
    { from: "from-slate-700", to: "to-slate-600" },
    { from: "from-slate-700", to: "to-slate-600" },
    { from: "from-slate-700", to: "to-slate-600" },
    { from: "from-slate-700", to: "to-slate-600" },
    { from: "from-slate-700", to: "to-slate-600" },
    { from: "from-slate-700", to: "to-slate-600" },
  ];

  // Niche badge colors
  const nicheBadgeStyles = {
    "Real Estate": {
      bg: "bg-cyan-500/20",
      border: "border-cyan-500/50",
      text: "text-cyan-400",
      dot: "bg-cyan-400"
    },
    "Solar": {
      bg: "bg-amber-500/20",
      border: "border-amber-500/50",
      text: "text-amber-400",
      dot: "bg-amber-400"
    },
    "Medical": {
      bg: "bg-emerald-500/20",
      border: "border-emerald-500/50",
      text: "text-emerald-400",
      dot: "bg-emerald-400"
    },
    "E-Commerce": {
      bg: "bg-purple-500/20",
      border: "border-purple-500/50",
      text: "text-purple-400",
      dot: "bg-purple-400"
    }
  };

  return (
    <section className="w-full bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => {
            const gradient =
              defaultGradients[
                index % defaultGradients.length
              ];
            const initials =
              testimonial.initials ||
              testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase();
            
            const nicheStyle = nicheBadgeStyles[testimonial.niche];

            const cardContent = (
              <motion.div
                key={testimonial.id}
                className="group relative overflow-hidden rounded-xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 flex flex-col h-full"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Gradient background header */}
                <div
                  className={`h-24 bg-gradient-to-br ${gradient.from} ${gradient.to} relative overflow-hidden`}
                >
                  {/* Animated gradient shine effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col h-full p-6 relative">
                  {/* Avatar initials - overlapping the gradient */}
                  <div className="absolute -top-8 left-6 w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center border-4 border-card text-white font-bold text-xl shadow-lg">
                    {initials}
                  </div>

                  {/* Niche badge */}
                  <div className={`mt-10 mb-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${nicheStyle.bg} ${nicheStyle.border} w-fit`}>
                    <div className={`w-2 h-2 rounded-full ${nicheStyle.dot}`} />
                    <span className={`text-xs font-semibold ${nicheStyle.text}`}>
                      {testimonial.niche}
                    </span>
                  </div>

                  {/* Star rating */}
                  {testimonial.rating && (
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    </div>
                  )}

                  {/* Quote icon */}
                  <Quote className="w-6 h-6 text-muted-foreground/40 mb-3" />

                  {/* Quote text */}
                  <blockquote className="text-base leading-relaxed text-foreground mb-6 flex-grow text-left italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Divider */}
                  <div className="h-px bg-border/30 mb-4" />

                  {/* Author info and CTA */}
                  <div className="flex flex-col justify-between gap-4">
                    <figcaption className="text-left">
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </figcaption>

                    {/* Case Study Link */}
                    {testimonial.caseStudyLink && (
                      <div
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        Read Case Study
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );

            // Wrap with Link if caseStudyLink exists, otherwise just render the card
            if (testimonial.caseStudyLink) {
              return (
                <Link key={testimonial.id} to={testimonial.caseStudyLink}>
                  {cardContent}
                </Link>
              );
            }

            return cardContent;
          })}
        </motion.div>
      </div>
    </section>
  );
};
