import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import AdminMessages from "@/components/admin/AdminMessages";
import AdminBookings from "@/components/admin/AdminBookings";
import AdminLogin from "@/components/admin/AdminLogin";
import { useToast } from "@/components/ui/use-toast";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  const handleLogin = (password: string) => {
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin portal",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid password",
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Portal</h1>
      
      <Tabs defaultValue="messages" className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="messages">
          <Card className="p-6">
            <AdminMessages />
          </Card>
        </TabsContent>
        
        <TabsContent value="bookings">
          <Card className="p-6">
            <AdminBookings />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
