import Http from "@/core/services/interceptor";
import type { ICategory } from "@/core/types";
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
