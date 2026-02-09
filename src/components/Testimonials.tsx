import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    industry: "Real Estate",
    headline: "The 'Site Visit' Dilemma",
    problem: "Missing calls while showing properties leads to lost buyers.",
    solution: "AI answers instantly, qualifies leads, and schedules viewings 24/7.",
    outcome: "100% Lead Response Rate",
    link: "Detailed Case Study",
    clientName: "Mohammed Hassan",
    clientRole: "Real Estate Team Leader."
  },
  {
    industry: "Solar & Home Services",
    headline: "The 'Cold Calling' Burnout",
    problem: "Manual follow-ups waste time and cause quote delivery delays.",
    solution: "AI qualifies leads, sends summaries, and schedules consultations automatically.",
    outcome: "40% More Quote Completions",
    link: "Detailed Case Study",
    clientName: "James Rodriguez",
    clientRole: "Sales Director, Solar Industry."
  },
  {
    industry: "Healthcare",
    headline: "The 'Empty Slot' Revenue Leak",
    problem: "Missed confirmations cause 15-20% no-show rates, wasting revenue.",
    solution: "AI sends reminders, confirmations, and reschedules cancellations automatically.",
    outcome: "35% Reduction in No-Shows",
    link: "Detailed Case Study",
    clientName: "Dr. Priya Singh",
    clientRole: "Clinic Director, Medical Center."
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-dark-surface/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover why our clients love working with us. Read their testimonials about our dedication to excellence, innovative solutions, and exceptional customer service.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col">
                {/* Industry Badge */}
                <div className="inline-block mb-4 w-fit">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary/20 to-accent/20 text-primary">
                    {testimonial.industry}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {testimonial.headline}
                </h3>

                {/* Problem Section */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary/80 mb-2">The Problem</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.problem}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary/80 mb-2">Our Solution</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.solution}
                  </p>
                </div>

                {/* Outcome Section */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-primary/80 mb-2">The Outcome</p>
                  <p className="text-white font-semibold text-lg">
                    {testimonial.outcome}
                  </p>
                </div>

                {/* Link */}
                <Link to="#" className="text-primary hover:text-accent transition-colors flex items-center gap-2 font-semibold mb-6">
                  {testimonial.link}
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Client Info */}
                <div className="pt-6 border-t border-border/30 mt-auto">
                  <p className="font-semibold text-foreground">{testimonial.clientName}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.clientRole}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
