
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const NavbarActions = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Button variant="outline" size="sm" asChild>
        <Link to="/contact?type=appointment" className="flex items-center gap-1">
          <Calendar size={16} />
          <span className="hidden lg:inline">Book Appointment</span>
        </Link>
      </Button>
    </div>
  );
};

export default NavbarActions;
