import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, CheckCircle2, Clock, Target, Zap, Sparkles, TrendingUp, Users, Calendar, Play, Search, Building, MessageSquare, Lock, Settings, ShieldCheck, Speaker, SpeakerIcon, Mic, MessageCircleIcon, MonitorSpeakerIcon, AlertTriangle, HouseIcon, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import buyerDemoAudio from "@/assets/buyer-demo.mp3";
import sellerDemoAudio from "@/assets/seller-demo.mp3";
import heroImage from "@/assets/dubai-skyline.jpg";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import { WhoIsItFor } from "@/components/WhoIsItFor"; // This import is correct
import { Timeline } from "@/components/ui/timeline";
import { CyberneticBentoGrid } from "@/components/ui/cybernetic-bento-grid";
import { LogosSlider } from "@/components/LogosSlider";
import { AIVoiceInput } from "@/components/ui/ai-voice-input";
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

const whyUsPoints = [
  {
    title: "Built specifically for high-ticket Dubai property enquiries",
    description: "Handles Marina rentals, luxury listings, investors, and valuation calls instantly."
  },
  {
    title: "Trained on Dubai buyer psychology, objections, and urgency patterns",
    description: "Understands how international buyers decide, what they ask, and how they negotiate."
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

  const [activeDemo, setActiveDemo] = useState<'buyer' | 'seller' | null>(null);
  
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
        title="AI Phone Agent for Dubai Real Estate Brokerages"
        description="Never miss a Dubai property lead again. AI phone agent that answers calls in 30 seconds, qualifies Property Finder & Bayut leads, and books viewings 24/7. Built for Dubai real estate teams."
        keywords="real estate call center Dubai, property finder lead follow up, bayut lead management, real estate answering service UAE, AI phone agent Dubai, Dubai property lead qualification, automated real estate follow up"
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
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 text-center">
          <div className="max-w-5xl mx-auto space-y-5">
            
            {/* Premium Badge */}
            <div className="flex justify-center opacity-0 animate-fade-in-up mb-2">
              <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <HouseIcon className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  Attention Dubai Real Estate Agents
                </span>
              </div>
            </div>

          {/* Main Headline - Reduced spacing */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in-up [animation-delay:100ms]">
            Your Leads Are{" "}
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-red-500 bg-clip-text text-transparent">
              Waiting.
            </span>
            <br />
            Your Agents Are{" "}
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-red-500 bg-clip-text text-transparent">
              Busy.
            </span>
            <br />
            Deals Are{" "}
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-red-500 bg-clip-text text-transparent">
              Dying.
            </span>
          </h1>

          {/* Subheadline - More compact */}
          <p className="text-base sm:text-lg md:text-xl font-semibold max-w-4xl mx-auto opacity-0 animate-fade-in-up [animation-delay:200ms] text-white">
            You’re losing 20–40% of your deals every month because nobody replies fast enough.
          </p>

          {/* Description - Smaller, more concise */}
          <p className="text-sm sm:text-base max-w-2xl mx-auto opacity-0 animate-fade-in-up [animation-delay:250ms] text-gray-300">
            AI replies in 30 seconds, qualifies buyers & sellers, books appointments automatically.
          </p>

          {/* Limited Availability Badge */}
          <p className="text-xs sm:text-sm text-white/70 font-medium opacity-0 animate-fade-in-up [animation-delay:300ms]">
            ⚡ Limited to 3 Dubai teams per month
          </p>

          {/* CTA Buttons - Tighter spacing */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 opacity-0 animate-fade-in-up [animation-delay:350ms]">
            <Button 
              variant="luxury" 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/30" 
              data-cal-link="sai-krishna/discovery-call"
              data-cal-namespace="default"
              data-cal-origin="https://cal.id"
              data-cal-config='{"layout":"month_view"}'
              onClick={() => {
                trackCTAClick("Calculate Your Lost Deals", "Hero Section");
                trackDemoRequest("Hero CTA");
              }}
            >
              Calculate Your Lost Deals
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button 
              variant="luxuryOutline" 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full hover:scale-105 transition-transform border-2 border-white/40"
              onClick={() => document.getElementById('live-ai-demos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 w-4 h-4" />
              Listen to Demo
            </Button>
          </div>

          {/* Bottom micro-copy */}
          <p className="text-xs sm:text-sm text-muted-foreground opacity-0 animate-fade-in-up [animation-delay:400ms]">
            Instantly identify how many deals slip through every month.
          </p>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm opacity-0 animate-fade-in-up [animation-delay:450ms]">
            <ShieldCheck className="w-4 h-4 text-success" />
            <span className="text-white/80">Trusted by <strong>Dubai</strong> agents handling high enquiry volumes</span>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>

      <LogosSlider />

      {/* Pain Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 opacity-0 animate-fade-in-up">
            If You Don’t Answer Fast, <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Competitor Does.
            </span>
          </h2>

          <p className="text-m md:text-lg text-center mb-10 opacity-0 animate-fade-in-up [animation-delay:200ms] text-muted-foreground max-w-2xl mx-auto">
          Serious buyers contact 3–5 agents within minutes. The first one who replies wins the deal. If you’re slow, you lose instantly.          
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* ensure single column on small screens */}
            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all opacity-0 animate-fade-in-up [animation-delay:400ms] flex flex-col min-h-[160px]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                  <Clock className="w-6 h-6 text-primary/90" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">You're on site visits and miss 3–5 calls a day</h3>
                  <p className="text-sm text-muted-foreground">Every missed call is a buyer talking to another agent instead of you.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all opacity-0 animate-fade-in-up [animation-delay:500ms] flex flex-col min-h-[160px]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                  <Users className="w-6 h-6 text-primary/90" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Your team can’t follow up instantly and buyers don’t wait</h3>
                  <p className="text-sm text-muted-foreground">Human speed loses to market speed. By the time you call back, someone else already did.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all opacity-0 animate-fade-in-up [animation-delay:600ms] flex flex-col min-h-[160px]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                  <Zap className="w-6 h-6 text-primary/90" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Bayut & Property Finder leads go cold in under 5 minutes</h3>
                  <p className="text-sm text-muted-foreground">If you don’t reply instantly on WhatsApp, another agent gets the viewing.</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all opacity-0 animate-fade-in-up [animation-delay:700ms] flex flex-col min-h-[160px]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                  <Target className="w-6 h-6 text-primary/90" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Your Missed Calls Become Your Competitor’s Commissions</h3>
                  <p className="text-sm text-muted-foreground">Every slow reply = another agent closing the deal you should have had.</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mb-6 opacity-0 animate-fade-in-up [animation-delay:750ms]">
            <h4 className="text md:text-xl font-bold text-white">This is how deals slip away without you even knowing.</h4>
          </div>

          <div className="text-center opacity-0 animate-fade-in-up [animation-delay:800ms]">
              <p className="text-2xl font-semibold mb-8">
                Speed of response ={" "}<br className="sm:hidden"/>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Speed of revenue.
                </span>
              </p>
              <Button 
                variant="luxury" 
                size="lg" 
                className="rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/30" 
                data-cal-link="sai-krishna/discovery-call"
                data-cal-namespace="default"
                data-cal-origin="https://cal.id"
                data-cal-config='{"layout":"month_view"}'
              >
                See How Many Deals You're Losing
                <ArrowRight className="ml-2" />
              </Button>
            </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-dark-surface/50" id="features">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 opacity-0 animate-fade-in-up">
              AI Inside Sales Agent Built for the {" "} <br/>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dubai Real Estate Market.
              </span>
            </h2>

            <p className="text-m md:text-lg text-center mb-10 opacity-0 animate-fade-in-up [animation-delay:200ms] text-muted-foreground max-w-2xl mx-auto">
              A fully trained AI calling agent tailored for Dubai property enquiries. Handles every buyer and investor call instantly, filters out time-wasters, qualifies real clients, and books viewings without your team missing a single opportunity day or night.
            </p>

            <CyberneticBentoGrid />

            <div className="text-center mt-12 opacity-0 animate-fade-in-up [animation-delay:400ms]">
              <Button 
                variant="luxury" 
                size="lg" 
                className="rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/30" 
                data-cal-link="sai-krishna/discovery-call"
                data-cal-namespace="default"
                data-cal-origin="https://cal.id"
                data-cal-config='{"layout":"month_view"}'
              >
                See How Many Deals You’re Losing
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live AI Demos Section */}
      <section id="live-ai-demos" className="py-24 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 opacity-0 animate-fade-in-up">
            Hear How It Qualifies Real Dubai Buyers & Sellers {" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Instantly.
            </span>
          </h2>

          <p className="text-m md:text-lg text-center mb-10 opacity-0 animate-fade-in-up [animation-delay:200ms] text-muted-foreground max-w-2xl mx-auto">
            Your AI Inside Sales Agent sounds natural, handles objections confidently, qualifies serious buyers and sellers, and books viewings in minutes just like a top-performing Dubai agents.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all opacity-0 animate-fade-in-up [animation-delay:400ms] flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Buyer Demo</h3>
                  <span className="text-xs text-accent">Qualifying a real Dubai buyer</span>
                </div>
              </div>
              <AIVoiceInput 
                isActive={activeDemo === 'buyer'} 
                onToggle={() => {
                  if (activeDemo !== 'buyer') trackAudioPlay('buyer');
                  setActiveDemo(activeDemo === 'buyer' ? null : 'buyer');
                }} 
                audiosrc={buyerDemoAudio}
              />
              
              <Collapsible className="mt-4">
                <CollapsibleTrigger className="group flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground w-full">
                  What to listen for
                  <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3 text-sm text-muted-foreground space-y-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>How the AI checks budget & move-in timeline naturally</li>
                    <li>How it filters out non-serious buyers</li>
                    <li>How it recommends communities based on buyer needs</li>
                    <li>How it moves the conversation toward a viewing without pressure</li>
                  </ul>
                  <p className="!mt-3 pt-2 border-t border-border/50">
                    <strong className="text-foreground">Result:</strong> A qualified buyer ready for your team, without wasting your time.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all opacity-0 animate-fade-in-up [animation-delay:600ms] flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Seller Demo</h3>
                  <span className="text-xs text-primary">Qualifying a Dubai property owner</span>
                </div>
              </div>
              <AIVoiceInput 
                isActive={activeDemo === 'seller'} 
                onToggle={() => {
                  if (activeDemo !== 'seller') trackAudioPlay('seller');
                  setActiveDemo(activeDemo === 'seller' ? null : 'seller');
                }} 
                audiosrc={sellerDemoAudio}
              />
              
              <Collapsible className="mt-4">
                <CollapsibleTrigger className="group flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground w-full">
                  What to listen for
                  <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3 text-sm text-muted-foreground space-y-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>How the AI handles valuation requests confidently</li>
                    <li>How it gathers motivation, timeline, and property details</li>
                    <li>How it deals with common Dubai seller objections</li>
                    <li>How it books a viewing/inspection slot like a human ISA</li>
                  </ul>
                  <p className="!mt-3 pt-2 border-t border-border/50">
                    <strong className="text-foreground">Result:</strong> A fully qualified seller handed to your team on autopilot.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          </div>

          <p className="text-sm text-muted-foreground text-center opacity-0 animate-fade-in-up [animation-delay:700ms]">
            Trusted by Dubai agents handling high enquiry volumes these demos reflect real qualification workflows.
          </p>

          <div className="text-center mt-8 opacity-0 animate-fade-in-up [animation-delay:800ms]">
            <Button 
              variant="luxury" 
              size="lg" 
              className="rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/30"
              data-cal-link="sai-krishna/discovery-call"
              data-cal-namespace="default"
              data-cal-origin="https://cal.id"
              data-cal-config='{"layout":"month_view"}'
            >
              Experience the AI Sales Agent in Action
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <WhoIsItFor />

      <Testimonials />

      {/* Why Us Section */}
      <section className="py-24 bg-dark-surface/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 opacity-0 animate-fade-in-up">
              Not a Bot. Your {" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                24/7 AI Inside Sales Agent {""}
              </span>
              for Dubai Real Estate.
            </h2>
            <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
              This isn’t a scripted call bot. It qualifies real buyers, filters time-wasters, handles objections, and books site visits automatically just like a top Dubai ISA.
            </p>

            <div className="space-y-6 my-16">
              {whyUsPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: `${(index + 2) * 100}ms` }}>
                  <CheckCircle2 className="w-7 h-7 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-semibold">{point.title}</p>
                    <p className="text-muted-foreground mt-1">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-8 mb-12 opacity-0 animate-fade-in-up [animation-delay:800ms]">
              <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center font-semibold text-xl mb-2">
                We onboard only a limited number of Dubai agents each month.{" "}
              </p>
              <div className="text-sm text-muted-foreground text-center max-w-auto mx-auto">
                <p>Each AI ISA is custom-trained on your listings, your market segment, and your qualification rules.</p>
                <p>To maintain call quality and conversation accuracy, we cap monthly onboarding.</p>
              </div>
            </div>

            <div className="text-center opacity-0 animate-fade-in-up [animation-delay:900ms]">
              <Button 
                variant="luxury" 
                size="lg" 
                className="rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/30" 
                data-cal-link="sai-krishna/discovery-call"
                data-cal-namespace="default"
                data-cal-origin="https://cal.id"
                data-cal-config='{"layout":"month_view"}'
              >
                Request A Demo
                <ArrowRight className="ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground opacity-0 animate-fade-in-up [animation-delay:500ms] mt-5 font-bold">
              Watch how your AI ISA qualifies a real Dubai buyer in seconds including budget, timeline, and community preferences.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 container mx-auto px-4">
        
        <Timeline data={[{
          title: "STEP 01",
          content: <>
            {/* Desktop View */}
            <div className="hidden md:block">
              <Card className="p-8 bg-card border-border/50">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"><Search className="w-8 h-8 text-primary" /></div>
                    <h3 className="text-2xl font-bold pt-2">Discovery & Analysis (What Makes the AI Sound Dubai-Local)</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">We study your listings, inbound patterns, and the exact type of buyers/sellers you deal with.</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" /><span>Analyze Dubai buyer behaviour (budget ranges, communities, move-in urgency)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" /><span>Identify objections (ROI, payment plans, service charges, mortgages)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" /><span>Map qualification rules for viewings and follow-up logic</span></li>
                  </ul>
                  <p className="mt-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">Time invested here = fewer mistakes later. This is why the AI sounds like a trained Dubai agent, not a bot.</p>
              </Card>
            </div>
            {/* Mobile View */}
            <div className="block md:hidden">
              <h3 className="text-xl font-bold">Discovery & Analysis</h3>
              <p className="text-sm font-semibold text-primary mb-2">(Dubai-Specific Training Prep)</p>
              <p className="text-muted-foreground">We study your listings, inbound patterns, buyer behaviour, objections, and qualification rules so the AI understands your market and talks like a trained Dubai agent.</p>
            </div>
          </>
        }, {
          title: "STEP 02",
          content: <>
            {/* Desktop View */}
            <div className="hidden md:block">
              <Card className="p-8 bg-card border-border/50">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"><Sparkles className="w-8 h-8 text-primary" /></div>
                    <h3 className="text-2xl font-bold pt-2">AI Training (Where 70% of the “Magic” Happens)</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">We train your AI on real Dubai sales flows so it talks like a top agent, not a generic global model.</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" /><span>Trained on your exact portfolio (Marina, JVC, Palm, Downtown, etc.)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" /><span>Custom tone, conversation style, and brand voice</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" /><span>Built-in objection handling + buyer/seller scoring</span></li>
                  </ul>
                  <p className="mt-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">This is the step other providers rush. We don’t. Precision here = conversions later.</p>
              </Card>
            </div>
            {/* Mobile View */}
            <div className="block md:hidden">
              <h3 className="text-xl font-bold">AI Training</h3>
              <p className="text-sm font-semibold text-primary mb-2">(Customised to Your Portfolio)</p>
              <p className="text-muted-foreground">We train the AI on your exact communities, tone, sales flows, and objection handling so it responds naturally and qualifies buyers/sellers like a top Dubai ISA.</p>
            </div>
          </>
        }, {
          title: "STEP 03",
          content: <>
            {/* Desktop View */}
            <div className="hidden md:block">
              <Card className="p-8 bg-card border-border/50">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"><Phone className="w-8 h-8 text-primary" /></div>
                    <h3 className="text-2xl font-bold pt-2">Integration & Testing (Every Scenario Covered)</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">We connect your AI ISA into your existing process and test every lead type.</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" /><span>Call routing setup</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" /><span>CRM or WhatsApp integration</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" /><span>Appointment booking sync</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" /><span>Test calls with real buyer scenarios</span></li>
                  </ul>
                  <p className="mt-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">Only after everything works flawlessly do we move to launch. No half-baked deployments.</p>
              </Card>
            </div>
            {/* Mobile View */}
            <div className="block md:hidden">
              <h3 className="text-xl font-bold">Integration & Testing</h3>
              <p className="text-sm font-semibold text-primary mb-2">(Every Scenario Covered)</p>
              <p className="text-muted-foreground">We integrate the AI into your call routing, CRM/WhatsApp, and calendar then test every buyer type to ensure flawless performance before launch.</p>
            </div>
          </>
        }, {
          title: "STEP 04",
          content: <>
            {/* Desktop View */}
            <div className="hidden md:block">
              <Card className="p-8 bg-card border-border/50">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"><TrendingUp className="w-8 h-8 text-primary" /></div>
                    <h3 className="text-2xl font-bold pt-2">Go Live & Scale (Your 24/7 Dubai ISA Starts Working)</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">Once activated, your AI ISA handles enquiries instantly — day or night.</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" /><span>Real-time summaries & Continuous monitoring</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" /><span>Fine-tuning during the first days</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" /><span>Zero missed calls from PF/Bayut or international buyers</span></li>
                  </ul>
                  <p className="mt-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">Within 7–14 days, you’re running a system that normally requires multiple agents.</p>
              </Card>
            </div>
            {/* Mobile View */}
            <div className="block md:hidden">
              <h3 className="text-xl font-bold">Go Live & Scale</h3>
              <p className="text-sm font-semibold text-primary mb-2">(Your 24/7 Dubai ISA Activates)</p>
              <p className="text-muted-foreground">Once live, the AI handles all enquiries instantly, books viewings, sends summaries, and is monitored/fine-tuned so you never miss a lead day or night.</p>
            </div>
          </>
        }]} />
      
      </section>
        {/* Frequently answered questions */}
                <div id="faqs">
                 <FAQs />
                </div>

      {/* Final CTA Section */}
      <section className="py-24 bg-background" id="cta">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Glass Card Container with Hover Glow */}
          <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] group overflow-hidden">
            
            {/* Animated glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-3xl"></div>
            </div>
            
            {/* Content wrapper */}
            <div className="relative z-10">
            
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-in-up">
                Dubai Isn't Slowing Down.
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Your Enquiries Can't Either.
                </span>
              </h2>
              
              <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto opacity-0 animate-fade-in-up [animation-delay:200ms]">
                While you're on viewings, stuck in traffic, or asleep, your AI Inside Sales Agent handles every inbound and outbound call instantly qualifying serious buyers & sellers, booking viewings, and protecting your pipeline 24/7.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 opacity-0 animate-fade-in-up [animation-delay:400ms]">

              <Card className="p-4 sm:p-6 bg-card/50 border-border/50 flex flex-col justify-center items-center min-h-[160px]">
              <div className="text-2xl md:text-4xl font-bold bg-gradient-to-b from-black to-white bg-clip-text text-transparent mb-2 leading-tight">
              120-150
              </div>
              <p className="text-sm text-muted-foreground text-center">Enquiries handled weekly per agent with zero missed calls.</p>
              </Card>
              
              <Card className="p-4 sm:p-6 bg-card/50 border-border/50 flex flex-col justify-center items-center min-h-[160px]">
              <div className="text-2xl md:text-4xl font-bold bg-gradient-to-b from-black to-white bg-clip-text text-transparent mb-2 leading-tight">
                  30-60%
                </div>
                <p className="text-sm text-muted-foreground text-center">More viewing bookings by capturing leads your team normally loses.</p>
              </Card>
              
              <Card className="p-4 sm:p-6 bg-card/50 border-border/50 flex flex-col justify-center items-center min-h-[160px]">
              <div className="text-2xl md:text-4xl font-bold bg-gradient-to-b from-black to-white bg-clip-text text-transparent mb-2 leading-tight">
                  24/7
                </div>
                <p className="text-sm text-muted-foreground text-center">Instant response during peak hours, evenings, and weekends.</p>
              </Card>
              
              <Card className="p-4 sm:p-6 bg-card/50 border-border/50 flex flex-col justify-center items-center min-h-[160px]">
              <div className="text-2xl md:text-4xl font-bold bg-gradient-to-b from-black to-white bg-clip-text text-transparent mb-2 leading-tight">
                  ~60%
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Cost savings vs. hiring additional inside sales staff.
                </p>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 opacity-0 animate-fade-in-up [animation-delay:600ms]">
              <Button 
                variant="luxury" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/30" 
                data-cal-link="sai-krishna/discovery-call"
                data-cal-namespace="default"
                data-cal-origin="https://cal.id"
                data-cal-config='{"layout":"month_view"}'
              >
                <Phone className="mr-2 w-5 h-5" />
                Book a Free Strategy Call
              </Button>
              <Button 
                variant="luxuryOutline" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform border-2"
                onClick={() => document.getElementById('live-ai-demos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 w-5 h-5" />
                Listen to a Real Dubai Demo
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center max-w-md mx-auto -mt-4 mb-8">See exactly how many deals you're losing and how fast the AI can recover them.</p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground mb-8 opacity-0 animate-fade-in-up [animation-delay:800ms]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span>Free 30-min consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Fully deployed in 7–14 days</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span>WhatsApp + CRM integration included</span>
              </div>
            </div>

            {/* Bottom Note */}
            <p className="text-xs sm:text-sm font-semibold text-center text-muted-foreground opacity-0 animate-fade-in-up [animation-delay:900ms] mb-4">
              We only onboard 5 Dubai agents/teams per month to maintain accuracy and performance. Once the slots are filled, onboarding closes.
            </p>
            <p className="text-sm font-bold text-center text-white/90 opacity-0 animate-fade-in-up [animation-delay:1000ms]">If your enquiry volume is rising and your response time is falling, every day you wait is costing you real revenue. Stop losing deals to faster agents.</p>
            
            </div>
            {/* End Content wrapper */}
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </div>
    </>
  );
};
export default Index;