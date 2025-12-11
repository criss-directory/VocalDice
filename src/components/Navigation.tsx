import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logo from "@/assets/vocaldice-logo.png";

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
          <div className="flex items-center">
            <img src={logo} alt="Vocaldice" className="h-12" />
          </div>

          <Button
            variant="luxury"
            size="lg"
            className="rounded-full px-8 hover:scale-105 transition-transform"
            onClick={() => window.location.href = "https://cal.id/sai-krishna/discovery-call"}
          >
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
