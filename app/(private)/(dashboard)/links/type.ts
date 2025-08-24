import { z } from "zod";

export const LinkSchema = z.object({
  id: z.string(),
  index: z.number().optional(),
  title: z.string(),
  url: z.string(),
  active: z.boolean(),
  clicks: z.number().nonnegative().optional(),
  image: z.string().optional()
});

export type LinkProps = z.infer<typeof LinkSchema>;
