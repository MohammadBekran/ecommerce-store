import type IProduct from "@/features/product/core/types";

import Http from "@/core/services/interceptor";

const getProduct = async (id: string) => {
  try {
    const response = await Http.get<IProduct>(`/products/${id}`);

    return response.data;
  } catch (error) {
    console.error("Something went wrong:", error);
  }
};

export default getProduct;
