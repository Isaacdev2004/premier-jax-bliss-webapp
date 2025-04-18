
import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  MessageSquare,
  Calendar,
  LogOut,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for admin authentication
    const adminAuth = localStorage.getItem("adminAuth");
    setIsAuthenticated(!!adminAuth);
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the admin portal",
    });
    navigate("/admin/login");
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="animate-pulse text-lg font-medium text-muted-foreground">
          Loading...
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <SidebarProvider defaultOpen>
      <div className="grid h-screen">
        <Sidebar variant="sidebar" collapsible="icon">
          <SidebarHeader className="border-b">
            <div className="flex items-center gap-2 px-4 py-3">
              <User className="h-6 w-6" />
              <span className="text-lg font-semibold">Admin Portal</span>
              <SidebarTrigger className="ml-auto" />
            </div>
          </SidebarHeader>
          <SidebarContent className="p-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => navigate("/admin/dashboard")}
                  tooltip="Dashboard"
                  className="w-full"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => navigate("/admin/messages")}
                  tooltip="Messages"
                  className="w-full"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Messages</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => navigate("/admin/bookings")}
                  tooltip="Bookings"
                  className="w-full"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Bookings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              <span>Logout</span>
            </Button>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="h-full overflow-auto bg-background p-6">
            <Outlet />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
