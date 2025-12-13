// Complete Schema.org structured data for VocalDice

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VocalDice Technologies",
  "alternateName": "VocalDice",
  "url": "https://vocaldice.com",
  "logo": "https://vocaldice.com/vocaldice-logo.png",
  "description": "AI Inside Sales Agent for Real Estate Agents Around Dubai. Never miss another potential lead again with 24/7 automated lead qualification, appointment booking, and call handling for property agents.",
  "foundingDate": "2025-06",
  "email": "info@vocaldice.com",
  "slogan": "Never miss another potential lead again",
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
  "serviceType": "AI Inside Sales Agent for Real Estate",
  "name": "AI Inside Sales Agent for Dubai Real Estate Agents",
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
  "description": "AI Inside Sales Agent for Real Estate Agents Around Dubai. Never miss another potential lead again with automated inbound and outbound call handling, lead qualification, and appointment booking. Works 24/7 in English and Arabic, responds in 30 seconds.",
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
    "name": "AI Inside Sales Agent Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24/7 Inbound Call Handling",
          "description": "Automated answering of property inquiries in English and Arabic. Never miss another potential lead again with 24/7 call coverage."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lead Qualification",
          "description": "Automated qualification of real estate leads based on budget, location, timeline, and property type. Ensure every potential lead is properly assessed."
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
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ahmed Hassan"
      },
      "reviewBody": "VocalDice transformed our lead follow-up process. We never miss another potential lead again. The AI Inside Sales Agent handles calls 24/7 in both English and Arabic, converting 40% more leads."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Al-Mansoori"
      },
      "reviewBody": "We generate 25-30 qualified leads monthly now and never miss another potential lead. The AI Inside Sales Agent saves our team 15+ hours per week. Best investment for real estate agents in Dubai."
    }
  ]
};

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
        "text": "Pricing is based on call volume and customization needs. Typical setup is $1,000-$1,500 one-time, with monthly fees of $400-$700 depending on usage. We offer a free consultation to assess your specific requirements and provide accurate pricing."
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

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "VocalDice AI Inside Sales Agent",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web-based",
  "description": "AI Inside Sales Agent for Real Estate Agents Around Dubai. Never miss another potential lead again with automated lead generation, qualification, and 24/7 call handling.",
  "offers": {
    "@type": "Offer",
    "price": "400-700",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "400-700",
      "priceCurrency": "USD",
      "billingDuration": "P1M"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47"
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