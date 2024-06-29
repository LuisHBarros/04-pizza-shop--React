import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { UtensilsIcon } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function DayOrdersAmountCard() {
  const { data } = useQuery({
    queryKey: ["day-orders-amount", "metrics"],
    queryFn: getDayOrdersAmount,
  })
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <UtensilsIcon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {data ? (
          <>
            <span className="text-2xl font-bold tracking-tight">{data.data.amount.toLocaleString("pt-BR")}</span>
            <p className="text-xs text-muted-foreground">
              {data.data.diffFromYesterday >= 0 ? (
                <>
                <span className="text-emerald-500 dark:text-emerald-400" > +{data.data.diffFromYesterday}% </span>
                relação a ontem
                </>
              ) : (<>
                <span className="text-rose-500 dark:text-rose-400"> {data.data.diffFromYesterday}% </span>
                relação a ontem
              </>
              
              ) }
            </p>
          </>
          
        ) : (
            <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
