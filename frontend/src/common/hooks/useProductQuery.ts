import { getAllProductByID, getAllProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export const useProductQuery = (options?: any) => {
  const { data, ...rest } = useQuery({
    queryKey: ["PRODUCT_KEY", options],
    queryFn: async () => {
      return options?.id
        ? await getAllProductByID(options.id as number | string)
        : await getAllProducts(options);
    },
  });
  return { data, ...rest };
};
