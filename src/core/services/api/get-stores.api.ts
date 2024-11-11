import Http from "@/core/services/interceptor";
import type { IStore } from "@/core/types";

const getStores = async () => {
  try {
    const response = await Http.get<IStore[]>("/stores");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getStores;
