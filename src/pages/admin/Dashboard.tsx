
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Calendar, MessageSquare, Users } from "lucide-react";

// Sample data for overview
const overviewData = [
  {
    id: 1,
    metric: "Total Bookings",
    value: "12",
    change: "+3",
    period: "from last week",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    id: 2,
    metric: "Total Messages",
    value: "24",
    change: "+5",
    period: "from last week",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    id: 3,
    metric: "Total Patients",
    value: "42",
    change: "+8",
    period: "from last month",
    icon: <Users className="h-4 w-4" />,
  },
];

// Sample data for recent activities
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
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome to your admin portal</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {overviewData.map((item) => (
          <Card key={item.id} className="hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.metric}</CardTitle>
              {item.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {item.change} {item.period}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="font-medium">{activity.type}</TableCell>
                  <TableCell>{activity.description}</TableCell>
                  <TableCell>{activity.date}</TableCell>
                  <TableCell>{activity.time}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      activity.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      activity.status === 'Unread' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {activity.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
