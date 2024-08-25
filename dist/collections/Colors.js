"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = void 0;
exports.Colors = {
    slug: "colors",
    labels: {
        singular: "Color",
        plural: "Colors",
    },
    admin: {
        useAsTitle: "name",
    },
    fields: [
        {
            name: "name",
            label: "Color Name",
            type: "text",
            required: true,
        },
        {
            name: "hex",
            label: "Color Hex Code",
            type: "text",
            required: true,
        },
    ],
};
