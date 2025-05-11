
export interface Booking {
  id: number;
  patientName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  status: "pending" | "confirmed" | "cancelled" | string; // Modified to accept string type
  notes: string;
  createdAt: string;
}
