import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalPopupButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CalPopupButton({ children, className, onClick }: CalPopupButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "default",
        embedLibUrl: "https://cal.id/embed-link/embed.js",
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

  const handleClick = async () => {
    if (onClick) onClick();
    
    const cal = await getCalApi({
      namespace: "default",
      embedLibUrl: "https://cal.id/embed-link/embed.js",
    });
    cal("floatingButton", {
      calLink: "vocaldice/strategy-session",
      calOrigin: "https://cal.id",
      config: {
        layout: "month_view",
      },
    });
    cal("open");
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      data-cal-namespace="default"
    >
      {children}
    </button>
  );
}
