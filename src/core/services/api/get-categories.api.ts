import Http from "@/core/services/interceptor";
import type { ICategory } from "@/core/types";

const getCategories = async () => {
  try {
    const response = await Http.get<ICategory[]>("/categories");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getCategories;
