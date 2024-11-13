import type IBillboard from "@/features/billboards/core/types";

import Http from "@/core/services/interceptor";
import { toast } from "@/core/utils";

const getBillboards = async () => {
  try {
    const response = await Http.get<IBillboard[]>("/billboards");

    return response.data;
  } catch {
    toast.error("Something went wrong.");
  }
};
export default getBillboards;
