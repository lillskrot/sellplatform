import { z } from "zod";

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  postalcode: z.string().min(5, {
    message: "Must include Postalcode",
  }),
  city: z.string().min(1, {
    message: "Must include City",
  }),
  address: z.string().min(1, {
    message: "Must include Address",
  }),
  Country: z.string().min(1, {
    message: "Must include Country",
  }),
  Lastname: z.string().min(1, {
    message: "Must include Lastname",
  }),
  Firstname: z.string().min(1, {
    message: "Must include Firstname",
  }),
  Apartment: z.string().min(1, {
    message: "Must include Apartment",
  }),
});

export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>;
