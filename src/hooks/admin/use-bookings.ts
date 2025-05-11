import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchBookings, updateBookingStatus, deleteBooking } from "@/api/admin";
import { toast } from "@/hooks/use-toast";

export function useBookings() {
  const queryClient = useQueryClient();
  
  const { data: bookings = [], isLoading, error } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const bookingsData = await fetchBookings();
      
      // Create notifications for any new bookings
      const { supabase } = await import('@/integrations/supabase/client');
      
      // Get recent bookings (created in the last 24 hours)
      const now = new Date();
      const yesterday = new Date();
      yesterday.setDate(now.getDate() - 1);
      
      const recentBookings = bookingsData.filter(booking => {
        const bookingDate = new Date(booking.createdAt);
        return bookingDate > yesterday && booking.status === 'pending';
      });
      
      // Create notifications for recent bookings
      for (const booking of recentBookings) {
        // Check if a notification already exists for this booking
        const { data: existingNotifications } = await supabase
          .from('notifications')
          .select('id')
          .eq('title', 'New booking received')
          .eq('type', 'appointment')
          .like('message', `%${booking.patientName}%${booking.date}%`);
          
        // If no notification exists, create one
        if (!existingNotifications || existingNotifications.length === 0) {
          const notificationData = {
            title: 'New booking received',
            message: `${booking.patientName} booked for ${booking.service} on ${booking.date} at ${booking.time}`,
            date: new Date().toISOString().split('T')[0],
            type: "appointment",
            read: false
          };
          
          console.log('Creating booking notification:', notificationData);
          const { error } = await supabase.from('notifications').insert(notificationData);
          if (error) {
            console.error('Error creating notification:', error);
          } else {
            // Invalidate notifications query to refresh the list
            queryClient.invalidateQueries({ queryKey: ["notifications"] });
          }
        }
      }
      
      return bookingsData;
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number, status: string }) => {
      // First update the booking status
      await updateBookingStatus(id, status);
      
      // Find the booking to get the info for notification
      const updatedBooking = bookings.find((booking) => booking.id === id);
      
      // If booking found, create a notification about this action
      if (updatedBooking) {
        // Format the date string for readability
        const currentDate = new Date().toISOString().split('T')[0];
        
        // Create notification data based on status
        const notificationData = {
          title: `Booking ${status}`,
          message: `${updatedBooking.patientName}'s appointment for ${updatedBooking.service} on ${updatedBooking.date} at ${updatedBooking.time} was ${status}`,
          date: currentDate,
          type: "appointment",
          read: false
        };
        
        // Use the Supabase client to insert the notification
        const { supabase } = await import('@/integrations/supabase/client');
        console.log('Creating booking status notification:', notificationData);
        const { error } = await supabase.from('notifications').insert(notificationData);
        if (error) {
          console.error('Error creating notification:', error);
        }
      }
      
      return { id, status };
    },
    onSuccess: (_, variables) => {
      const { id, status } = variables;
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      
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
    mutationFn: async (id: number) => {
      // First find the booking to get info for notification
      const deletedBooking = bookings.find((booking) => booking.id === id);
      
      // Delete the booking
      await deleteBooking(id);
      
      // If booking was found, create a notification about the deletion
      if (deletedBooking) {
        const currentDate = new Date().toISOString().split('T')[0];
        
        const notificationData = {
          title: "Booking deleted",
          message: `${deletedBooking.patientName}'s appointment for ${deletedBooking.service} on ${deletedBooking.date} was deleted`,
          date: currentDate,
          type: "cancellation",
          read: false
        };
        
        const { supabase } = await import('@/integrations/supabase/client');
        await supabase.from('notifications').insert(notificationData);
      }
      
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      
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
