
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchMessages, updateMessageReadStatus, deleteMessage } from "@/api/admin";
import { toast } from "@/hooks/use-toast";

export function useMessages() {
  const queryClient = useQueryClient();
  
  const { data: messages = [], isLoading, error } = useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages,
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
