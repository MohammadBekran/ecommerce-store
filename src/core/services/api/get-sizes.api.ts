import Http from "@/core/services/interceptor";
import type { ISize } from "@/core/types";

const getSizes = async () => {
  try {
    const response = await Http.get<ISize[]>("/sizes");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getSizes;
