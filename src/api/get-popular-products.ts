import { api } from "@/lib/axios";

export type GetPopularProductsResponse = {
  product: string;
  amount: number;
}[];

export async function getPopularProducts() {
  const { data } = await api.get<GetPopularProductsResponse>(
    "/metrics/popular-products",
  );
  console.log(data);
  return data;
}
