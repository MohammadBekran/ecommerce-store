import axios from "axios";
import qs from "query-string";

import type { IProduct } from "@/core/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

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
      url: URL,
      query: {
        categoryId,
        colorId,
        sizeId,
        isFeatured,
      },
    });
    console.log(url);
    const response = await axios.get<IProduct[]>(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getProducts;
