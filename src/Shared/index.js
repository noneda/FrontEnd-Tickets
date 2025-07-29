import axios from "axios";
import config from "@/Env";

export const HTTP = axios.create({
  baseURL: `${config.API}api/`,
  timeout: 5000,
});

HTTP.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});
  