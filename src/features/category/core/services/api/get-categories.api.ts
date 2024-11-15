import type ICategory from "@/features/category/core/types";

import Http from "@/core/services/interceptor";
import { toast } from "@/core/utils";

const getCategories = async () => {
  try {
    const response = await Http.get<ICategory[]>("/categories");

    return response.data;
  } catch {
    toast.error("Something went wrong.");
  }
};
export default getCategories;
