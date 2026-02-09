import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../Navigation";
import Footer from "../../Footer";

export default function AppointmentBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "default",
        embedJsUrl: "https://cal.id/embed-link/embed.js",
      });
      cal("ui", {
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#18c3e5",
          },
          dark: {
            "cal-brand": "#fafafa",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>Schedule Your Strategy Session - VocalDice</title>
        <meta name="description" content="Book your 30-minute strategy session with VocalDice. Discover how AI voice assistants can transform your sales process." />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-black">
        {/* Animated Background Grid */}
        <div className="fixed inset-0 bg-gradient-to-b from-emerald-950/20 via-black to-black pointer-events-none" />
        <div className="fixed inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative z-10 pt-32 pb-20 px-4 md:pt-40">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Schedule Your Strategy Session
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Book a 30-minute discovery call to explore how AI voice assistants can transform your business
            </p>
          </div>

          {/* Calendar Container */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-emerald-500/20 bg-black/50 backdrop-blur-sm">
              <Cal
                namespace="default"
                calLink="vocaldice/strategy-session"
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "scroll",
                }}
                config={{
                  layout: "month_view",
                }}
                calOrigin="https://cal.id"
                embedJsUrl="https://cal.id/embed-link/embed.js"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "30 Minutes",
                description: "Quick, focused discovery call",
              },
              {
                title: "Live Demo",
                description: "See AI voice in action",
              },
              {
                title: "Custom ROI",
                description: "Tailored solution for your business",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-gradient-to-br from-emerald-900/10 to-teal-900/5 border border-emerald-500/20 text-center"
              >
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
