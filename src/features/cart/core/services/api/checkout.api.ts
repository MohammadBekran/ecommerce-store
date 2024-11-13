import type { TOrderData } from "@/features/cart/core/types";

import Http from "@/core/services/interceptor";
import { toast } from "@/core/utils";

const checkoutAPI = async (
  storeId: string,
  data: TOrderData,
  onSuccess: () => void
) => {
  try {
    const response = await Http.post(`/stores/${storeId}/orders`, data);

    onSuccess();

    return response.data;
  } catch {
    toast.error("Something went wrong.");
  }
};

export default checkoutAPI;
