import Http from "@/core/services/interceptor";
import type { IColor } from "@/core/types";
import { toast } from "@/core/utils";

const getColors = async () => {
  try {
    const response = await Http.get<IColor[]>("/colors");

    return response.data;
  } catch {
    toast.error("Something went wrong.");
  }
};
export default getColors;
