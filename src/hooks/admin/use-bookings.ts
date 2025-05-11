
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchBookings, updateBookingStatus, deleteBooking } from "@/api/admin";
import { toast } from "@/hooks/use-toast";

export function useBookings() {
  const queryClient = useQueryClient();
  
  const { data: bookings = [], isLoading, error } = useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings,
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: number, status: string }) => 
      updateBookingStatus(id, status),
    onSuccess: (_, variables) => {
      const { id, status } = variables;
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      
      // Find the booking to get the recipient's email
      const updatedBooking = bookings.find((booking) => booking.id === id);
      
      if (updatedBooking) {
        // Send notification email when status is confirmed or cancelled
        if (status === "confirmed" || status === "cancelled") {
          const subject = status === "confirmed" 
            ? `Your appointment has been confirmed` 
            : `Your appointment has been cancelled`;
            
          const body = `Dear ${updatedBooking.patientName},

We would like to inform you that your appointment scheduled for ${updatedBooking.date} has been ${status}.
${status === "confirmed" 
  ? "We look forward to seeing you!" 
  : "Please contact us if you would like to reschedule."}

Service: ${updatedBooking.service}
Date: ${updatedBooking.date}
Time: ${updatedBooking.time}

If you have any questions, please don't hesitate to contact us.

Best regards,
Jax Premier Medical Team`;

          // Open email client with prefilled content
          try {
            const mailtoLink = `mailto:${updatedBooking.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailtoLink);
          } catch (error) {
            console.error("Error opening email client:", error);
          }
        }
      }

      toast({
        title: "Status updated",
        description: "Booking status has been updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update booking status",
        variant: "destructive",
      });
      console.error("Error updating booking status:", error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteBooking(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast({
        title: "Booking deleted",
        description: "The booking has been removed successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete booking",
        variant: "destructive",
      });
      console.error("Error deleting booking:", error);
    },
  });

  return {
    bookings,
    isLoading,
    error,
    updateStatus: updateStatusMutation.mutate,
    deleteBooking: deleteMutation.mutate,
    isUpdating: updateStatusMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
}
