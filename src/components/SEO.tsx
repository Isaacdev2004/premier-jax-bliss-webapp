import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  image?: string;
  type?: string;
}

const SEO = ({
  title = "JAX Premier Health Center | Internal Medicine & Wellness in Jacksonville FL",
  description = "JAX Premier Health Center offers comprehensive internal medicine, primary care, chronic disease management, and wellness services in Jacksonville, Florida. Led by Dr. Donzo, we provide personalized healthcare for adults 18+.",
  keywords = "internal medicine Jacksonville FL, primary care Jacksonville, med spa Jacksonville, wellness center Jacksonville, Dr. Donzo, chronic disease management, preventive care, telehealth Jacksonville, weight loss Jacksonville, healthcare Jacksonville Florida",
  canonicalUrl = "https://jaxpremierhealth.com",
  image = "https://jaxpremierhealth.com/lovable-uploads/0c86fb79-273d-4782-bdcc-19caa0014d00.png",
  type = "website"
}: SEOProps) => {
  const siteTitle = title.includes("JAX Premier") ? title : `${title} | JAX Premier Health Center`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="JAX Premier Health Center" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="JAX Premier Health Center" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Jacksonville" />
      <meta name="geo.position" content="30.3322;-81.6557" />
      <meta name="ICBM" content="30.3322, -81.6557" />
    </Helmet>
  );
};

export default SEO;