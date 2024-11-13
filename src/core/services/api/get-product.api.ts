import Http from "@/core/services/interceptor";
import type { IProduct } from "@/core/types";
import { toast } from "@/core/utils";

const getProduct = async (id: string) => {
  try {
    const response = await Http.get<IProduct>(`/products/${id}`);

    return response.data;
  } catch {
    toast.error("Something went wrong.");
  }
};

export default getProduct;
