import ReactGA from "react-ga4";

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
  
  if (measurementId && measurementId !== "G-XXXXXXXXXX") {
    ReactGA.initialize(measurementId, {
      gaOptions: {
        anonymizeIp: true,
        cookieFlags: 'SameSite=None;Secure'
      }
    });
  }
};

// Log page views
export const logPageView = (path?: string) => {
  ReactGA.send({ 
    hitType: "pageview", 
    page: path || window.location.pathname + window.location.search 
  });
};

// Track CTA button clicks
export const trackCTAClick = (buttonName: string, location: string) => {
  ReactGA.event({
    category: "CTA",
    action: "Click",
    label: `${buttonName} - ${location}`,
  });
};

// Track demo requests
export const trackDemoRequest = (source: string) => {
  ReactGA.event({
    category: "Lead Generation",
    action: "Demo Request",
    label: source,
  });
};

// Track calendar booking
export const trackCalendarOpen = (ctaLocation: string) => {
  ReactGA.event({
    category: "Calendar",
    action: "Booking Initiated",
    label: ctaLocation,
  });
};

// Track audio demo plays
export const trackAudioPlay = (demoType: "buyer" | "seller") => {
  ReactGA.event({
    category: "Demo",
    action: "Audio Play",
    label: demoType === "buyer" ? "Buyer Demo" : "Seller Demo",
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  ReactGA.event({
    category: "Engagement",
    action: "Scroll Depth",
    label: `${percentage}%`,
    value: percentage,
  });
};

// Track section views
export const trackSectionView = (sectionName: string) => {
  ReactGA.event({
    category: "Engagement",
    action: "Section View",
    label: sectionName,
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  ReactGA.event({
    category: "External Link",
    action: "Click",
    label: `${linkText} - ${url}`,
  });
};

// Track form interactions
export const trackFormStart = (formName: string) => {
  ReactGA.event({
    category: "Form",
    action: "Started",
    label: formName,
  });
};

export const trackFormSubmit = (formName: string) => {
  ReactGA.event({
    category: "Form",
    action: "Submitted",
    label: formName,
  });
};

// Track feature interactions
export const trackFeatureClick = (featureName: string) => {
  ReactGA.event({
    category: "Features",
    action: "Click",
    label: featureName,
  });
};

// Track FAQ interactions
export const trackFAQClick = (question: string) => {
  ReactGA.event({
    category: "FAQ",
    action: "Question Opened",
    label: question,
  });
};

// Custom conversion events
export const trackConversion = (conversionType: string, value?: number) => {
  ReactGA.event({
    category: "Conversion",
    action: conversionType,
    value: value,
  });
};