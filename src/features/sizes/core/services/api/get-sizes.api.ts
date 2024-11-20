import type ISize from "@/features/sizes/core/types";

import Http from "@/core/services/interceptor";

const getSizes = async () => {
  try {
    const response = await Http.get<ISize[]>("/sizes");

    return response.data;
  } catch (error) {
    console.error("Something went wrong:", error);
  }
};

export default getSizes;
