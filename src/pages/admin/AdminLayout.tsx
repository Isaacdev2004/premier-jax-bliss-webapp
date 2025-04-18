
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
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <SidebarProvider defaultOpen>
      <div className="grid h-screen">
        <Sidebar variant="sidebar" collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <span className="font-semibold">Admin Portal</span>
              <SidebarTrigger />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => navigate("/admin/dashboard")}
                  tooltip="Dashboard"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => navigate("/admin/messages")}
                  tooltip="Messages"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Messages</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => navigate("/admin/bookings")}
                  tooltip="Bookings"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Bookings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 px-2 py-2">
                <User className="h-4 w-4" />
                <span>Admin</span>
              </div>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                <span>Logout</span>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="p-4 md:p-8">
            <Outlet />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
