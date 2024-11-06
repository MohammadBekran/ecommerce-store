import axios from "axios";

import type { IColor } from "@/core/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async () => {
  try {
    const response = await axios.get<IColor[]>(URL);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getColors;
