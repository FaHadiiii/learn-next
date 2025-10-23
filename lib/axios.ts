import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://zenquotes.io/api",
  headers: {
    "Content-Type": "application/json",
  },
});
