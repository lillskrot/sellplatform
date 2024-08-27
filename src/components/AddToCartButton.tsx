"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/payload-types";
import ColorSelect from "./ColorSelect";

const filterProductByColorById = (
  product: Product,
  colorId: string
): Product => {
  const filteredColors = product.colors.filter((color) => {
    if (typeof color === "string") {
      return color === colorId;
    }
    return color.id === colorId;
  });

  return {
    ...product,
    colors: filteredColors,
  };
};

const AddToCartButton = ({ product }: { product: Product }) => {
  const { colors } = product;

  const { addItem, items } = useCart();

  const defaultValue = useMemo(() => {
    if (0 < colors.length) {
      const firstColor = colors[0];
      return typeof firstColor === "string" ? firstColor : firstColor.id;
    }
    return "";
  }, [colors]);

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [selectedColor, setSelectedColor] = useState<string>(defaultValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  const onClick = useCallback(() => {
    addItem(filterProductByColorById(product, selectedColor));
    setIsSuccess(true);
  }, [addItem, product, selectedColor]);

  return (
    <>
      <ColorSelect
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <Button
        onClick={onClick}
        size="lg"
        className="w-full outline outline-2 drop-shadow-md pt-6 pb-6"
      >
        {isSuccess ? "Added!" : "Add to cart"}
      </Button>
    </>
  );
};

export default AddToCartButton;
