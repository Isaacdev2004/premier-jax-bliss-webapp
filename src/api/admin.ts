import { supabase } from "@/integrations/supabase/client";
import { 
  Booking, 
  Message, 
  Notification, 
  Patient, 
  DashboardStats, 
  ActivityRecord, 
  ChartDataPoint 
} from "@/pages/admin/types";

// Bookings API
export const fetchBookings = async (): Promise<Booking[]> => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error("Error fetching bookings:", error);
    throw new Error(error.message);
  }
  
  return data.map(booking => ({
    id: booking.id,
    patientName: booking.patient_name,
    email: booking.email,
    phone: booking.phone,
    date: booking.date,
    time: booking.time,
    service: booking.service,
    status: booking.status,
    notes: booking.notes || '',
    createdAt: booking.created_at
  }));
};

export const updateBookingStatus = async (id: number, status: string): Promise<void> => {
  const { error } = await supabase
    .from('bookings')
    .update({ status })
    .eq('id', id);
  
  if (error) {
    console.error("Error updating booking status:", error);
    throw new Error(error.message);
  }
};

export const deleteBooking = async (id: number): Promise<void> => {
  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error("Error deleting booking:", error);
    throw new Error(error.message);
  }
};

// Messages API
export const fetchMessages = async (): Promise<Message[]> => {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error("Error fetching messages:", error);
    throw new Error(error.message);
  }
  
  return data.map(message => ({
    id: message.id,
    name: message.name,
    email: message.email,
    subject: message.subject,
    message: message.message,
    date: message.date,
    read: message.read,
    createdAt: message.created_at,
    hasBeenReplied: message.has_been_replied || false,
    lastRepliedAt: message.last_replied_at
  }));
};

export const updateMessageReadStatus = async (id: number, read: boolean): Promise<void> => {
  const { error } = await supabase
    .from('messages')
    .update({ read })
    .eq('id', id);
  
  if (error) {
    console.error("Error updating message read status:", error);
    throw new Error(error.message);
  }
};

export const deleteMessage = async (id: number): Promise<void> => {
  const { error } = await supabase
    .from('messages')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error("Error deleting message:", error);
    throw new Error(error.message);
  }
};

// Notifications API
export const fetchNotifications = async (): Promise<Notification[]> => {
  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error("Error fetching notifications:", error);
    throw new Error(error.message);
  }
  
  return data.map(notification => ({
    id: notification.id,
    title: notification.title,
    message: notification.message,
    date: notification.date,
    type: notification.type as any, // Type assertion for the union type
    read: notification.read,
    createdAt: notification.created_at
  }));
};

export const updateNotificationReadStatus = async (id: number, read: boolean): Promise<void> => {
  const { error } = await supabase
    .from('notifications')
    .update({ read })
    .eq('id', id);
  
  if (error) {
    console.error("Error updating notification read status:", error);
    throw new Error(error.message);
  }
};

export const markAllNotificationsAsRead = async (): Promise<void> => {
  const { error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('read', false);
  
  if (error) {
    console.error("Error marking all notifications as read:", error);
    throw new Error(error.message);
  }
};

export const deleteNotification = async (id: number): Promise<void> => {
  const { error } = await supabase
    .from('notifications')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error("Error deleting notification:", error);
    throw new Error(error.message);
  }
};

export const clearAllNotifications = async (): Promise<void> => {
  const { error } = await supabase
    .from('notifications')
    .delete()
    .neq('id', 0); // Delete all rows
  
  if (error) {
    console.error("Error clearing all notifications:", error);
    throw new Error(error.message);
  }
};

// Dashboard API
export const fetchDashboardStats = async (): Promise<DashboardStats> => {
  // Fetch counts from different tables
  const [patientsResponse, bookingsResponse, messagesResponse, activeBookingsResponse] = await Promise.all([
    supabase.from('patients').select('count', { count: 'exact', head: true }),
    supabase.from('bookings').select('count', { count: 'exact', head: true }),
    supabase.from('messages').select('count', { count: 'exact', head: true }),
    supabase.from('bookings').select('count', { count: 'exact', head: true }).neq('status', 'cancelled')
  ]);
  
  if (patientsResponse.error || bookingsResponse.error || messagesResponse.error || activeBookingsResponse.error) {
    console.error("Error fetching dashboard stats:", 
      patientsResponse.error || bookingsResponse.error || messagesResponse.error || activeBookingsResponse.error);
    throw new Error("Error fetching dashboard statistics");
  }
  
  // Calculate growth percentages (in a real app, you'd compare with historical data)
  return {
    totalPatients: patientsResponse.count || 0,
    appointments: bookingsResponse.count || 0,
    messages: messagesResponse.count || 0,
    activeTreatments: activeBookingsResponse.count || 0,
    patientGrowth: "+5.9%", // Example static value, would be calculated in real app
    appointmentGrowth: "+12%",
    messageGrowth: "+3",
    treatmentGrowth: "+2"
  };
};

export const fetchRecentActivity = async (): Promise<ActivityRecord[]> => {
  const { data, error } = await supabase
    .from('activity_records')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5);
  
  if (error) {
    console.error("Error fetching recent activity:", error);
    throw new Error(error.message);
  }
  
  return data.map(record => ({
    id: record.id,
    patient: record.patient,
    activity: record.activity,
    service: record.service,
    time: record.time,
    status: record.status as "completed" | "cancelled" | "pending",
    createdAt: record.created_at
  }));
};

export const fetchChartData = async (): Promise<ChartDataPoint[]> => {
  // For chart data we'll use the booking dates grouped by day
  // This is a simplified example - in a real app, you'd have a more sophisticated query
  const { data, error } = await supabase
    .from('bookings')
    .select('date, created_at')
    .order('date', { ascending: true });

  if (error) {
    console.error("Error fetching chart data:", error);
    throw new Error(error.message);
  }
  
  // Group data by date and count occurrences
  const dateMap = new Map<string, { visits: number; appointments: number }>();
  
  data.forEach(booking => {
    const date = booking.date;
    if (!dateMap.has(date)) {
      dateMap.set(date, { visits: 0, appointments: 0 });
    }
    const stats = dateMap.get(date);
    if (stats) {
      stats.appointments += 1;
      stats.visits += Math.floor(Math.random() * 3) + 1; // Random number of visits per appointment for demo
    }
  });
  
  // Convert map to array of data points
  return Array.from(dateMap.entries()).map(([date, stats]) => ({
    date: date,
    visits: stats.visits,
    appointments: stats.appointments
  }));
};
