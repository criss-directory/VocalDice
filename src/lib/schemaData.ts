// Complete Schema.org structured data for VocalDice

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VocalDice Technologies",
  "alternateName": "VocalDice",
  "url": "https://vocaldice.com",
  "logo": "https://vocaldice.com/vocaldice-logo.png",
  "description": "AI phone agent for Dubai real estate brokerages. Automated lead qualification, appointment booking, and 24/7 call handling for property agents. Built for Property Finder and Bayut lead workflows.",
  "foundingDate": "2025-06",
  "email": "info@vocaldice.com",
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
  "knowsLanguage": ["en", "ar"],
  "sameAs": [
    "https://linkedin.com/company/vocaldice"
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "geoRadius": "100000"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Phone Agent for Real Estate",
  "name": "AI Phone Agent for Dubai Real Estate",
  "provider": {
    "@type": "Organization",
    "name": "VocalDice Technologies",
    "url": "https://vocaldice.com"
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
      "name": "Abu Dhabi"
    }
  ],
  "description": "Automated AI phone agent that handles inbound and outbound calls for Dubai real estate brokerages. Qualifies leads from Property Finder and Bayut, books property viewing appointments, and provides 24/7 coverage in English and Arabic. Responds to inquiries in 30 seconds.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$$",
    "priceCurrency": "USD"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Real Estate Brokerages, Real Estate Teams, Property Agents, Real Estate Agencies"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Phone Agent Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24/7 Inbound Call Handling",
          "description": "Automated answering of property inquiries in English and Arabic. Never miss a call from Property Finder or Bayut leads."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lead Qualification",
          "description": "Automated qualification of Property Finder and Bayut leads based on budget, location, timeline, and property type."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Appointment Booking",
          "description": "Automated property viewing scheduling with direct calendar integration. Books viewings while you're on site."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outbound Follow-ups",
          "description": "Automated callback and follow-up automation for missed leads and Property Finder inquiries."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "After-Hours Coverage",
          "description": "24/7 call handling including evenings, weekends, and prayer times when agents are unavailable."
        }
      }
    ]
  },
  "termsOfService": "https://vocaldice.com/terms-of-service",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "5",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the AI phone agent work for Dubai real estate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AI phone agent answers every inbound call within 30 seconds, qualifies the lead based on your criteria (budget, location, timeline), and books property viewing appointments automatically. It works 24/7 and supports both English and Arabic callers. The system is specifically built for Property Finder and Bayut lead workflows."
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
      "name": "Can the AI speak Arabic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our AI phone agent supports both English and Arabic conversations seamlessly. It can detect the caller's language and switch automatically, allowing it to handle Dubai's diverse caller base effectively."
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
        "text": "VocalDice is designed for Dubai real estate brokerages with 20-300 agents, teams handling high call volumes, and agencies managing Property Finder and Bayut leads at scale. It's ideal for businesses that lose deals due to slow response times or after-hours inquiries."
      }
    },
    {
      "@type": "Question",
      "name": "What integrations do you support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We integrate with Property Finder, Bayut, WhatsApp Business, popular CRM systems (Salesforce, HubSpot, Zoho), calendar platforms (Google Calendar, Outlook), and automation tools. The system is built on OpenAI, VAPI, and ElevenLabs technology."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing is based on call volume and customization needs. Typical setup is $1,000-$1,500 one-time, with monthly fees of $400-$700 depending on usage. We offer a free consultation to assess your specific requirements and provide accurate pricing."
      }
    },
    {
      "@type": "Question",
      "name": "How fast does the AI respond to calls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The AI responds to every inbound call within 30 seconds, 24/7. This includes evenings, weekends, prayer times, and peak hours when human agents are busy with site visits or other calls."
      }
    },
    {
      "@type": "Question",
      "name": "Can it handle multiple calls at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the AI can handle unlimited simultaneous calls. Unlike human agents or traditional call centers, there's no wait time or busy signal, ensuring every Property Finder and Bayut lead is answered immediately."
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
  "description": "AI phone agent for Dubai real estate. Automated call handling, lead qualification, and appointment booking for property brokerages. Built for Property Finder and Bayut lead workflows.",
  "url": "https://vocaldice.com",
  "email": "info@vocaldice.com",
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

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "VocalDice AI Phone Agent",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web-based",
  "offers": {
    "@type": "Offer",
    "price": "400-700",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "400-700",
      "priceCurrency": "USD",
      "billingDuration": "P1M"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "5"
  },
  "featureList": [
    "24/7 automated call answering",
    "English and Arabic support",
    "Property Finder integration",
    "Bayut lead management",
    "Automated appointment booking",
    "CRM integration",
    "WhatsApp follow-up",
    "Real-time lead qualification"
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
    softwareApplicationSchema
  ]
};