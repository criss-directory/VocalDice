import { InfiniteSlider } from "@/components/ui/infinite-slider";
import openaiLogo from "@/assets/logos/openai-logo.svg";
import vapiLogo from "@/assets/logos/vapi-logo.svg";
import elevenlabsLogo from "@/assets/logos/elevenlabs-logo.svg";
import n8nLogo from "@/assets/logos/n8n-logo.svg";
import telnyxlogo from "@/assets/logos/telnyx-logo.png";
import gohighlevelLogo from "@/assets/logos/ghl-logo.jpg"; // Note: exact filename with space

export function LogosSlider() {
  return (
    <section className="py bg-background">
      <div className="container mx-auto px-2">
        <h3 className="text-sm md:text-sm font-bold text-center -mb-8">
          Powered By Industry-Leading AI Technology
        </h3>
        
        <InfiniteSlider 
          gap={64} 
          reverse 
          className="w-full py-12"
          duration={50}
        >
          <div className="flex items-center justify-center h-12">
            <img
              src={openaiLogo}
              alt="OpenAI logo"
              className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
          <div className="flex items-center justify-center h-12">
            <img
              src={vapiLogo}
              alt="VAPI logo"
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
          <div className="flex items-center justify-center h-12">
            <img
              src={elevenlabsLogo}
              alt="ElevenLabs logo"
              className="h-5 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
          <div className="flex items-center justify-center h-12">
            <img
              src={n8nLogo}
              alt="n8n logo"
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
          <div className="flex items-center justify-center h-12">
            <img
              src={telnyxlogo}
              alt="telnyx logo"
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
          <div className="flex items-center justify-center h-12">
            <img
              src={gohighlevelLogo}
              alt="GoHighLevel logo"
              className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
        </InfiniteSlider>
      </div>
    </section>
  );
}