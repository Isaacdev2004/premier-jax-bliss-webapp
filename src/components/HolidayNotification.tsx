
import { X, Calendar } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const HolidayNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Calendar className="h-5 w-5 flex-shrink-0" />
          <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
            <span className="font-semibold">🌙 Eid Mubarak!</span>
            <span className="text-green-100">
              Our office is closed today for the holiday. We'll be back to serve you in 24 hours.
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-green-700 ml-4 flex-shrink-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default HolidayNotification;
