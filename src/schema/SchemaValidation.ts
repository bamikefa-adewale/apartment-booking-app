import * as z from "zod";

export const SchemaValidation = z.object({
  name: z.string().nonempty("Full Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  number: z
    .string()
    .nonempty("Enter Your Phone Number")
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
});
