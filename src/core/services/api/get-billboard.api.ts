import axios from "axios";

import type { IBillboard } from "@/core/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string) => {
  try {
    const response = await axios.get<IBillboard>(`${URL}/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getBillboard;
