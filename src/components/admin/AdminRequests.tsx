
import { useState } from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Trash2, Check, X, Inbox } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for demonstration purposes
const mockRequests = [
  { id: 1, name: "John Doe", type: "Medical Records", details: "Need copies of my health records from 2024", date: "2025-04-15", status: "pending" },
  { id: 2, name: "Jane Smith", type: "Insurance Verification", details: "Please verify if my insurance is accepted", date: "2025-04-14", status: "processing" },
  { id: 3, name: "Bob Johnson", type: "Prescription Refill", details: "Need refill for my blood pressure medication", date: "2025-04-13", status: "completed" }
];

const AdminRequests = () => {
  const [requests, setRequests] = useState(mockRequests);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRequests = requests.filter(request => 
    request.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    request.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (id: number, newStatus: string) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: newStatus } : request
    ));
  };

  const handleDelete = (id: number) => {
    setRequests(requests.filter(request => request.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          <div className="flex items-center gap-2">
            <Inbox className="h-6 w-6" />
            <span>Requests</span>
          </div>
        </h2>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search requests..."
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
              <TableHead>Type</TableHead>
              <TableHead className="hidden md:table-cell">Details</TableHead>
              <TableHead className="hidden sm:table-cell">Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRequests.length > 0 ? (
              filteredRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.name}</TableCell>
                  <TableCell>{request.type}</TableCell>
                  <TableCell className="hidden md:table-cell max-w-xs truncate">
                    {request.details}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{request.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        request.status === "pending" 
                          ? "secondary" 
                          : request.status === "processing" 
                            ? "outline" 
                            : "success"
                      }
                    >
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleStatusChange(request.id, "processing")}
                        disabled={request.status === "processing" || request.status === "completed"}
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleStatusChange(request.id, "completed")}
                        disabled={request.status === "completed"}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleDelete(request.id)}
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
                  No requests found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminRequests;
