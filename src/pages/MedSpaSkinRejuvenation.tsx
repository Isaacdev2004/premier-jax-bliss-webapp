
import React from 'react';
import PageHeader from '@/components/PageHeader';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';

const MedSpaSkinRejuvenation = () => {
  // Information about the skin rejuvenation treatments
  const procedures = [
    {
      title: "Chemical Peels",
      description: "Our chemical peels are tailored to treat various skin concerns including acne, sun damage, fine lines, and more.",
      benefits: ["Reduces fine lines and wrinkles", "Improves skin texture", "Reduces acne and blemishes", "Evens skin tone"]
    },
    {
      title: "Microdermabrasion",
      description: "This non-invasive treatment gently exfoliates the skin to remove dead skin cells and improve overall texture.",
      benefits: ["Minimizes pore appearance", "Improves skin texture", "Reduces fine lines", "No downtime required"]
    },
    {
      title: "LED Light Therapy",
      description: "Using different wavelengths of light to target various skin concerns, from acne to aging.",
      benefits: ["Reduces inflammation", "Promotes collagen production", "Kills acne-causing bacteria", "Painless and relaxing treatment"]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Skin Rejuvenation" 
        subtitle="Advanced treatments to refresh and revitalize your skin" 
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <SectionHeader title="Revitalize Your Skin" />
            <p className="mt-4 text-lg text-gray-600">
              At Vivid Bliss Med Spa, we offer cutting-edge skin rejuvenation treatments that address various concerns,
              from fine lines and wrinkles to uneven texture and tone. Our expert providers customize each treatment
              to meet your specific needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {procedures.map((procedure, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{procedure.title}</h3>
                  <p className="text-gray-600 mb-4">{procedure.description}</p>
                  <h4 className="font-medium text-gray-800 mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {procedure.benefits.map((benefit, idx) => (
                      <li key={idx} className="mb-1">{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader title="Customize Your Treatment" align="center" />
            <p className="mt-4 mb-8 text-lg text-gray-600">
              Our experienced providers will work with you to develop a personalized skin rejuvenation plan 
              that addresses your unique concerns and helps you achieve your desired results.
            </p>
            <Button className="bg-jax-primary hover:bg-jax-primary/90 text-lg px-8 py-6 rounded-lg">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
      
      <CallToAction
        title="Ready to Rejuvenate Your Skin?"
        description="Schedule your consultation today to learn how our skin rejuvenation treatments can help you achieve healthier, more radiant skin."
        primaryButtonText="Schedule a Visit"
        primaryButtonLink="/appointment"
      />
    </>
  );
};

export default MedSpaSkinRejuvenation;
