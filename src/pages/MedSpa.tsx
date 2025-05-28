
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";

// Replace gold class with jax-primary
const accentClass = "text-jax-primary"; 

const updatedMedSpaServices = [
  {
    title: "Skin Rejuvenation",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=460&h=320&facepad=2.5&q=80",
    link: "/med-spa/skin-rejuvenation",
    delay: 0.1,
  },
  {
    title: "Acne Treatment",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=460&h=320&facepad=2.5&q=80",
    link: "/med-spa/acne-treatment",
    delay: 0.2,
  },
  {
    title: "Botox Injections",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=460&h=320&facepad=2.5&q=80",
    link: "/med-spa/botox-injections",
    delay: 0.3,
  },
  {
    title: "Personalized Skin Rejuvenation Program",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=460&h=320&facepad=3.5&q=80",
    link: "/med-spa/personalized-rejuvenation",
    delay: 0.4,
  },
];

const Banner = () => (
  <section className="w-full bg-gradient-to-br from-blue-50 via-white to-teal-50 flex justify-center border-b border-blue-100 py-8 md:py-16 px-4 overflow-hidden">
    <div className="flex flex-col md:flex-row w-full max-w-6xl items-center relative">
      {/* Decorative background elements */}
      <div className="absolute -left-20 top-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute right-0 bottom-0 w-60 h-60 bg-teal-200 rounded-full opacity-30 blur-xl"></div>
      
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start pr-0 md:pr-10 z-10 fade-in">
        <div className="flex items-center mb-3">
          <div className="bg-blue-600 text-white py-1 px-2 rounded-full text-xs font-bold flex items-center">
            <Sparkles className="h-3 w-3 mr-1" /> NEW
          </div>
          <span className="ml-2 text-blue-600 text-sm font-medium">Premium Treatments Available</span>
        </div>
        
        <h1 className="font-semibold text-3xl md:text-4xl text-gray-900 mb-4 leading-snug">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-bold">Vivid Bliss Med Spa</span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-md">
          Experience the art of natural-appearing beauty and youthfulness.<br className="hidden md:block" />
          Our compassionate team delivers medical-grade skincare in a calm, luxurious setting—
          always seeking to enhance, never to change your unique features.<br className="hidden md:block" />
          Renew your confidence and radiance at <span className="font-semibold">Vivid Bliss Med Spa</span>.
        </p>
        <Button
          asChild
          className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white shadow-md hover:shadow-lg px-7 py-2 font-medium text-base uppercase tracking-wide mt-1 transform transition-all hover:translate-y-[-2px] flex gap-2 items-center"
        >
          <Link to="/contact">
            Schedule a Visit
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
      {/* Right: Med Spa Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 z-10 slide-up" style={{animationDelay: "0.3s"}}>
        <div className="relative">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl blur-sm opacity-30 animate-pulse"></div>
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&h=600&q=80"
            alt="Luxury Med Spa Treatment Room"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg relative z-10 hover:scale-[1.02] transition-transform duration-500"
            draggable={false}
          />
        </div>
      </div>
    </div>
  </section>
);

const MedSpa = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Banner */}
      <Banner />

      {/* Services Section */}
      <section className="w-full max-w-6xl mx-auto px-4 pt-16 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent z-0"></div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 relative z-10 fade-in">
          Our <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Signature Services</span>
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto fade-in" style={{animationDelay: "0.1s"}}>
          Explore our med spa treatments, designed to help you reveal your most radiant, healthy, and youthful skin.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-3 relative z-10">
          {updatedMedSpaServices.map((service, index) => (
            <div 
              key={service.title} 
              className="flex flex-col items-center group relative bg-white rounded-xl shadow-md border border-blue-50 hover:shadow-xl hover:border-blue-200 transition p-4 animated-card slide-up"
              style={{animationDelay: `${service.delay}s`}}
            >
              <div className="w-full h-[180px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm mb-4 group-hover:glow-animation">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full grayscale group-hover:scale-105 group-hover:grayscale-0 transition duration-500"
                  style={{ filter: "grayscale(100%)", objectPosition: "center" }}
                />
              </div>
              <h3 className="text-lg md:text-xl text-gray-800 font-bold text-center mb-2 group-hover:text-blue-600 transition">
                {service.title}
              </h3>
              <Button
                variant="outline"
                asChild
                className="rounded-full border-blue-500 text-blue-600 bg-white hover:bg-blue-50 transition shadow-sm hover:shadow-md px-7 py-2 mt-2 group-hover:scale-105"
                style={{ borderWidth: 2 }}
              >
                <Link to={service.link} className="w-full text-base font-normal flex items-center">
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </Link>
              </Button>
              
              {/* Decorative star */}
              <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MedSpa;
