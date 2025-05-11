
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UsersRound, Calendar, MessageSquare, Activity } from "lucide-react";
import { DashboardStats } from "../types";

interface OverviewCardsProps {
  stats: DashboardStats;
}

export const OverviewCards = ({ stats }: OverviewCardsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
          <div className="rounded-full bg-blue-100 p-2">
            <UsersRound className="h-4 w-4 text-blue-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalPatients}</div>
          <div className="mt-1 flex items-center text-xs">
            <span className="text-green-500 font-medium">{stats.patientGrowth}</span>
            <span className="text-muted-foreground ml-1">from last month</span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-l-4 border-l-green-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Appointments</CardTitle>
          <div className="rounded-full bg-green-100 p-2">
            <Calendar className="h-4 w-4 text-green-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.appointments}</div>
          <div className="mt-1 flex items-center text-xs">
            <span className="text-green-500 font-medium">{stats.appointmentGrowth}</span>
            <span className="text-muted-foreground ml-1">from last month</span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Messages</CardTitle>
          <div className="rounded-full bg-purple-100 p-2">
            <MessageSquare className="h-4 w-4 text-purple-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.messages}</div>
          <div className="mt-1 flex items-center text-xs">
            <span className="text-green-500 font-medium">{stats.messageGrowth}</span>
            <span className="text-muted-foreground ml-1">new since yesterday</span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-l-4 border-l-amber-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Treatments</CardTitle>
          <div className="rounded-full bg-amber-100 p-2">
            <Activity className="h-4 w-4 text-amber-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.activeTreatments}</div>
          <div className="mt-1 flex items-center text-xs">
            <span className="text-green-500 font-medium">{stats.treatmentGrowth}</span>
            <span className="text-muted-foreground ml-1">since last week</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
