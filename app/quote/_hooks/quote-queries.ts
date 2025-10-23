"use client";
import { useQuery } from "@tanstack/react-query";
import { getQuote } from "../_actions/quote-action";
import { qk } from "@/lib/qk";

export function useQuoteList() {
  return useQuery({
    queryKey: qk.quoteKey(),
    queryFn: getQuote,
    placeholderData: (previousData) => previousData,
  });
}
