"use client";

import { Color } from "@/payload-types";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useCallback, useMemo } from "react";

const ColorOption = ({ color }: { color: string | Color }) => {
  if (typeof color === "string") {
    return (
      <>
        <RadioGroupItem value={color} id={color} />
        <Label htmlFor={color}>{color}</Label>
      </>
    );
  }
  return (
    <>
      <RadioGroupItem value={color.id} id={color.id} />
      <Label htmlFor={color.id}>
        {color.name} {color.hex}
      </Label>
    </>
  );
};
