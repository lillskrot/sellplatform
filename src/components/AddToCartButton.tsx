"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/payload-types";

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addItem, items } = useCart();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  const onClick = useCallback(() => {
    addItem(product);
    setIsSuccess(true);
  }, [addItem, product]);

  return (
    <Button
      onClick={onClick}
      size="lg"
      className="w-full outline outline-1 drop-shadow-sm pt-6 pb-6"
    >
      {isSuccess ? "Added!" : "Add to cart"}
    </Button>
  );
};

export default AddToCartButton;
