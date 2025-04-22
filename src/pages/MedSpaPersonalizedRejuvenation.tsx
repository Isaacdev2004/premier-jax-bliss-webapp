
import React from "react";
import { Star } from "lucide-react";

const procedures = [
  {
    title: "RejuviGlow Treatment",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Our signature RejuviGlow procedure is tailored to your unique skin needs, combining advanced techniques to improve skin texture, tone, and overall appearance.",
  },
  {
    title: "Custom Treatment Plan",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "After a thorough skin analysis, we create a personalized treatment plan that may include chemical peels, LED therapy, and other targeted treatments for optimal results.",
  },
  {
    title: "Maintenance Program",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Our comprehensive maintenance program ensures long-lasting results through regular treatments and personalized skincare recommendations.",
  },
];

const MedSpaPersonalizedRejuvenation = () => (
  <div className="w-full min-h-screen bg-white pb-12">
    {/* Banner */}
    <div className="w-full flex flex-col items-center pt-10 pb-4 px-2">
      <h1 className="text-4xl md:text-5xl font-light text-center mb-6 text-gray-900 leading-snug">
        Personalized Skin <span className="text-jax-primary font-light">Rejuvenation</span>
      </h1>
      <div className="max-w-3xl text-gray-700 text-lg md:text-[19px] space-y-5 text-center mb-8">
        <p>
          At Vivid Bliss Med Spa, we understand that every person's skin is unique. Our Personalized Skin Rejuvenation Program begins with a comprehensive consultation to evaluate your skin's specific needs and concerns.
        </p>
        <p>
          Using advanced diagnostic methods and our expertise, we develop a customized treatment plan that combines various procedures to achieve optimal results for your skin type and concerns.
        </p>
      </div>
    </div>

    {/* Treatments Grid */}
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {procedures.map((proc) => (
          <div key={proc.title} className="flex flex-col items-center text-center group">
            <div className="w-[280px] h-[280px] mb-3 rounded-lg shadow border border-gray-200 overflow-hidden bg-white flex items-center justify-center">
              <img
                src={proc.image}
                alt={proc.title}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
                draggable={false}
              />
            </div>
            <h2 className="text-2xl font-light text-gray-800 mb-3 leading-tight group-hover:text-jax-primary transition">
              {proc.title}
            </h2>
            <p className="text-[17px] text-gray-700 font-light max-w-md">{proc.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MedSpaPersonalizedRejuvenation;
