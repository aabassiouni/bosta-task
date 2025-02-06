import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/apiClient";
import { Product } from "../types";

async function getAllProducts() {
  const response = await apiClient.get("/products");
  return response.data;
}

export function useAllProductsQuery() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
}
