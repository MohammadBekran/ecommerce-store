import type ICategory from "@/features/category/core/types";

import Http from "@/core/services/interceptor";

const getCategory = async (id: string) => {
  try {
    const response = await Http.get<ICategory>(`/categories/${id}`);

    return response.data;
  } catch (error) {
    console.error("Something went wrong:", error);
  }
};

export default getCategory;
