"use client";

import { TQueryValidator } from "@/lib/validators/query-validator";
import { Product } from "@/payload-types";
import { trpc } from "@/trpc/client";
import Link from "next/link";
import ProductListing from "./ProductListing";
import Image from "next/image";

interface ProductReelProps {
  title: string;
  subtitle?: string;
  href?: string;
  query: TQueryValidator;
  linkText?: string;
  imageSrc?: string;
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
    <div className="w-full h-full flex flex-col items-center">
      {imageSrc ? (
        <div
          className="relative flex flex-col items-center"
          style={{ marginBottom: "300px" }}
        >
          <Link href={href ?? ""}>
            <div
              className="relative overflow-hidden rounded-tl-lg rounded-tr-lg"
              style={{ width: "200px", height: "200px" }}
            >
              <Image
                src={imageSrc}
                alt="Custom"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
                height={600}
                width={800}
              />
            </div>
          </Link>
          {linkText && href ? (
            <div className="text-center">
              <Link
                href={href}
                className="text-lg font-medium text-[rgb(36,36,35)] hover:text-[rgb(94,94,91)] bg-white rounded-bl-lg rounded-br-lg"
                style={{
                  display: "block",
                  padding: "32px 16px",
                  width: "200px",
                  height: "120px",
                  margin: "0 auto",
                }}
              >
                {linkText} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}

      {/*<div className="w-full mt-12 mb-12 flex items-center space-x-4">
        <p className="text-normal text-gray-600">Filter:</p>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="overflow-visible">
            <Button
              size="sm"
              className="relative bg-transparent hover:bg-transparent"
            >
              <p className="text-normal text-gray-600 hover:underline">
                Availability ⌵
              </p>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-white w-60" align="end">
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={} className="cursor-pointer">
              In stock (All)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={} className="cursor-pointer">
              out of stock (0)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
              </div>*/}

      <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8 mt-12">
        {map.map((product, i) => (
          <ProductListing key={`product-${i}`} product={product} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductReel;
