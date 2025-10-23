"use server";
import { axiosInstance } from "@/lib/axios";

export async function getQuote() {
  const res = await axiosInstance.get("/quotes");
  console.log(res.data);
  return res.data;
}

export async function addQuote(data: any) {
  const res = await axiosInstance.post("/quotes", data);
  return res.data;
}
