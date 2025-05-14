
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const treatments = [
  {
    title: "Teenage Acne Programs",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Our teenage acne program focuses on treatments specific to the causes of teenage acne. Our comprehensive approach includes personalized skincare routines, targeted treatments, and ongoing support to help manage and clear teenage acne effectively.",
    benefits: [
      "Tailored to adolescent skin needs",
      "Hormone-balancing treatments",
      "Education on proper skin care",
      "Gentle yet effective approach"
    ]
  },
  {
    title: "Adult Acne Programs",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Adult acne is addressed through a thorough history taking multiple adult acne etiologies into consideration. Our specialized treatments target hormonal imbalances, stress factors, and other adult-specific causes to provide lasting results.",
    benefits: [
      "Addresses hormonal factors",
      "Anti-aging and anti-acne combination",
      "Stress-related breakout solutions",
      "Professional-grade products"
    ]
  },
];

const faqs = [
  {
    question: "How long does a typical acne treatment plan take?",
    answer: "Treatment duration varies based on acne severity and type, but most clients see significant improvements within 4-12 weeks of consistent treatment."
  },
  {
    question: "Will I need to use special skincare products at home?",
    answer: "Yes, we typically recommend a customized home care regimen using medical-grade products that complement your in-office treatments for optimal results."
  },
  {
    question: "Are there any side effects to the acne treatments?",
    answer: "Most treatments have minimal side effects which may include temporary redness, mild peeling, or slight sensitivity. All potential side effects will be discussed during your consultation."
  }
];

const MedSpaAcneTreatment = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        setIsIntersecting(prev => ({
          ...prev,
          [entry.target.dataset.id]: entry.isIntersecting
        }));
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe elements
    document.querySelectorAll('[data-id]').forEach(el => {
      observer.observe(el);
    });

    return () => {
      // Cleanup
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-white pb-16">
      {/* Hero Banner */}
      <div className="w-full flex flex-col items-center pt-10 pb-12 px-2 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute left-0 top-0 w-full h-64 bg-gradient-to-b from-blue-100/50 to-transparent"></div>
          <div className="absolute -left-20 top-10 w-40 h-40 rounded-full bg-blue-300/20 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-60 h-60 rounded-full bg-teal-300/20 blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Acne <span className="font-light">Treatment</span>
          </h1>
          <div className="max-w-3xl text-gray-700 text-lg md:text-[19px] space-y-5 text-center mb-8">
            <p className="fade-in">
              At Vivid Bliss Med Spa, we understand that acne can affect people of all ages and have significant impacts on self-confidence. Our specialized acne treatment programs are tailored to address both teenage and adult acne with proven medical approaches.
            </p>
            <p className="fade-in" style={{animationDelay: "0.2s"}}>
              Our expert team uses advanced diagnostic methods to identify the root causes of your acne and develops personalized treatment plans that combine the latest medical technologies with carefully selected skincare products for optimal results.
            </p>
          </div>
        </div>
      </div>

      {/* Treatments Section */}
      <div 
        className="w-full max-w-6xl mx-auto px-4 pt-8 pb-16" 
        data-id="treatments-section"
      >
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${isIntersecting['treatments-section'] ? 'fade-in' : 'opacity-0'}`}>
          {treatments.map((treatment, index) => (
            <div 
              key={treatment.title} 
              className={`group relative ${activeIndex === index ? 'scale-in' : ''}`}
            >
              <div className="mb-8 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative w-full h-[300px] rounded-lg shadow-xl overflow-hidden bg-white">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition duration-700 ease-out"
                    draggable={false}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <h2 className="text-2xl font-bold text-white drop-shadow-md">{treatment.title}</h2>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-[17px] text-gray-700">{treatment.description}</p>
                
                <div className="mt-6 space-y-2">
                  <h3 className="font-semibold text-blue-600">Key Benefits:</h3>
                  <ul className="space-y-2">
                    {treatment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mt-1 mr-2 flex-shrink-0">
                          <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-full p-1">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button
                    variant="default"
                    asChild
                    className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white transition shadow-md hover:shadow-lg"
                  >
                    <Link to="/contact" className="flex items-center">
                      Schedule Consultation
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQ Section */}
      <div 
        className="w-full max-w-3xl mx-auto px-4 py-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-blue-50"
        data-id="faq-section"
      >
        <div className={`text-center mb-8 ${isIntersecting['faq-section'] ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2">Common questions about our acne treatments</p>
        </div>
        
        <Accordion type="single" collapsible className={isIntersecting['faq-section'] ? 'fade-in' : 'opacity-0'} style={{animationDelay: "0.2s"}}>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-blue-800 hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-8 text-center">
          <Button 
            variant="outline"
            asChild
            className="rounded-full border-blue-500 text-blue-600 hover:bg-blue-50"
          >
            <Link to="/contact">
              Have more questions? Contact us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MedSpaAcneTreatment;
