import { type ClassValue } from "clsx";
import { Metadata } from "next";
export declare function cn(...inputs: ClassValue[]): string;
export declare function formatPrice(price: number | string, options?: {
    currency?: "USD" | "EUR" | "GBP" | "BDT";
    notation?: Intl.NumberFormatOptions["notation"];
}): string;
export declare function constructMetadata({ title, description, image, icons, noIndex, }?: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
}): Metadata;
