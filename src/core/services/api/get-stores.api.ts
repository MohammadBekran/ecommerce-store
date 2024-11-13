import Http from "@/core/services/interceptor";
import type { IStore } from "@/core/types";
import { toast } from "@/core/utils";

const getStores = async () => {
  try {
    const response = await Http.get<IStore[]>("/stores");

    return response.data;
  } catch {
    toast.error("Something went wrong.");
  }
};
export default getStores;
