import type ICategory from "@/features/category/core/types";

import Http from "@/core/services/interceptor";
import { toast } from "@/core/utils";

const getCategory = async (id: string) => {
  try {
    const response = await Http.get<ICategory>(`/categories/${id}`);

    return response.data;
  } catch {
    toast.error("Something went wrong.");
  }
};
export default getCategory;
