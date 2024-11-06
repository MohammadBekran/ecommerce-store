import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/checkout`;

const checkoutAPI = async (data: { productIds: string[] }) => {
  const response = await axios.post(URL, data);

  return response.data;
};

export default checkoutAPI;
