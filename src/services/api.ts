import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "http://167.172.20.31:3001",
});

api.interceptors.response.use(function (response) {
  return response;
});
