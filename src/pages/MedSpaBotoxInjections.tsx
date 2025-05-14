
import React, { useEffect } from "react";
import { Syringe, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const procedures = [
  {
    title: "Fillers",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "At Vivid Bliss Med Spa we use fillers to reduce moderate to severe wrinkles as well as add volume to specific areas of the face, creating a more youthful appearance.",
    delay: 0.1,
  },
  {
    title: "Botox for Excessive Sweating",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Many men and women are embarrassed by sweat stains caused by overactive underarm sweat glands. Our treatment can help reduce excessive sweating and boost your confidence.",
    delay: 0.3,
  },
  {
    title: "Botox Injections",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "The following procedures are used in combination with each other to maximize your results with minimal to no downtime or pain, depending on the procedure.",
    delay: 0.5,
  },
];

const MedSpaBotoxInjections = () => {
  useEffect(() => {
    // Animation for section entrance
    const elements = document.querySelectorAll('.animated-element');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white to-blue-50 pb-12">
      {/* Banner */}
      <div className="w-full flex flex-col items-center pt-10 pb-4 px-2 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -left-40 top-0 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="relative flex items-center justify-center mb-8 fade-in">
          <Syringe className="h-10 w-10 text-blue-500" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 leading-snug bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent fade-in">
          Botox <span className="font-light">Injections</span>
        </h1>
        <div className="max-w-3xl text-gray-700 text-lg md:text-[19px] space-y-5 text-center mb-8 slide-up" style={{animationDelay: "0.2s"}}>
          <p>
            At Vivid Bliss Med Spa, our expert practitioners use Botox to help you achieve natural-looking results. We focus on enhancing your features while maintaining your natural expressions, ensuring you look refreshed and rejuvenated.
          </p>
          <p>
            The following procedures are used in combination with each other to maximize your results with minimal to no downtime or pain, depending on the procedure:
          </p>
        </div>
      </div>

      {/* Treatments Grid */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {procedures.map((proc, index) => (
            <div 
              key={proc.title} 
              className="flex flex-col items-center text-center group animated-element opacity-0 transform translate-y-10 transition-all duration-700" 
              style={{transitionDelay: `${proc.delay}s`}}
            >
              <div className="w-[280px] h-[280px] mb-5 rounded-2xl shadow-lg border border-blue-100 overflow-hidden bg-white flex items-center justify-center relative glow-animation">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-teal-300/0 group-hover:from-blue-400/20 group-hover:to-teal-300/20 transition-all duration-500"></div>
                <img
                  src={proc.image}
                  alt={proc.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition duration-700 ease-in-out"
                  draggable={false}
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <Button
                    variant="outline"
                    className="rounded-full border-white text-white bg-transparent hover:bg-white/20 transition"
                  >
                    <span className="flex items-center">
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </span>
                  </Button>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-blue-600 transition bg-gradient-to-r from-blue-600 to-blue-700 group-hover:from-blue-700 group-hover:to-teal-600 bg-clip-text text-transparent">
                {proc.title}
              </h2>
              <p className="text-[17px] text-gray-700 max-w-md">{proc.description}</p>
              
              {/* Featured badge */}
              {index === 0 && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom CSS for the animated elements */}
      <style jsx="true">{`
        .animated-element.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default MedSpaBotoxInjections;
