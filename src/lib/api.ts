import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const apiClient = axios.create({
  baseURL: BASE_URL,
});
