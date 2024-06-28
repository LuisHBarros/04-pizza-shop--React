import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowDown, DollarSign } from "lucide-react";

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <ArrowDown className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">25</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">-5%</span> em
          relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  );
}
