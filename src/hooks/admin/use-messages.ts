
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchMessages, updateMessageReadStatus, deleteMessage } from "@/api/admin";
import { toast } from "@/hooks/use-toast";

export function useMessages() {
  const queryClient = useQueryClient();
  
  const { data: messages = [], isLoading, error } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      // Fetch messages
      const messagesData = await fetchMessages();
      
      // For any unread messages, create notifications if they don't exist yet
      const unreadMessages = messagesData.filter(message => !message.read);
      
      if (unreadMessages.length > 0) {
        const { supabase } = await import('@/integrations/supabase/client');
        
        // Create notifications for unread messages
        for (const message of unreadMessages) {
          // Check if a notification already exists for this message
          const { data: existingNotifications } = await supabase
            .from('notifications')
            .select('id')
            .eq('title', `New message from ${message.name}`)
            .eq('type', 'message')
            .eq('message', `Subject: ${message.subject}`);
            
          // If no notification exists, create one
          if (!existingNotifications || existingNotifications.length === 0) {
            const notificationData = {
              title: `New message from ${message.name}`,
              message: `Subject: ${message.subject}`,
              date: message.date,
              type: "message",
              read: false
            };
            
            await supabase.from('notifications').insert(notificationData);
            // Invalidate notifications query to refresh the list
            queryClient.invalidateQueries({ queryKey: ["notifications"] });
          }
        }
      }
      
      return messagesData;
    },
  });

  const updateReadStatusMutation = useMutation({
    mutationFn: ({ id, read }: { id: number, read: boolean }) => 
      updateMessageReadStatus(id, read),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update message status",
        variant: "destructive",
      });
      console.error("Error updating message status:", error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteMessage(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
      toast({
        title: "Message deleted",
        description: "The message has been removed successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete message",
        variant: "destructive",
      });
      console.error("Error deleting message:", error);
    },
  });

  return {
    messages,
    isLoading,
    error,
    updateReadStatus: updateReadStatusMutation.mutate,
    deleteMessage: deleteMutation.mutate,
    isUpdating: updateReadStatusMutation.isPending,
    isDeleting: deleteMutation.isPending,
    unreadCount: messages.filter(message => !message.read).length,
  };
}
