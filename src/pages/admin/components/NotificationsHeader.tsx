
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface NotificationsHeaderProps {
  markAllAsRead: () => void;
  clearAll: () => void;
  refetchNotifications: () => void;
  checkDatabase: () => void;
}

const NotificationsHeader = ({ 
  markAllAsRead, 
  clearAll, 
  refetchNotifications,
  checkDatabase 
}: NotificationsHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
        <p className="text-muted-foreground">
          View and manage all your notifications
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={markAllAsRead}>Mark all as read</Button>
        <Button variant="destructive" onClick={clearAll}>Clear notifications</Button>
        <Button 
          variant="default"
          onClick={refetchNotifications}
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
  );
};

export default NotificationsHeader;
