"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface CTAProps {
  badge?: {
    text: string
  }
  title: ReactNode
  description?: string
  trustBar?: {
    items: string[]
  }
  action: {
    text: string
    href: string
  }
  riskReversal?: string
  withGlow?: boolean
  className?: string
}

export function CTASection({
  badge,
  title,
  description,
  trustBar,
  action,
  riskReversal,
  withGlow = true,
  className,
}: CTAProps) {
  return (
    <section className={cn("overflow-hidden pt-0 md:pt-0", className)}>
      <div className="relative mx-auto max-w-4xl px-8 py-12 text-center sm:gap-8 md:py-24">
        {/* Frosted Glass Container */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 shadow-lg hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 group">
          {/* Neon Glow Effect on Hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
          
          <div className="relative flex flex-col items-center gap-6">
            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="outline"
                  className="border-primary/50 bg-primary/5"
                >
                  <span className="text-primary">{badge.text}</span>
                </Badge>
              </motion.div>
            )}

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold sm:text-5xl md:text-6xl leading-tight text-white"
            >
              {title}
            </motion.h2>

            {/* Description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground max-w-2xl"
              >
                {description}
              </motion.p>
            )}

            {/* Trust Bar */}
            {trustBar && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 border-t border-border/50 mt-4 w-full"
              >
                {trustBar.items.map((item, index) => (
                  <div key={index} className="text-sm text-muted-foreground flex-1">
                    <p className="font-semibold text-primary">{item.split(":")[0]}</p>
                    <p className="text-xs text-muted-foreground">{item.split(":")[1]}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
              <button
                data-cal-namespace="default"
                data-cal-link="vocaldice/strategy-session"
                data-cal-origin="https://cal.id"
                data-cal-config='{"layout":"month_view"}'
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/30 text-white font-semibold rounded-lg text-lg transition-all"
              >
                {action.text}
              </button>

              {/* Risk Reversal */}
              {riskReversal && (
                <p className="text-xs text-white">{riskReversal}</p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Outer Glow Effect */}
        {withGlow && (
          <div className="absolute -inset-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-20 -z-10 pointer-events-none" />
        )}
      </div>
    </section>
  )
}
