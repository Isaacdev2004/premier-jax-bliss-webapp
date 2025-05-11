import { useState, useEffect } from "react";
import { Bell, Calendar, CheckCircle, Mail, MessageCircle, Trash2, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNotifications } from "@/hooks/admin/use-notifications";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

const Notifications = () => {
  const { 
    notifications, 
    isLoading, 
    unreadCount, 
    recentCount,
    updateReadStatus, 
    markAllAsRead, 
    deleteNotification, 
    clearAll,
    refetchNotifications 
  } = useNotifications();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [debugInfo, setDebugInfo] = useState<any>(null);

  // Debug function to check the database directly
  const checkDatabase = async () => {
    // Fetch notifications directly from the database
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      setDebugInfo({ error: error.message });
    } else {
      setDebugInfo({ 
        count: data?.length || 0,
        items: data?.slice(0, 5) || []
      });
    }
  };

  // Filter notifications based on search term
  const filteredNotifications = notifications.filter(notification => 
    notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleReadStatus = (id: number, currentReadStatus: boolean) => {
    updateReadStatus({ id, read: !currentReadStatus });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "appointment":
        return <Calendar className="h-4 w-4 text-blue-500" />;
      case "message":
        return <Mail className="h-4 w-4 text-green-500" />;
      case "cancellation":
        return <Trash2 className="h-4 w-4 text-red-500" />;
      case "system":
        return <Bell className="h-4 w-4 text-yellow-500" />;
      default:
        return <MessageCircle className="h-4 w-4 text-primary" />;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "appointment":
        return <Badge className="bg-blue-500">Appointment</Badge>;
      case "message":
        return <Badge className="bg-green-500">Message</Badge>;
      case "cancellation":
        return <Badge className="bg-red-500">Cancellation</Badge>;
      case "system":
        return <Badge className="bg-yellow-500">System</Badge>;
      default:
        return <Badge>{type.charAt(0).toUpperCase() + type.slice(1)}</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            View and manage all your notifications
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => markAllAsRead()}>Mark all as read</Button>
          <Button variant="destructive" onClick={() => clearAll()}>Clear notifications</Button>
          <Button 
            variant="default"
            onClick={() => refetchNotifications()}
            className="flex items-center gap-1"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
          <Button 
            variant="outline" 
            onClick={checkDatabase}
          >
            Check DB
          </Button>
        </div>
      </div>

      {/* Debug information */}
      {debugInfo && (
        <Card className="bg-muted/50 mb-4">
          <CardHeader>
            <CardTitle className="text-sm">Debug Information</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-xs overflow-auto max-h-40">
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}

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

      <div className="flex items-center py-4">
        <Input
          placeholder="Search notifications..."
          className="max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
                      {getTypeIcon(notification.type)}
                    </div>
                  </TableCell>
                  <TableCell>{getTypeBadge(notification.type)}</TableCell>
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
    </div>
  );
};

export default Notifications;
