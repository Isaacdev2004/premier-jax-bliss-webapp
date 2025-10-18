
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
import OfficeTransitionNotification from "@/components/OfficeTransitionNotification";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const HomePage = () => {
  return (
    <>
      <SEO 
        title="JAX Premier Health Center | Internal Medicine & Wellness in Jacksonville FL"
        description="JAX Premier Health Center offers comprehensive internal medicine, primary care, chronic disease management, and wellness services in Jacksonville, Florida. Led by Dr. Donzo. Book your appointment today."
        keywords="internal medicine Jacksonville FL, primary care Jacksonville, med spa Jacksonville, wellness center Jacksonville, Dr. Donzo, chronic disease management, preventive care, telehealth Jacksonville, weight loss Jacksonville"
        canonicalUrl="https://jaxpremierhealth.com"
      />
      <StructuredData type="organization" />
      <OfficeTransitionNotification />
      <HeroSection />
      <ServicesSection />
      <HomeVisitSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <CallToAction 
        title="Ready to Get Started?" 
        description="Schedule your consultation today and take the first step toward better health and wellness with Dr. Donzo." 
        primaryButtonText="Schedule a Visit" 
        primaryButtonLink="/contact" 
      />
    </>
  );
};

export default HomePage;
