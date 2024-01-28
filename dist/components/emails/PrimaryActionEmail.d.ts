import * as React from "react";
interface EmailTemplateProps {
    actionLabel: string;
    buttonText: string;
    href: string;
}
export declare const EmailTemplate: ({ actionLabel, buttonText, href, }: EmailTemplateProps) => React.JSX.Element;
export declare const PrimaryActionEmailHtml: (props: EmailTemplateProps) => string;
export {};
