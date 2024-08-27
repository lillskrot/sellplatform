"use client";

import { Media, Product } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

type ChildProducts = {
  products: Array<Product>;
};

const ProductItem = ({ product }: { product: Product }) => {
  const { images } = product;

  return (
    <li className="flex-shrink-0">
      <Link href={`/product/${product.id}`}>
        {typeof images[0] !== "string" && images[0].image ? (
          <Image
            src={(images[0].image as Media).url as string}
            alt="product image"
            className="object-cover object-center"
            width={128}
            height={128}
          />
        ) : null}
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
