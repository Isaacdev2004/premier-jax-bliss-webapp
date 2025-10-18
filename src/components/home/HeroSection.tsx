
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-white w-full overflow-hidden">
      <div 
        className="relative h-[650px] w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/7a32c293-9974-4c40-ac0f-07a11250cfd5.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        role="img"
        aria-label="JAX Premier Health Center - Modern healthcare facility in Jacksonville, Florida offering internal medicine and wellness services"
      >
        {/* Reduced opacity gradient overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-blue-700/20 backdrop-blur-[0px]"></div>
        
        {/* Professional visual elements */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 rounded-full bg-teal-400/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block animate-fade-in">
              <span className="bg-black/30 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium border border-white/20">
                Advanced Healthcare Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight animate-slide-in stagger-1 drop-shadow-md">
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                JAX Premier Health Center
              </span>
            </h1>
            
            <p className="text-xl text-white drop-shadow-md animate-slide-in stagger-2">
              Experience innovative medical care and premium wellness services 
              tailored to your unique health journey.
            </p>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto my-6 animate-slide-in stagger-2">
              <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-lg p-2">
                <Shield className="h-5 w-5 text-blue-200" />
                <span className="text-sm text-white">Advanced Care</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-lg p-2">
                <Heart className="h-5 w-5 text-blue-200" />
                <span className="text-sm text-white">Personalized Health</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in stagger-3">
              <Button className="bg-jax-primary hover:bg-jax-primary/90 w-full sm:w-auto shadow-lg" size="lg" asChild>
                <Link to="/contact?type=consultation" aria-label="Schedule a visit with JAX Premier Health Center">Schedule a Visit <ChevronRight className="h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" className="bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 w-full sm:w-auto" size="lg" asChild>
                <Link to="/internal-medicine" aria-label="Explore our internal medicine services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Professional floating element */}
        <div className="absolute bottom-8 right-8 bg-black/30 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl hidden md:block animate-fade-in">
          <div className="text-white text-sm">
            <div className="font-semibold">Healthcare Reimagined</div>
            <div className="text-xs text-blue-100">Advanced Medical Technology</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
