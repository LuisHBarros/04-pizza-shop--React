import { api } from "@/lib/axios";

export interface GetMonthCancelOrdersAmountResponse {
  amount: number;
  diffFromLastMonth: number;
}

export async function getMonthCancelOrdersAmount() {
  const { data } = await api.get<GetMonthCancelOrdersAmountResponse>(
    "/metrics/month-canceled-orders-amount",
  );
  return data;
}
