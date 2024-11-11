import axios, { AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
