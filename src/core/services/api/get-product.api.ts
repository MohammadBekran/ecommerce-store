import Http from "@/core/services/interceptor";
import type { IProduct } from "@/core/types";

const getProduct = async (id: string) => {
  try {
    const response = await Http.get<IProduct>(`/products/${id}`);

    return response.data;
  } catch (error) {
    console.error("error", error);
  }
};
export default getProduct;
