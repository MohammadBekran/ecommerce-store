import type { TOrderData } from "@/features/cart/core/types";

import Http from "@/core/services/interceptor";

const checkoutAPI = async (
  storeId: string,
  data: TOrderData,
  onSuccess: () => void
) => {
  try {
    const response = await Http.post(`/stores/${storeId}/orders`, data);

    onSuccess();

    return response.data;
  } catch (error) {
    console.error("Something went wrong:", error);
  }
};

export default checkoutAPI;
