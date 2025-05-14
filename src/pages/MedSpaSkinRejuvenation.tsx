
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles } from "lucide-react";

const procedures = [
  {
    title: "Minor Surgical Procedures",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Skin lesion ablation (skin tags, benign lesions, etc) and scar revision using various methods to...",
    delay: 0.1,
  },
  {
    title: "Serial Chemical Peels",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Our "lunchtime" chemical peels are a multistep process that involves mechanical as well as chemical...",
    delay: 0.2,
  },
  {
    title: "Chemical Peels",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "A moderate depth chemical peel for smoothing and evening the tone of the skin. This...",
    delay: 0.3,
  },
  {
    title: "Chemical Resurfacing",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Our deep chemical peels are completely painless and include a kit to continue and control...",
    delay: 0.4,
  },
  {
    title: "LED Therapy Treatment Enhancement",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "A safe and completely relaxing treatment used in combination with Dr. Costello's other therapies....",
    delay: 0.5,
  },
  {
    title: "Dermawave",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "A medical treatment which uses ultrasound therapy with the assistance of an electrical field, to...",
    delay: 0.6,
  },
  {
    title: "Diamond Tip Microdermabrasion",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Advanced Microdermabrasion which provides removal of a dead dull skin layer, however, in addition the...",
    delay: 0.7,
  },
];

const MedSpaSkinRejuvenation = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-white to-blue-50 pb-12">
    {/* Banner */}
    <div className="w-full flex flex-col items-center pt-10 pb-4 px-2 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -left-20 top-0 w-80 h-80 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-teal-200 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="flex items-center mb-3 fade-in">
        <div className="bg-blue-600 text-white py-1 px-3 rounded-full text-xs font-bold flex items-center">
          <Sparkles className="h-3 w-3 mr-1" /> FEATURED
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 leading-snug bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent fade-in">
        Skin <span className="font-light">Rejuvenation</span>
      </h1>
      <div className="max-w-3xl text-gray-700 text-lg md:text-[19px] space-y-5 text-center mb-8 slide-up" style={{animationDelay: "0.2s"}}>
        <p>
           All patients wishing to improve their skin will have an initial consult where they will express their concerns with their skin with the physician. A full evaluation of the skin as well as a medical history will ensure a program that will lead to significant improvement in pores appearance, sun damage, wrinkles texture, dullness, and tone. 
        </p>
        <p>
          The RejuviGlow procedure (only available at Vivid Bliss Med Spa) is central to getting your skin on the path to improvement. Each individual's program is designed to significantly improve the patient's skin in a manner fitting to the individual's schedule, tolerance for downtime etc. Your treatments may include no downtime chemical peels, laser treatments, LED treatments etc. in addition to the basic program, depending on each individual's concerns. Most patients require no downtime and will have rapid, significant improvement in the appearance of their skin very quickly.
        </p>
        <p>
          The following procedures are used in combination with each other to maximize your results with minimal to no downtime or pain, depending on the procedure:
        </p>
      </div>
    </div>

    {/* Treatments Grid */}
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {procedures.map((proc, index) => (
          <div 
            key={proc.title} 
            className="flex flex-col items-center text-center group gradient-card rounded-xl p-6 slide-up" 
            style={{animationDelay: `${proc.delay}s`}}
          >
            <div className="w-[170px] h-[170px] mb-3 rounded-full shadow-md border border-blue-100 overflow-hidden bg-white flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-teal-500/20 transition-all duration-500"></div>
              <img
                src={proc.image}
                alt={proc.title}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                draggable={false}
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1 leading-tight group-hover:text-blue-600 transition">
              {proc.title}
            </h2>
            <p className="text-[17px] text-gray-700 font-light max-w-xs">{proc.description}</p>
            
            <div className="mt-4 flex-none">
              <Button
                variant="outline"
                className="rounded-full border-blue-500 text-blue-600 bg-white/60 hover:bg-blue-50 transition shadow-sm hover:shadow-md"
                style={{ borderWidth: 1 }}
              >
                <span className="flex items-center">
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </span>
              </Button>
            </div>
            
            {/* Star decoration */}
            {index === 0 && (
              <div className="absolute -top-2 -right-2">
                <div className="bg-yellow-400 text-white p-1 rounded-full">
                  <Star className="h-4 w-4 fill-white" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MedSpaSkinRejuvenation;
