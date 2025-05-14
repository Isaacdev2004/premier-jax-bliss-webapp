
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Star, Users, Heart, Activity, ShieldCheck, Stethoscope, HomeIcon, User, MapPin } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import HomeVisitSection from "@/components/home/HomeVisitSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HomeVisitSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <CallToAction 
        title="Ready to Get Started?" 
        description="Schedule your consultation today and take the first step toward better health and wellness with Dr. Donzo." 
        primaryButtonText="Request Consultation" 
        primaryButtonLink="/contact" 
      />
    </>
  );
};

export default HomePage;
