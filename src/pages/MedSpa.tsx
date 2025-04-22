import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Replace gold class with jax-primary
const accentClass = "text-jax-primary"; 

const updatedMedSpaServices = [
  {
    title: "Skin Rejuvenation",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=460&h=320&facepad=2.5&q=80",
    link: "/med-spa/skin-rejuvenation",
  },
  {
    title: "Acne Treatment",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=460&h=320&facepad=2.5&q=80",
    link: "/contact",
  },
  {
    title: "Botox Injections",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=460&h=320&facepad=2.5&q=80",
    link: "/contact",
  },
  {
    title: "Personalized Skin Rejuvenation Program",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=460&h=320&facepad=3.5&q=80",
    link: "/contact",
  },
];

const Banner = () => (
  <section className="w-full bg-white flex justify-center border-b border-gray-100 py-8 md:py-16 px-4">
    <div className="flex flex-col md:flex-row w-full max-w-6xl items-center">
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start pr-0 md:pr-10">
        <h1 className="font-semibold text-3xl md:text-4xl text-gray-900 mb-4 leading-snug">
          Welcome to{" "}
          <span className={`${accentClass} font-bold`}>Vivid Bliss Med Spa</span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-md">
          Experience the art of natural-appearing beauty and youthfulness.<br className="hidden md:block" />
          Our compassionate team delivers medical-grade skincare in a calm, luxurious setting—
          always seeking to enhance, never to change your unique features.<br className="hidden md:block" />
          Renew your confidence and radiance at <span className="font-semibold">Vivid Bliss Med Spa</span>.
        </p>
        <Button
          asChild
          className="rounded-full bg-jax-primary text-white shadow-none px-7 py-2 font-medium text-base uppercase tracking-wide mt-1"
        >
          <Link to="/contact">
            Book Your Consultation
          </Link>
        </Button>
      </div>
      {/* Right: Med Spa Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&h=600&q=80"
          alt="Luxury Med Spa Treatment Room"
          className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          draggable={false}
        />
      </div>
    </div>
  </section>
);

const MedSpa = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Banner */}
      <Banner />

      {/* Services Section */}
      <section className="w-full max-w-6xl mx-auto px-4 pt-12 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-2">
          Our <span className={accentClass}>Signature Services</span>
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our med spa treatments, designed to help you reveal your most radiant, healthy, and youthful skin.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-3">
          {updatedMedSpaServices.map((service) => (
            <div key={service.title} className="flex flex-col items-center group relative bg-white rounded-xl shadow border border-gray-100 hover:shadow-lg transition p-4">
              <div className="w-full h-[180px] flex items-center justify-center overflow-hidden bg-gray-50 rounded shadow-sm mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full grayscale group-hover:scale-105 group-hover:grayscale-0 transition duration-300"
                  style={{ filter: "grayscale(100%)", objectPosition: "center" }}
                />
              </div>
              <h3 className="text-lg md:text-xl text-gray-700 font-bold text-center mb-2 group-hover:text-jax-primary transition">
                {service.title}
              </h3>
              <Button
                variant="outline"
                asChild
                className="rounded-full border-jax-primary text-gray-600 bg-white hover:bg-jax-primary/10 transition shadow-none px-7 py-2 mt-2"
                style={{ borderWidth: 2 }}
              >
                <Link to={service.link} className="w-full text-base font-normal">
                  Learn more
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MedSpa;
