
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const treatments = [
  {
    title: "Teenage Acne Programs",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Our teenage acne program focuses on treatments specific to the causes of teenage acne. Our comprehensive approach includes personalized skincare routines, targeted treatments, and ongoing support to help manage and clear teenage acne effectively.",
  },
  {
    title: "Adult Acne Programs",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=320&h=320&facepad=2.5&q=80",
    description: "Adult acne is addressed through a thorough history taking multiple adult acne etiologies into consideration. Our specialized treatments target hormonal imbalances, stress factors, and other adult-specific causes to provide lasting results.",
  },
];

const MedSpaAcneTreatment = () => (
  <div className="w-full min-h-screen bg-white pb-12">
    {/* Banner */}
    <div className="w-full flex flex-col items-center pt-10 pb-4 px-2">
      <h1 className="text-4xl md:text-5xl font-light text-center mb-6 text-gray-900 leading-snug">
        Acne <span className="text-jax-primary font-light">Treatment</span>
      </h1>
      <div className="max-w-3xl text-gray-700 text-lg md:text-[19px] space-y-5 text-center mb-8">
        <p>
          At Vivid Bliss Med Spa, we understand that acne can affect people of all ages and have significant impacts on self-confidence. Our specialized acne treatment programs are tailored to address both teenage and adult acne with proven medical approaches.
        </p>
        <p>
          Our expert team uses advanced diagnostic methods to identify the root causes of your acne and develops personalized treatment plans that combine the latest medical technologies with carefully selected skincare products for optimal results.
        </p>
      </div>
    </div>

    {/* Treatments Grid */}
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {treatments.map((treatment) => (
          <div key={treatment.title} className="flex flex-col items-center text-center group">
            <div className="w-[280px] h-[280px] mb-3 rounded-lg shadow border border-gray-200 overflow-hidden bg-white flex items-center justify-center">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
                draggable={false}
              />
            </div>
            <h2 className="text-2xl font-light text-gray-800 mb-3 leading-tight group-hover:text-jax-primary transition">
              {treatment.title}
            </h2>
            <p className="text-[17px] text-gray-700 font-light max-w-md">{treatment.description}</p>
            <Button
              variant="outline"
              asChild
              className="mt-4 rounded-full border-jax-primary text-gray-600 hover:bg-jax-primary/10"
            >
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MedSpaAcneTreatment;
