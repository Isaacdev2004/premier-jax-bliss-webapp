
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookingDialog } from "./components/BookingDialog";
import { BookingsTable } from "./components/BookingsTable";
import { useBookings } from "@/hooks/admin/use-bookings";
import { Booking } from "./types";
import { Skeleton } from "@/components/ui/skeleton";

const Bookings = () => {
  const { bookings, isLoading, updateStatus, deleteBooking } = useBookings();
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
    deleteBooking(id);
  };

  const handleUpdateStatus = (id: number, status: string) => {
    updateStatus({ id, status });
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

      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      ) : (
        <BookingsTable
          bookings={filteredBookings}
          onViewBooking={handleViewBooking}
          onDeleteBooking={handleDeleteBooking}
          getStatusBadge={getStatusBadge}
        />
      )}

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
