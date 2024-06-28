import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./month-revenue-card";
import { MonthOrdersAmountCard } from "./month-orders-amount-card";
import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MonthCanceledOrdersAmountCard } from "./month-cancel-orders-amont-card";
import { RavenueChart } from "./revenue-chart";
import { PopularChart } from "./popular-chart";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RavenueChart />
          <PopularChart />
        </div>
      </div>
    </>
  );
}
