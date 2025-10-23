"use client";
import { useMutation } from "@tanstack/react-query";
import { addQuote } from "../_actions/quote-action";

export function useQuoteList() {
  return useMutation({
    mutationKey: ["add-quotes"],
    mutationFn: addQuote,
    onSuccess: (data) => {
      console.log(data);
    },
  });
}
