
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
import { ChartDataPoint } from "../types";

interface StatsChartProps {
  data: ChartDataPoint[];
}

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

export function StatsChart({ data }: StatsChartProps) {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
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
      </ResponsiveContainer>
    </ChartContainer>
  );
}
