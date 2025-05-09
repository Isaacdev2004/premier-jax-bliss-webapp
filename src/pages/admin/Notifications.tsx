
import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Mock notification data - in a real app, this would come from an API
const notifications = [
  {
    id: 1,
    title: "New appointment scheduled",
    message: "Patient John Doe booked for May 10, 2025",
    date: new Date(2025, 4, 10),
    type: "appointment",
    read: false,
  },
  {
    id: 2,
    title: "New appointment scheduled",
    message: "Patient Jane Smith booked for May 11, 2025",
    date: new Date(2025, 4, 11),
    type: "appointment",
    read: false,
  },
  {
    id: 3,
    title: "New appointment scheduled",
    message: "Patient Robert Johnson booked for May 12, 2025",
    date: new Date(2025, 4, 12),
    type: "appointment",
    read: false,
  },
  {
    id: 4,
    title: "Message received",
    message: "New message from Patient Alice Brown about her upcoming appointment",
    date: new Date(2025, 4, 8),
    type: "message",
    read: true,
  },
  {
    id: 5,
    title: "Appointment cancelled",
    message: "Patient William Davis cancelled appointment for May 9, 2025",
    date: new Date(2025, 4, 9),
    type: "cancellation",
    read: true,
  },
  {
    id: 6,
    title: "System update",
    message: "The system will undergo maintenance on May 15, 2025",
    date: new Date(2025, 4, 15),
    type: "system",
    read: true,
  },
  {
    id: 7,
    title: "New review submitted",
    message: "Patient Elizabeth Wilson submitted a 5-star review",
    date: new Date(2025, 4, 7),
    type: "review",
    read: true,
  },
  {
    id: 8,
    title: "Inventory alert",
    message: "Medical supplies inventory running low",
    date: new Date(2025, 4, 5),
    type: "inventory",
    read: true,
  },
  {
    id: 9,
    title: "Staff meeting reminder",
    message: "Staff meeting scheduled for May 13, 2025 at 9:00 AM",
    date: new Date(2025, 4, 13),
    type: "reminder",
    read: false,
  },
  {
    id: 10,
    title: "New patient registered",
    message: "Michael Thompson completed registration",
    date: new Date(2025, 4, 3),
    type: "registration",
    read: true,
  }
];

const getTypeIcon = (type: string) => {
  // In a real implementation, you would return different icons based on the notification type
  return <Calendar className="h-4 w-4 text-primary" />;
};

const Notifications = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            View and manage all your notifications
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Mark all as read</Button>
          <Button>Clear notifications</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Unread</CardTitle>
            <CardDescription>Unread notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{notifications.filter(n => !n.read).length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total</CardTitle>
            <CardDescription>All notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{notifications.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Recent</CardTitle>
            <CardDescription>Last 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {notifications.filter(n => {
                const now = new Date();
                const yesterday = new Date(now.setDate(now.getDate() - 1));
                return n.date > yesterday;
              }).length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications.map((notification) => (
                <TableRow key={notification.id} className={!notification.read ? "bg-primary/5" : ""}>
                  <TableCell>
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      {getTypeIcon(notification.type)}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {notification.title}
                    {!notification.read && <span className="ml-2 inline-flex h-2 w-2 rounded-full bg-primary"></span>}
                  </TableCell>
                  <TableCell>{notification.message}</TableCell>
                  <TableCell>{notification.date.toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      {notification.read ? "Mark as unread" : "Mark as read"}
                    </Button>
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

export default Notifications;
