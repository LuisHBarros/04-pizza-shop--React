import { api } from "@/lib/axios";

export interface DispathOrderParams {
  orderId: string;
}

export async function dispatchOrder({ orderId }: DispathOrderParams) {
  await api.patch(`/orders/${orderId}/dispatch`);
  return;
}
