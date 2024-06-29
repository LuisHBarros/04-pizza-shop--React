import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import colors from "tailwindcss/colors";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import { Label } from "@/components/ui/label";
import { DateRangePicker } from "@/components/date-range-picker";
import { useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { subDays } from "date-fns";


export function RavenueChart() {
  
  const [ dateRange, setDateRange ] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  
  });
  
  const { data } = useQuery({
    queryKey: ["daily-revenue-in-period", "metrics", dateRange],
    queryFn: () => getDailyRevenueInPeriod({
      from: dateRange?.from,
      to: dateRange?.to,
    }),
  })

  const chartData = useMemo(() => {
    return data?.map((item) => {
      return {
        date: item.date,
        receipt: item.receipt / 100,
      }
    })
  }, [data])

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita do período
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Receita total do período
          </CardDescription>
        </div>
        <div className="flex items-center gap-3">
          <Label>
            <DateRangePicker date={dateRange} onDateChange={setDateRange} />
          </Label>
        </div>
      </CardHeader>
      <CardContent>
        {chartData && (
          <ResponsiveContainer width="100%" height={240}>
          <LineChart data={chartData} style={{ fontSize: "12px" }}>
            <CartesianGrid
              vertical={false}
              className="stroke-muted"
              opacity={20}
            />
            <Line
              type="linear"
              dataKey="receipt"
              strokeWidth={2}
              stroke={colors.blue[200]}
            />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
              width={80}
            />
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
          </LineChart>
        </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
