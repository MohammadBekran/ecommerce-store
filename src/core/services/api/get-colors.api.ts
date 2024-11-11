import Http from "@/core/services/interceptor";
import type { IColor } from "@/core/types";

const getColors = async () => {
  try {
    const response = await Http.get<IColor[]>("/colors");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getColors;
