import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import CallToAction from "@/components/CallToAction";
import { Star } from "lucide-react";

const About = () => {
  return (
    <>
      <PageHeader
        title="About JAX Premier Health Center"
        subtitle="Providing comprehensive internal medicine and med spa services to the Jacksonville community."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="JAX Premier Health Center team"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <SectionHeader
                title="Our Story"
                align="left"
                className="mb-6"
              />
              <p className="text-gray-600">
                JAX Premier Health Center was founded with a vision to provide comprehensive healthcare
                that addresses both internal medicine needs and aesthetic concerns. We recognized that many 
                patients were seeking a trusted provider for both their medical care and aesthetic treatments,
                which led to the creation of our dual-focused practice.
              </p>
              <p className="text-gray-600">
                Our unique model combines traditional internal medicine services during the week with our 
                Vivid Bliss Med Spa services on weekends, allowing us to serve our community's diverse 
                healthcare needs efficiently and effectively.
              </p>
              <p className="text-gray-600">
                We're committed to delivering personalized care that helps our patients achieve their health
                and wellness goals, all in a comfortable and professional environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-jax-secondary/50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Founder"
            subtitle="Meet the visionary behind JAX Premier Health Center."
          />

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-stretch">
              <div className="w-full md:w-2/5 h-[400px] relative overflow-hidden">
                <img
                  src="/lovable-uploads/8402697b-090a-4447-ad63-68d6ee38f7de.png"
                  alt="Dr. Ameera Donzo"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-8 lg:p-10 w-full md:w-3/5 flex flex-col justify-center bg-gradient-to-br from-white to-jax-secondary/10">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-semibold text-gray-800">Dr. Ameera Donzo</h3>
                    <p className="text-jax-primary font-medium text-lg flex items-center gap-2">
                      <Star className="h-5 w-5 fill-jax-primary" />
                      Founder & Medical Director
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      Dr. Ameera Donzo is the driving force behind JAX Premier Health Center, 
                      bringing over 15 years of experience in internal medicine and a passion for 
                      comprehensive, patient-centered care. Her vision was to create a unique healthcare 
                      practice that seamlessly integrates traditional medical services with advanced 
                      aesthetic treatments.
                    </p>
                    <p className="leading-relaxed">
                      With a special interest in preventive care and women's health, Dr. Donzo 
                      has dedicated her career to empowering patients through holistic, personalized 
                      healthcare solutions. Her innovative approach combines medical expertise with 
                      aesthetic services, offering patients a one-stop destination for their health 
                      and wellness needs.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <div className="bg-jax-secondary/20 px-4 py-2 rounded-full text-sm text-jax-primary">
                      Internal Medicine
                    </div>
                    <div className="bg-jax-secondary/20 px-4 py-2 rounded-full text-sm text-jax-primary">
                      Women's Health
                    </div>
                    <div className="bg-jax-secondary/20 px-4 py-2 rounded-full text-sm text-jax-primary">
                      Aesthetic Medicine
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Patient Testimonials"
            subtitle="Here's what our patients have to say about their experiences at JAX Premier Health Center."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The team at JAX Premier Health Center has been managing my diabetes for years with excellent care. When they added med spa services, I was thrilled to get all my care in one place.",
                name: "Robert Williams",
                service: "Internal Medicine Patient"
              },
              {
                quote: "I've tried many treatments for my acne, but none were as effective as the protocol developed for me at Vivid Bliss Med Spa. The results have been life-changing.",
                name: "Emily Davis",
                service: "Med Spa Patient"
              },
              {
                quote: "Dr. Anderson takes the time to listen and explain everything thoroughly. I never feel rushed, and I always leave with a clear understanding of my health.",
                name: "James Thompson",
                service: "Internal Medicine Patient"
              },
              {
                quote: "The anti-aging treatments I've received at Vivid Bliss have made a noticeable difference. Friends keep asking what my secret is!",
                name: "Patricia Miller",
                service: "Med Spa Patient"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-jax-primary text-jax-primary" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Experience the JAX Premier Difference"
        description="Schedule your consultation today and discover comprehensive care for your health and wellness needs."
        primaryButtonText="Request Consultation"
        primaryButtonLink="/contact"
      />
    </>
  );
};

export default About;
