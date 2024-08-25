import { CollectionConfig } from "payload/types";

export const Colors: CollectionConfig = {
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
