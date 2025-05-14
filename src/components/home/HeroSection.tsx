
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-white w-full overflow-hidden">
      <div 
        className="relative h-[600px] w-full flex items-center justify-center bg-cover bg-center" 
        style={{
          backgroundImage: "url('/lovable-uploads/8ccdebb6-c475-40f7-9c6d-86c9b4a341c3.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Welcome to JAX Premier Health Center
            </h1>
            <p className="text-xl text-white">
              Comprehensive internal medicine and luxury med spa services in one convenient location.
            </p>
            <div className="flex justify-center">
              <Button className="bg-jax-primary hover:bg-jax-primary/90" size="lg" asChild>
                <Link to="/contact?type=consultation">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
