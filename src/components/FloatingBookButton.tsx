import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function FloatingBookButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "default",
        embedJsUrl: "https://cal.id/embed-link/embed.js",
      });
      cal("floatingButton", {
        calLink: "vocaldice/strategy-session",
        calOrigin: "https://cal.id",
        config: {
          layout: "month_view",
        },
        buttonText: "Book 30-Min Call",
        hideButtonIcon: false,
        buttonPosition: "bottom-right",
        buttonColor: "#10b981",
        buttonTextColor: "#ffffff",
      });
      cal("ui", {
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#10b981",
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

  return null;
}
