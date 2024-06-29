import { getMonthRevenue } from "@/api/get-mouth-revenue";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthRevenueCard() {
    const { data } = useQuery({
    queryKey: ["month-total-revenue", "metrics"],
    queryFn: getMonthRevenue,
  })
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {data ? (
          <>
            <span className="text-2xl font-bold tracking-tight">{(data.receipt/100).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              
            })}</span>
            <p className="text-xs text-muted-foreground">
              {data.diffFromLastMonth >= 0 ? (
                <>
                <span className="text-emerald-500 dark:text-emerald-400" > +{data.diffFromLastMonth}% </span>
                em relação ao mês anterior
                </>
              ) : (<>
                <span className="text-rose-500 dark:text-rose-400"> {data.diffFromLastMonth}% </span>
                em relação ao mês anterior
              </>
              
              ) }
            </p>
          </>
          
        ): (
            <MetricCardSkeleton />
        )}
        {/* <span className="text-2xl font-bold tracking-tight">R$ 15.095,65</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+2%</span> em
          relação ao mês anterior
        </p> */}
      </CardContent>
    </Card>
  );
}
