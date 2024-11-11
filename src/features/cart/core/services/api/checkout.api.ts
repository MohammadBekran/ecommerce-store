import axios from "axios";

import { TOrderData } from "@/features/cart/core/types";
import { toast } from "@/lib/utils";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;

const checkoutAPI = async (data: TOrderData, onSuccess: () => void) => {
  try {
    const response = await axios.post(URL, data);

    onSuccess();

    return response.data;
  } catch {
    toast.error("Something went wrong.");
  }
};

export default checkoutAPI;
