
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNotifications } from "@/hooks/admin/use-notifications";
import NotificationsHeader from "./components/NotificationsHeader";
import NotificationDebugCard from "./components/NotificationDebugCard";
import NotificationStats from "./components/NotificationStats";
import NotificationsSearch from "./components/NotificationsSearch";
import NotificationsTable from "./components/NotificationsTable";

const Notifications = () => {
  const { 
    notifications, 
    isLoading, 
    unreadCount, 
    recentCount,
    updateReadStatus, 
    markAllAsRead, 
    deleteNotification, 
    clearAll,
    refetchNotifications 
  } = useNotifications();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [debugInfo, setDebugInfo] = useState<any>(null);

  // Debug function to check the database directly
  const checkDatabase = async () => {
    // Fetch notifications directly from the database
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      setDebugInfo({ error: error.message });
    } else {
      setDebugInfo({ 
        count: data?.length || 0,
        items: data?.slice(0, 5) || []
      });
    }
  };

  const handleToggleReadStatus = (id: number, currentReadStatus: boolean) => {
    updateReadStatus({ id, read: !currentReadStatus });
  };

  return (
    <div className="p-6 space-y-6">
      <NotificationsHeader 
        markAllAsRead={markAllAsRead}
        clearAll={clearAll}
        refetchNotifications={refetchNotifications}
        checkDatabase={checkDatabase}
      />

      <NotificationDebugCard debugInfo={debugInfo} />

      <NotificationStats 
        unreadCount={unreadCount}
        totalCount={notifications.length}
        recentCount={recentCount}
        isLoading={isLoading}
      />

      <NotificationsSearch 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <NotificationsTable 
        notifications={notifications}
        isLoading={isLoading}
        searchTerm={searchTerm}
        handleToggleReadStatus={handleToggleReadStatus}
        deleteNotification={deleteNotification}
      />
    </div>
  );
};

export default Notifications;
