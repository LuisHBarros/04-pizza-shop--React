import { api } from "@/lib/axios";

export interface SignUpRestaurantBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function signUpRestaurant(data: SignUpRestaurantBody) {
  await api.post("/restaurants", data);
}
