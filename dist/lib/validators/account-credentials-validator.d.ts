import { z } from "zod";
export declare const AuthCredentialsValidator: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email?: string;
    password?: string;
}, {
    email?: string;
    password?: string;
}>;
export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;
