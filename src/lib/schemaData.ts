// Complete Schema.org structured data for VocalDice - Multi-Niche & Multi-Region

// ORGANIZATION SCHEMAS BY REGION
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VocalDice Technologies",
  "alternateName": "VocalDice",
  "url": "https://vocaldice.com",
  "logo": "https://vocaldice.com/vocaldice-logo.png",
  "description": "VocalDice is an AI automation agency specializing in designing, building, deploying, and managing custom AI voice agent systems for businesses across Real Estate, Healthcare, Solar, and Ecommerce. We serve USA, India, and UAE markets. Our team handles all aspects of AI implementation so you can focus on your business.",
  "foundingDate": "2025-06",
  "email": "info@vocaldice.com",
  "phone": "+971-4-XXXXXXX",
  "slogan": "Never miss another potential lead again",
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "knowsLanguage": ["en", "ar", "hi"],
  "sameAs": [
    "https://linkedin.com/company/vocaldice",
    "https://twitter.com/vocaldice",
    "https://facebook.com/vocaldice"
  ]
};

// REGIONAL LOCAL BUSINESS SCHEMAS
export const localBusinessSchemaUSA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VocalDice - AI Automation Agency (USA)",
  "url": "https://vocaldice.com/usa",
  "logo": "https://vocaldice.com/vocaldice-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Business Support",
    "telephone": "+1-XXX-XXX-XXXX",
    "email": "usa@vocaldice.com",
    "availableLanguage": ["en"]
  },
  "areaServed": [
    { "@type": "City", "name": "New York", "containedIn": { "@type": "State", "name": "NY" } },
    { "@type": "City", "name": "Los Angeles", "containedIn": { "@type": "State", "name": "CA" } },
    { "@type": "City", "name": "San Francisco", "containedIn": { "@type": "State", "name": "CA" } },
    { "@type": "City", "name": "Houston", "containedIn": { "@type": "State", "name": "TX" } },
    { "@type": "City", "name": "Chicago", "containedIn": { "@type": "State", "name": "IL" } }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "37.0902",
      "longitude": "-95.7129"
    },
    "geoRadius": "3000000"
  }
};

export const localBusinessSchemaIndia = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VocalDice - AI Automation Agency (India)",
  "url": "https://vocaldice.com/india",
  "logo": "https://vocaldice.com/vocaldice-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Business Support",
    "telephone": "+91-XXX-XXXX-XXXX",
    "email": "india@vocaldice.com",
    "availableLanguage": ["en", "hi"]
  },
  "areaServed": [
    { "@type": "City", "name": "Mumbai", "containedIn": { "@type": "State", "name": "Maharashtra" } },
    { "@type": "City", "name": "Bangalore", "containedIn": { "@type": "State", "name": "Karnataka" } },
    { "@type": "City", "name": "Delhi", "containedIn": { "@type": "State", "name": "Delhi" } },
    { "@type": "City", "name": "Hyderabad", "containedIn": { "@type": "State", "name": "Telangana" } },
    { "@type": "City", "name": "Pune", "containedIn": { "@type": "State", "name": "Maharashtra" } }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "28.7041",
      "longitude": "77.1025"
    },
    "geoRadius": "2500000"
  }
};

export const localBusinessSchemaUAE = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VocalDice - AI Automation Agency (UAE)",
  "url": "https://vocaldice.com/uae",
  "logo": "https://vocaldice.com/vocaldice-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Business Support",
    "telephone": "+971-4-XXXXXXX",
    "email": "uae@vocaldice.com",
    "availableLanguage": ["en", "ar"]
  },
  "areaServed": [
    { "@type": "City", "name": "Dubai", "containedIn": { "@type": "Country", "name": "United Arab Emirates" } },
    { "@type": "City", "name": "Abu Dhabi", "containedIn": { "@type": "Country", "name": "United Arab Emirates" } },
    { "@type": "City", "name": "Sharjah", "containedIn": { "@type": "Country", "name": "United Arab Emirates" } }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "geoRadius": "500000"
  }
};

// NICHE-SPECIFIC SERVICE SCHEMAS

// Real Estate AI Service Schema
export const realEstateServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AI Real Estate Assistant - Lead Qualification & Appointment Booking",
  "description": "Custom AI voice agent for real estate professionals. Handles lead qualification, property inquiry responses, viewing appointment scheduling, and Property Finder/Bayut integration across USA, India, and UAE markets.",
  "url": "https://vocaldice.com/real-estate-assistant",
  "provider": {
    "@type": "Organization",
    "name": "VocalDice Technologies",
    "url": "https://vocaldice.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "serviceType": "AI Voice Agent for Real Estate",
  "serviceCapabilities": [
    "24/7 Inbound Lead Call Handling",
    "Lead Qualification by Budget, Location, Timeline",
    "Property Viewing Appointment Scheduling",
    "Property Finder & Bayut Integration",
    "CRM System Integration (Salesforce, HubSpot, Zoho)",
    "After-Hours Call Coverage",
    "Multilingual Support (English, Arabic, Hindi)"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "68",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Healthcare AI Service Schema
export const healthcareServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "HIPAA-Compliant AI Medical Receptionist & Appointment Booking",
  "description": "AI-powered medical voice agent for healthcare providers. Handles patient inquiries, appointment scheduling, prescription refill requests, and compliance with HIPAA, DND regulations across USA, India, and UAE.",
  "url": "https://vocaldice.com/medical-receptionist",
  "provider": {
    "@type": "Organization",
    "name": "VocalDice Technologies",
    "url": "https://vocaldice.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "serviceType": "AI Voice Agent for Healthcare",
  "serviceCapabilities": [
    "HIPAA-Compliant Patient Call Handling",
    "Appointment Booking & Rescheduling",
    "Patient Insurance Verification",
    "Prescription Refill Request Management",
    "DND (Do Not Disturb) Compliant",
    "EHR System Integration",
    "Multilingual Medical Support"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "52",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Solar AI Service Schema
export const solarServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AI Solar Lead Qualification & Appointment Agent",
  "description": "Specialized AI voice agent for solar companies. Qualifies solar prospects, schedules site surveys, explains financing options, and integrates with solar industry CRM systems across USA, India, and UAE.",
  "url": "https://vocaldice.com/solar-ai",
  "provider": {
    "@type": "Organization",
    "name": "VocalDice Technologies",
    "url": "https://vocaldice.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "serviceType": "AI Voice Agent for Solar Industry",
  "serviceCapabilities": [
    "Solar Lead Qualification",
    "Site Survey Appointment Scheduling",
    "Financing Option Explanation",
    "Roof Type & Energy Usage Assessment",
    "Solar Industry CRM Integration",
    "Installation Timeline Management",
    "Follow-up Automation"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "45",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Ecommerce AI Service Schema
export const ecommerceServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AI Ecommerce Customer Support & Sales Agent",
  "description": "AI voice agent for ecommerce businesses. Handles order inquiries, returns processing, upselling, customer support, and integrates with major ecommerce platforms across USA, India, and UAE.",
  "url": "https://vocaldice.com/ecommerce-ai",
  "provider": {
    "@type": "Organization",
    "name": "VocalDice Technologies",
    "url": "https://vocaldice.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "serviceType": "AI Voice Agent for Ecommerce",
  "serviceCapabilities": [
    "24/7 Customer Support",
    "Order Status & Tracking",
    "Returns & Refund Processing",
    "Product Recommendations & Upselling",
    "Ecommerce Platform Integration (Shopify, WooCommerce)",
    "Inventory Management Queries",
    "Multilingual Customer Support"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "38",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Virtual Receptionist Service Schema
export const virtualReceptionistSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AI Virtual Receptionist for Business Call Management",
  "description": "24/7 AI virtual receptionist service for businesses. Handles inbound calls, call routing, message taking, and call scheduling across USA, India, and UAE for businesses of all sizes.",
  "url": "https://vocaldice.com/virtual-receptionist",
  "provider": {
    "@type": "Organization",
    "name": "VocalDice Technologies",
    "url": "https://vocaldice.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "serviceType": "AI Virtual Receptionist Service",
  "serviceCapabilities": [
    "24/7 Inbound Call Handling",
    "Professional Call Routing",
    "Message Taking & Relay",
    "Appointment Scheduling",
    "Caller Information Collection",
    "Emergency Call Escalation",
    "Multilingual Reception"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "73",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Call Answering Service Schema
export const callAnsweringServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AI Call Answering Service for Small Businesses",
  "description": "Affordable 24/7 call answering service powered by AI. Perfect for small businesses, medical offices, and service providers who need professional call handling without hiring additional staff.",
  "url": "https://vocaldice.com/call-answering-service",
  "provider": {
    "@type": "Organization",
    "name": "VocalDice Technologies",
    "url": "https://vocaldice.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "serviceType": "AI Call Answering Service",
  "serviceCapabilities": [
    "Professional Call Answering",
    "After-Hours Support",
    "Appointment Confirmation",
    "Emergency Call Handling",
    "Callback Request Management",
    "CRM Integration",
    "Custom Pricing Based on Volume"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "61",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Backward compatibility
export const serviceSchema = realEstateServiceSchema;

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the AI Inside Sales Agent work for real estate agents in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AI Inside Sales Agent answers every inbound call within 30 seconds, qualifies the lead based on your criteria (budget, location, timeline), and books property viewing appointments automatically. Never miss another potential lead again with 24/7 coverage in both English and Arabic."
      }
    },
    {
      "@type": "Question",
      "name": "Does it work with Property Finder and Bayut leads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, VocalDice is built for Property Finder and Bayut lead workflows. The AI can handle leads from these portals, qualify them based on your criteria, send follow-up messages, and book appointments directly into your calendar system."
      }
    },
    {
      "@type": "Question",
      "name": "Can the AI Inside Sales Agent speak Arabic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our AI Inside Sales Agent supports both English and Arabic conversations seamlessly. It can detect the caller's language and switch automatically, ensuring you never miss another potential lead from Dubai's diverse caller base."
      }
    },
    {
      "@type": "Question",
      "name": "How long does setup take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Setup takes 7-14 days. We analyze your lead sources and workflows, train the AI on your property portfolio and brand voice, integrate with your existing CRM and calendar systems, and conduct thorough testing before going live."
      }
    },
    {
      "@type": "Question",
      "name": "Who is this service designed for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VocalDice is designed for Real Estate Agents Around Dubai who want to never miss another potential lead again. Ideal for agents handling high call volumes, those managing leads from multiple sources, and professionals who lose deals due to slow response times or after-hours inquiries."
      }
    },
    {
      "@type": "Question",
      "name": "What integrations do you support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We integrate with Property Finder, Bayut, WhatsApp Business, popular CRM systems (Salesforce, HubSpot, Zoho), calendar platforms (Google Calendar, Outlook), and automation tools. Our AI Inside Sales Agent ensures seamless workflow integration."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom pricing based on your call volume, AI customization requirements, and integration complexity. We provide a free consultation to assess your specific needs and deliver an accurate proposal after understanding your business goals."
      }
    },
    {
      "@type": "Question",
      "name": "How fast does the AI respond to calls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The AI Inside Sales Agent responds to every inbound call within 30 seconds, 24/7. Never miss another potential lead again, even during evenings, weekends, prayer times, and peak hours when you're busy with site visits."
      }
    },
    {
      "@type": "Question",
      "name": "Can it handle multiple calls at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the AI Inside Sales Agent can handle unlimited simultaneous calls. Never miss another potential lead again - there's no wait time or busy signal, ensuring every lead is answered immediately."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we implement enterprise-grade security measures including data encryption, secure API connections, and compliance with UAE data protection regulations. All call recordings and lead data are stored securely and only accessible to authorized users."
      }
    }
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VocalDice Technologies",
  "image": "https://vocaldice.com/vocaldice-logo.png",
  "description": "AI Inside Sales Agent for Real Estate Agents Around Dubai. Never miss another potential lead again with automated lead generation, qualification, and 24/7 call handling. Focus on closing deals while we handle your leads.",
  "url": "https://vocaldice.com",
  "email": "info@vocaldice.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Dubai",
      "containedIn": {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    },
    {
      "@type": "City",
      "name": "Abu Dhabi",
      "containedIn": {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    }
  ],
  "priceRange": "$$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.2048",
    "longitude": "55.2708"
  },
  "sameAs": [
    "https://linkedin.com/company/vocaldice"
  ]
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "VocalDice AI Automation Agency",
  "serviceType": "AI Voice Agent Services",
  "description": "VocalDice is an AI automation agency specializing in custom-built, fully-managed AI voice agent services. We design, build, deploy, and manage AI systems for real estate, healthcare, solar, ecommerce and other industries. Done-for-you AI automation across USA, India, and UAE.",
  "provider": {
    "@type": "Organization",
    "name": "VocalDice",
    "url": "https://vocaldice.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47"
  },
  "serviceCapabilities": [
    "Custom AI voice agent design and development",
    "24/7 call handling and automation",
    "Lead qualification and appointment booking",
    "CRM and business system integration",
    "HIPAA, TCPA, TRAI DND, TRA compliance",
    "Multilingual AI support (40+ languages)",
    "Ongoing optimization and management"
  ]
};

// Combined schema for homepage (includes all schemas)
export const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    serviceSchema,
    faqSchema,
    localBusinessSchema,
  ]
};