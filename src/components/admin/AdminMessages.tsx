import { useState } from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Trash2, Check, X, MessageSquare, Mail, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const mockMessages = [
  { id: 1, name: "John Doe", email: "john@example.com", message: "I have a question about your services.", date: "2025-04-15", status: "unread" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", message: "Do you accept insurance?", date: "2025-04-14", status: "read" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", message: "What are your operating hours?", date: "2025-04-13", status: "replied" }
];

const AdminMessages = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [searchTerm, setSearchTerm] = useState("");
  const [replyText, setReplyText] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<typeof mockMessages[0] | null>(null);
  const { toast } = useToast();

  const filteredMessages = messages.filter(message => 
    message.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (id: number, newStatus: string) => {
    setMessages(messages.map(message => 
      message.id === id ? { ...message, status: newStatus } : message
    ));
  };

  const handleDelete = (id: number) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  const handleReplyClick = (message: typeof mockMessages[0]) => {
    setSelectedMessage(message);
    setReplyText("");
  };

  const handleSendReply = async () => {
    if (!selectedMessage || !replyText.trim()) return;

    toast({
      title: "Not implemented",
      description: "Email functionality requires Supabase integration",
      variant: "destructive",
    });
    
    handleStatusChange(selectedMessage.id, "replied");
    setSelectedMessage(null);
    setReplyText("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6" />
            <span>Messages</span>
          </div>
        </h2>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search messages..."
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
              <TableHead>Email</TableHead>
              <TableHead className="hidden md:table-cell">Message</TableHead>
              <TableHead className="hidden sm:table-cell">Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMessages.length > 0 ? (
              filteredMessages.map((message) => (
                <TableRow key={message.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell className="hidden md:table-cell max-w-xs truncate">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button 
                          className="text-left hover:underline" 
                          onClick={() => handleReplyClick(message)}
                        >
                          {message.message}
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[525px]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Mail className="h-5 w-5" />
                            Reply to {message.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Original Message:</p>
                            <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
                              {message.message}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Your Reply:</p>
                            <Textarea
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              placeholder="Type your reply..."
                              className="min-h-[150px]"
                            />
                          </div>
                          <Button 
                            className="w-full"
                            onClick={handleSendReply}
                            disabled={!replyText.trim()}
                          >
                            <Send className="mr-2 h-4 w-4" />
                            Send Reply
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{message.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        message.status === "unread" 
                          ? "destructive" 
                          : message.status === "read" 
                            ? "secondary" 
                            : "default"
                      }
                      className={message.status === "replied" ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      {message.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleStatusChange(message.id, "read")}
                        disabled={message.status !== "unread"}
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleStatusChange(message.id, "replied")}
                        disabled={message.status === "replied"}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleDelete(message.id)}
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
                  No messages found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminMessages;
