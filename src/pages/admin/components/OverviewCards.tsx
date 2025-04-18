
import { ArrowDown, ArrowUp, BarChart2, Calendar, MessageSquare, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const overviewData = [
  {
    id: 1,
    metric: "Total Bookings",
    value: "12",
    change: "+3",
    trend: "up",
    period: "from last week",
    icon: <Calendar className="h-5 w-5 text-primary" />,
  },
  {
    id: 2,
    metric: "Total Messages",
    value: "24",
    change: "+5",
    trend: "up",
    period: "from last week",
    icon: <MessageSquare className="h-5 w-5 text-indigo-500" />,
  },
  {
    id: 3,
    metric: "Total Patients",
    value: "42",
    change: "+8",
    trend: "up",
    period: "from last month",
    icon: <Users className="h-5 w-5 text-green-500" />,
  },
];

export const OverviewCards = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {overviewData.map((item) => (
        <Card key={item.id} className="overflow-hidden border-muted/20 transition-all duration-200 hover:shadow-md hover:border-primary/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-muted/10">
            <CardTitle className="text-sm font-medium">{item.metric}</CardTitle>
            <div className="rounded-full bg-background/90 p-2 shadow-sm">
              {item.icon}
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-row justify-between items-center">
              <div>
                <div className="text-3xl font-bold">{item.value}</div>
                <div className="flex items-center mt-1 text-sm">
                  {item.trend === "up" ? (
                    <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                  ) : (
                    <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                  )}
                  <span className={item.trend === "up" ? "text-green-600" : "text-red-600"}>
                    {item.change}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">
                    {item.period}
                  </span>
                </div>
              </div>
              <div className="hidden md:block opacity-30">
                <BarChart2 className="h-16 w-16 rotate-90" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
