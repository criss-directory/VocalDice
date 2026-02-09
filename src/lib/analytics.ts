import ReactGA from "react-ga4";

// Initialize Google Analytics with enhanced configuration
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
  
  if (measurementId && measurementId !== "G-XXXXXXXXXX") {
    ReactGA.initialize(measurementId, {
      gaOptions: {
        anonymizeIp: true,
        cookieFlags: 'SameSite=None;Secure',
        siteSpeedSampleRate: 100,
        linkAttribution: true
      }
    });
    
    console.log('GA4 initialized with measurement ID:', measurementId);
  } else {
    console.warn('GA4 Measurement ID not configured in VITE_GA_MEASUREMENT_ID environment variable');
  }
};

// Set user properties for dimension tracking
export const setUserProperties = (properties: {
  niche?: 'real_estate' | 'healthcare' | 'solar' | 'ecommerce' | 'virtual_receptionist' | 'call_answering';
  region?: 'USA' | 'India' | 'UAE';
  businessSize?: 'small' | 'medium' | 'enterprise';
  industry?: string;
}) => {
  // Store properties locally for use in event tracking
  if (typeof window !== 'undefined') {
    (window as any).vocalDiceUserProperties = properties;
  }
};

// Log page views with enhanced context
export const logPageView = (path?: string, title?: string, pageNiche?: string) => {
  ReactGA.send({ 
    hitType: "pageview", 
    page: path || window.location.pathname + window.location.search,
    page_title: title || document.title
  });
  
  if (pageNiche) {
    trackCustomEvent('page_view_niche', 'Page View', pageNiche);
  }
};

// Track CTA button clicks (updated terminology)
export const trackCTAClick = (buttonName: string, location: string, niche?: string) => {
  ReactGA.event({
    category: "CTA",
    action: "Click",
    label: `${buttonName} - ${location}${niche ? ` - ${niche}` : ''}`
  });
};

// Track demo/call booking requests
export const trackDemoRequest = (source: string, niche?: string, region?: string) => {
  ReactGA.event({
    category: "Lead Generation",
    action: "Book 30-Min Call",
    label: `${source}${niche ? ` - ${niche}` : ''}${region ? ` - ${region}` : ''}`
  });
};

// Track calendar booking
export const trackCalendarOpen = (ctaLocation: string, niche?: string) => {
  ReactGA.event({
    category: "Calendar",
    action: "Booking Initiated",
    label: `${ctaLocation}${niche ? ` - ${niche}` : ''}`
  });
};

// Track audio demo plays
export const trackAudioPlay = (demoType: string, niche?: string) => {
  ReactGA.event({
    category: "Demo",
    action: "Audio Play",
    label: `${demoType}${niche ? ` - ${niche}` : ''}`
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number, pageName?: string) => {
  ReactGA.event({
    category: "Engagement",
    action: "Scroll Depth",
    label: `${percentage}% - ${pageName || 'Unknown'}`,
    value: percentage,
  });
};

// Track section views
export const trackSectionView = (sectionName: string, niche?: string) => {
  ReactGA.event({
    category: "Engagement",
    action: "Section View",
    label: `${sectionName}${niche ? ` - ${niche}` : ''}`
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
export const trackFormStart = (formName: string, niche?: string) => {
  ReactGA.event({
    category: "Form",
    action: "Started",
    label: `${formName}${niche ? ` - ${niche}` : ''}`
  });
};

export const trackFormSubmit = (formName: string, niche?: string) => {
  ReactGA.event({
    category: "Form",
    action: "Submitted",
    label: `${formName}${niche ? ` - ${niche}` : ''}`
  });
};

// Track feature interactions
export const trackFeatureClick = (featureName: string, niche?: string) => {
  ReactGA.event({
    category: "Features",
    action: "Click",
    label: `${featureName}${niche ? ` - ${niche}` : ''}`
  });
};

// Track FAQ interactions
export const trackFAQClick = (question: string, niche?: string) => {
  ReactGA.event({
    category: "FAQ",
    action: "Question Opened",
    label: `${question}${niche ? ` - ${niche}` : ''}`
  });
};

// Track video plays
export const trackVideoPlay = (videoTitle: string, niche?: string) => {
  ReactGA.event({
    category: "Video",
    action: "Play",
    label: `${videoTitle}${niche ? ` - ${niche}` : ''}`
  });
};

// Track video completion
export const trackVideoCompletion = (videoTitle: string, duration: number, niche?: string) => {
  ReactGA.event({
    category: "Video",
    action: "Complete",
    label: `${videoTitle}${niche ? ` - ${niche}` : ''}`,
    value: duration
  });
};

// Track testimonial interactions
export const trackTestimonialView = (testimonialAuthor: string, niche?: string) => {
  ReactGA.event({
    category: "Testimonial",
    action: "View",
    label: `${testimonialAuthor}${niche ? ` - ${niche}` : ''}`
  });
};

// Track case study engagement
export const trackCaseStudyView = (caseStudyTitle: string, niche?: string) => {
  ReactGA.event({
    category: "Case Study",
    action: "View",
    label: `${caseStudyTitle}${niche ? ` - ${niche}` : ''}`
  });
};

// Track pricing page interactions
export const trackPricingInteraction = (pricingTier: string, action: string) => {
  ReactGA.event({
    category: "Pricing",
    action: action,
    label: pricingTier
  });
};

// Niche-specific tracking helpers
export const trackRealEstateAction = (action: string, details?: string) => {
  ReactGA.event({
    category: "Real Estate",
    action: action,
    label: `${details || ''} - real_estate`.trim()
  });
};

export const trackHealthcareAction = (action: string, details?: string) => {
  ReactGA.event({
    category: "Healthcare",
    action: action,
    label: `${details || ''} - healthcare`.trim()
  });
};

export const trackSolarAction = (action: string, details?: string) => {
  ReactGA.event({
    category: "Solar",
    action: action,
    label: `${details || ''} - solar`.trim()
  });
};

export const trackEcommerceAction = (action: string, details?: string) => {
  ReactGA.event({
    category: "Ecommerce",
    action: action,
    label: `${details || ''} - ecommerce`.trim()
  });
};

// Region-specific tracking
export const trackRegionSpecificAction = (region: 'USA' | 'India' | 'UAE', action: string, details?: string) => {
  ReactGA.event({
    category: `Region - ${region}`,
    action: action,
    label: details
  });
};

// Track conversion goals
export const trackConversion = (conversionType: string, value?: number, niche?: string) => {
  ReactGA.event({
    category: "Conversion",
    action: `${conversionType}${niche ? ` - ${niche}` : ''}`,
    value: value
  });
};

// Track custom events
export const trackCustomEvent = (eventName: string, action: string, label: string, value?: number) => {
  ReactGA.event({
    category: eventName,
    action: action,
    label: label,
    value: value
  });
};

// Track time on page
export const trackTimeOnPage = (pageName: string, secondsSpent: number, niche?: string) => {
  ReactGA.event({
    category: "Engagement",
    action: "Time on Page",
    label: `${pageName}${niche ? ` - ${niche}` : ''}`,
    value: secondsSpent
  });
};

// Track error tracking for debugging
export const trackError = (errorMessage: string, errorCode?: string) => {
  ReactGA.event({
    category: "Error",
    action: errorCode || "Unknown",
    label: errorMessage,
    value: 1
  });
};

// Track API/integration errors
export const trackIntegrationError = (integrationName: string, errorMessage: string) => {
  ReactGA.event({
    category: "Integration Error",
    action: integrationName,
    label: errorMessage
  });
};