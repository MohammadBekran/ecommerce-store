import Http from "@/core/services/interceptor";
import type { IBillboard } from "@/core/types";

const getBillboards = async () => {
  try {
    const response = await Http.get<IBillboard[]>("/billboards");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getBillboards;
