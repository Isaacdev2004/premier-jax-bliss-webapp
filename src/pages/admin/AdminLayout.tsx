
import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { toast } from "@/hooks/use-toast";
import AdminSidebar from "./components/AdminSidebar";
import AdminLoader from "./components/AdminLoader";
import Dashboard from "./Dashboard";
import Bookings from "./Bookings";
import Messages from "./Messages";
import Notifications from "./Notifications";

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
    return <AdminLoader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full overflow-hidden bg-background">
        <AdminSidebar handleLogout={handleLogout} />
        
        <SidebarInset className="flex-1 overflow-hidden">
          <div className="h-full w-full overflow-auto">
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="messages" element={<Messages />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="*" element={<Outlet />} />
            </Routes>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
