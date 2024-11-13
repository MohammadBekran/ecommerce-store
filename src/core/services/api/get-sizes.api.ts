import Http from "@/core/services/interceptor";
import type { ISize } from "@/core/types";
import { toast } from "@/core/utils";

const getSizes = async () => {
  try {
    const response = await Http.get<ISize[]>("/sizes");

    return response.data;
  } catch {
    toast.error("Something went wrong.");
  }
};
export default getSizes;
