
import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNotifications } from "@/hooks/admin/use-notifications";
import { Skeleton } from "@/components/ui/skeleton";

const Notifications = () => {
  const { 
    notifications, 
    isLoading, 
    unreadCount, 
    recentCount,
    updateReadStatus, 
    markAllAsRead, 
    deleteNotification, 
    clearAll 
  } = useNotifications();

  const getTypeIcon = (type: string) => {
    // In a real implementation, you would return different icons based on the notification type
    return <Calendar className="h-4 w-4 text-primary" />;
  };

  const handleToggleReadStatus = (id: number, currentReadStatus: boolean) => {
    updateReadStatus({ id, read: !currentReadStatus });
  };

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
          <Button variant="outline" onClick={() => markAllAsRead()}>Mark all as read</Button>
          <Button onClick={() => clearAll()}>Clear notifications</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {isLoading ? (
          <>
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
          </>
        ) : (
          <>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Unread</CardTitle>
                <CardDescription>Unread notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{unreadCount}</div>
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
                  {recentCount}
                </div>
              </CardContent>
            </Card>
          </>
        )}
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
              {isLoading ? (
                Array(5).fill(0).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell><Skeleton className="h-8 w-8 rounded-full" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-64" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                    <TableCell><Skeleton className="h-8 w-28 ml-auto" /></TableCell>
                  </TableRow>
                ))
              ) : notifications.map((notification) => (
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
                  <TableCell>{notification.date}</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleToggleReadStatus(notification.id, notification.read)}
                    >
                      {notification.read ? "Mark as unread" : "Mark as read"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {!isLoading && notifications.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    No notifications found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;
