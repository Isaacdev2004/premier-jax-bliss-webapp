
import { Calendar, MessageSquare, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentActivities = [
  {
    id: 1,
    type: "Appointment",
    description: "New appointment booked",
    date: "2025-04-18",
    time: "15:30",
    status: "Pending",
  },
  {
    id: 2,
    type: "Message",
    description: "New message received",
    date: "2025-04-18",
    time: "14:45",
    status: "Unread",
  },
  {
    id: 3,
    type: "Patient",
    description: "New patient registered",
    date: "2025-04-18",
    time: "13:20",
    status: "Completed",
  },
  {
    id: 4,
    type: "Appointment",
    description: "Appointment rescheduled",
    date: "2025-04-17",
    time: "10:15",
    status: "Pending",
  },
  {
    id: 5,
    type: "Message",
    description: "Follow-up message sent",
    date: "2025-04-17",
    time: "09:30",
    status: "Sent",
  },
];

export const ActivityTable = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pending</Badge>;
      case "Unread":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Unread</Badge>;
      case "Sent":
        return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Sent</Badge>;
      case "Completed":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Completed</Badge>;
      default:
        return <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">{status}</Badge>;
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader className="bg-muted/5">
          <TableRow>
            <TableHead className="w-[120px] font-medium">Type</TableHead>
            <TableHead className="font-medium">Description</TableHead>
            <TableHead className="w-[120px] font-medium">Date</TableHead>
            <TableHead className="w-[100px] font-medium">Time</TableHead>
            <TableHead className="w-[120px] text-right font-medium">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentActivities.map((activity) => (
            <TableRow key={activity.id} className="hover:bg-muted/5">
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {activity.type === "Appointment" ? (
                    <Calendar className="h-4 w-4 text-primary" />
                  ) : activity.type === "Message" ? (
                    <MessageSquare className="h-4 w-4 text-indigo-500" />
                  ) : (
                    <Users className="h-4 w-4 text-green-500" />
                  )}
                  {activity.type}
                </div>
              </TableCell>
              <TableCell>{activity.description}</TableCell>
              <TableCell className="text-muted-foreground">{activity.date}</TableCell>
              <TableCell className="text-muted-foreground">{activity.time}</TableCell>
              <TableCell className="text-right">
                {getStatusBadge(activity.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
