
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewCards } from "./components/OverviewCards";
import { ActivityTable } from "./components/ActivityTable";
import { StatsChart } from "./components/StatsChart";
import { Button } from "@/components/ui/button";
import { CalendarClock, Download, Users } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="space-y-6 px-6 py-6 md:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your admin portal</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            <span>Download Reports</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <CalendarClock className="h-4 w-4" />
            <span>Schedule</span>
          </Button>
          <Button size="sm" className="gap-1">
            <Users className="h-4 w-4" />
            <span>Manage Users</span>
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4 grid w-full grid-cols-2 md:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <OverviewCards />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Patient Statistics</CardTitle>
                <CardDescription>Patient visits over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <StatsChart />
              </CardContent>
            </Card>
            
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Next 5 scheduled appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-4 rounded-md border p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <CalendarClock className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Patient {i}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(2023, 5, i + 10).toLocaleDateString()} - 
                          {i % 2 === 0 ? " Annual Checkup" : " Follow-up"}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="activity" className="space-y-4">
          <Card className="border-muted/20 overflow-hidden">
            <CardHeader className="bg-muted/5 pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription className="mt-1">Latest patient and appointment activities</CardDescription>
                </div>
                <Button variant="outline" size="sm">
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
  );
};

export default AdminDashboard;
