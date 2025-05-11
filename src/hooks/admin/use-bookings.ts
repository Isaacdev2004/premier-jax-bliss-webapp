
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
      
      // Find the booking to get the recipient info for the toast notification
      const updatedBooking = bookings.find((booking) => booking.id === id);
      
      if (updatedBooking) {
        // Show appropriate notification based on status
        if (status === "confirmed" || status === "cancelled") {
          const statusText = status === "confirmed" ? "confirmed" : "cancelled";
          
          toast({
            title: `Booking ${statusText}`,
            description: `Status updated for ${updatedBooking.patientName}'s appointment on ${updatedBooking.date}`,
            duration: 5000,
          });
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
