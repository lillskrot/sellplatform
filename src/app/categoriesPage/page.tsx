import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Star, StarHalf, Gift, Car } from "lucide-react"; // Import Star and StarHalf
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="min-w-screen min-h-full border-t border-gray-200 bg-[rgba(244,244,244,255)]">
        <MaxWidthWrapper>
          <div className="mb-4 text-center">
            <div className="relative max-w-4xl">
              <div className="flex mt-12 justify-center md:ml-36 md:justify-start">
                <h2 className="text-4xl font-semibold font-sans text-gray-800 tracking-wider">
                  Our collections:
                </h2>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col lg:flex-row gap-4 mb-8 justify-center items-center"
            style={{ marginTop: "40px" }}
          >
            <div className="flex-none w-full h-80 sm:w-24 sm:h-96 lg:w-48 lg:h-48 flex flex-col justify-center items-center">
              <ProductReel
                title="Hello"
                query={{ sort: "desc", limit: 0 }}
                href="/products?category=CarAccessories"
                linkText=" 1:18  Scale  Models     ‎ ‎ "
                imageSrc="/1_18Model.png"
              />
            </div>
            <div className="flex-none w-full h-80 sm:w-96 sm:h-96 lg:w-48 lg:h-48 flex flex-col justify-center items-center">
              <ProductReel
                title="Hello"
                query={{ sort: "desc", limit: 0 }}
                href="/products?category=Decals_Stickers"
                linkText="1:24 Scale Models   ‎ "
                imageSrc="/1_24Model.png"
              />
            </div>
            <div className="flex-none w-full h-80 sm:w-96 sm:h-96 lg:w-48 lg:h-48 flex flex-col justify-center items-center">
              <ProductReel
                title="Hello"
                query={{ sort: "desc", limit: 0 }}
                href="/products?category=Framed_3D_models"
                linkText="Framed 3D Models"
                imageSrc="/FramedCarModels.png"
              />
            </div>
            <div className="flex-none w-full h-80 sm:w-96 sm:h-96 lg:w-48 lg:h-48 flex flex-col justify-center items-center">
              <ProductReel
                title="Hello"
                query={{ sort: "desc", limit: 0 }}
                href="/products?category=Accessories_and_Posters"
                linkText="Accessories & Posters"
                imageSrc="/posters.png"
              />
            </div>
          </div>

          {/* Main Text and Subtext under the ProductReel Section */}
          <div className="text-center mt-64 mb-4">
            <h3 className="text-2xl font-medium text-gray-800 mb-6">
              Frame Your Supercar Passion
            </h3>
            <p className="text-base text-gray-500">
              Display your supercar love with our Scale Models, Posters, and 3D
              Frames. Perfect for any car
            </p>
            <p className="text-sm text-gray-500">enthusiast.</p>
            <h3 className="text-3xl font-normal text-gray-800 mt-32">
              Over 100
            </h3>
            <h3 className="text-3xl font-normal text-gray-800">Happy</h3>
            <h3 className="text-3xl font-normal text-gray-800">customers!</h3>

            {/* Star Rating Component */}
            <div className="text-center mt-6">
              <div className="star-rating flex justify-center">
                <div className="stars flex">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} fill="#111" strokeWidth={0} />
                  ))}
                </div>
                <div className="stars rating flex justify-center">
                  <Star fill="yellow" strokeWidth={0} />
                  <Star fill="yellow" strokeWidth={0} />
                  <Star fill="yellow" strokeWidth={0} />
                  <Star fill="yellow" strokeWidth={0} />
                  <Star fill="yellow" strokeWidth={0} />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
