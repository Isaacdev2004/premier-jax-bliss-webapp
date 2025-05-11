
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { toast } from "@/hooks/use-toast";
import AdminSidebar from "./components/AdminSidebar";
import AdminLoader from "./components/AdminLoader";

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check for admin authentication
    const adminAuth = localStorage.getItem("adminAuth");
    setIsAuthenticated(!!adminAuth);
    
    // Simulate API loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the admin portal",
    });
    setIsAuthenticated(false);
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
            <Outlet />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
