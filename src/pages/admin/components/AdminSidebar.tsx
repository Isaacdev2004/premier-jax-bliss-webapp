
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
  Bell,
  Settings,
  HelpCircle,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
        <UtilityMenuWithContent />
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

// Updated utility menu component with popovers
const UtilityMenuWithContent = () => (
  <SidebarMenu>
    <SidebarMenuItem>
      <Popover>
        <PopoverTrigger asChild>
          <SidebarMenuButton
            tooltip="Notifications"
            className="w-full"
          >
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </SidebarMenuButton>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Notifications</h4>
              <Button variant="ghost" size="sm" className="text-xs">Mark all as read</Button>
            </div>
            <div className="divide-y divide-border rounded-md border">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-2 p-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">New appointment scheduled</p>
                    <p className="text-xs text-muted-foreground">
                      Patient {i} booked for {new Date(2025, 4, i + 10).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
              {[1, 2, 3].length === 0 && (
                <div className="p-4 text-center text-sm text-muted-foreground">
                  No new notifications
                </div>
              )}
            </div>
            <Button size="sm" className="w-full">View all notifications</Button>
          </div>
        </PopoverContent>
      </Popover>
    </SidebarMenuItem>
    
    <SidebarMenuItem>
      <Popover>
        <PopoverTrigger asChild>
          <SidebarMenuButton
            tooltip="Settings"
            className="w-full"
          >
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </SidebarMenuButton>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Settings</h4>
            <div className="space-y-2">
              {["Account", "Profile", "Notifications", "Display", "Security"].map((setting) => (
                <Button 
                  key={setting} 
                  variant="ghost" 
                  className="w-full justify-start text-left"
                  onClick={() => toast({
                    title: `${setting} Settings`,
                    description: `${setting} settings page is under development`,
                  })}
                >
                  {setting}
                </Button>
              ))}
            </div>
            <Button size="sm" className="w-full">Save changes</Button>
          </div>
        </PopoverContent>
      </Popover>
    </SidebarMenuItem>
    
    <SidebarMenuItem>
      <Popover>
        <PopoverTrigger asChild>
          <SidebarMenuButton
            tooltip="Help"
            className="w-full"
          >
            <HelpCircle className="h-4 w-4" />
            <span>Help</span>
          </SidebarMenuButton>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Help Center</h4>
            <div className="space-y-2">
              <div className="rounded-md border p-3">
                <h5 className="font-medium">Documentation</h5>
                <p className="text-sm text-muted-foreground">Browse our guides and examples</p>
              </div>
              <div className="rounded-md border p-3">
                <h5 className="font-medium">FAQs</h5>
                <p className="text-sm text-muted-foreground">Find answers to common questions</p>
              </div>
              <div className="rounded-md border p-3">
                <h5 className="font-medium">Contact Support</h5>
                <p className="text-sm text-muted-foreground">Get help from our support team</p>
              </div>
            </div>
            <Button size="sm" className="w-full">Visit help center</Button>
          </div>
        </PopoverContent>
      </Popover>
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
