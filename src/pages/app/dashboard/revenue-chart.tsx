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

const data = [
  {
    date: "01/01",
    revenue: 4000,
  },
  {
    date: "02/01",
    revenue: 3000,
  },
  {
    date: "03/01",
    revenue: 2000,
  },
  {
    date: "04/01",
    revenue: 2780,
  },
  {
    date: "05/01",
    revenue: 1890,
  },
  {
    date: "06/01",
    revenue: 2390,
  },
  {
    date: "07/01",
    revenue: 3490,
  },
  {
    date: "08/01",
    revenue: 4000,
  },
  {
    date: "09/01",
    revenue: 3000,
  },
  {
    date: "10/01",
    revenue: 2000,
  },
  {
    date: "11/01",
    revenue: 2780,
  },
  {
    date: "12/01",
    revenue: 1890,
  },
  {
    date: "13/01",
    revenue: 2390,
  },
  {
    date: "14/01",
    revenue: 3490,
  },
  {
    date: "15/01",
    revenue: 4000,
  },
  {
    date: "16/01",
    revenue: 3000,
  },
  {
    date: "17/01",
    revenue: 2000,
  },
  {
    date: "18/01",
    revenue: 2780,
  },
  {
    date: "19/01",
    revenue: 1890,
  },
  {
    date: "20/01",
    revenue: 2390,
  },
  {
    date: "21/01",
    revenue: 3490,
  },
  {
    date: "22/01",
    revenue: 4000,
  },
  {
    date: "23/01",
    revenue: 3000,
  },
  {
    date: "24/01",
    revenue: 2000,
  },
  {
    date: "25/01",
    revenue: 2780,
  },
  {
    date: "26/01",
    revenue: 1890,
  },
  {
    date: "27/01",
    revenue: 2390,
  },
];

export function RavenueChart() {
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
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: "12px" }}>
            <CartesianGrid
              vertical={false}
              className="stroke-muted"
              opacity={20}
            />
            <Line
              type="linear"
              dataKey="revenue"
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
      </CardContent>
    </Card>
  );
}
