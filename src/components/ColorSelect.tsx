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

const ColorSelect = ({
  colors,
  selectedColor,
  setSelectedColor,
}: {
  colors: Array<string | Color>;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}) => {
  const onChange = useCallback(
    (value: string | Color) => {
      setSelectedColor(typeof value === "string" ? value : value.id);
    },
    [setSelectedColor]
  );

  const defaultValue = useMemo(() => {
    if (0 < colors.length) {
      const firstColor = colors[0];
      return typeof firstColor === "string" ? firstColor : firstColor.id;
    }
    return "";
  }, [colors]);

  return (
    <RadioGroup defaultValue={defaultValue} onValueChange={onChange}>
      {colors.map((color, key) => (
        <div key={key} className="flex items-center space-x-2">
          <ColorOption color={color} />
        </div>
      ))}
    </RadioGroup>
  );
};

export default ColorSelect;
