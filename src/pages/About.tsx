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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Founder"
            subtitle="Meet the visionary behind JAX Premier Health Center."
          />

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="Dr. Jennifer Anderson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-2">Dr. Jennifer Anderson</h3>
                <p className="text-jax-primary mb-4 font-medium">Founder & Medical Director</p>
                <p className="text-gray-600 mb-4">
                  Dr. Jennifer Anderson is the driving force behind JAX Premier Health Center, 
                  bringing over 15 years of experience in internal medicine and a passion for 
                  comprehensive, patient-centered care. Her vision was to create a unique healthcare 
                  practice that seamlessly integrates traditional medical services with advanced 
                  aesthetic treatments.
                </p>
                <p className="text-gray-600">
                  With a special interest in preventive care and women's health, Dr. Anderson 
                  has dedicated her career to empowering patients through holistic, personalized 
                  healthcare solutions. Her innovative approach combines medical expertise with 
                  aesthetic services, offering patients a one-stop destination for their health 
                  and wellness needs.
                </p>
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
