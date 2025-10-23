import z from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(1, "Bug title must be at least 1 characters.")
    .max(32, "Bug title must be at most 32 characters."),
});
