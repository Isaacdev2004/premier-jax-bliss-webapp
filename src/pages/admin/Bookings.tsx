import { useState } from "react";
import { Search } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookingDialog } from "./components/BookingDialog";
import { BookingsTable } from "./components/BookingsTable";
import { Booking } from "./types/booking";

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
  const [bookings, setBookings] = useState<Booking[]>(sampleBookings);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewBooking = (booking: Booking) => {
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

      <BookingsTable
        bookings={filteredBookings}
        onViewBooking={handleViewBooking}
        onDeleteBooking={handleDeleteBooking}
        getStatusBadge={getStatusBadge}
      />

      <BookingDialog
        booking={selectedBooking}
        open={openDialog}
        onOpenChange={setOpenDialog}
        onUpdateStatus={handleUpdateStatus}
        getStatusBadge={getStatusBadge}
      />
    </div>
  );
};

export default Bookings;
