import z from "zod";

export const addQuoteSchema = z.object({
  quote: z.string().min(5, "Quote must be at least 5 characters."),
});
