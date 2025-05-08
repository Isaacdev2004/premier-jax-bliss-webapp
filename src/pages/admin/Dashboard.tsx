
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewCards } from "./components/OverviewCards";
import { ActivityTable } from "./components/ActivityTable";
import { StatsChart } from "./components/StatsChart";
import { Button } from "@/components/ui/button";
import { CalendarClock, Download, Users } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="h-full w-full overflow-y-auto bg-background">
      <div className="space-y-6 p-4 md:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to your admin portal</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              <span>Reports</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <CalendarClock className="h-4 w-4" />
              <span>Schedule</span>
            </Button>
            <Button size="sm" className="gap-1">
              <Users className="h-4 w-4" />
              <span>Users</span>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4 grid w-full grid-cols-2 sm:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <OverviewCards />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-full lg:col-span-4">
                <CardHeader>
                  <CardTitle>Patient Statistics</CardTitle>
                  <CardDescription>Patient visits over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <StatsChart />
                </CardContent>
              </Card>
              
              <Card className="col-span-full lg:col-span-3">
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>Next 5 scheduled appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="flex items-center gap-3 rounded-md border p-3">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <CalendarClock className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium truncate">Patient {i}</p>
                          <p className="text-xs text-muted-foreground truncate">
                            {new Date(2023, 5, i + 10).toLocaleDateString()} - 
                            {i % 2 === 0 ? " Annual Checkup" : " Follow-up"}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="flex-shrink-0">View</Button>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="space-y-4">
            <Card className="border-muted/20 overflow-hidden">
              <CardHeader className="bg-muted/5 pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription className="mt-1">Latest patient and appointment activities</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ActivityTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
