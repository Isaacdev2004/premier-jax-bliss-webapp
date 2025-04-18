
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AppointmentBookingForm from "../forms/AppointmentBookingForm";
import { useState } from "react";

const NavbarActions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden md:flex items-center space-x-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Calendar size={16} />
            <span className="hidden lg:inline">Book Appointment</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Book an Appointment</DialogTitle>
          </DialogHeader>
          <AppointmentBookingForm onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavbarActions;
