
import { Clock, Heart, Users, Award, Calendar, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-jax-primary" />,
      title: "Personalized Care",
      description: "Dr. Donzo takes time to understand your unique health needs and goals, creating customized treatment plans."
    },
    {
      icon: <Award className="h-8 w-8 text-jax-primary" />,
      title: "Board-Certified Excellence",
      description: "Dr. Donzo is board-certified in Internal Medicine with extensive training and experience in both medical and aesthetic care."
    },
    {
      icon: <Heart className="h-8 w-8 text-jax-primary" />,
      title: "Comprehensive Wellness",
      description: "From primary care to aesthetic treatments, we offer a full spectrum of services under one roof for your convenience."
    },
    {
      icon: <Clock className="h-8 w-8 text-jax-primary" />,
      title: "Flexible Scheduling",
      description: "Walk-ins welcome Monday through Thursday. Weekend appointments available by advance booking for your convenience."
    },
    {
      icon: <Calendar className="h-8 w-8 text-jax-primary" />,
      title: "Insurance & Cash Pay",
      description: "We accept most insurance plans and offer transparent cash-pay options with flexible membership models."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-jax-primary" />,
      title: "Evidence-Based Treatment",
      description: "All our treatments are backed by the latest medical research and proven methodologies for optimal results."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Why Choose JAX Premier Health Center?" 
          subtitle="Experience the difference of personalized, comprehensive healthcare with Dr. Donzo and our dedicated team." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mx-auto mb-4 p-3 bg-jax-secondary/10 rounded-full w-fit group-hover:bg-jax-secondary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
