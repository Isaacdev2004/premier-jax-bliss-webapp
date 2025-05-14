
import React, { useEffect, useRef } from "react";
import { Star, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const procedures = [
  {
    title: "RejuviGlow Treatment",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Our signature RejuviGlow procedure is tailored to your unique skin needs, combining advanced techniques to improve skin texture, tone, and overall appearance.",
    featured: true,
  },
  {
    title: "Custom Treatment Plan",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "After a thorough skin analysis, we create a personalized treatment plan that may include chemical peels, LED therapy, and other targeted treatments for optimal results.",
    featured: false,
  },
  {
    title: "Maintenance Program",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Our comprehensive maintenance program ensures long-lasting results through regular treatments and personalized skincare recommendations.",
    featured: false,
  },
];

const MedSpaPersonalizedRejuvenation = () => {
  const titleRef = useRef(null);
  
  useEffect(() => {
    // Create simple text animation
    if (titleRef.current) {
      const text = titleRef.current.innerText;
      titleRef.current.innerHTML = '';
      
      [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.display = 'inline-block';
        span.style.transition = 'all 0.5s ease';
        span.style.transitionDelay = `${i * 0.03}s`;
        
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
        }, 100);
        
        titleRef.current.appendChild(span);
      });
    }
  }, []);
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-white pb-12">
      {/* Banner with animated background */}
      <div className="w-full flex flex-col items-center pt-16 pb-12 px-2 relative overflow-hidden bg-gradient-to-br from-blue-100/30 via-white to-teal-100/20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-blue-200/20 animate-pulse" style={{animationDuration: '7s'}}></div>
          <div className="absolute right-1/3 bottom-1/4 w-48 h-48 rounded-full bg-teal-200/20 animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 mb-5">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-full p-3 shadow-lg">
            <Sparkles className="h-7 w-7 text-white" />
          </div>
        </div>
        
        <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 leading-snug">
          Personalized Skin <span className="text-blue-600 font-light">Rejuvenation</span>
        </h1>
        
        <div className="max-w-3xl text-gray-700 text-lg md:text-[19px] space-y-5 text-center mb-12 fade-in">
          <p>
            At Vivid Bliss Med Spa, we understand that every person's skin is unique. Our Personalized Skin Rejuvenation Program begins with a comprehensive consultation to evaluate your skin's specific needs and concerns.
          </p>
          <p>
            Using advanced diagnostic methods and our expertise, we develop a customized treatment plan that combines various procedures to achieve optimal results for your skin type and concerns.
          </p>
        </div>
        
        <Button className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-medium px-8 py-6 shadow-lg hover:shadow-xl transform transition-all hover:scale-105 flex items-center gap-2 text-lg mb-6">
          Schedule Your Consultation <ArrowRight className="ml-1" />
        </Button>
      </div>

      {/* Treatments Grid with glassmorphism cards */}
      <div className="w-full flex justify-center mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {procedures.map((proc, index) => (
            <div 
              key={proc.title} 
              className={`flex flex-col items-center text-center relative group slide-up`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Glassmorphic card */}
              <div className={`w-full rounded-2xl p-8 backdrop-blur-sm bg-white/80 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-500 ${proc.featured ? 'border-blue-300' : 'border-blue-100'}`}>
                
                {/* Image with glowing effect */}
                <div className="w-[200px] h-[200px] mx-auto mb-6 rounded-full shadow-md overflow-hidden bg-white flex items-center justify-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-br from-blue-400/0 via-teal-300/0 to-blue-200/0 group-hover:from-blue-400/20 group-hover:via-teal-300/10 group-hover:to-blue-200/20 transition-all duration-700 ${proc.featured ? 'glow-animation' : ''}`}></div>
                  <img
                    src={proc.image}
                    alt={proc.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition duration-700 ease-in-out"
                    draggable={false}
                  />
                </div>
                
                {/* Title with gradient */}
                <h2 className="text-2xl font-bold mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                    {proc.title}
                  </span>
                </h2>
                
                <p className="text-[17px] text-gray-700 font-light mb-6">{proc.description}</p>
                
                <Button
                  variant="outline"
                  className={`rounded-full w-full ${proc.featured ? 'border-blue-500 text-blue-600' : 'border-gray-300 text-gray-700'} hover:bg-blue-50 transition`}
                >
                  <span className="flex items-center justify-center">
                    Learn more
                    <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </span>
                </Button>
              </div>
              
              {/* Featured star */}
              {proc.featured && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-2 rounded-full shadow-lg">
                    <Star className="h-4 w-4 text-white fill-white" />
                  </div>
                </div>
              )}
              
              {/* Bottom glow */}
              {proc.featured && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-blue-400/0 via-blue-500/50 to-teal-400/0 rounded-full blur-sm"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedSpaPersonalizedRejuvenation;
