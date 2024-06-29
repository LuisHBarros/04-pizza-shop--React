import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign, UtensilsCrossedIcon, UtensilsIcon } from "lucide-react";

export function MonthOrdersAmountCard() {
    const { data } = useQuery({
    queryKey: ["month-orders-amount", "metrics"],
    queryFn: getMonthOrdersAmount,
    })
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <UtensilsIcon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
               {data && (
          <>
            <span className="text-2xl font-bold tracking-tight">{data.data.amount.toLocaleString("pt-BR")}</span>
            <p className="text-xs text-muted-foreground">
              {data.data.diffFromLastMonth >= 0 ? (
                <>
                <span className="text-emerald-500 dark:text-emerald-400" > +{data.data.diffFromLastMonth}% </span>
                em relação ao mês anterior
                </>
              ) : (<>
                <span className="text-rose-500 dark:text-rose-400"> {data.data.diffFromLastMonth}% </span>
                em relação ao mês anterior
              </>
              
              ) }
            </p>
          </>
          
        )}
        {/* <span className="text-2xl font-bold tracking-tight">243</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+10%</span>{" "}
          em relação ao mês anterior
        </p> */}
      </CardContent>
    </Card>
  );
}
