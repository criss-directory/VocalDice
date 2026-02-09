import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import logo from "@/assets/vocaldice_logo.png";
import { Link } from "react-router-dom";
import { Menu, Phone, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img
              src={logo}
              alt="VocalDice - AI Inside Sales Agent"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                Solutions
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/ai-real-estate-assistant" className="cursor-pointer">
                    Real Estate ISA
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ai-solar-lead-qualification" className="cursor-pointer">
                    Solar Lead Qualification
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ai-medical-receptionist" className="cursor-pointer">
                    Medical Receptionist
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ai-ecommerce-customer-support" className="cursor-pointer">
                    Ecommerce Support AI
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/how-it-works"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/integrations"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Integrations
            </Link>
            <Link
              to="/case-studies"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Case Studies
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <Link to="/appointment-booking" className="hidden sm:flex">
            <Button className="gap-2 rounded-full bg-primary text-white hover:bg-primary/90 font-semibold flex-shrink-0">
              <Phone className="w-4 h-4" />
              Book Demo
            </Button>
          </Link>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden flex-shrink-0">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="text-lg font-medium">Solutions</div>
                <Link
                  to="/ai-real-estate-assistant"
                  className="text-sm font-medium ml-4"
                >
                  Real Estate ISA
                </Link>
                <Link
                  to="/ai-solar-lead-qualification"
                  className="text-sm font-medium ml-4"
                >
                  Solar Lead Qualification
                </Link>
                <Link
                  to="/ai-medical-receptionist"
                  className="text-sm font-medium ml-4"
                >
                  Medical Receptionist
                </Link>
                <Link
                  to="/ai-ecommerce-customer-support"
                  className="text-sm font-medium ml-4"
                >
                  Ecommerce Support AI
                </Link>
                
                <Link
                  to="/how-it-works"
                  className="text-lg font-medium"
                >
                  How It Works
                </Link>
                <Link
                  to="/integrations"
                  className="text-lg font-medium"
                >
                  Integrations
                </Link>
                <Link
                  to="/case-studies"
                  className="text-lg font-medium"
                >
                  Case Studies
                </Link>

                <Link to="/appointment-booking" className="w-full mt-6">
                  <Button className="w-full rounded-full gap-2">
                    <Phone className="w-4 h-4" />
                    Book Demo
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
