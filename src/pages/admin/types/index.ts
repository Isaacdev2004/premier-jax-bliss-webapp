
// Common types used across the admin portal
export interface Booking {
  id: number;
  patientName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  status: "pending" | "confirmed" | "cancelled" | string; // Updated to accept any string value
  notes: string;
  createdAt: string;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
  createdAt: string;
  hasBeenReplied: boolean;
  lastRepliedAt?: string;
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  type: "appointment" | "message" | "cancellation" | "system" | "review" | "inventory" | "reminder" | "registration";
  read: boolean;
  createdAt: string;
}

export interface Patient {
  id: number;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  lastVisit?: string;
  createdAt: string;
}

export interface DashboardStats {
  totalPatients: number;
  appointments: number;
  messages: number;
  activeTreatments: number;
  patientGrowth: string;
  appointmentGrowth: string;
  messageGrowth: string;
  treatmentGrowth: string;
}

export interface ActivityRecord {
  id: number;
  patient: string;
  activity: string;
  service: string;
  time: string;
  status: "completed" | "cancelled" | "pending" | "read";
  createdAt: string;
}

export interface ChartDataPoint {
  date: string;
  visits: number;
  appointments: number;
}
