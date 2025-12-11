import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mohammed Hassan",
    role: "Real Estate Team Leader, Dubai Marina", // Team Leader (High Volume)
    text: "We get 80–100 enquiries per day from PF and Bayut. My team used to miss at least half. The AI now replies instantly and books viewings even when we’re all out on showings. It feels like having 5 extra agents working 24/7.",
    rating: 4,
  },
  {
    name: "Elena Rodriguez",
    role: "Luxury Property Specialist, Palm Jumeirah", // Luxury Property Specialist
    text: "My clients are mostly international investors. They expect fast replies. The AI handles first contact, asks all the right questions, and qualifies them before I even look at the lead. My close rate went up massively.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Independent Agent", // Independent Agent
    text: "I handle Palm Jumeirah and Marina listings. I used to lose buyers just because I couldn’t answer the phone while showing a property. The AI qualifies buyers instantly and schedules viewings without me lifting a finger.",
    rating: 4,
  },
  {
    name: "Ahmed Al-Mansouri",
    role: "Senior Agent, Dubai Properties", // Senior Agent
    text: "Our conversion rate jumped by around 40% in the first month. The AI handles qualification and WhatsApp summaries while I focus on closing. No more chasing low-quality leads.",
    rating: 5,
  },
  {
    name: "Sara Al Khatib",
    role: "Brokerage Director, Downtown Dubai", // Brokerage Director
    text: "We manage a 50-agent team. This AI assistant standardised qualification across all agents. Every enquiry gets the same fast, professional response. We scaled without hiring more ISAs.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 overflow-hidden bg-dark-surface/30">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 opacity-0 animate-fade-in-up">
          Trusted by Dubai's{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Top Performers
          </span>
        </h2>
        <p className="text-m md:text-lg text-center mb-10 opacity-0 animate-fade-in-up [animation-delay:200ms] text-muted-foreground max-w-2xl mx-auto">
          See what real estate professionals are saying
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-scroll animation-50ms linear infinite">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[400px] p-6 bg-card border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <p className="text-center text-muted-foreground text-sm mt-12 container mx-auto px-4">
        Used by Dubai agents closing Marina, JVC, Business Bay, Palm Jumeirah, and international investor leads.
      </p>
    </section>
  );
};

export default Testimonials;
