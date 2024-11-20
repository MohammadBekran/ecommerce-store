import type ICategory from "@/features/category/core/types";

import Http from "@/core/services/interceptor";

const getCategories = async () => {
  try {
    const response = await Http.get<ICategory[]>("/categories");

    return response.data;
  } catch (error) {
    console.error("Something went wrong", error);
  }
};
export default getCategories;
