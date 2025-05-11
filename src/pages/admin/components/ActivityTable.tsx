
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Calendar } from "lucide-react";
import { ActivityRecord } from "../types";

interface ActivityTableProps {
  activities: ActivityRecord[];
}

export const ActivityTable = ({ activities }: ActivityTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Patient/Sender</TableHead>
          <TableHead>Details</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities.map((activity) => (
          <TableRow key={activity.id}>
            <TableCell>
              <div className="flex items-center gap-2">
                {activity.activity === "message" ? (
                  <MessageSquare className="h-4 w-4 text-blue-500" />
                ) : (
                  <Calendar className="h-4 w-4 text-green-500" />
                )}
                <span className="capitalize">{activity.activity}</span>
              </div>
            </TableCell>
            <TableCell className="font-medium">{activity.patient}</TableCell>
            <TableCell>
              {activity.activity === "message" 
                ? `Subject: ${activity.service}` 
                : `${activity.service} on ${activity.time}`}
            </TableCell>
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
        {activities.length === 0 && (
          <TableRow>
            <TableCell colSpan={4} className="text-center py-4">
              No recent activity
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
