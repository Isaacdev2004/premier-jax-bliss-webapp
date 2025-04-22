
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const procedures = [
  {
    title: "Minor Surgical Procedures",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Skin lesion ablation (skin tags, benign lesions, etc) and scar revision using various methods to...",
  },
  {
    title: "Serial Chemical Peels",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Our “lunchtime” chemical peels are a multistep process that involves mechanical as well as chemical...",
  },
  {
    title: "Chemical Peels",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "A moderate depth chemical peel for smoothing and evening the tone of the skin. This...",
  },
  {
    title: "Chemical Resurfacing",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Our deep chemical peels are completely painless and include a kit to continue and control...",
  },
  {
    title: "LED Therapy Treatment Enhancement",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "A safe and completely relaxing treatment used in combination with Dr. Costello’s other therapies....",
  },
  {
    title: "Dermawave",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "A medical treatment which uses ultrasound therapy with the assistance of an electrical field, to...",
  },
  {
    title: "Diamond Tip Microdermabrasion",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Advanced Microdermabrasion which provides removal of a dead dull skin layer, however, in addition the...",
  },
];

const MedSpaSkinRejuvenation = () => (
  <div className="w-full min-h-screen bg-white pb-12">
    {/* Banner */}
    <div className="w-full flex flex-col items-center pt-10 pb-4 px-2">
      <h1 className="text-4xl md:text-5xl font-light text-center mb-6 text-gray-900 leading-snug">
        Skin <span className="text-jax-primary font-light">Rejuvenation</span>
      </h1>
      <div className="max-w-3xl text-gray-700 text-lg md:text-[19px] space-y-5 text-center mb-8">
        <p>
           All patients wishing to improve their skin will have an initial consult where they will express their concerns with their skin with the physician. A full evaluation of the skin as well as a medical history will ensure a program that will lead to significant improvement in pores appearance, sun damage, wrinkles texture, dullness, and tone. 
        </p>
        <p>
          The RejuviGlow procedure (only available at Vivid Bliss Med Spa) is central to getting your skin on the path to improvement. Each individual’s program is designed to significantly improve the patient’s skin in a manner fitting to the individual’s schedule, tolerance for downtime etc. Your treatments may include no downtime chemical peels, laser treatments, LED treatments etc. in addition to the basic program, depending on each individual’s concerns. Most patients require no downtime and will have rapid, significant improvement in the appearance of their skin very quickly.
        </p>
        <p>
          The following procedures are used in combination with each other to maximize your results with minimal to no downtime or pain, depending on the procedure:
        </p>
      </div>
    </div>

    {/* Treatments Grid */}
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {procedures.map((proc) => (
          <div key={proc.title} className="flex flex-col items-center text-center group">
            <div className="w-[170px] h-[170px] mb-3 rounded shadow border border-gray-200 overflow-hidden bg-white flex items-center justify-center">
              <img
                src={proc.image}
                alt={proc.title}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
                draggable={false}
              />
            </div>
            <h2 className="text-2xl font-light text-gray-800 mb-1 leading-tight group-hover:text-jax-primary transition">
              {proc.title}
            </h2>
            <p className="text-[17px] text-gray-700 font-light max-w-xs">{proc.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MedSpaSkinRejuvenation;
