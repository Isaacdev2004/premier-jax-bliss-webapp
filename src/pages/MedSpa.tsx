
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

// Used for gold styling to match reference
const goldClass = "text-[hsl(44,78%,54%)]"; // approximate to reference gold

const medSpaServices = [
  {
    title: "Skin Rejuvenation",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=460&h=320&facepad=2.5&q=80", // monochrome style
    link: "/contact",
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

const MedSpa = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Banner (Logo + Model) */}
      <section className="w-full bg-white flex flex-col items-center border-b border-gray-100">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center pt-6 pb-4">
          {/* Model Image Centered */}
          <div className="w-[400px] md:w-[430px] mx-auto flex justify-center items-center relative">
            <img
              src="public/lovable-uploads/690857b1-c10d-44c5-b0cf-a62efe600deb.png"
              alt="Med Spa Banner"
              className="w-full h-auto object-contain"
              draggable={false}
              style={{ filter: "grayscale(100%)" }}
            />
            {/* Med Spa (Vivid Bliss) Logo at bottom right for large screens */}
            <div className="hidden md:block absolute right-0 top-2">
              <img
                src="/lovable-uploads/f33008d3-be39-427d-be72-8bd901a288ad.png"
                alt="Vivid Bliss Med Spa Logo"
                className="w-32 h-auto object-contain rounded-lg bg-white/80 shadow-md p-2"
                draggable={false}
                loading="eager"
              />
            </div>
          </div>
          {/* Show MedSpa logo below image on mobile */}
          <div className="block md:hidden mt-4 mb-2">
            <img
              src="/lovable-uploads/f33008d3-be39-427d-be72-8bd901a288ad.png"
              alt="Vivid Bliss Med Spa Logo"
              className="w-24 h-auto object-contain rounded-lg bg-white/80 shadow-md p-2 mx-auto"
              draggable={false}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Welcome message & description */}
      <section className="w-full max-w-4xl mx-auto flex flex-col items-center mt-4 mb-2 px-3">
        <h2 className="font-light text-2xl md:text-3xl mb-3 text-gray-500">
          Welcome to{" "}
          <span className="font-normal text-gray-900">
            Vivid Bliss <span className={goldClass}>Med Spa</span>
          </span>
        </h2>
        <div className="max-w-3xl text-center text-gray-700 text-base mb-6">
          Our team is dedicated to the art of natural appearing beauty and youthfulness. Our goal at <span className="font-semibold">Vivid Bliss Med Spa</span> is to help you look more youthful, relaxed and natural, based on your own unique structure and features.
          <br/><br/>
          We believe in results that enhance your beauty, not change it—and deliver care in a calm, compassionate environment by medical experts. Discover renewed confidence and radiance at our Med Spa.
        </div>
      </section>

      {/* Services display: 4 columns */}
      <section className="w-full max-w-6xl mx-auto px-2 pt-4 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-6">
          {medSpaServices.map((service, idx) => (
            <div key={service.title} className="flex flex-col items-center">
              <div className="w-full flex flex-col items-center gap-2">
                <h3 className="text-lg md:text-xl text-gray-700 font-medium text-center mb-2">
                  {service.title}
                </h3>
                <div className="w-full h-[200px] flex items-center justify-center overflow-hidden bg-gray-50 rounded shadow-sm mb-2 border border-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full grayscale"
                    style={{ filter: "grayscale(100%)", objectPosition:"center" }}
                  />
                </div>
              </div>
              <div className="w-full flex justify-center">
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full border-[#e2c279] text-gray-600 bg-white hover:bg-[#f7f4e8] transition shadow-none px-8 py-2"
                  style={{ borderWidth: 2, borderColor: "#e2c279" }}
                  >
                  <Link to={service.link} className="w-full text-base font-normal">
                    learn more
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MedSpa;
