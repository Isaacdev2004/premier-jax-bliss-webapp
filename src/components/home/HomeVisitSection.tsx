
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Stethoscope, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HomeVisitSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-slide-in">
            <div className="max-w-lg">
              <h2 className="text-3xl font-semibold mb-4">
                Home Visits for Elderly and Disabled Patients
              </h2>
              <p className="text-gray-600 mb-6">
                We understand that mobility can be a challenge for some of our patients. That's why we offer compassionate
                in-home medical services for elderly and disabled individuals who cannot easily travel to our facility.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="bg-gray-50 border-none">
                  <CardHeader className="pb-2">
                    <div className="mb-2 text-jax-primary">
                      <User className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">Accessibility</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Quality healthcare delivered directly to your home for those with mobility limitations
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 border-none">
                  <CardHeader className="pb-2">
                    <div className="mb-2 text-jax-primary">
                      <Stethoscope className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">Comprehensive Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Full range of medical services provided in the comfort of your own home
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 border-none">
                  <CardHeader className="pb-2">
                    <div className="mb-2 text-jax-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">Service Area</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Serving patients throughout Jacksonville and surrounding communities
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 border-none">
                  <CardHeader className="pb-2">
                    <div className="mb-2 text-jax-primary">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">Flexible Scheduling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Appointments available weekdays with accommodating hours
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <Button className="bg-jax-medical hover:bg-jax-medical/90" size="lg" asChild>
                <Link to="/contact?service=home-visit">Request Home Visit</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/f4547542-230a-47ce-b4cd-59a4f2b11c3c.png" 
                alt="Healthcare professional visiting elderly patient" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVisitSection;
