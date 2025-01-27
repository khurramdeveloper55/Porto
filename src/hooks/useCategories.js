import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/categories";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return { categories: data, isLoading };
}
