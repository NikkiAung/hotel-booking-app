import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .toLowerCase(),
  name: z.string().nonempty({ message: "Name is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .toLowerCase(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
