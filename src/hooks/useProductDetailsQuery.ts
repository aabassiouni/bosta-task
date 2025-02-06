import { useQuery } from "@tanstack/react-query";
import { Product } from "../types";
import { apiClient } from "../lib/apiClient";

async function fetchProductDetails(id: string | undefined) {
  const response = await apiClient.get<Product>(`/products/${id}`);
  return response.data;
}

export function useProductDetailsQuery({ id }: { id: string | undefined }) {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetails(id),
    enabled: !!id,
  });
}
