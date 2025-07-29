
import { MapPin, Phone, Calendar } from "lucide-react";

const OfficeTransitionNotification = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg">
                We're Moving to Better Serve You!
              </p>
              <p className="text-blue-100 text-sm">
                JAX Premier Health Center is transitioning to a new office location
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Transition in progress</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>Call (904) 468-2055 for updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeTransitionNotification;
