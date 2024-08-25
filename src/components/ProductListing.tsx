import { Product } from "@/payload-types";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
import { PRODUCT_CATEGORIES } from "@/config";
import ImageSlider from "./ImageSlider";

interface ProductListingProps {
  product: Product | null;
  index: number;
}

const ProductListing = ({ product, index }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (!product || !isVisible) return <ProductPlaceholder />;

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label;

  const validUrls = product.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  if (isVisible && product) {
    return (
      <Link
        className={cn("invisible h-full w-full cursor-pointer group/main", {
          "visible animate-in fade-in-5": isVisible,
        })}
        href={`/product/${product.id}`}
      >
        <div className="flex flex-col w-full relative">
          <ImageSlider urls={validUrls} />

          <h3 className="mt-4 font-medium text-sm text-black-1000 relative flex items-center">
            <span className="h3-background">{product.name}</span>
            <span
              className="text-green-500 ml-3 text-sm cursor-pointer"
              title="In Storage"
            >
              &#x25cf;
            </span>
          </h3>

          <p className="h3-background w-2/3 text-sm text-gray-900">{label}</p>

          <div className="price-container flex items-center">
            {/* Display original price */}
            <p className="original-price font-normal text-base text-gray-900">
              <span>{formatPrice(product.price)}</span>
            </p>

            {/* Calculate and display 30% more price */}
            <p className="discount-price font-normal text-base text-gray-900 ml-2">
              <span style={{ textDecoration: "line-through" }}>
                {formatPrice(product.price * 1.5)}
              </span>{" "}
            </p>
          </div>
        </div>
      </Link>
    );
  }
};

const ProductPlaceholder = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
        <Skeleton className="h-full w-full" />
      </div>
      <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-12 h-4 rounded-lg" />
    </div>
  );
};

export default ProductListing;
