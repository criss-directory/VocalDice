import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, CheckCircle2, Clock, Target, Zap, Sparkles, TrendingUp, Users, Calendar, Play, Search, Building, MessageSquare, Lock, Settings, ShieldCheck, Speaker, SpeakerIcon, Mic, MessageCircleIcon, MonitorSpeakerIcon, AlertTriangle, HouseIcon, ChevronDown, Home, Sun, Stethoscope, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import buyerDemoAudio from "@/assets/buyer-demo.mp3";
import sellerDemoAudio from "@/assets/seller-demo.mp3";
import Navigation from "@/components/Navigation";
import { TestimonialSection } from "@/components/ui/testimonial-section";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import { WhoIsItFor } from "@/components/WhoIsItFor";
import { Timeline } from "@/components/ui/timeline";
import { LogosSlider } from "@/components/LogosSlider";
import { AIVoiceInput } from "@/components/ui/ai-voice-input";
import { PainVsSolutionSection } from "@/components/ui/pain-vs-solution";
import { cn } from "@/lib/utils";
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import SEO from "@/components/seo";
import { organizationSchema, serviceSchema, faqSchema, homepageSchema } from "@/lib/schemaData";
import { trackCTAClick, trackDemoRequest, trackAudioPlay } from "@/lib/analytics";
import { HeroSection } from "@/components/ui/3d-hero-section-boxes";
import { AudioDemos } from "@/components/AudioDemos";
import { HowItWorks } from "@/components/ui/how-it-works";
import { CTASection } from "@/components/ui/cta-with-rectangle";

const whyUsPoints = [
  {
    title: "Built for high-intent business enquiries across all industries",
    description: "Handles real estate, healthcare, solar, ecommerce, and more — instantly qualifying leads and booking appointments worldwide."
  },
  {
    title: "AI trained on multi-market buyer psychology and objection handling",
    description: "Understands how customers decide across USA, India, UAE and other markets. Knows what they ask, how they negotiate, and what drives conversions."
  },
  {
    title: "No scripts. Real-time, dynamic conversations",
    description: "Every conversation adapts naturally — not a prewritten IVR bot."
  },
  {
    title: "Revenue automation, not customer support automation",
    description: "Your AI qualifies, nurtures, books viewings, and hands over ready-to-close leads."
  },
  {
    title: "Designed for agents, teams, and brokerages competing in a fast-response market",
    description: "Speed, positioning, and instant handling = more deals closed."
  },
  {
    title: "Turns missed calls into booked viewings and verified prospects",
    description: "Never lose a PF/Bayut lead because you were on another viewing."
  }
];

const Index = () => {
  // Combine schemas
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, serviceSchema, faqSchema, homepageSchema]
  };
  
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi({"namespace":"default"});
      cal("ui", {
        "cssVarsPerTheme": {
          "light": {"cal-brand":"#007ee5"},
          "dark":{"cal-brand":"#fafafa"}
        },
        "hideEventTypeDetails":false,"layout":"month_view"
      });
    })();
  }, []);

  return (
    <>
      <SEO 
        title="AI Virtual Receptionist & Call Answering Service for USA, India & UAE"
        description="AI receptionist that answers, qualifies & books 24/7. Virtual call answering service for real estate, healthcare, solar & ecommerce. Available in USA, India, and UAE with WhatsApp, HIPAA & DND compliance."
        keywords="virtual receptionist, AI receptionist, call answering service, AI call answering, virtual assistant, appointment booking automation, lead qualification AI, after hours call answering"
        url="https://vocaldice.com"
        schema={combinedSchema}
      />
      <div className="min-h-screen bg-background">
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
      `}</style>
      <Navigation />
      
      {/* 3D Hero Section with Spline Background */}
      <HeroSection />

      <LogosSlider />

      
      {/* New Pain vs Solution Section */}
      <PainVsSolutionSection />

      
      {/*  Who We Help Section */}
      <section className="py-20 container mx-auto px-4" id="solutions">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 opacity-0 animate-fade-in-up">
            Specialized AI Agents for <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              High-Growth Industries.
            </span>
          </h2>

          <p className="text-m md:text-lg text-center mb-10 opacity-0 animate-fade-in-up [animation-delay:200ms] text-muted-foreground max-w-2xl mx-auto">
            Our AI Agent isn't generic. It's trained on industry-specific scripts to qualify leads, book appointments, and support customers across these key sectors. Used by 15+ businesses in USA, India, and UAE.
          </p>

          {/* Virtual Receptionist Overview Card */}
          <Link to="/virtual-receptionist">
            <Card className="p-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/50 hover:border-blue-500 transition-all opacity-0 animate-fade-in-up [animation-delay:300ms] mb-10 cursor-pointer group">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2 text-blue-100 group-hover:text-blue-50">AI Virtual Receptionist</h3>
                  <p className="text-sm text-blue-200 mb-4">
                    For any business type: Answer all inbound calls 24/7, book appointments, qualify leads, and integrate with your CRM. Your complete reception solution.
                  </p>
                  <span className="text-sm text-blue-300 font-semibold flex items-center gap-1 transition-colors">
                    Explore All Industries <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <Phone className="w-12 h-12 text-blue-400/60 group-hover:text-blue-400 transition-colors" />
              </div>
            </Card>
          </Link>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            
            {/* Industry 1: Real Estate */}
            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all opacity-0 animate-fade-in-up [animation-delay:400ms] flex flex-col min-h-[160px]">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                  <Home className="w-6 h-6 text-primary/90" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Real Estate ISA</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Automate lead qualification and follow-ups. Our AI agent engages leads from portals instantly, booking site visits 24/7 while you sleep.
                  </p>
                  <Link to="/ai-real-estate-assistant" className="text-sm text-primary hover:text-primary/80 font-semibold flex items-center gap-1 transition-colors">
                    Know More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card>

            {/* Industry 2: Solar */}
            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all opacity-0 animate-fade-in-up [animation-delay:500ms] flex flex-col min-h-[160px]">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                  <Sun className="w-6 h-6 text-primary/90" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Solar Appointment Agent</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Turn cold inquiries into qualified consultations. The AI Agent pre-screens homeowners for roof suitability and electricity usage before booking.
                  </p>
                  <Link to="/ai-solar-lead-qualification" className="text-sm text-primary hover:text-primary/80 font-semibold flex items-center gap-1 transition-colors">
                    Know More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card>

            {/* Industry 3: Medical */}
            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all opacity-0 animate-fade-in-up [animation-delay:600ms] flex flex-col min-h-[160px]">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                  <Stethoscope className="w-6 h-6 text-primary/90" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Medical Receptionist</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Reduce front-desk burnout. Handle patient scheduling, prescription refill requests, and general FAQs with empathy and precision.
                  </p>
                  <Link to="/ai-medical-receptionist" className="text-sm text-primary hover:text-primary/80 font-semibold flex items-center gap-1 transition-colors">
                    Know More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card>

            {/* Industry 4: Retail */}
            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all opacity-0 animate-fade-in-up [animation-delay:700ms] flex flex-col min-h-[160px]">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                  <ShoppingBag className="w-6 h-6 text-primary/90" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Retail Support AI</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Recover abandoned carts and answer product queries instantly. Offer 24/7 order tracking support without hiring extra staff.
                  </p>
                  <Link to="/ai-ecommerce-customer-support" className="text-sm text-primary hover:text-primary/80 font-semibold flex items-center gap-1 transition-colors">
                    Know More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mb-6 opacity-0 animate-fade-in-up [animation-delay:750ms]">
            <h4 className="text md:text-xl font-bold text-white">Don't see your industry? We customize agents for any niche.</h4>
          </div>

          <div className="text-center opacity-0 animate-fade-in-up [animation-delay:800ms]">
              <p className="text-2xl font-semibold mb-8">
                Automate your workflow.<br className="sm:hidden"/>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {" "}Multiply your output.{" "}
                </span>
              </p>
              <button
                data-cal-namespace="default"
                data-cal-link="vocaldice/strategy-session"
                data-cal-origin="https://cal.id"
                data-cal-config='{"layout":"month_view"}'
                className="rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/30 px-8 py-3 bg-primary text-white font-semibold inline-flex items-center gap-2"
              >
                Want Agent for Your Industry
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>  
        </div>
      </section>
      <AudioDemos />

      <WhoIsItFor />

      <HowItWorks />

      <TestimonialSection
        title="See What Our Clients Are Saying"
        subtitle="Real results from businesses automating their sales workflows with VocalDice AI"
        testimonials={[
          {
            id: 1,
            quote: "We've seen a 40% increase in qualified leads since implementing VocalDice. The AI handles our initial screening perfectly.",
            name: "Sarah",
            role: "Real Estate Agent",
            niche: "Real Estate",
            rating: 5,
            initials: "SJ",
            caseStudyLink: "/case-studies/sarah-real-estate-leads"
          },
          {
            id: 2,
            quote: "The automation is incredible. We're now answering every call and booking appointments 24/7. Our conversion has doubled.",
            name: "Marcus",
            role: "Solar Business Owner",
            niche: "Solar",
            rating: 5,
            initials: "MC",
            caseStudyLink: "/case-studies/marcus-solar-lead-generation"
          },
          {
            id: 3,
            quote: "Our front-desk staff went from stressed and overwhelmed to actually focusing on patient care. VocalDice handles everything.",
            name: "Dr. Patel",
            role: "Practice Manager",
            niche: "Medical",
            rating: 5,
            initials: "DP",
            caseStudyLink: "/case-studies/dr-patel-healthcare-intake"
          },
          {
            id: 4,
            quote: "The natural conversation flow is amazing. Customers don't even realize they're talking to an AI. That's when you know it's working.",
            name: "Raj",
            role: "E-Commerce Director",
            niche: "E-Commerce",
            rating: 5,
            initials: "RP",
            caseStudyLink: "/case-studies/raj-ecommerce-support"
          },
          {
            id: 5,
            quote: "ROI was immediate. Within 30 days, the AI had paid for itself through recovered abandoned cart sales.",
            name: "Sophie",
            role: "Operations Manager",
            niche: "E-Commerce",
            rating: 5,
            initials: "SL",
            caseStudyLink: "/case-studies/sophie-ecommerce-24-7"
          },
          {
            id: 6,
            quote: "Best decision we made for scaling. No more hiring headaches, and our customers get instant support.",
            name: "Ahmed",
            role: "Agency Owner",
            niche: "Real Estate",
            rating: 5,
            initials: "AH",
            caseStudyLink: "/case-studies/ahmed-real-estate-booking"
          }
        ]}
      />

      {/* Frequently answered questions */}
                <div id="faqs">
                 <FAQs />
                </div>

      

      {/* Final CTA Section - SEO Optimized */}
      <CTASection
        badge={{ text: "Ready to Scale?" }}
        title={
          <>
            Turn Missed Calls Into<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Closed Deals.
            </span>
          </>
        }
        description="Our team deploys and manages a 24/7 AI Sales Agent that speaks your customer's language. We qualify leads, book appointments, and sync with Zoho, Salesforce, & WhatsApp instantly no matter where your business is based."
        trustBar={{
          items: [
            "500+ Calls Handled: Proven track record",
            "$50k+ Revenue Generated: Real results",
            "Zero Missed Leads: 100% capture rate"
          ]
        }}
        action={{
          text: "Book A Free Strategy Call",
          href: "https://cal.id/sai-krishna/discovery-call"
        }}
        riskReversal="Free 30-min Consultation • Fully Deployed in 7-14 Days • No Long-Term Contracts"
        className="py-24  border-t border-border/30"
      />

      <Footer />
    </div>
    </>
  );
};

export default Index;