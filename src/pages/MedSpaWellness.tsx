
import React from 'react';
import PageHeader from '@/components/PageHeader';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MedSpaWellness = () => {
  const wellnessServices = [
    {
      title: "Medical Weight Loss",
      description: "Personalized weight management programs designed by medical professionals to help you achieve sustainable results.",
      benefits: [
        "Physician-supervised programs",
        "Customized nutrition plans",
        "Metabolic testing and analysis",
        "Prescription medications when appropriate",
        "Ongoing support and monitoring"
      ],
      cashBenefit: "Flexible payment options with no insurance hassles"
    },
    {
      title: "IV Vitamin Therapy",
      description: "Direct nutrient delivery for optimal wellness, energy, and recovery through customized IV infusions.",
      benefits: [
        "100% nutrient absorption",
        "Immediate energy boost",
        "Enhanced immune support",
        "Improved hydration",
        "Custom vitamin cocktails"
      ],
      cashBenefit: "Immediate treatment with no prior authorization required"
    },
    {
      title: "Hormone Optimization",
      description: "Comprehensive hormone therapy to restore balance and vitality for both men and women.",
      benefits: [
        "Comprehensive hormone testing",
        "Bioidentical hormone therapy",
        "Improved energy and mood",
        "Better sleep quality",
        "Enhanced cognitive function"
      ],
      cashBenefit: "Discreet and private treatment options"
    }
  ];

  const packageOptions = [
    {
      title: "Wellness Starter",
      price: "Starting at $299",
      features: [
        "Initial consultation",
        "Basic metabolic panel",
        "Customized wellness plan",
        "30-day follow-up"
      ]
    },
    {
      title: "Complete Wellness",
      price: "Starting at $599",
      features: [
        "Comprehensive evaluation",
        "Advanced testing panel",
        "3-month wellness program",
        "Monthly IV therapy sessions",
        "Ongoing support"
      ]
    },
    {
      title: "Premium Wellness",
      price: "Starting at $999",
      features: [
        "Full wellness assessment",
        "Hormone optimization",
        "Weekly IV sessions",
        "6-month program",
        "24/7 support access"
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Wellness Services" 
        subtitle="Premium cash-based wellness solutions for optimal health and vitality" 
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <SectionHeader title="Elevate Your Wellness Journey" />
            <p className="mt-4 text-lg text-gray-600">
              Our cash-based wellness services offer you the freedom to prioritize your health without 
              insurance limitations. Experience personalized care, immediate access, and premium treatments 
              designed to optimize your well-being.
            </p>
          </div>

          <Tabs defaultValue="services" className="w-full max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="services">Our Services</TabsTrigger>
              <TabsTrigger value="packages">Wellness Packages</TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {wellnessServices.map((service, index) => (
                  <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-medium text-gray-800 mb-3">Benefits:</h4>
                      <ul className="list-disc pl-5 text-gray-600 mb-4">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="mb-1">{benefit}</li>
                        ))}
                      </ul>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-green-800 font-medium">
                          💰 Cash Advantage: {service.cashBenefit}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="packages" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packageOptions.map((pkg, index) => (
                  <Card key={index} className={`border-2 hover:shadow-lg transition-all ${
                    index === 1 ? 'border-blue-500 relative' : 'border-gray-200'
                  }`}>
                    {index === 1 && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl text-gray-800">{pkg.title}</CardTitle>
                      <div className="text-3xl font-bold text-blue-600 mt-2">{pkg.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6 bg-jax-primary hover:bg-jax-primary/90">
                        Schedule a Visit
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="max-w-3xl mx-auto text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Cash-Based Wellness?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">🕒 Immediate Access</h4>
                  <p className="text-gray-600 text-sm">No waiting for insurance approvals. Start your wellness journey today.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">🔒 Privacy & Discretion</h4>
                  <p className="text-gray-600 text-sm">Your wellness journey remains completely private and confidential.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">⚡ Premium Experience</h4>
                  <p className="text-gray-600 text-sm">Receive the highest level of personalized care and attention.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">💎 No Limitations</h4>
                  <p className="text-gray-600 text-sm">Access cutting-edge treatments without insurance restrictions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction
        title="Ready to Transform Your Wellness?"
        description="Take control of your health with our premium cash-based wellness services. Schedule your consultation today and discover what optimal wellness feels like."
        primaryButtonText="Schedule a Visit"
        primaryButtonLink="/contact"
      />
    </>
  );
};

export default MedSpaWellness;
