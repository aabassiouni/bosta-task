import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../lib/api";
import { Product } from "../types";

async function createProduct(data: Omit<Product, "id">) {
  const response = await apiClient.post("/products", data);

  return response.data;
}

export function useCreateProductMutation({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: Omit<Product, "id">) => void;
  onError?: (error: Error) => void;
}) {
  return useMutation({
    mutationFn: createProduct,
    onSuccess,
    onError,
  });
}
