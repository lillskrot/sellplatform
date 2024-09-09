import AddToCartButton from "@/components/AddToCartButton";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import Dropdown from "@/components/Dropdown"; // Import the Dropdown component
import { PRODUCT_CATEGORIES } from "@/config";
import { getPayloadClient } from "@/get-payload";
import { formatPrice } from "@/lib/utils";
import { Check, Shield } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChildProducts } from "../ChildProducts";
import { Product } from "@/payload-types";
import { BadgeCheck, Truck, Box, Ruler, ArrowBigLeft } from "lucide-react";
import React from "react";

interface PageProps {
  params: {
    productId: string;
  };
}

const BREADCRUMBS = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Products", href: "/products" },
];

const perks = [
  {
    name: "Free Shipping",
    Icon: Truck,
    description: `
      No Extra Costs
    `,
  },

  {
    name: "Easy Returns",
    Icon: Box,
    description: `
    Return within 30 days
    `,
  },

  {
    name: "Secure Checkout",
    Icon: BadgeCheck,
    description: `
    Safe, Secure Payment
    `,
  },
];

const Shipping_Info = [
  {
    Icon: Truck,
  },
];

const Dimensions = [
  {
    Icon: Ruler,
  },
];

const Refunds = [
  {
    Icon: ArrowBigLeft,
  },
];

const Page = async ({ params }: PageProps) => {
  const { productId } = params;

  const payload = await getPayloadClient();

  const { docs: products } = await payload.find({
    collection: "products",
    limit: 1,
    where: {
      id: {
        equals: productId,
      },
      approvedForSale: {
        equals: "approved",
      },
    },
  });

  const [product] = products as unknown as Array<Product>;

  const { docs: childProducts } = await payload.find({
    collection: "products",
    limit: 100,
    where: {
      parentId: {
        equals: product.parentId ? (product.parentId as Product).id : productId,
      },
      approvedForSale: {
        equals: "approved",
      },
    },
  });

  if (!product) return notFound();

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label;

  const validUrls = product.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  return (
    <MaxWidthWrapper className="white-background">
      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product Details */}
            <div className="lg:max-w-lg lg:self-end mt-0 lg:mt-0">
              <ol className="flex items-center space-x-2">
                {BREADCRUMBS.map((breadcrumb, i) => (
                  <li key={breadcrumb.href}>
                    <div className="flex items-center text-sm">
                      <Link
                        href={breadcrumb.href}
                        className="font-medium text-sm text-muted-foreground hover:text-gray-900"
                      >
                        {breadcrumb.name}
                      </Link>
                      {i !== BREADCRUMBS.length - 1 ? (
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-4">
                <h1 className="text-3xl tracking-wide text-gray-hard sm:text-4xl font-normal roboto-bold">
                  {product.name}
                </h1>
              </div>

              <section className="mt-4">
                <div className="flex items-center">
                  <p className=" tracking-wide text-gray-hard roboto-thin text-2xl">
                    {formatPrice(product.price)}
                  </p>

                  <div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">
                    {label}
                  </div>
                </div>

                <div className="mt-6 flex items-center">
                  <Check
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                  />
                  <p className="ml-2 text-base text-gray">Free shipping</p>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray">Color</p>
                </div>

                <div className="lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start mt-3">
                  <ChildProducts
                    products={childProducts as unknown as Array<Product>}
                  />
                </div>

                {/* Move Add to Cart Button Here */}
                <div className="mt-0">
                  <AddToCartButton product={product} />
                </div>
                <div className="mt-6 text-center">
                  <div className="group inline-flex text-sm text-medium">
                    <Shield
                      aria-hidden="true"
                      className="mr-2 h-5 w-5 flex-shrink-0 text-gray-900"
                    />
                    <span className="hover:text-gray-700">
                      30 Day Return Guarantee
                    </span>
                  </div>
                </div>
              </section>
            </div>

            {/* Product images */}
            <div className="lg:col-start-2 lg:row-span-2 lg:self-center">
              <div className="aspect-[11/12] w-11/12 lg:w-full mx-auto">
                {/* Center the image */}
                <ImageSlider urls={validUrls} />
              </div>
            </div>
          </div>

          {/* Perks Section */}
          <div className="mt-0">
            <div className="mt-0 flex flex-wrap gap-6">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 text-center w-full sm:w-auto" /* Ensure full width on small screens and auto width on larger ones */
                >
                  <perk.Icon
                    strokeWidth={1}
                    className="h-10 w-10 ml-0 sm:ml-5 text-gray-900"
                  />
                  <div>
                    <h3 className="text-lg ml-0 sm:ml-5 font-bold text-black">
                      {perk.name}
                    </h3>
                    <p
                      className="text-sm ml-0 sm:ml-5"
                      style={{ color: "#939393" }}
                    >
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-12 space-y-6">
            {product.description ? (
              <p
                className="text-base text-gray"
                style={{
                  wordWrap: "break-word",
                  lineHeight: "1.6",
                }}
              >
                {product.description.split("\n").map((line, index) => (
                  <span
                    key={index}
                    className={`line-item ${index === 0 ? "no-dot" : ""} ${
                      index !== 0 ? "ml-6" : ""
                    }`}
                  >
                    {line}
                  </span>
                ))}
              </p>
            ) : null}
          </div>

          {/* Dropdowns Section */}
          <div className="mt-12 w-full md:w-3/6">
            <div className="border-b border-gray-300"></div>

            <div className="flex items-start space-x-4 mt-1 mb-1">
              <div className="flex items-start space-x-2 text-left">
                {Shipping_Info.map((perk, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <perk.Icon
                      strokeWidth={1}
                      className="h-7 w-7 text-black mt-2"
                    />
                    {/* Adjust mt-2 for vertical margin */}
                  </div>
                ))}
              </div>
              <div className="ml-10">
                <Dropdown
                  label="Shipping info ⌵"
                  dropdownText="Shipping takes, on average, 5-10 days. Accurate shipping times displayed at Checkout. If shipping time exceeds 15 days we can issue a full refund. We ship to most of Europe, Asia and North America. Shipping is 100% FREE."
                />
              </div>
            </div>

            <div className="border-b border-gray-300"></div>
          </div>
        </div>
      </div>

      <ProductReel
        href="/products"
        query={{ category: product.category, limit: 4 }}
        title={`Similar ${label}`}
        subtitle={`Browse similar high-quality ${label} just like '${product.name}'`}
      />
    </MaxWidthWrapper>
  );
};
//Our 1:24 models are approximately 21cm X 10cm making them the perfect size for a collectible. (7.5 inches) Our 1:18 models are approximately 30cm X 15cm. Their large size makes them perfect for a collectable or as a display model. Our 3D Frames are approximately 32cm by 23cm. The Removable Model cars are 1:32 Scale (17cm) Posters are 21 by 30cm (A4) making them a perfect decoration for any wall.
export default Page;
