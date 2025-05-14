
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ShieldCheck, Activity, HeartPulse, Stethoscope, PenTool } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/CallToAction";
import PageHeader from "@/components/PageHeader";

const InternalMedicine = () => {
  return (
    <>
      {/* Updated Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/70 via-white to-blue-100/50 py-20">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 blue-blob medium opacity-40 z-0"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 blue-blob small opacity-30 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-8 fade-in">
              <div className="inline-block px-4 py-2 bg-jax-medical/10 rounded-full">
                <span className="text-jax-medical font-medium text-sm uppercase tracking-wider">Dr. Donzo's Practice</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
                Internal Medicine Excellence
              </h1>
              
              <p className="text-lg text-gray-700 max-w-xl slide-up" style={{ animationDelay: '0.2s' }}>
                Comprehensive primary care focused on prevention, diagnosis, and personalized treatment plans to enhance your overall health and wellbeing.
              </p>
              
              <div className="flex flex-wrap gap-4 slide-up" style={{ animationDelay: '0.4s' }}>
                <Button className="gradient-button shadow-lg" size="lg" asChild>
                  <Link to="/contact">Schedule Appointment</Link>
                </Button>
                <Button className="bg-white border border-jax-medical/20 text-jax-medical hover:bg-jax-medical/5" size="lg" asChild>
                  <Link to="#services">Explore Services</Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 slide-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-blue-500/10 rounded-full">
                    <ShieldCheck size={20} className="text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">Preventive Care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-teal-500/10 rounded-full">
                    <HeartPulse size={20} className="text-teal-600" />
                  </div>
                  <span className="text-sm font-medium">Personalized Plans</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl transform group-hover:scale-105 transition-all duration-500 opacity-70"></div>
              <img 
                src="/lovable-uploads/237c70b9-40ec-4070-97d7-5b907f2bc934.png"
                alt="Internal Medicine Practice"
                className="relative z-10 w-[90%] h-auto rounded-2xl shadow-xl transform hover:scale-102 transition-all duration-500 float-animation"
              />
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg z-20 slide-up" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-jax-medical/10 rounded-full">
                    <Calendar size={20} className="text-jax-medical" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Available Now</p>
                    <p className="text-xs text-gray-500">Mon-Fri, 9am-5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Doctor consulting with patient"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <SectionHeader
                title="Comprehensive Internal Medicine Care"
                align="left"
                className="mb-6"
              />
              <p className="text-gray-600">
                Dr. Donzo's internal medicine practice provides comprehensive primary care for adults with a 
                focus on prevention, diagnosis, and treatment of adult diseases. She believes in 
                a proactive approach to healthcare, addressing concerns before they become serious 
                health issues.
              </p>
              <p className="text-gray-600">
                Dr. Donzo is dedicated to building long-term relationships with patients, 
                providing continuity of care, and developing personalized treatment plans that 
                address individual health goals.
              </p>
              <p className="text-gray-600">
                She offers both in-person appointments during weekdays and convenient telehealth 
                options for patients who prefer remote consultations.
              </p>
              <div className="flex items-center space-x-2 text-jax-medical">
                <Calendar size={20} />
                <span>Available Monday-Friday, 9am-5pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Internal Medicine Services"
            subtitle="Dr. Donzo provides a wide range of services to address your healthcare needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={24} />,
                title: "Preventive Care",
                description: "Annual physical exams, immunizations, and screenings to keep you healthy and catch issues early.",
                link: "/contact"
              },
              {
                icon: <Activity size={24} />,
                title: "Chronic Disease Management",
                description: "Comprehensive care for conditions like diabetes, hypertension, asthma, and thyroid disorders.",
                link: "/contact"
              },
              {
                icon: <HeartPulse size={24} />,
                title: "Cardiovascular Health",
                description: "Management of heart disease, high cholesterol, and other cardiovascular conditions.",
                link: "/contact"
              },
              {
                icon: <Calendar size={24} />,
                title: "Telehealth Consultations",
                description: "Convenient virtual visits for follow-ups and minor conditions from the comfort of your home.",
                link: "/contact"
              },
              {
                icon: <Stethoscope size={24} />,
                title: "Urgent Care",
                description: "Same-day appointments for acute illnesses and urgent medical concerns.",
                link: "/contact"
              },
              {
                icon: <PenTool size={24} />,
                title: "Specialist Referrals",
                description: "Coordination with specialists when needed for complex health conditions.",
                link: "/contact"
              }
            ].map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                buttonText="Schedule Now"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Conditions We Treat"
            subtitle="Our internal medicine physicians diagnose and treat a wide range of health conditions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Allergies",
              "Arthritis",
              "Asthma",
              "Chronic Kidney Disease",
              "Chronic Obstructive Pulmonary Disease (COPD)",
              "Depression & Anxiety",
              "Diabetes",
              "Digestive Disorders",
              "Heart Disease",
              "High Blood Pressure",
              "High Cholesterol",
              "Migraine Headaches",
              "Osteoporosis",
              "Thyroid Disorders",
              "Urinary Tract Infections",
              "Weight Management Issues",
              "Women's Health Issues",
              "Men's Health Issues"
            ].map((condition, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <p className="text-gray-700">{condition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telehealth */}
      <section className="py-16 bg-jax-medical/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <SectionHeader
                title="Telehealth Services"
                subtitle="Healthcare from the comfort of your home"
                align="left"
                className="mb-6"
              />
              <p className="text-gray-600 mb-6">
                Dr. Donzo's telehealth services allow you to connect with her through secure video 
                consultations. This option is ideal for follow-up appointments, medication management, 
                and addressing non-emergency health concerns without leaving your home. Currently available 
                for patients in New York, Illinois, Pennsylvania, and Florida.
              </p>
              <p className="text-gray-600 mb-6">
                Medical Weight Loss programs are primarily delivered through our telehealth services, 
                making it convenient for you to receive personalized care and monitoring.
              </p>
              <h3 className="text-lg font-semibold mb-4">Telehealth is perfect for:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-jax-medical mr-2"></div>
                  <span>Medical Weight Loss programs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-jax-medical mr-2"></div>
                  <span>Follow-up appointments</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-jax-medical mr-2"></div>
                  <span>Medication management</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-jax-medical mr-2"></div>
                  <span>Minor illnesses (colds, infections)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-jax-medical mr-2"></div>
                  <span>Chronic disease monitoring</span>
                </li>
              </ul>
              <div className="flex justify-center">
                <Button className="bg-jax-medical hover:bg-jax-medical/90" asChild>
                  <Link to="/contact">Schedule Telehealth Visit</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Telehealth consultation"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Schedule Your Appointment with Dr. Donzo?"
        description="Dr. Donzo is available Monday through Friday. Book your in-person or telehealth appointment today."
        primaryButtonText="Request Consultation"
        primaryButtonLink="/contact"
      />
    </>
  );
};

export default InternalMedicine;
