import axios from "axios";
import config from "../Env";

export const API = axios.create({
  baseURL: config.API,
  timeout: 500,
});
