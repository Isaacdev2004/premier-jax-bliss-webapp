import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type?: "organization" | "medicalBusiness" | "breadcrumb" | "faq";
  data?: any;
}

const StructuredData = ({ type = "organization", data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "@id": "https://jaxpremierhealth.com/#organization",
          "name": "JAX Premier Health Center",
          "alternateName": "Vivid Bliss Med Spa",
          "url": "https://jaxpremierhealth.com",
          "logo": "https://jaxpremierhealth.com/lovable-uploads/0c86fb79-273d-4782-bdcc-19caa0014d00.png",
          "description": "JAX Premier Health Center offers comprehensive internal medicine, primary care, chronic disease management, and wellness services in Jacksonville, Florida.",
          "medicalSpecialty": [
            "Internal Medicine",
            "Primary Care",
            "Preventive Medicine",
            "Chronic Disease Management"
          ],
          "priceRange": "$$",
          "telephone": "+1-904-XXX-XXXX",
          "email": "Jaxpremierhealthcenter@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jacksonville",
            "addressLocality": "Jacksonville",
            "addressRegion": "FL",
            "postalCode": "32XXX",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "30.3322",
            "longitude": "-81.6557"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Jacksonville",
              "sameAs": "https://en.wikipedia.org/wiki/Jacksonville,_Florida"
            },
            {
              "@type": "State",
              "name": "Florida"
            }
          ],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Medical Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Internal Medicine",
                  "description": "Comprehensive primary care for adults"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Preventive Care",
                  "description": "Annual physical exams, immunizations, and screenings"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Chronic Disease Management",
                  "description": "Comprehensive care for diabetes, hypertension, and other chronic conditions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Telehealth Services",
                  "description": "Virtual consultations available in FL, NY, PA, and IL"
                }
              }
            ]
          },
          "founder": {
            "@type": "Physician",
            "name": "Dr. Donzo",
            "jobTitle": "Founder & Medical Director",
            "medicalSpecialty": "Internal Medicine",
            "description": "Board certified Internal Medicine Doctor and Aesthetician"
          },
          "sameAs": [
            "https://www.facebook.com/jaxpremierhealth",
            "https://www.instagram.com/jaxpremierhealth"
          ]
        };
      
      case "medicalBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "JAX Premier Health Center",
          "image": "https://jaxpremierhealth.com/lovable-uploads/0c86fb79-273d-4782-bdcc-19caa0014d00.png",
          "url": "https://jaxpremierhealth.com",
          "telephone": "+1-904-XXX-XXXX",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jacksonville",
            "addressRegion": "FL",
            "addressCountry": "US"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "bestRating": "5",
            "ratingCount": "50"
          }
        };
      
      case "breadcrumb":
        return data || {};
      
      case "faq":
        return data || {};
      
      default:
        return {};
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;