import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { Star, Gift, Car } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Why choose us?",
    Icon: Star,
    description: `
      - 100+ Happy Customers 👍
      - Crafted with Precision ✔️
      - High quality materials ⚙️
    `,
  },

  {
    name: "The Perfect Gift",
    Icon: Gift,
    description: `
      Our Models and Posters are the perfect gift for any car enthusiast 
      of any age or gender. Lighten up their month with their very own 
      model of their favourite supercar. 🚗
    `,
  },

  {
    name: "Product Features",
    Icon: Car,
    description: `
      Each of our products includes a variety of exciting features and 
      details that separate us from our competitors. All models (including 
      Framed ones) include moving parts, functional wheels, lights and more!🌟
    `,
  },
];

export default function Home() {
  return (
    <>
      <div className="md:pt-24 pt-5">
        <MaxWidthWrapper>
          <div className="pb-20 md:pt-20 pt-10 mx-auto text-center flex flex-col items-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading">
              The #1 store for car{" "}
              <span className="text-gray-800">enthusiasts</span>
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
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="/products"
                className={`${buttonVariants()} text-lg font-normal bg-white text-gray-800 hover:text-black hover:scale-101 tracking-wider`}
                style={{
                  padding: "24px 24px",
                  transition: "transform 0.05s",
                }}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <section
        className="border-t border-gray-200 bg-[rgba(244,244,244,255)]"
        style={
          {
            /*marginTop: "13%"*/
          }
        }
      >
        <MaxWidthWrapper className="py-">
          <div className="mb-4 text-left">
            <div className="relative max-w-4xl mx-auto px-4">
              <h2
                className="text-3xl font-semibold font-sans text-gray-800 mb-6 tracking-wider"
                style={{
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "50px",
                }}
              >
                Trending Collections
              </h2>
              <p
                className="text-base text-gray tracking-wider"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Discover Our Bestselling Products and Collections. Join the club
                of those who
              </p>
              <p
                className="text-base text-gray tracking-wider"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                appreciate style and performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="/categoriesPage"
                  className={`${buttonVariants()} text-lg font-normal bg-white text-gray-800 hover:text-black hover:scale-101 tracking-wider`}
                  style={{
                    padding: "24px 24px",
                    transition: "transform 0.05s",
                  }}
                >
                  View All
                </Link>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col lg:flex-row gap-4 mb-8"
            style={{ marginTop: "40px" }}
          >
            <div className="flex-none w-full h-80 sm:w-24 sm:h-96 lg:w-48 lg:h-48 flex justify-center items-center">
              <ProductReel
                title="Hello"
                query={{ sort: "desc", limit: 0 }}
                href="/products?category=CarAccessories"
                linkText=" 1:18  Scale  Models     ‎ ‎ "
                imageSrc="/1_18Model.png"
              />
            </div>
            <div className="flex-none w-full h-80 sm:w-96 sm:h-96 lg:w-48 lg:h-48 flex justify-center items-center">
              <ProductReel
                title="Hello"
                query={{ sort: "desc", limit: 0 }}
                href="/products?category=Decals_Stickers"
                linkText="1:24 Scale Models   ‎ "
                imageSrc="/1_24Model.png"
              />
            </div>
            <div className="flex-none w-full h-80 sm:w-96 sm:h-96 lg:w-48 lg:h-48 flex justify-center items-center">
              <ProductReel
                title="Hello"
                query={{ sort: "desc", limit: 0 }}
                href="/products?category=Framed_3D_models"
                linkText="Framed 3D Models"
                imageSrc="/FramedCarModels.png"
              />
            </div>
            <div className="flex-none w-full h-80 sm:w-96 sm:h-96 lg:w-48 lg:h-48 flex justify-center items-center">
              <ProductReel
                title="Hello"
                query={{ sort: "desc", limit: 0 }}
                href="/products?category=Accessories_and_Posters"
                linkText="Accessories & Posters"
                imageSrc="/posters.png"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center shadow-md"
                style={{ marginTop: "200px" }}
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
