
import React from "react";
import { Syringe } from "lucide-react";

const procedures = [
  {
    title: "Fillers",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "At Vivid Bliss Med Spa we use fillers to reduce moderate to severe wrinkles as well as add volume to specific areas of the face, creating a more youthful appearance.",
  },
  {
    title: "Botox for Excessive Sweating",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Many men and women are embarrassed by sweat stains caused by overactive underarm sweat glands. Our treatment can help reduce excessive sweating and boost your confidence.",
  },
  {
    title: "Botox Injections",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "The following procedures are used in combination with each other to maximize your results with minimal to no downtime or pain, depending on the procedure.",
  },
];

const MedSpaBotoxInjections = () => (
  <div className="w-full min-h-screen bg-white pb-12">
    {/* Banner */}
    <div className="w-full flex flex-col items-center pt-10 pb-4 px-2">
      <h1 className="text-4xl md:text-5xl font-light text-center mb-6 text-gray-900 leading-snug">
        Botox <span className="text-jax-primary font-light">Injections</span>
      </h1>
      <div className="max-w-3xl text-gray-700 text-lg md:text-[19px] space-y-5 text-center mb-8">
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

export default MedSpaBotoxInjections;
