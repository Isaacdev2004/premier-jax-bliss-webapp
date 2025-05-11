
export interface Booking {
  id: number;
  patientName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  status: "pending" | "confirmed" | "cancelled";
  notes: string;
  createdAt: string;
}
