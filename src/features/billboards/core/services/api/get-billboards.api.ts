import type IBillboard from "@/features/billboards/core/types";

import Http from "@/core/services/interceptor";

const getBillboards = async () => {
  try {
    const response = await Http.get<IBillboard[]>("/billboards");

    return response.data;
  } catch (error) {
    console.error("Something went wrong:", error);
  }
};
export default getBillboards;
