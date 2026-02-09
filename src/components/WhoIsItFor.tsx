import { motion } from 'framer-motion';
import { Globe, Zap, Waypoints, Users, AudioWaveform, BarChart3, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Globe,
    title: "Speaks Your Customer's Language.",
    description: "Fluent in English, Hindi (Hinglish), and Arabic (Multilingual almost all Indian Languages). Our AI adapts to local dialects and accents, ensuring your customers in Dubai or Delhi feel understood, not processed.",
    headline: "Multilingual 'Native' Fluency"
  },
  {
    icon: Zap,
    title: "The 10-Second Lead Response.",
    description: "The moment a lead hits your Facebook or Google ad, our AI calls them. Connect with buyers while they are still looking at your screen, increasing conversion by up to 391%.",
    headline: "Instant 'Speed-to-Lead' Dialing"
  },
  {
    icon: Waypoints,
    title: "Plugs Into Your Existing Stack.",
    description: "We integrate natively with Zoho, HubSpot, Salesforce, and GoHighLevel. Plus, the AI automatically sends WhatsApp confirmations and calendar invites immediately after the call.",
    headline: "Seamless CRM & WhatsApp Sync"
  },
  {
    icon: Users,
    title: "Handle 1 or 10,000 Calls at Once.",
    description: "Launching a massive festive season campaign? Your AI scales instantly to handle thousands of simultaneous calls without hiring a single extra staff member.",
    headline: "Infinite Scalability"
  },
  {
    icon: AudioWaveform,
    title: '"Is This a Real Person?"',
    description: "With sub-500ms latency, breath pauses, and natural fillers (\"umm,\" \"aha\"), our AI handles interruptions gracefully. It sounds so human, clients often say \"Thank you, ma'am\" at the end.",
    headline: "Hyper-Realistic Human Tone"
  },
  {
    icon: BarChart3,
    title: "Full Transparency & Analytics.",
    description: "Don't just get a booking; get the data. Our team provides full call recordings, transcripts, and sentiment analysis so you understand exactly why a lead said \"Yes\" or \"No.\"",
    headline: "Actionable Intelligence"
  }
];

export function WhoIsItFor() {
  return (
    <section className="py-24 md:py-32 bg-black text-zinc-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Automate Revenue.
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl">
            A complete ecosystem designed to capture, qualify, and close leads 24/7. No sick days, no training gaps, just performance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, icon: Icon, description, headline }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-visible border-zinc-800 bg-gradient-to-b from-zinc-950/60 to-zinc-950/30 p-0 transition-colors duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 h-full">
                {/* Subtle gradient on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-cyan-400/10 via-cyan-400/5 to-transparent" />
                </div>

                {/* Faint inner glow that appears on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/[0.03] group-hover:to-cyan-400/[0.06] transition-colors" />

                {/* Corner squares on hover */}
                <div className="pointer-events-none absolute inset-0 hidden group-hover:block">
                  <div className="absolute -left-2 -top-2 h-3 w-3 bg-cyan-400" />
                  <div className="absolute -right-2 -top-2 h-3 w-3 bg-cyan-400" />
                  <div className="absolute -left-2 -bottom-2 h-3 w-3 bg-cyan-400" />
                  <div className="absolute -right-2 -bottom-2 h-3 w-3 bg-cyan-400" />
                </div>

                <CardHeader className="relative z-10 flex flex-row items-start gap-4 p-6">
                  <motion.div 
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-xs text-cyan-400 font-semibold tracking-wide mb-1">{headline}</p>
                    <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-cyan-100 transition-colors">
                      {title}
                    </h3>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 px-6 pb-6 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {description}
                </CardContent>

                {/* Focus ring accent on hover */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-cyan-400/0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CRM Integration CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
            Don't Change Your Workflow.{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Just Supercharge It.
            </span>
          </h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
            Our AI integrates natively with your existing Zoho, HubSpot, or Salesforce setup in under 48 hours. No complex coding required.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/integrations">
              <Button 
                variant="luxury" 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
              >
                Check My CRM Compatibility
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
