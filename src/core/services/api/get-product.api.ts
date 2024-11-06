import axios from "axios";

import type { IProduct } from "@/core/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string) => {
  try {
    console.log(id);
    const response = await axios.get<IProduct>(`${URL}/${id}`);

    return response.data;
  } catch (error) {
    console.error("error", error);
  }
};
export default getProduct;
