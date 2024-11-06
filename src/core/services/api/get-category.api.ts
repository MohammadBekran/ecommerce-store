import axios from "axios";

import type { ICategory } from "@/core/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string) => {
  try {
    const response = await axios.get<ICategory>(`${URL}/${id}`);

    return response.data;
  } catch (error) {
    console.error("error", error);
  }
};
export default getCategory;
