import { Product } from "../../payload-types";
import * as React from "react";
interface ReceiptEmailProps {
    email: string;
    date: Date;
    orderId: string;
    products: Product[];
}
export declare const ReceiptEmail: ({ email, date, orderId, products, }: ReceiptEmailProps) => React.JSX.Element;
export declare const ReceiptEmailHtml: (props: ReceiptEmailProps) => string;
export {};
