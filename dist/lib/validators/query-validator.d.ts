import { z } from "zod";
export declare const QueryValidator: z.ZodObject<{
    category: z.ZodOptional<z.ZodString>;
    sort: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    limit: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    category?: string;
    sort?: "asc" | "desc";
    limit?: number;
}, {
    category?: string;
    sort?: "asc" | "desc";
    limit?: number;
}>;
export type TQueryValidator = z.infer<typeof QueryValidator>;
