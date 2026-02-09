import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  type?: string;
  schema?: object;
  geoRegion?: string;
  geoPlacename?: string;
  locale?: string;
  hreflangs?: Array<{ lang: string; href: string }>;
  canonical?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function SEO({ 
  title, 
  description, 
  keywords = "AI voice agent, AI automation agency, voice AI assistant, 24/7 call answering, lead qualification, appointment scheduling, customer service automation, AI receptionist, virtual assistant, automated call handling, real estate, healthcare, solar, ecommerce, USA, India, UAE",
  ogImage = "https://vocaldice.com/og-image.jpg",
  url = "https://vocaldice.com",
  type = "website",
  schema,
  geoRegion = "GLOBAL",
  geoPlacename = "Global",
  locale = "en_US",
  hreflangs = [],
  canonical = url,
  breadcrumbs
}: SEOProps) {
  const fullTitle = `${title} | VocalDice`;
  const siteName = "VocalDice - AI Automation Agency";
  
  // Geo-targeting for different regions (USA, India, UAE)
  const geoCoordinates = {
    "US": { lat: "37.0902", long: "-95.7129" }, // USA (Central)
    "IN": { lat: "28.7041", long: "77.1025" }, // India (Delhi)
    "AE": { lat: "24.4539", long: "54.3773" }, // UAE (Abu Dhabi)
    "GLOBAL": { lat: "20.0", long: "0.0" } // Global fallback
  };

  const geoCoord = geoCoordinates[geoRegion as keyof typeof geoCoordinates] || geoCoordinates["GLOBAL"];

  // Breadcrumb schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://vocaldice.com${crumb.url}`
    }))
  } : null;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Language & Region - Geo-Targeting */}
      <meta httpEquiv="content-language" content={locale.replace("_", "-")} />
      <meta name="geo.region" content={geoRegion} />
      <meta name="geo.placename" content={geoPlacename} />
      <meta name="geo.position" content={`${geoCoord.lat};${geoCoord.long}`} />
      
      {/* Hreflang for Multi-Regional Content */}
      <link rel="alternate" hrefLang="en-US" href="https://vocaldice.com" />
      <link rel="alternate" hrefLang="en-IN" href="https://vocaldice.com/in" />
      <link rel="alternate" hrefLang="en-AE" href="https://vocaldice.com/ae" />
      <link rel="alternate" hrefLang="x-default" href="https://vocaldice.com" />
      {hreflangs.map((hreflang) => (
        <link key={hreflang.lang} rel="alternate" hrefLang={hreflang.lang} href={hreflang.href} />
      ))}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content="ar_AE" />
      <meta property="og:locale:alternate" content="en_IN" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@vocaldice" />
      
      {/* Robots & Crawling */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      
      {/* Mobile & Accessibility */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {/* Google Analytics 4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}', {
            'page_path': '${url}',
            'geo': '${geoRegion}',
            'anonymize_ip': true
          });
        `}
      </script>
    </Helmet>
  );
}