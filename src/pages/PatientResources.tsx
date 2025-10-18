
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, AlertCircle, Download, Shield, CreditCard } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import CallToAction from "@/components/CallToAction";
import SEO from "@/components/SEO";

const PatientResources = () => {
  return <>
      <SEO 
        title="Patient Resources - JAX Premier Health Center Jacksonville FL"
        description="Access patient resources at JAX Premier Health Center. Insurance information, billing, FAQs, and patient portal for Jacksonville healthcare services."
        keywords="patient resources Jacksonville, insurance Jacksonville FL, patient portal, billing information, JAX Premier Health patient info"
        canonicalUrl="https://jaxpremierhealth.com/patient-resources"
      />
      <PageHeader title="Patient Resources" subtitle="Information and resources to help you prepare for your visit and manage your healthcare." />

      {/* Patient Portal - Currently Unavailable */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader title="Patient Portal" subtitle="Coming Soon" />
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
              <AlertCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <p className="text-gray-700 mb-4">
                Our patient portal is currently being updated. Please call our office at (904) 468-2055 for:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jax-primary mt-2 mr-2"></div>
                  <span>Prescription refills</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jax-primary mt-2 mr-2"></div>
                  <span>Lab and test results</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jax-primary mt-2 mr-2"></div>
                  <span>Scheduling appointments</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jax-primary mt-2 mr-2"></div>
                  <span>Medical records and billing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Billing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="Insurance & Billing Information" subtitle="Understanding your healthcare costs and payment options." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Accepted Insurance Plans</h3>
              <p className="text-gray-600">
                We accept most major insurance plans. Please contact our office to confirm that we
                accept your specific insurance plan.
              </p>
              <h4 className="font-semibold mt-6">We currently accept:</h4>
              <ul className="grid grid-cols-2 gap-2">
                {["Aetna", "Blue Cross Blue Shield", "Cigna", "Humana", "Medicare", "Medicaid", "United Healthcare", "Tricare"].map((insurance, index) => <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-jax-primary mr-2"></div>
                    <span>{insurance}</span>
                  </li>)}
              </ul>
              <div className="flex items-center mt-2 text-sm bg-gray-50 p-3 rounded-lg">
                <AlertCircle size={16} className="text-jax-primary mr-2 flex-shrink-0" />
                <span>This list is not comprehensive. Please call to verify your coverage.</span>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Payment Options</h3>
              <p className="text-gray-600">
                We strive to make the billing process as transparent and convenient as possible.
              </p>
              <div className="space-y-4 mt-4">
                <div className="flex">
                  <CreditCard size={20} className="text-jax-primary mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Credit Cards</h4>
                    <p className="text-gray-600">We accept Visa, Mastercard, American Express, and Discover.</p>
                  </div>
                </div>
                <div className="flex">
                  <Shield size={20} className="text-jax-primary mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Secure Online Payments</h4>
                    <p className="text-gray-600">Pay your bills securely through our patient portal or website using Stripe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="Frequently Asked Questions" subtitle="Find answers to common questions about our services and policies." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
            question: "What should I bring to my first appointment?",
            answer: "Please bring your insurance card, photo ID, completed new patient forms, a list of current medications, and any relevant medical records or test results."
          }, {
            question: "How do I schedule a telehealth appointment?",
            answer: "New patients can schedule a telehealth appointment by calling our office directly. We offer telehealth services in four states: New York, Illinois, Pennsylvania, and Florida. Telehealth is especially popular for our Medical Weight Loss program. Note that new patients won't have access to the patient portal until after their first appointment."
          }, {
            question: "What is your cancellation policy?",
            answer: "We request at least 24 hours' notice for cancellations. Late cancellations or no-shows may incur a fee."
          }, {
            question: "How do I request a prescription refill?",
            answer: "Please call our office at (904) 468-2055 or have your pharmacy send a refill request directly to us."
          }].map((faq, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>)}
          </div>
        </div>
      </section>

      <CallToAction title="Have More Questions?" description="Our team is here to help. Contact us for any questions about your care, insurance, or appointments." primaryButtonText="Request Consultation" primaryButtonLink="/contact" />
    </>;
};
export default PatientResources;
