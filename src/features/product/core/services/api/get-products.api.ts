import qs from "query-string";

import type IProduct from "@/features/product/core/types";

import Http from "@/core/services/interceptor";
import { toast } from "@/core/utils";

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
  } catch {
    toast.error("Something went wrong.");
  }
};
export default getProducts;
