
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  MessageSquare,
  Calendar,
  LogOut,
  User,
  Search,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AdminSidebarProps = {
  handleLogout: () => void;
};

const AdminSidebar = ({ handleLogout }: AdminSidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-r">
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <User className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Admin Portal</span>
            <span className="text-xs text-muted-foreground">Dr. Ameera Donzo</span>
          </div>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-2">
        <SearchBox />
        <NavigationMenu navigate={navigate} isActive={isActive} />
        <SidebarSeparator />
        <NotificationsMenu navigate={navigate} isActive={isActive} />
      </SidebarContent>
      
      <SidebarFooter className="border-t p-2">
        <LogoutButton handleLogout={handleLogout} />
      </SidebarFooter>
    </Sidebar>
  );
};

// Search component
const SearchBox = () => (
  <div className="px-2 py-2">
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input 
        type="search" 
        placeholder="Search..." 
        className="w-full rounded-md pl-8 bg-muted/50" 
      />
    </div>
  </div>
);

// Navigation menu component
const NavigationMenu = ({ 
  navigate, 
  isActive 
}: { 
  navigate: (path: string) => void;
  isActive: (path: string) => boolean;
}) => (
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton
        onClick={() => navigate("/admin/dashboard")}
        tooltip="Dashboard"
        className="w-full"
        isActive={isActive("/admin/dashboard")}
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
        isActive={isActive("/admin/messages")}
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
        isActive={isActive("/admin/bookings")}
      >
        <Calendar className="h-4 w-4" />
        <span>Bookings</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
);

// Notifications menu
const NotificationsMenu = ({ 
  navigate, 
  isActive 
}: { 
  navigate: (path: string) => void;
  isActive: (path: string) => boolean;
}) => (
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton
        onClick={() => navigate("/admin/notifications")}
        tooltip="Notifications"
        className="w-full"
        isActive={isActive("/admin/notifications")}
      >
        <Bell className="h-4 w-4" />
        <span>Notifications</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
);

// Logout button component
const LogoutButton = ({ handleLogout }: { handleLogout: () => void }) => (
  <Button
    variant="ghost"
    className="w-full justify-start text-destructive hover:text-destructive"
    onClick={handleLogout}
  >
    <LogOut className="h-4 w-4 mr-2" />
    <span>Logout</span>
  </Button>
);

export default AdminSidebar;
