import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  type?: string;
  schema?: object;
}

export default function SEO({ 
  title, 
  description, 
  keywords = "real estate call center Dubai, property finder lead follow up, bayat lead management, real estate answering service UAE, AI phone agent Dubai, Dubai property lead qualification, automated real estate follow up, real estate automation Dubai, Arabic and English support",
  ogImage = "https://vocaldice.com/og-image.jpg",
  url = "https://vocaldice.com",
  type = "website",
  schema
}: SEOProps) {
  const fullTitle = `${title} | VocalDice - AI Inside Sales Agent for Dubai Real Estate`;
  const siteName = "VocalDice";
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Language & Region */}
      <meta httpEquiv="content-language" content="en-AE" />
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_AE" />
      <meta property="og:locale:alternate" content="ar_AE" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <link rel="canonical" href={url} />
      
      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}