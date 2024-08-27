"use client";

import React, { useState } from "react";
import { Media, Product } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

type ChildProducts = {
  products: Array<Product>;
};

const ProductItem = ({ product }: { product: Product }) => {
  const { images } = product;
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <li className="flex-shrink-0" style={{ paddingBottom: "48px" }}>
      <Link href={`/product/${product.id}`}>
        <span
          onClick={() =>
            handleColorClick(
              typeof product.color === "string"
                ? product.color
                : product.color.name
            )
          }
          style={{
            padding: "5px 24px",
            backgroundColor:
              selectedColor ===
              (typeof product.color === "string"
                ? product.color
                : product.color.name)
                ? "#001128"
                : "#fff", // Change background color on selection
            color:
              selectedColor ===
              (typeof product.color === "string"
                ? product.color
                : product.color.name)
                ? "#fff" // White text when background is #001128
                : "#000", // Default text color
            border: "1px solid #000", // Black outline
            borderRadius: "24px", // Rounded edges
            display: "inline-block", // Ensure the span respects the border-radius
            margin: "0 8px", // Adds space between the rectangles
            cursor: "pointer", // Add pointer cursor to indicate it's clickable
          }}
        >
          {typeof product.color === "string"
            ? product.color
            : product.color.name}
        </span>
      </Link>
    </li>
  );
};

export const ChildProducts = ({ products }: ChildProducts) => {
  return (
    <ul className="flex flex-row flex-wrap">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
};
