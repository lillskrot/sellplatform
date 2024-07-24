import { z } from "zod";

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  postalcode: z.string().min(5, {
    message: "Should include postalcode",
  }),
  city: z.string().min(1, {
    message: "Should include town/city name",
  }),
  address: z.string().min(1, {
    message: "Should include address",
  }),
});

export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>;
