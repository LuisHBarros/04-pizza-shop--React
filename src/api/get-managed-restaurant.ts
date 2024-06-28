import { api } from "@/lib/axios";

interface ManagedRestaurant {
  id: string;
  name: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export async function getManagedRestaurant() {
  const response = await api.get<ManagedRestaurant>("/managed-restaurant");
  return response.data;
}
