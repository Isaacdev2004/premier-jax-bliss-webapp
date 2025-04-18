
import { useState } from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Trash2, Calendar, CheckCircle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for demonstration purposes
const mockBookings = [
  { id: 1, name: "John Doe", service: "General Checkup", date: "2025-04-20", time: "10:00 AM", status: "confirmed" },
  { id: 2, name: "Jane Smith", service: "Med Spa Consultation", date: "2025-04-21", time: "2:30 PM", status: "pending" },
  { id: 3, name: "Bob Johnson", service: "Dermatology", date: "2025-04-22", time: "1:15 PM", status: "cancelled" }
];

const AdminBookings = () => {
  const [bookings, setBookings] = useState(mockBookings);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBookings = bookings.filter(booking => 
    booking.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.date.includes(searchTerm)
  );

  const handleStatusChange = (id: number, newStatus: string) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: newStatus } : booking
    ));
  };

  const handleDelete = (id: number) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            <span>Appointments</span>
          </div>
        </h2>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search appointments..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Service</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="hidden sm:table-cell">Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.name}</TableCell>
                  <TableCell className="hidden md:table-cell">{booking.service}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell className="hidden sm:table-cell">{booking.time}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        booking.status === "confirmed" 
                          ? "default" 
                          : booking.status === "pending" 
                            ? "secondary" 
                            : "destructive"
                      }
                      className={booking.status === "confirmed" ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleStatusChange(booking.id, "confirmed")}
                        disabled={booking.status === "confirmed"}
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleStatusChange(booking.id, "cancelled")}
                        disabled={booking.status === "cancelled"}
                      >
                        <XCircle className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleDelete(booking.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6">
                  No appointments found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminBookings;
