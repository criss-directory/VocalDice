import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { User, Users, Building } from 'lucide-react'
import { ReactNode } from 'react'

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 [--border:hsl(var(--primary))] dark:[--border:hsl(var(--primary))] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"/>
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center rounded-lg border-t border-l border-primary/30">{children}</div>
    </div>
)

export function WhoIsItFor() {
    return (
        <section className="py-24">
            <div className="container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-bold lg:text-5xl">
                        Engineered for Every Scale of Dubai Real Estate
                    </h2>
                    <p className="text-m md:text-lg text-center mb-10 opacity-0 animate-fade-in-up pt-2  [animation-delay:200ms] text-muted-foreground max-w-2xl mx-auto">
                       Whether you're closing Marina rentals, handling Palm Jumeirah investors, or running a 100-agent brokerage, VocalDice makes sure every enquiry is answered instantly before another agent takes the lead.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 *:text-center">
                    <Card className="group bg-card border-border/50 hover:border-primary/50 transition-all">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <User className="size-6 text-primary" aria-hidden />
                            </CardDecorator>
                            <p className="mt-6 font-bold text-xl">For the Ambitious Agent</p>
                            <p className="text-sm font-bold text-white">Turn every enquiry into a real opportunity.</p>
                            
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Dubai agents survive on speed. Your AI assistant replies instantly, qualifies buyers, books viewings, and ensures you never lose a deal while you're on site or driving between viewings.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group bg-card border-border/50 hover:border-primary/50 transition-all">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Users className="size-6 text-primary" aria-hidden />
                            </CardDecorator>

                            <p className="mt-6 font-bold text-xl">For High-Performing Teams</p>
                            <p className="text-sm font-bold text-white">Keep your team focused on revenue, not admin.</p>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Every enquiry receives a fast, professional response boosting conversion rates, reducing workload, and eliminating inconsistent follow-up from busy team members.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group bg-card border-border/50 hover:border-primary/50 transition-all">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Building className="size-6 text-primary" aria-hidden />
                            </CardDecorator>

                            <p className="mt-6 font-bold text-xl">For Leading Brokerages</p>
                            <p className="text-sm font-bold text-white">Capture every lead in the market before your competitors do.</p>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Your AI ISA handles massive enquiry volume, responds instantly, books appointments, qualifies leads, and sends summaries to WhatsApp enabling you to scale without hiring more agents or losing deals to faster teams.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}