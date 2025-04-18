
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewCards } from "./components/OverviewCards";
import { ActivityTable } from "./components/ActivityTable";

const AdminDashboard = () => {
  return (
    <div className="space-y-6 px-8 py-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your admin portal</p>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <OverviewCards />
        </TabsContent>
        
        <TabsContent value="activity" className="space-y-4">
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
              <ActivityTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
