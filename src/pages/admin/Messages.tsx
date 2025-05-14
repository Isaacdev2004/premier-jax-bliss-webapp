
import { useState } from "react";
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
import { Search, Trash2, Eye, Reply, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useMessages } from "@/hooks/admin/use-messages";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

const Messages = () => {
  const { messages, isLoading, updateReadStatus, deleteMessage } = useMessages();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [replyMode, setReplyMode] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const filteredMessages = messages.filter(
    (message) =>
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewMessage = (message: any) => {
    setSelectedMessage(message);
    setOpenDialog(true);
    setReplyMode(false);
    setReplyText("");
    
    // Mark as read if it's not already
    if (!message.read) {
      updateReadStatus({ id: message.id, read: true });
    }
  };

  const handleDeleteMessage = (id: number) => {
    deleteMessage(id);
  };

  const handleReply = () => {
    setReplyMode(true);
  };

  const handleSendReply = async () => {
    if (!replyText.trim()) {
      toast({
        title: "Error",
        description: "Reply message cannot be empty",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);
    
    try {
      // Call our edge function to send the email
      const { error } = await supabase.functions.invoke('send-reply', {
        body: {
          messageId: selectedMessage?.id,
          replyText: replyText
        }
      });
      
      if (error) {
        throw new Error(error.message || 'Failed to send reply');
      }
      
      toast({
        title: "Reply Sent",
        description: `Your reply was sent to ${selectedMessage?.email}`,
      });
      
      setReplyMode(false);
      setReplyText("");
      setOpenDialog(false);
      
    } catch (error) {
      console.error("Error sending reply:", error);
      toast({
        title: "Error",
        description: "Failed to send reply. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const formatReplyDate = (dateString?: string) => {
    if (!dateString) return "";
    try {
      return format(new Date(dateString), "MMM d, yyyy 'at' h:mm a");
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">
            Manage all incoming messages from your website
          </p>
        </div>
      </div>

      <div className="flex items-center py-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search messages..."
            className="w-full appearance-none pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Status</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Replied</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array(3).fill(0).map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-4 rounded-full" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Skeleton className="h-8 w-8" />
                      <Skeleton className="h-8 w-8" />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : filteredMessages.length > 0 ? (
              filteredMessages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell>
                    <div
                      className={`h-2 w-2 rounded-full ${
                        message.read
                          ? "bg-muted"
                          : "bg-green-500"
                      }`}
                    />
                  </TableCell>
                  <TableCell>{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.subject}</TableCell>
                  <TableCell>{message.date}</TableCell>
                  <TableCell>
                    {message.hasBeenReplied ? (
                      <div className="flex items-center text-xs text-green-600">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        <span>{formatReplyDate(message.lastRepliedAt)}</span>
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">Not replied</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleViewMessage(message)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteMessage(message.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6">
                  No messages found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedMessage?.subject}</DialogTitle>
            <DialogDescription>
              From {selectedMessage?.name} ({selectedMessage?.email}) on{" "}
              {selectedMessage?.date}
            </DialogDescription>
          </DialogHeader>
          
          {!replyMode ? (
            <>
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="whitespace-pre-wrap">{selectedMessage?.message}</p>
              </div>
              
              {selectedMessage?.hasBeenReplied && (
                <div className="mt-2 text-sm text-green-600 flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-1" />
                  <span>Replied on {formatReplyDate(selectedMessage?.lastRepliedAt)}</span>
                </div>
              )}
              
              <div className="flex justify-between mt-4">
                <Button
                  variant="secondary"
                  onClick={handleReply}
                  className="flex items-center gap-2"
                >
                  <Reply className="h-4 w-4" />
                  {selectedMessage?.hasBeenReplied ? "Reply Again" : "Reply"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setOpenDialog(false)}
                >
                  Close
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="mt-4">
                <label htmlFor="reply" className="block text-sm font-medium mb-2">
                  Your Reply
                </label>
                <Textarea 
                  id="reply"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply here..."
                  className="w-full h-32"
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button
                  variant="outline"
                  onClick={() => setReplyMode(false)}
                  disabled={isSending}
                >
                  Cancel
                </Button>
                <Button
                  variant="default"
                  onClick={handleSendReply}
                  disabled={isSending}
                  className="bg-jax-primary hover:bg-jax-primary/90"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Reply"
                  )}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Messages;
