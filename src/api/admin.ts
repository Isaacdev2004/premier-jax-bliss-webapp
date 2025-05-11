
import { 
  Booking, 
  Message, 
  Notification, 
  Patient, 
  DashboardStats, 
  ActivityRecord, 
  ChartDataPoint 
} from "@/pages/admin/types";

// Mock database data - in a real implementation, this would connect to a real database
// For example, using fetch to call your API endpoint or Supabase client

// Bookings API
export const fetchBookings = async (): Promise<Booking[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    {
      id: 1,
      patientName: "John Doe",
      email: "john@example.com",
      phone: "555-123-4567",
      date: "2025-05-15",
      time: "09:30 AM",
      service: "Internal Medicine",
      status: "confirmed",
      notes: "First-time patient, needs general check-up.",
      createdAt: "2025-05-01T10:30:00Z"
    },
    {
      id: 2,
      patientName: "Jane Smith",
      email: "jane@example.com",
      phone: "555-987-6543",
      date: "2025-05-16",
      time: "11:00 AM",
      service: "Med Spa",
      status: "pending",
      notes: "Interested in skin rejuvenation treatments.",
      createdAt: "2025-05-02T14:15:00Z"
    },
    {
      id: 3,
      patientName: "Michael Johnson",
      email: "michael@example.com",
      phone: "555-456-7890",
      date: "2025-05-17",
      time: "02:15 PM",
      service: "Internal Medicine",
      status: "confirmed",
      notes: "Follow-up appointment for medication review.",
      createdAt: "2025-05-03T09:45:00Z"
    },
    {
      id: 4,
      patientName: "Sarah Williams",
      email: "sarah@example.com",
      phone: "555-234-5678",
      date: "2025-05-18",
      time: "10:45 AM",
      service: "Med Spa",
      status: "cancelled",
      notes: "Requested rescheduling due to conflict.",
      createdAt: "2025-05-04T16:20:00Z"
    },
    {
      id: 5,
      patientName: "Robert Brown",
      email: "robert@example.com",
      phone: "555-321-9876",
      date: "2025-05-19",
      time: "03:00 PM",
      service: "Internal Medicine",
      status: "confirmed",
      notes: "Annual physical exam.",
      createdAt: "2025-05-05T11:10:00Z"
    }
  ];
};

export const updateBookingStatus = async (id: number, status: Booking["status"]): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(`Booking ${id} status updated to ${status}`);
  // In a real implementation, you'd make a PUT/PATCH request to update the booking
};

export const deleteBooking = async (id: number): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(`Booking ${id} deleted`);
  // In a real implementation, you'd make a DELETE request
};

// Messages API
export const fetchMessages = async (): Promise<Message[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      subject: "Question about services",
      message: "I'm interested in your internal medicine services. Can you tell me more about your preventive care options?",
      date: "2025-05-10",
      read: true,
      createdAt: "2025-05-10T09:30:00Z"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Appointment request",
      message: "I would like to schedule an appointment for next week. What availability do you have?",
      date: "2025-05-11",
      read: false,
      createdAt: "2025-05-11T14:20:00Z"
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Follow-up question",
      message: "I had an appointment last month and wanted to follow up on some test results.",
      date: "2025-05-12",
      read: false,
      createdAt: "2025-05-12T11:45:00Z"
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      subject: "Med spa inquiry",
      message: "I'm interested in your med spa services. What treatments do you offer for skin rejuvenation?",
      date: "2025-05-13",
      read: true,
      createdAt: "2025-05-13T16:05:00Z"
    },
    {
      id: 5,
      name: "Robert Brown",
      email: "robert@example.com",
      subject: "Insurance question",
      message: "I'm a new patient and want to verify that you accept my insurance before scheduling an appointment.",
      date: "2025-05-14",
      read: false,
      createdAt: "2025-05-14T10:15:00Z"
    }
  ];
};

export const updateMessageReadStatus = async (id: number, read: boolean): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(`Message ${id} read status updated to ${read}`);
  // In a real implementation, you'd make a PUT/PATCH request
};

export const deleteMessage = async (id: number): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(`Message ${id} deleted`);
  // In a real implementation, you'd make a DELETE request
};

// Notifications API
export const fetchNotifications = async (): Promise<Notification[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    {
      id: 1,
      title: "New appointment scheduled",
      message: "Patient John Doe booked for May 15, 2025",
      date: "2025-05-10",
      type: "appointment",
      read: false,
      createdAt: "2025-05-10T09:30:00Z"
    },
    {
      id: 2,
      title: "New appointment scheduled",
      message: "Patient Jane Smith booked for May 16, 2025",
      date: "2025-05-10",
      type: "appointment",
      read: false,
      createdAt: "2025-05-10T14:15:00Z"
    },
    {
      id: 3,
      title: "New appointment scheduled",
      message: "Patient Robert Johnson booked for May 17, 2025",
      date: "2025-05-11",
      type: "appointment",
      read: false,
      createdAt: "2025-05-11T11:30:00Z"
    },
    {
      id: 4,
      title: "Message received",
      message: "New message from Patient Alice Brown about her upcoming appointment",
      date: "2025-05-11",
      type: "message",
      read: true,
      createdAt: "2025-05-11T15:45:00Z"
    },
    {
      id: 5,
      title: "Appointment cancelled",
      message: "Patient William Davis cancelled appointment for May 12, 2025",
      date: "2025-05-12",
      type: "cancellation",
      read: true,
      createdAt: "2025-05-12T10:20:00Z"
    },
    {
      id: 6,
      title: "System update",
      message: "The system will undergo maintenance on May 20, 2025",
      date: "2025-05-12",
      type: "system",
      read: true,
      createdAt: "2025-05-12T16:00:00Z"
    },
    {
      id: 7,
      title: "New review submitted",
      message: "Patient Elizabeth Wilson submitted a 5-star review",
      date: "2025-05-13",
      type: "review",
      read: true,
      createdAt: "2025-05-13T09:10:00Z"
    },
    {
      id: 8,
      title: "Inventory alert",
      message: "Medical supplies inventory running low",
      date: "2025-05-13",
      type: "inventory",
      read: true,
      createdAt: "2025-05-13T11:25:00Z"
    },
    {
      id: 9,
      title: "Staff meeting reminder",
      message: "Staff meeting scheduled for May 15, 2025 at 9:00 AM",
      date: "2025-05-14",
      type: "reminder",
      read: false,
      createdAt: "2025-05-14T08:30:00Z"
    },
    {
      id: 10,
      title: "New patient registered",
      message: "Michael Thompson completed registration",
      date: "2025-05-14",
      type: "registration",
      read: true,
      createdAt: "2025-05-14T14:50:00Z"
    }
  ];
};

export const updateNotificationReadStatus = async (id: number, read: boolean): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(`Notification ${id} read status updated to ${read}`);
  // In a real implementation, you'd make a PUT/PATCH request
};

export const markAllNotificationsAsRead = async (): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log("All notifications marked as read");
  // In a real implementation, you'd make a PUT/PATCH request
};

export const deleteNotification = async (id: number): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(`Notification ${id} deleted`);
  // In a real implementation, you'd make a DELETE request
};

export const clearAllNotifications = async (): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log("All notifications cleared");
  // In a real implementation, you'd make a DELETE request
};

// Dashboard API
export const fetchDashboardStats = async (): Promise<DashboardStats> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return {
    totalPatients: 127,
    appointments: 24,
    messages: 18,
    activeTreatments: 12,
    patientGrowth: "+5.9%",
    appointmentGrowth: "+12%",
    messageGrowth: "+3",
    treatmentGrowth: "+2"
  };
};

export const fetchRecentActivity = async (): Promise<ActivityRecord[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    {
      id: 1,
      patient: "John Doe",
      activity: "Booked an appointment",
      service: "Internal Medicine",
      time: "30 minutes ago",
      status: "completed",
      createdAt: "2025-05-14T15:30:00Z"
    },
    {
      id: 2,
      patient: "Jane Smith",
      activity: "Cancelled appointment",
      service: "Med Spa",
      time: "2 hours ago",
      status: "cancelled",
      createdAt: "2025-05-14T14:00:00Z"
    },
    {
      id: 3,
      patient: "David Wilson",
      activity: "Sent a message",
      service: "General Inquiry",
      time: "4 hours ago",
      status: "pending",
      createdAt: "2025-05-14T12:00:00Z"
    },
    {
      id: 4,
      patient: "Sarah Brown",
      activity: "Completed treatment",
      service: "Skin Rejuvenation",
      time: "Yesterday",
      status: "completed",
      createdAt: "2025-05-13T16:30:00Z"
    },
    {
      id: 5,
      patient: "Robert Johnson",
      activity: "Rescheduled appointment",
      service: "Acne Treatment",
      time: "Yesterday",
      status: "pending",
      createdAt: "2025-05-13T11:45:00Z"
    },
  ];
};

export const fetchChartData = async (): Promise<ChartDataPoint[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    { date: "May 1", visits: 12, appointments: 8 },
    { date: "May 5", visits: 18, appointments: 12 },
    { date: "May 10", visits: 14, appointments: 10 },
    { date: "May 15", visits: 22, appointments: 18 },
    { date: "May 20", visits: 28, appointments: 21 },
    { date: "May 25", visits: 24, appointments: 16 },
    { date: "May 30", visits: 31, appointments: 24 },
  ];
};
