
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import { NotificationTypeIcon, NotificationTypeBadge } from "./NotificationTypeIcon";

interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  type: string;
  read: boolean;
}

interface NotificationsTableProps {
  notifications: Notification[];
  isLoading: boolean;
  searchTerm: string;
  handleToggleReadStatus: (id: number, currentReadStatus: boolean) => void;
  deleteNotification: (id: number) => void;
}

const NotificationsTable = ({ 
  notifications, 
  isLoading, 
  searchTerm, 
  handleToggleReadStatus, 
  deleteNotification 
}: NotificationsTableProps) => {
  // Filter notifications based on search term
  const filteredNotifications = notifications.filter(notification => 
    notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"></TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array(5).fill(0).map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-8 w-8 rounded-full" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-64" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                  <TableCell><Skeleton className="h-8 w-28 ml-auto" /></TableCell>
                </TableRow>
              ))
            ) : filteredNotifications.map((notification) => (
              <TableRow key={notification.id} className={!notification.read ? "bg-primary/5" : ""}>
                <TableCell>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <NotificationTypeIcon type={notification.type} />
                  </div>
                </TableCell>
                <TableCell><NotificationTypeBadge type={notification.type} /></TableCell>
                <TableCell className="font-medium">
                  {notification.title}
                  {!notification.read && <span className="ml-2 inline-flex h-2 w-2 rounded-full bg-primary"></span>}
                </TableCell>
                <TableCell>{notification.message}</TableCell>
                <TableCell>{notification.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleToggleReadStatus(notification.id, notification.read)}
                    >
                      {notification.read ? "Mark as unread" : "Mark as read"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {!isLoading && filteredNotifications.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  {searchTerm ? "No matching notifications found" : "No notifications found"}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default NotificationsTable;
