
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Activity, Calendar, Heart, Star, Users } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Services" 
          subtitle="JAX Premier Health Center offers a wide range of services to meet your health and wellness needs." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Internal Medicine Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                alt="Internal Medicine" 
                src="/lovable-uploads/fda7ddc3-1df2-41c0-8db7-9ab0549f7e46.jpg" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3">Internal Medicine</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive primary care services for adults, focusing on prevention, diagnosis, and treatment of adult diseases.
                Available with telehealth options.
              </p>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <ShieldCheck size={20} className="text-jax-medical mr-2" />
                  <span>Preventive Care</span>
                </li>
                <li className="flex items-center">
                  <Activity size={20} className="text-jax-medical mr-2" />
                  <span>Chronic Disease Management</span>
                </li>
                <li className="flex items-center">
                  <Calendar size={20} className="text-jax-medical mr-2" />
                  <span>Telehealth Available</span>
                </li>
              </ul>
              <Button className="w-full bg-jax-medical hover:bg-jax-medical/90" asChild>
                <Link to="/internal-medicine">Book Appointment</Link>
              </Button>
            </div>
          </div>

          {/* Med Spa Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                alt="Vivid Bliss Med Spa" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3">Vivid Bliss Med Spa</h3>
              <p className="text-gray-600 mb-6">
                Luxury aesthetic treatments focused on skin rejuvenation, acne care, and anti-aging.
                Available for your convenience.
              </p>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <Heart size={20} className="text-jax-spa mr-2" />
                  <span>Botox & Fillers</span>
                </li>
                <li className="flex items-center">
                  <Star size={20} className="text-jax-spa mr-2" />
                  <span>Teen & Adult Acne Care</span>
                </li>
                <li className="flex items-center">
                  <Users size={20} className="text-jax-spa mr-2" />
                  <span>Anti-Aging Treatments</span>
                </li>
              </ul>
              <Button className="w-full bg-jax-spa hover:bg-jax-spa/90" asChild>
                <Link to="/med-spa">Request Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
