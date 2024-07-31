"use client";

import { TQueryValidator } from "@/lib/validators/query-validator";
import { Product } from "@/payload-types";
import { trpc } from "@/trpc/client";
import Link from "next/link";
import ProductListing from "./ProductListing";

interface ProductReelProps {
  title: string;
  subtitle?: string;
  href?: string;
  query: TQueryValidator;
  linkText?: string; // Customizable link text
  imageSrc?: string; // Customizable image source
}

const FALLBACK_LIMIT = 4;

const ProductReel = (props: ProductReelProps) => {
  const { title, subtitle, href, query, linkText, imageSrc } = props;

  const { data: queryResults, isLoading } =
    trpc.getInfiniteProducts.useInfiniteQuery(
      {
        limit: query.limit ?? FALLBACK_LIMIT,
        query,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    );

  const products = queryResults?.pages.flatMap((page) => page.items);

  let map: (Product | null)[] = [];
  if (products && products.length) {
    map = products;
  } else if (isLoading) {
    map = new Array<null>(query.limit ?? FALLBACK_LIMIT).fill(null);
  }

  return (
    <div className="relative" style={{ width: "100%", height: "100%" }}>
      {imageSrc ? (
        <div className="relative" style={{ width: "100%", height: "100%" }}>
          <Link href={href ?? ""}>
            <img
              src={imageSrc}
              alt="Custom"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="rounded-lg transition-transform duration-1000 ease-in-out transform hover:scale-105"
            />
          </Link>
          {linkText && href ? (
            <Link
              href={href}
              className="absolute bottom-0 left-0 p-2 text-left text-sm font-medium text-blue-600 hover:text-blue-500 bg-white rounded-tr-lg"
              style={{ width: "200px" }} // Adjust width if needed
            >
              {linkText} <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : null}
        </div>
      ) : null}

      <div className="relative" style={{ width: "100%", height: "100%" }}>
        <div className="mt-6 flex items-center w-full">
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
            {map.map((product, i) => (
              <ProductListing
                key={`product-${i}`}
                product={product}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReel;
