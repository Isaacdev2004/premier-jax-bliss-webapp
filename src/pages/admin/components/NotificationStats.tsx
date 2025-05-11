
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface NotificationStatsProps {
  unreadCount: number;
  totalCount: number;
  recentCount: number;
  isLoading: boolean;
}

const NotificationStats = ({ unreadCount, totalCount, recentCount, isLoading }: NotificationStatsProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <div className="text-2xl font-bold">{totalCount}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Recent</CardTitle>
          <CardDescription>Last 24 hours</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{recentCount}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationStats;
