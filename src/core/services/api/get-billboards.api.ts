import Http from "@/core/services/interceptor";
import type { IBillboard } from "@/core/types";

const getBillboards = async () => {
  try {
    const response = await Http.get<IBillboard[]>("/billboards");

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getBillboards;
