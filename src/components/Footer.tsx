import { Mail, MapPin } from "lucide-react";
import logoImage from "@/assets/vocaldice-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer className="py-12 border-t border-border/50 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="Vocaldice Logo" className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              AI Inside Sales Agents for Dubai real estate teams. We help agents, teams, and brokerages close more deals by responding faster than their competitors 24/7.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/#faqs" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/#cta" className="text-muted-foreground hover:text-primary transition-colors">
                  Book Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Dubai & Bengaluru</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>info@vocaldice.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 text-muted-foreground text-sm">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
            <p className="text-center sm:text-left">© {new Date().getFullYear()} VocalDice. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/data-security" className="hover:text-primary transition-colors">Data Security & Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;