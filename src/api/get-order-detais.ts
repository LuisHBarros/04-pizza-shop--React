import { api } from "@/lib/axios";

export interface GetOrderDetailResponse {
  id: string;
  createdAt: string;
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
  totalInCents: number;
  customer: {
    name: string;
    email: string;
    phone: string | null;
  };
  orderItems: {
    id: string;
    priceInCents: number;
    quantity: number;
    product: { name: string };
  }[];
}

export interface GetOrderDetailRequest {
  orderId: string;
}
export async function getOrderDetail({ orderId }: GetOrderDetailRequest) {
  const response = await api.get(`/orders/${orderId}`);
  console.log(response.data);
  return response.data as GetOrderDetailResponse;
}
