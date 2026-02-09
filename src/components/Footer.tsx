import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import logoImage from "@/assets/vocaldice_logo.png";

interface SocialLink {
  name: string;
  href: string;
  Icon: LucideIcon;
}

interface FooterLink {
  name: string;
  Icon: LucideIcon;
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  socialLinks?: SocialLink[];
  columns?: FooterColumn[];
  copyright?: string;
}

const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ className, socialLinks, columns, copyright, ...props }, ref) => {
    const defaultSocialLinks = socialLinks || [
      {
        name: "Twitter",
        href: "https://twitter.com/SaiKrishna36882?t=zLeof7zlJEulvY4e0dxtag&s=09",
        Icon: Twitter,
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/sai-krishna-454a0223b",
        Icon: Linkedin,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/saikrishna42__/",
        Icon: Instagram,
      },
      {
        name: "Email",
        href: "mailto:saikrishna@vocaldice.com",
        Icon: Mail,
      },
    ];

    const defaultColumns = columns || [
      {
        title: "Services",
        links: [
          {
            name: "Home",
            Icon: Phone,
            href: "/",
          },
          {
            name: "How It Works",
            Icon: Phone,
            href: "/how-it-works",
          },
          {
            name: "Integrations",
            Icon: Phone,
            href: "/integrations",
          },
          {
            name: "Case Studies",
            Icon: Phone,
            href: "/case-studies",
          },
        ],
      },
      {
        title: "Industries",
        links: [
          {
            name: "Real Estate",
            Icon: Phone,
            href: "/ai-real-estate-assistant",
          },
          {
            name: "Healthcare",
            Icon: Phone,
            href: "/ai-medical-receptionist",
          },
          {
            name: "Solar Sales",
            Icon: Phone,
            href: "/ai-solar-lead-qualification",
          },
          {
            name: "Ecommerce",
            Icon: Phone,
            href: "/ai-ecommerce-customer-support",
          },
        ],
      },
      {
        title: "Legal",
        links: [
          {
            name: "Privacy Policy",
            Icon: Phone,
            href: "/privacy-policy",
          },
          {
            name: "Terms of Service",
            Icon: Phone,
            href: "/terms-of-service",
          },
          {
            name: "Data Security",
            Icon: Phone,
            href: "/data-security",
          },
        ],
      },
    ];

    return (
      <div
        ref={ref}
        className={cn("pt-12", className)}
        {...props}
      >
        <div className="border-t border-border/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-4">
                <Link to="/" className="inline-block mb-4">
                  <img 
                    src={logoImage} 
                    alt="VocalDice" 
                    className="h-10 w-auto"
                  />
                </Link>
                <p className="text-sm text-muted-foreground max-w-xs">
                  VocalDice is an AI automation agency. We design, deploy, and manage 24/7 AI agents for your business. Never miss another lead. Integrated with Zoho, Salesforce & WhatsApp.
                </p>

                {/* Contact Info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:support@vocaldice.com">support@vocaldice.com</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Bengaluru, India</span>
                  </div>
                </div>

                {/* Social Links */}
                
                <div className="mt-6 flex items-center gap-4">
                   <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                    Founder on social
                  </p>

                  {defaultSocialLinks.map((link) => {
                    const Icon = link.Icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title={link.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Links Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-8 gap-8 lg:gap-12">
                {defaultColumns.map(({ title, links }) => (
                  <div key={title}>
                    <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
                    <ul className="space-y-3">
                      {links.map(({ name, Icon, href }) => (
                        <li key={name}>
                          <Link
                            to={href || "#"}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button Section */}
            <div className="mt-12 pt-12 border-t border-border/30">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Ready to Scale Your Sales?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Stop losing leads while you respond automate from day one
                  </p>
                </div>
                <button
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold text-sm transition-all shadow-lg shadow-primary/30 whitespace-nowrap inline-block"
                  data-cal-link="vocaldice/strategy-session"
                  data-cal-namespace="default"
                  data-cal-origin="https://cal.id"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book Free Call
                </button>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-border/30">
              <p className="text-xs text-muted-foreground text-center">
                {copyright || `© ${new Date().getFullYear()} VocalDice. All rights reserved.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Footer.displayName = "Footer";
export default Footer;