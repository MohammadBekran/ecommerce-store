import type ISize from "@/features/sizes/core/types";

import Http from "@/core/services/interceptor";
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
