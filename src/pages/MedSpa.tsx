
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/CallToAction";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const MedSpa = () => {
  return (
    <>
      {/* Hero Section styled like rejuvikin.com */}
      <section className="relative bg-gradient-to-br from-jax-spa/20 to-white py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:items-stretch gap-8 md:gap-4">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start md:pr-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6" style={{ letterSpacing: "-0.04em" }}>
              Vivid Bliss <span className="text-jax-spa">Med Spa</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl font-light">
              Revitalize your glow and embrace natural beauty through proven med spa services, brought to you with expertise and compassion.
            </p>
            <Button
              className="bg-jax-spa text-white text-lg px-8 py-4 rounded-full shadow-md hover:bg-jax-spa/90 transition duration-200"
              size="lg"
              asChild
            >
              <Link to="/contact">Request Consultation</Link>
            </Button>
            {/* Availability */}
            <div className="flex items-center gap-2 mt-6 text-jax-spa/80 font-medium">
              <Clock size={20} />
              <span>Open Saturday &amp; Sunday, 10am-6pm</span>
            </div>
          </div>
          {/* Right: Logo */}
          <div className="flex-1 flex items-center justify-center mb-12 md:mb-0">
            <div className="w-full max-w-[410px] drop-shadow-lg animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <AspectRatio ratio={1}>
                <img
                  src="/lovable-uploads/f33008d3-be39-427d-be72-8bd901a288ad.png"
                  alt="Vivid Bliss Med Spa Logo"
                  className="object-contain w-full h-full rounded-3xl bg-white/70 shadow-xl border border-jax-spa/10"
                  draggable={false}
                  loading="eager"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-jax-spa/10 via-jax-spa/40 to-white mb-10"></div>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Spa treatment"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <SectionHeader
                title="Welcome to Vivid Bliss Med Spa"
                align="left"
                className="mb-6"
              />
              <p className="text-gray-600">
                At Vivid Bliss Med Spa, we combine advanced aesthetic treatments with medical expertise
                to help you achieve your beauty and skincare goals. Our focus is on natural-looking 
                results that enhance your unique features.
              </p>
              <p className="text-gray-600">
                Led by experienced medical professionals, our med spa offers a range of services 
                from rejuvenation treatments to specialized acne care for teens and adults. We're
                committed to using the latest technologies and evidence-based approaches.
              </p>
              <p className="text-gray-600">
                Our weekend availability makes it convenient to schedule your treatments 
                without disrupting your busy weekday schedule.
              </p>
              <div className="flex items-center space-x-2 text-jax-spa">
                <Clock size={20} />
                <span>Available Saturday-Sunday, 10am-6pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Med Spa Services"
            subtitle="Discover our range of treatments designed to rejuvenate your skin and enhance your natural beauty."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                title: "Botox & Fillers",
                description: "Reduce fine lines and wrinkles or add volume to create a more youthful appearance.",
                link: "/contact"
              },
              {
                image: "https://images.unsplash.com/photo-1598264294394-ba29cf557627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                title: "Teen & Adult Acne Care",
                description: "Specialized treatments to address acne concerns and improve overall skin clarity.",
                link: "/contact"
              },
              {
                image: "https://images.unsplash.com/photo-1614859705397-719a4de93daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                title: "Anti-Aging Treatments",
                description: "Advanced procedures to rejuvenate skin and reduce visible signs of aging.",
                link: "/contact"
              },
              {
                image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                title: "Chemical Peels",
                description: "Exfoliating treatments that improve skin texture, tone, and reduce signs of sun damage.",
                link: "/contact"
              },
              {
                image: "https://images.unsplash.com/photo-1612730290551-4b2ae8fc5124?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                title: "Microdermabrasion",
                description: "Non-invasive treatment that removes dead skin cells and promotes collagen production.",
                link: "/contact"
              },
              {
                image: "https://images.unsplash.com/photo-1601931935821-5fbe71157695?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                title: "Dermal Fillers",
                description: "Add volume and smooth out deeper facial wrinkles and folds for a more youthful look.",
                link: "/contact"
              }
            ].map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
                link={service.link}
                buttonText="Learn More"
                variant="feature"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Results Gallery"
            subtitle="Discover the transformative results our clients have achieved with our med spa treatments."
          />

          <div className="relative mx-auto max-w-5xl">
            <Carousel>
              <CarouselContent>
                {[
                  {
                    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
                    caption: "Skin Rejuvenation Results"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                    caption: "Anti-Aging Treatment"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc",
                    caption: "Facial Treatment Results"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6",
                    caption: "Skin Care Results"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
                    caption: "Med Spa Treatment"
                  }
                ].map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl">
                        <AspectRatio ratio={3/4}>
                          <img
                            src={item.image}
                            alt={item.caption}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                        </AspectRatio>
                      </div>
                      <p className="mt-2 text-center text-sm text-gray-600">{item.caption}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-12 top-1/2" />
              <CarouselNext className="absolute -right-12 top-1/2" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-16 bg-jax-spa/10">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Featured Treatments"
            subtitle="Our most popular and effective treatments for common concerns."
          />

          <div className="space-y-8">
            {[
              {
                title: "Acne Treatment Program",
                description: "Our comprehensive approach to treating teen and adult acne combines medical-grade products, in-office treatments, and personalized care plans.",
                features: [
                  "Customized treatment based on skin type and acne severity",
                  "Medical-grade products for home care",
                  "Regular follow-ups to monitor progress",
                  "Integration with internal medicine for hormonal factors"
                ],
                image: "https://images.unsplash.com/photo-1598264294394-ba29cf557627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              },
              {
                title: "Anti-Aging Package",
                description: "Turn back the clock with our comprehensive anti-aging package that targets multiple signs of aging for overall facial rejuvenation.",
                features: [
                  "Botox for dynamic wrinkles",
                  "Dermal fillers for volume restoration",
                  "Chemical peel for skin texture improvement",
                  "Custom skincare regimen for maintenance"
                ],
                image: "https://images.unsplash.com/photo-1614859705397-719a4de93daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              }
            ].map((treatment, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">{treatment.title}</h3>
                    <p className="text-gray-600 mb-6">{treatment.description}</p>
                    <ul className="space-y-2 mb-6">
                      {treatment.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Sparkles size={18} className="text-jax-spa mr-2 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-jax-spa hover:bg-jax-spa/90 w-full md:w-auto" asChild>
                      <Link to="/contact">Request Consultation</Link>
                    </Button>
                  </div>
                  <div className="h-64 md:h-auto">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready for a Transformation?"
        description="Schedule your consultation with our med spa team. We're available weekends to accommodate your schedule."
        primaryButtonText="Request Consultation"
        primaryButtonLink="/contact"
      />
    </>
  );
};

export default MedSpa;

