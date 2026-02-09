import { InfiniteSlider } from "@/components/ui/infinite-slider";
import openaiLogo from "@/assets/logos/openai-logo.svg";
import vapiLogo from "@/assets/logos/vapi-logo.svg";
import elevenlabsLogo from "@/assets/logos/elevenlabs-logo.svg";
import n8nLogo from "@/assets/logos/n8n-logo.svg";
import telnyxlogo from "@/assets/logos/telnyx-logo.png";
import gohighlevelLogo from "@/assets/logos/ghl-logo.jpg";
import plivoLogo from "@/assets/logos/Plivo_logo.png";
import retellLogo from "@/assets/logos/retell_logo.png";

export function LogosSlider() {
  return (
    <section className="py bg-black">
      <div className="container mx-auto px-2">
        <h3 className="text-sm md:text-sm font-bold text-center -mb-8 text-white">
          Powered By Industry-Leading AI Technology
        </h3>
        
        <InfiniteSlider 
          gap={64}
          className="w-full py-12"
          duration={50}
        >
          <div className="flex items-center justify-center h-12 flex-shrink-0">
            <img
              src={openaiLogo}
              alt="OpenAI logo"
              className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center h-12 flex-shrink-0">
            <img
              src={vapiLogo}
              alt="VAPI logo"
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center h-12 flex-shrink-0">
            <img
              src={elevenlabsLogo}
              alt="ElevenLabs logo"
              className="h-5 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center h-12 flex-shrink-0">
            <img
              src={n8nLogo}
              alt="n8n logo"
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center h-12 flex-shrink-0">
            <img
              src={telnyxlogo}
              alt="telnyx logo"
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center h-12 flex-shrink-0">
            <img
              src={gohighlevelLogo}
              alt="GoHighLevel logo"
              className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center h-12 flex-shrink-0">
            <img
              src={plivoLogo}
              alt="Plivo logo"
              className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center h-12 flex-shrink-0">
            <img
              src={retellLogo}
              alt="Retell logo"
              className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              loading="lazy"
            />
          </div>
        </InfiniteSlider>
      </div>
    </section>
  );
}