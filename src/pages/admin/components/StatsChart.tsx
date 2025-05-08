
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  Area, 
  AreaChart, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";

const data = [
  { date: "Jan 1", visits: 12, appointments: 8 },
  { date: "Jan 5", visits: 18, appointments: 12 },
  { date: "Jan 10", visits: 14, appointments: 10 },
  { date: "Jan 15", visits: 22, appointments: 18 },
  { date: "Jan 20", visits: 28, appointments: 21 },
  { date: "Jan 25", visits: 24, appointments: 16 },
  { date: "Jan 30", visits: 31, appointments: 24 },
];

const chartConfig = {
  visits: {
    label: "Patient Visits",
    theme: {
      light: "#0ea5e9", // blue
      dark: "#38bdf8",
    },
  },
  appointments: {
    label: "Appointments",
    theme: {
      light: "#10b981", // green
      dark: "#34d399",
    },
  },
};

export function StatsChart() {
  return (
    <ChartContainer config={chartConfig} className="aspect-[4/3] w-full">
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent indicator="dot" />
          }
        />
        <Area
          type="monotone"
          dataKey="visits"
          stackId="1"
          stroke="var(--color-visits)"
          fill="var(--color-visits)"
          fillOpacity={0.3}
          strokeWidth={2}
        />
        <Area
          type="monotone"
          dataKey="appointments"
          stackId="2"
          stroke="var(--color-appointments)"
          fill="var(--color-appointments)"
          fillOpacity={0.3}
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  );
}
