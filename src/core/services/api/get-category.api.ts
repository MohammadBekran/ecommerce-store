import Http from "@/core/services/interceptor";
import type { ICategory } from "@/core/types";
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
