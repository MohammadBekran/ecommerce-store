import axios from "axios";

import type { ICategory } from "@/core/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async () => {
  try {
    const response = await axios.get<ICategory[]>(URL);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getCategories;
