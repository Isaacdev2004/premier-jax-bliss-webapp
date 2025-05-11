
import { useQuery } from "@tanstack/react-query";
import { 
  fetchDashboardStats, 
  fetchRecentActivity,
  fetchChartData
} from "@/api/admin";

export function useDashboard() {
  const { 
    data: stats = {
      totalPatients: 0,
      appointments: 0,
      messages: 0,
      activeTreatments: 0,
      patientGrowth: "0%",
      appointmentGrowth: "0%",
      messageGrowth: "0",
      treatmentGrowth: "0"
    }, 
    isLoading: statsLoading 
  } = useQuery({
    queryKey: ["dashboardStats"],
    queryFn: fetchDashboardStats,
  });

  const { 
    data: activities = [], 
    isLoading: activitiesLoading 
  } = useQuery({
    queryKey: ["recentActivity"],
    queryFn: async () => {
      const data = await fetchRecentActivity();
      // Filter to only include message and booking activities
      return data.filter(activity => 
        activity.activity === "message" || activity.activity === "booking"
      );
    },
  });

  const { 
    data: chartData = [], 
    isLoading: chartLoading 
  } = useQuery({
    queryKey: ["chartData"],
    queryFn: fetchChartData,
  });

  return {
    stats,
    activities,
    chartData,
    isLoading: statsLoading || activitiesLoading || chartLoading,
  };
}
