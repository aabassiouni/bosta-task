import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/apiClient";

async function fetchCategories() {
  const response = await apiClient.get("/products/categories");

  return response.data;
}

export function useCategoriesQuery() {
  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}
