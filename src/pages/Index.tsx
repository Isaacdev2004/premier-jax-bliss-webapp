import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Star, Users, Heart, Activity, ShieldCheck, Stethoscope } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/CallToAction";

const Home = () => {
  return <>
      {/* Hero Section */}
      <section className="relative bg-white w-full overflow-hidden">
        <div 
          className="relative h-[600px] w-full flex items-center justify-center bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('/lovable-uploads/8ccdebb6-c475-40f7-9c6d-86c9b4a341c3.png')`,
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
                <Button 
                  className="bg-jax-primary hover:bg-jax-primary/90" 
                  size="lg" 
                  asChild
                >
                  <Link to="/contact?type=consultation">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Services" subtitle="JAX Premier Health Center offers a wide range of services to meet your health and wellness needs." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Internal Medicine Card */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Internal Medicine" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Internal Medicine</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive primary care services for adults, focusing on prevention, diagnosis, and treatment of adult diseases.
                  Available weekdays with telehealth options.
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
                <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Vivid Bliss Med Spa" className="w-full h-full object-cover" />
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

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="What Our Patients Say" subtitle="Read about the experiences of patients who have visited JAX Premier Health Center." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            name: "Sarah Johnson",
            text: "Dr. Anderson is incredibly thorough and caring. I've never felt rushed during my appointments, and she takes the time to explain everything clearly.",
            service: "Internal Medicine"
          }, {
            name: "Michael Rodriguez",
            text: "The acne treatment program at Vivid Bliss has completely transformed my skin. The staff is knowledgeable and personalized my treatment plan.",
            service: "Vivid Bliss Med Spa"
          }, {
            name: "Emma Wilson",
            text: "I love that I can get both my medical care and skincare treatments in one place. JAX Premier Health Center provides exceptional service across the board.",
            service: "Internal Medicine & Med Spa"
          }].map((testimonial, index) => <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-jax-primary text-jax-primary" />)}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="Why Choose JAX Premier Health Center" subtitle="We provide comprehensive healthcare with a focus on personalized service and convenience." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: <Users size={24} />,
            title: "Experienced Providers",
            description: "Our team of healthcare professionals brings years of experience and expertise to your care."
          }, {
            icon: <Calendar size={24} />,
            title: "Convenient Scheduling",
            description: "Internal medicine on weekdays and med spa services on weekends to fit your busy schedule."
          }, {
            icon: <ShieldCheck size={24} />,
            title: "Comprehensive Care",
            description: "From preventive health to aesthetic treatments, we offer a wide range of services."
          }, {
            icon: <Activity size={24} />,
            title: "Personalized Approach",
            description: "We create individualized treatment plans tailored to your unique needs."
          }, {
            icon: <Heart size={24} />,
            title: "State-of-the-Art Facility",
            description: "Our modern clinic is equipped with the latest technology for optimal care."
          }, {
            icon: <Star size={24} />,
            title: "Patient-Centered Focus",
            description: "Your comfort, convenience, and health outcomes are our top priorities."
          }].map((feature, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-jax-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      <CallToAction 
        title="Ready to Get Started?" 
        description="Schedule your consultation today and take the first step toward better health and wellness." 
        primaryButtonText="Request Consultation" 
        primaryButtonLink="/contact" 
      />
    </>;
};

export default Home;
