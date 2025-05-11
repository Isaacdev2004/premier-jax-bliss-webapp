
import { Booking } from "../types/booking";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Mail } from "lucide-react";

interface BookingDialogProps {
  booking: Booking | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdateStatus: (id: number, status: string) => void;
  getStatusBadge: (status: string) => JSX.Element;
}

export const BookingDialog = ({
  booking,
  open,
  onOpenChange,
  onUpdateStatus,
  getStatusBadge,
}: BookingDialogProps) => {
  if (!booking) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Booking Details</DialogTitle>
          <DialogDescription>
            View and manage booking information
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Patient</h3>
              <p className="font-medium">{booking.patientName}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Service</h3>
              <p>{booking.service}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
              <p>{booking.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
              <p>{booking.phone}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Date</h3>
              <p>{booking.date}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Time</h3>
              <p>{booking.time}</p>
            </div>
            <div className="col-span-2">
              <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
              <p>{getStatusBadge(booking.status)}</p>
            </div>
            <div className="col-span-2">
              <h3 className="text-sm font-medium text-muted-foreground">Notes</h3>
              <p className="whitespace-pre-wrap">{booking.notes}</p>
            </div>
          </div>
          
          <div className="flex justify-between mt-6">
            <div className="space-x-2">
              <Button
                size="sm"
                className="bg-green-500 hover:bg-green-600"
                onClick={() => onUpdateStatus(booking.id, "confirmed")}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Confirm
                <Mail className="h-3 w-3 ml-1" title="Email will be sent" />
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => onUpdateStatus(booking.id, "cancelled")}
              >
                <XCircle className="h-4 w-4 mr-2" />
                Cancel
                <Mail className="h-3 w-3 ml-1" title="Email will be sent" />
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
