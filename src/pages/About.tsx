import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import CallToAction from "@/components/CallToAction";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import { Star } from "lucide-react";

const About = () => {
  return <>
      <PageHeader title="About JAX Premier Health Center" subtitle="Providing comprehensive internal medicine services to the Jacksonville community." />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="JAX Premier Health Center" className="rounded-2xl shadow-lg" />
            </div>
            <div className="space-y-6">
              <SectionHeader title="Our Story" align="left" className="mb-6" />
              <p className="text-gray-600">
                Welcome to JAX Premier Health Center, a modern internal medicine and wellness clinic located in the heart of Jacksonville, Florida. Founded and led by Dr. Donzo, we specialize in adult care (ages 18+), offering a full spectrum of services including primary care, chronic disease management, preventive care, and personalized wellness programs.
              </p>
              <p className="text-gray-600">
                Our philosophy is simple: healthcare should be personal, empowering, and holistic. Dr. Donzo takes time to listen, collaborate with patients on their goals, and provide evidence-based treatments in a supportive environment. Whether you're managing chronic conditions, striving for weight loss, or seeking preventative care, we're here to support your total well-being.
              </p>
              <p className="text-gray-600">
                We accept both insurance and cash-pay patients, and offer flexible membership models for our weight loss and wellness services.
              </p>
              
              {/* Connect with us section */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-lg mb-3">Connect With Us</h4>
                <p className="text-gray-600 mb-4">Follow us on social media for health tips, updates, and behind-the-scenes content from our practice.</p>
                <SocialMediaLinks size="lg" iconColor="text-gray-600" hoverColor="hover:text-jax-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-jax-secondary/50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Founder" subtitle="Meet the visionary behind JAX Premier Health Center." />

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-stretch">
              <div className="w-full md:w-2/5 h-[400px] relative overflow-hidden">
                <img src="/lovable-uploads/8402697b-090a-4447-ad63-68d6ee38f7de.png" alt="Dr. Donzo" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-8 lg:p-10 w-full md:w-3/5 flex flex-col justify-center bg-gradient-to-br from-white to-jax-secondary/10">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-semibold text-gray-800">Dr. Donzo</h3>
                    <p className="text-jax-primary font-medium text-lg flex items-center gap-2">
                      <Star className="h-5 w-5 fill-jax-primary" />
                      Founder & Medical Director
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">Dr. Donzo is a board certified Internal
Medicine Doctor and Aesthetician. She trained in New York City. She is passionate about population health and disability prevention. She has worked in the state of Illinois, PA, NY and Florida seeing and treating patients with various health issues. 
She is a hospitalist and Primary Care clinician. Dr. Donzo chose the Sunshine State to be her home as
She saw the demand for Primary Care in the area. She loves the North Florida weather, the beaches and the people.</p>
                    <p className="leading-relaxed"></p>
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
          <SectionHeader title="Patient Testimonials" subtitle="Here's what our patients have to say about their experiences with Dr. Donzo at JAX Premier Health Center." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
            quote: "Dr. Donzo has been managing my diabetes for years with excellent care. Her comprehensive approach to my health has made a real difference.",
            name: "Robert Williams",
            service: "Internal Medicine Patient"
          }, {
            quote: "Dr. Donzo's personalized treatment plan has helped me achieve my health goals. She really takes the time to understand each patient's unique needs.",
            name: "Emily Davis",
            service: "Internal Medicine Patient"
          }, {
            quote: "Dr. Donzo takes the time to listen and explain everything thoroughly. I never feel rushed, and I always leave with a clear understanding of my health.",
            name: "James Thompson",
            service: "Internal Medicine Patient"
          }, {
            quote: "I appreciate how Dr. Donzo focuses on preventive care and overall wellness. She's helped me maintain my health and avoid problems before they start.",
            name: "Patricia Miller",
            service: "Internal Medicine Patient"
          }].map((testimonial, index) => <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-jax-primary text-jax-primary" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <CallToAction title="Experience the JAX Premier Difference" description="Schedule your consultation today with Dr. Donzo and discover comprehensive care for your health and wellness needs." primaryButtonText="Request Consultation" primaryButtonLink="/contact" />
    </>;
};

export default About;
