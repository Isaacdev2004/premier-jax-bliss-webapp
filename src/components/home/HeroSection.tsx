
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-white w-full overflow-hidden">
      <div 
        className="relative h-[650px] w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/35cbd64e-9f91-4ff9-bf50-4bfe3225b0b2.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/50 to-blue-700/40 backdrop-blur-[2px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-teal-400/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block animate-fade-in">
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium border border-white/20">
                Premier Healthcare Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight animate-slide-in stagger-1 drop-shadow-md">
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                JAX Premier Health Center
              </span>
            </h1>
            
            <p className="text-xl text-blue-50 animate-slide-in stagger-2">
              Experience exceptional internal medicine care and luxury med spa services 
              in one convenient location.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in stagger-3">
              <Button className="bg-jax-primary hover:bg-jax-primary/90 w-full sm:w-auto" size="lg" asChild>
                <Link to="/contact?type=consultation">Book Consultation <ChevronRight className="h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 w-full sm:w-auto" size="lg" asChild>
                <Link to="/internal-medicine">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
