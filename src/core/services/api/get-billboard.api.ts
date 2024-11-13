import Http from "@/core/services/interceptor";
import type { IBillboard } from "@/core/types";
import { toast } from "@/core/utils";

const getBillboard = async (id: string) => {
  try {
    const response = await Http.get<IBillboard>(`/billboards/${id}`);

    return response.data;
  } catch {
    toast.error("Something went wrong.");
  }
};
export default getBillboard;
