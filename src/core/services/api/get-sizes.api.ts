import axios from "axios";

import type { ISize } from "@/core/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async () => {
  try {
    const response = await axios.get<ISize[]>(URL);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getSizes;
