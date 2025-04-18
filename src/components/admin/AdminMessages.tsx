
import { useState } from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Trash2, Check, X, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for demonstration purposes
const mockMessages = [
  { id: 1, name: "John Doe", email: "john@example.com", message: "I have a question about your services.", date: "2025-04-15", status: "unread" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", message: "Do you accept insurance?", date: "2025-04-14", status: "read" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", message: "What are your operating hours?", date: "2025-04-13", status: "replied" }
];

const AdminMessages = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [searchTerm, setSearchTerm] = useState("");

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
                <TableRow key={message.id}>
                  <TableCell className="font-medium">{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell className="hidden md:table-cell max-w-xs truncate">
                    {message.message}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{message.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        message.status === "unread" 
                          ? "destructive" 
                          : message.status === "read" 
                            ? "secondary" 
                            : "success"
                      }
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
