
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search, Trash2, Eye, Calendar, CheckCircle, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Sample booking data
const sampleBookings = [
  {
    id: 1,
    patientName: "John Doe",
    email: "john@example.com",
    phone: "555-123-4567",
    date: "2025-04-25",
    time: "09:30 AM",
    service: "Internal Medicine",
    status: "confirmed",
    notes: "First-time patient, needs general check-up.",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    email: "jane@example.com",
    phone: "555-987-6543",
    date: "2025-04-26",
    time: "11:00 AM",
    service: "Med Spa",
    status: "pending",
    notes: "Interested in skin rejuvenation treatments.",
  },
  {
    id: 3,
    patientName: "Michael Johnson",
    email: "michael@example.com",
    phone: "555-456-7890",
    date: "2025-04-27",
    time: "02:15 PM",
    service: "Internal Medicine",
    status: "confirmed",
    notes: "Follow-up appointment for medication review.",
  },
  {
    id: 4,
    patientName: "Sarah Williams",
    email: "sarah@example.com",
    phone: "555-234-5678",
    date: "2025-04-28",
    time: "10:45 AM",
    service: "Med Spa",
    status: "cancelled",
    notes: "Requested rescheduling due to conflict.",
  },
];

const Bookings = () => {
  const [bookings, setBookings] = useState(sampleBookings);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBooking, setSelectedBooking] = useState<typeof sampleBookings[0] | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewBooking = (booking: typeof sampleBookings[0]) => {
    setSelectedBooking(booking);
    setOpenDialog(true);
  };

  const handleDeleteBooking = (id: number) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
    toast({
      title: "Booking deleted",
      description: "The booking has been removed",
    });
  };

  const handleUpdateStatus = (id: number, status: string) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status } : booking
      )
    );
    toast({
      title: "Status updated",
      description: `Booking has been marked as ${status}`,
    });
    setOpenDialog(false);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-500">Confirmed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case "cancelled":
        return <Badge className="bg-red-500">Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Bookings</h1>
          <p className="text-muted-foreground">
            Manage all appointment bookings
          </p>
        </div>
      </div>

      <div className="flex items-center py-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search bookings..."
            className="w-full appearance-none pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{booking.patientName}</p>
                      <p className="text-sm text-muted-foreground">{booking.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{booking.service}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{booking.date}, {booking.time}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(booking.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleViewBooking(booking)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteBooking(booking.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6">
                  No bookings found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Booking Details</DialogTitle>
            <DialogDescription>
              View and manage booking information
            </DialogDescription>
          </DialogHeader>
          
          {selectedBooking && (
            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Patient</h3>
                  <p className="font-medium">{selectedBooking.patientName}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Service</h3>
                  <p>{selectedBooking.service}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <p>{selectedBooking.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                  <p>{selectedBooking.phone}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Date</h3>
                  <p>{selectedBooking.date}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Time</h3>
                  <p>{selectedBooking.time}</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                  <p>{getStatusBadge(selectedBooking.status)}</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Notes</h3>
                  <p className="whitespace-pre-wrap">{selectedBooking.notes}</p>
                </div>
              </div>
              
              <div className="flex justify-between mt-6">
                <div className="space-x-2">
                  <Button
                    size="sm"
                    className="bg-green-500 hover:bg-green-600"
                    onClick={() => handleUpdateStatus(selectedBooking.id, "confirmed")}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Confirm
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleUpdateStatus(selectedBooking.id, "cancelled")}
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setOpenDialog(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Bookings;
