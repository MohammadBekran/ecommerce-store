import Http from "@/core/services/interceptor";
import type { IBillboard } from "@/core/types";

const getBillboard = async (id: string) => {
  try {
    const response = await Http.get<IBillboard>(`/billboards/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getBillboard;
