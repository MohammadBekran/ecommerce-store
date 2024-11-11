import Http from "@/core/services/interceptor";
import type { ICategory } from "@/core/types";

const getCategory = async (id: string) => {
  try {
    const Http = await ();
    const response = await Http.get<ICategory>(`/categories/${id}`);

    return response.data;
  } catch (error) {
    console.error("error", error);
  }
};
export default getCategory;
