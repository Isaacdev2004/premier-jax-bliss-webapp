
import { OverviewCards } from "./components/OverviewCards";
import { StatsChart } from "./components/StatsChart";
import { ActivityTable } from "./components/ActivityTable";
import { Card } from "@/components/ui/card";
import { useDashboard } from "@/hooks/admin/use-dashboard";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  const { stats, activities, chartData, isLoading } = useDashboard();
  
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Get an overview of your clinic's performance
        </p>
      </div>

      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
      ) : (
        <OverviewCards stats={stats} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
        <Card className="col-span-1 md:col-span-5">
          {isLoading ? (
            <Skeleton className="h-[300px] w-full" />
          ) : (
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Activity Overview</h2>
              <StatsChart data={chartData} />
            </div>
          )}
        </Card>

        <div className="col-span-1 md:col-span-2 space-y-6">
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              {isLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                </div>
              ) : (
                <ActivityTable activities={activities} />
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
