import type IColor from "@/features/colors/core/types";

import Http from "@/core/services/interceptor";

const getColors = async () => {
  try {
    const response = await Http.get<IColor[]>("/colors");

    return response.data;
  } catch (error) {
    console.error("Something went wrong:", error);
  }
};

export default getColors;
