
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    patient: "John Doe",
    activity: "Booked an appointment",
    service: "Internal Medicine",
    time: "30 minutes ago",
    status: "completed",
  },
  {
    id: 2,
    patient: "Jane Smith",
    activity: "Cancelled appointment",
    service: "Med Spa",
    time: "2 hours ago",
    status: "cancelled",
  },
  {
    id: 3,
    patient: "David Wilson",
    activity: "Sent a message",
    service: "General Inquiry",
    time: "4 hours ago",
    status: "pending",
  },
  {
    id: 4,
    patient: "Sarah Brown",
    activity: "Completed treatment",
    service: "Skin Rejuvenation",
    time: "Yesterday",
    status: "completed",
  },
  {
    id: 5,
    patient: "Robert Johnson",
    activity: "Rescheduled appointment",
    service: "Acne Treatment",
    time: "Yesterday",
    status: "pending",
  },
];

export const ActivityTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Patient</TableHead>
          <TableHead>Activity</TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities.map((activity) => (
          <TableRow key={activity.id}>
            <TableCell className="font-medium">{activity.patient}</TableCell>
            <TableCell>{activity.activity}</TableCell>
            <TableCell>{activity.service}</TableCell>
            <TableCell>{activity.time}</TableCell>
            <TableCell>
              <Badge
                className={
                  activity.status === "completed"
                    ? "bg-green-500"
                    : activity.status === "cancelled"
                    ? "bg-red-500"
                    : "bg-yellow-500"
                }
              >
                {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
