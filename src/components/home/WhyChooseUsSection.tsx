
import { Users, Calendar, ShieldCheck, Activity, Heart, HomeIcon } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experienced Providers",
      description: "Our team of healthcare professionals brings years of experience and expertise to your care."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Convenient Scheduling",
      description: "Internal medicine on weekdays and med spa services on weekends to fit your busy schedule."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Comprehensive Care",
      description: "From preventive health to aesthetic treatments, we offer a wide range of services."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Personalized Approach",
      description: "We create individualized treatment plans tailored to your unique needs."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "State-of-the-Art Facility",
      description: "Our modern clinic is equipped with the latest technology for optimal care."
    },
    {
      icon: <HomeIcon className="h-6 w-6" />,
      title: "Home Visit Services",
      description: "Bringing quality healthcare directly to elderly and disabled patients who can't travel easily."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Why Choose JAX Premier Health Center" 
          subtitle="We provide comprehensive healthcare with a focus on personalized service and convenience." 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="text-jax-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
