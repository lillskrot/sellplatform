import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Fast delivery",
    Icon: ArrowDownToLine,
    description: "Fast delivery, takes about 2-5 business days to arrive.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description: "We've pledged 10% of sales to charities of your choice!",
  },
  {
    name: "Quality",
    Icon: CheckCircle,
    description: "We ensure good quality on our items",
  },
];

export default function Home() {
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <MaxWidthWrapper>
          <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading">
              Your marketplace for high-quality{" "}
              <span
                className="text-blue-800"
                style={{ color: "rgb(89, 122, 157)" }}
              >
                Car models
              </span>
            </h1>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.3)", // White with 30% transparency
                  borderRadius: "10px", // Rounded corners
                  filter: "blur(2px)", // Add a slight blur effect
                  zIndex: "-1", // Move behind the text
                  padding: "0px", // Adjust padding as needed
                }}
              ></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 font-body-bold">
              <Link href="/products" className={buttonVariants()}>
                Shop Now
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <section
        className="border-t border-gray-200 bg-white"
        style={{ marginTop: "13%" }}
      >
        <MaxWidthWrapper className="py-">
          <div className="mb-4 text-left">
            <h2 className="text-2xl font-normal text-gray-800 mb-6 mt-6">
              Our Collections:
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-none w-full h-80 sm:w-96 sm:h-96 lg:w-96 lg:h-96">
              <ProductReel
                query={{ sort: "desc", limit: 0 }}
                href="/products?category=Decals_Stickers"
                linkText="1:18 Scale Models"
                imageSrc="/vitModelBil.png"
              />
            </div>
            <div className="flex-none w-full h-80 sm:w-96 sm:h-96 lg:w-96 lg:h-96">
              <ProductReel
                query={{ sort: "desc", limit: 0 }}
                href="/products?category=CarAccessories"
                linkText="1:24 Scale Models"
                imageSrc="/svartModelBil.png"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center shadow-md"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div
                    className="h-16 w-16 flex items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "rgb(197,220,248)",
                      color: "rgb(13,57,94)",
                    }}
                  >
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p
                    className="mt-3 text-sm"
                    style={{ color: "rgba(50, 50, 50, 1)" }}
                  >
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
