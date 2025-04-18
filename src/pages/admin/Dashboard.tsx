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
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { 
  Calendar, 
  MessageSquare, 
  Users, 
  ArrowUp, 
  ArrowDown,
  BarChart2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const overviewData = [
  {
    id: 1,
    metric: "Total Bookings",
    value: "12",
    change: "+3",
    trend: "up",
    period: "from last week",
    icon: <Calendar className="h-5 w-5 text-primary" />,
  },
  {
    id: 2,
    metric: "Total Messages",
    value: "24",
    change: "+5",
    trend: "up",
    period: "from last week",
    icon: <MessageSquare className="h-5 w-5 text-indigo-500" />,
  },
  {
    id: 3,
    metric: "Total Patients",
    value: "42",
    change: "+8",
    trend: "up",
    period: "from last month",
    icon: <Users className="h-5 w-5 text-green-500" />,
  },
];

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

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState<'overview' | 'activity'>('overview');

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
    <div className="space-y-6 px-8 py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome to your admin portal</p>
        </div>
        
        <div className="flex items-center gap-2 bg-muted/30 p-1 rounded-lg">
          <button 
            onClick={() => setSelectedSection('overview')} 
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              selectedSection === 'overview' 
                ? 'bg-background shadow-sm' 
                : 'hover:bg-muted/50'
            }`}
          >
            Overview
          </button>
          <button 
            onClick={() => setSelectedSection('activity')} 
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              selectedSection === 'activity' 
                ? 'bg-background shadow-sm' 
                : 'hover:bg-muted/50'
            }`}
          >
            Recent Activity
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {overviewData.map((item) => (
          <Card key={item.id} className="overflow-hidden border-muted/20 transition-all duration-200 hover:shadow-md hover:border-primary/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-muted/10">
              <CardTitle className="text-sm font-medium">{item.metric}</CardTitle>
              <div className="rounded-full bg-background/90 p-2 shadow-sm">
                {item.icon}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <div className="text-3xl font-bold">{item.value}</div>
                  <div className="flex items-center mt-1 text-sm">
                    {item.trend === "up" ? (
                      <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                    ) : (
                      <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                    )}
                    <span className={item.trend === "up" ? "text-green-600" : "text-red-600"}>
                      {item.change}
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">
                      {item.period}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block opacity-30">
                  <BarChart2 className="h-16 w-16 rotate-90" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-muted/20 overflow-hidden">
        <CardHeader className="bg-muted/10 pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription className="mt-1">Latest patient and appointment activities</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
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
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
