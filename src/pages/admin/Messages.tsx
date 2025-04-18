
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
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
import { Search, Trash2, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample message data
const sampleMessages = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Question about services",
    message: "I'm interested in your internal medicine services. Can you tell me more about your preventive care options?",
    date: "2025-04-15",
    read: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    subject: "Appointment request",
    message: "I would like to schedule an appointment for next week. What availability do you have?",
    date: "2025-04-16",
    read: false,
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    subject: "Follow-up question",
    message: "I had an appointment last month and wanted to follow up on some test results.",
    date: "2025-04-17",
    read: false,
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah@example.com",
    subject: "Med spa inquiry",
    message: "I'm interested in your med spa services. What treatments do you offer for skin rejuvenation?",
    date: "2025-04-18",
    read: true,
  },
];

const Messages = () => {
  const [messages, setMessages] = useState(sampleMessages);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<typeof sampleMessages[0] | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const filteredMessages = messages.filter(
    (message) =>
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewMessage = (message: typeof sampleMessages[0]) => {
    setSelectedMessage(message);
    setOpenDialog(true);
    
    // Mark as read if it's not already
    if (!message.read) {
      setMessages(
        messages.map((m) =>
          m.id === message.id ? { ...m, read: true } : m
        )
      );
    }
  };

  const handleDeleteMessage = (id: number) => {
    setMessages(messages.filter((message) => message.id !== id));
    toast({
      title: "Message deleted",
      description: "The message has been removed",
    });
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
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMessages.length > 0 ? (
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
                <TableCell colSpan={6} className="text-center py-6">
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
          <div className="mt-4 p-4 bg-muted rounded-md">
            <p className="whitespace-pre-wrap">{selectedMessage?.message}</p>
          </div>
          <div className="flex justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => setOpenDialog(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Messages;
