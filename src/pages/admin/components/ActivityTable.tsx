
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ActivityRecord } from "../types";

interface ActivityTableProps {
  activities: ActivityRecord[];
}

export const ActivityTable = ({ activities }: ActivityTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Patient</TableHead>
          <TableHead>Activity</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities.map((activity) => (
          <TableRow key={activity.id}>
            <TableCell className="font-medium">{activity.patient}</TableCell>
            <TableCell>{activity.activity}</TableCell>
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
            <TableCell colSpan={3} className="text-center py-4">
              No recent activity
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
