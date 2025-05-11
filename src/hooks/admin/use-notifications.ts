
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  fetchNotifications, 
  updateNotificationReadStatus, 
  markAllNotificationsAsRead,
  deleteNotification,
  clearAllNotifications
} from "@/api/admin";
import { toast } from "@/hooks/use-toast";

export function useNotifications() {
  const queryClient = useQueryClient();
  
  const { 
    data: notifications = [], 
    isLoading, 
    error,
    refetch 
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
  });

  const updateReadStatusMutation = useMutation({
    mutationFn: ({ id, read }: { id: number, read: boolean }) => 
      updateNotificationReadStatus(id, read),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update notification status",
        variant: "destructive",
      });
      console.error("Error updating notification status:", error);
    },
  });

  const markAllAsReadMutation = useMutation({
    mutationFn: markAllNotificationsAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      toast({
        title: "Success",
        description: "All notifications marked as read",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to mark all notifications as read",
        variant: "destructive",
      });
      console.error("Error marking all notifications as read:", error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteNotification(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      toast({
        title: "Notification deleted",
        description: "The notification has been removed",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete notification",
        variant: "destructive",
      });
      console.error("Error deleting notification:", error);
    },
  });

  const clearAllMutation = useMutation({
    mutationFn: clearAllNotifications,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      toast({
        title: "Success",
        description: "All notifications cleared",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to clear notifications",
        variant: "destructive",
      });
      console.error("Error clearing notifications:", error);
    },
  });

  return {
    notifications,
    isLoading,
    error,
    updateReadStatus: updateReadStatusMutation.mutate,
    markAllAsRead: markAllAsReadMutation.mutate,
    deleteNotification: deleteMutation.mutate,
    clearAll: clearAllMutation.mutate,
    refetchNotifications: refetch,
    isUpdating: updateReadStatusMutation.isPending || markAllAsReadMutation.isPending,
    isDeleting: deleteMutation.isPending || clearAllMutation.isPending,
    unreadCount: notifications.filter(notification => !notification.read).length,
    recentCount: notifications.filter(n => {
      const now = new Date();
      const yesterday = new Date(now);
      yesterday.setDate(now.getDate() - 1);
      return new Date(n.createdAt) > yesterday;
    }).length,
  };
}
