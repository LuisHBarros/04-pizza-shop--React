export type OrderStatusType =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatusType;
}

const orderStatusMap: Record<OrderStatusType, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  processing: "Processando",
  delivering: "Entregando",
  delivered: "Entregue",
};

export function OrderStatus({ status }: OrderStatusProps) {
  console.log(status);
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span className="flex h-2 w-2 items-center gap-2 rounded-full bg-slate-100"></span>
      )}
      {status === "canceled" && (
        <span className="flex h-2 w-2 items-center gap-2 rounded-full bg-rose-500"></span>
      )}
      {status === "processing" && (
        <span className="flex h-2 w-2 items-center gap-2 rounded-full bg-amber-500"></span>
      )}
      {status === "delivering" && (
        <span className="flex h-2 w-2 items-center gap-2 rounded-full bg-amber-500"></span>
      )}
      {status === "delivered" && (
        <span className="flex h-2 w-2 items-center gap-2 rounded-full bg-emerald-500"></span>
      )}
      <span>{orderStatusMap[status]}</span>
    </div>
  );
}
