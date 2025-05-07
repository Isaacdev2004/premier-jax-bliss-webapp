
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, AlertCircle, Download, Shield, CreditCard } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import CallToAction from "@/components/CallToAction";

const PatientResources = () => {
  return (
    <>
      <PageHeader
        title="Patient Resources"
        subtitle="Information and resources to help you prepare for your visit and manage your healthcare."
      />

      {/* Patient Portal */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Patient using laptop for telehealth"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <SectionHeader
                title="Patient Portal"
                subtitle="Manage your health information online"
                align="left"
                className="mb-6"
              />
              <p className="text-gray-600">
                Our patient portal provides secure, 24/7 access to your health information and
                convenient online services. Through the portal, you can:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jax-primary mt-2 mr-2"></div>
                  <span>Request prescription refills</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jax-primary mt-2 mr-2"></div>
                  <span>View lab and test results</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jax-primary mt-2 mr-2"></div>
                  <span>Schedule or request appointments</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jax-primary mt-2 mr-2"></div>
                  <span>Message your healthcare provider</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jax-primary mt-2 mr-2"></div>
                  <span>View and pay bills</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jax-primary mt-2 mr-2"></div>
                  <span>Update personal information</span>
                </li>
              </ul>
              <Button className="bg-jax-primary hover:bg-jax-primary/90 flex items-center" asChild>
                <a href="https://www.patientally.com/" target="_blank" rel="noopener noreferrer">
                  Access Patient Portal <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
              <p className="text-sm text-gray-500">
                First-time users: Please contact our office to receive your portal invitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Billing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Insurance & Billing Information"
            subtitle="Understanding your healthcare costs and payment options."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Accepted Insurance Plans</h3>
              <p className="text-gray-600">
                We accept most major insurance plans. Please contact our office to confirm that we
                accept your specific insurance plan.
              </p>
              <h4 className="font-semibold mt-6">We currently accept:</h4>
              <ul className="grid grid-cols-2 gap-2">
                {[
                  "Aetna",
                  "Blue Cross Blue Shield",
                  "Cigna",
                  "Humana",
                  "Medicare",
                  "Medicaid",
                  "United Healthcare",
                  "Tricare"
                ].map((insurance, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-jax-primary mr-2"></div>
                    <span>{insurance}</span>
                  </li>
                ))}
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
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h4 className="font-semibold mb-3">Med Spa Services Payment Policy</h4>
                <p className="text-gray-600 mb-4">
                  Please note that most med spa services are considered cosmetic and are typically
                  not covered by insurance. Payment is required at the time of service.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us About Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and policies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What should I bring to my first appointment?",
                answer: "Please bring your insurance card, photo ID, completed new patient forms, a list of current medications, and any relevant medical records or test results."
              },
              {
                question: "How do I schedule a telehealth appointment?",
                answer: "New patients can schedule a telehealth appointment by calling our office directly. We offer telehealth services in four states: New York, Illinois, Pennsylvania, and Florida. Telehealth is especially popular for our Medical Weight Loss program. Note that new patients won't have access to the patient portal until after their first appointment."
              },
              {
                question: "Do you offer payment plans for med spa services?",
                answer: "Yes, we offer payment plans for certain med spa packages. Please inquire during your consultation for more details about financing options."
              },
              {
                question: "What is your cancellation policy?",
                answer: "We request at least 24 hours' notice for cancellations. Late cancellations or no-shows may incur a fee, particularly for med spa services that require significant appointment time."
              },
              {
                question: "How do I request a prescription refill?",
                answer: "The easiest way to request a refill is through our patient portal. Alternatively, you can call our office or have your pharmacy send a refill request."
              },
              {
                question: "Are medical and spa services billed separately?",
                answer: "Yes, internal medicine services and med spa services are billed separately. Internal medicine services may be covered by insurance, while med spa services are typically self-pay."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Have More Questions?"
        description="Our team is here to help. Contact us for any questions about your care, insurance, or appointments."
        primaryButtonText="Request Consultation"
        primaryButtonLink="/contact"
      />
    </>
  );
};

export default PatientResources;
