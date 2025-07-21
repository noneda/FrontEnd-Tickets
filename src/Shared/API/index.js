import axios from "axios";
import config from "@/Env";

export const API = axios.create({
  baseURL: `${config.API}api/`,
  timeout: 2000,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});
