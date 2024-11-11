import qs from "query-string";

import Http from "@/core/services/interceptor";
import type { IProduct } from "@/core/types";

interface IQuery {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: IQuery) => {
  try {
    const { categoryId, colorId, sizeId, isFeatured } = query;

    const url = qs.stringifyUrl({
      url: `${process.env.NEXT_PUBLIC_API_URL}/products`,
      query: {
        categoryId,
        colorId,
        sizeId,
        isFeatured,
      },
    });
    const response = await Http.get<IProduct[]>(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getProducts;
