import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { PRODUCT_CATEGORIES } from "@/config";

import ProductListing from "@/components/ProductListing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Param = string | string[] | undefined;

interface ProductsPageProps {
  searchParams: { [key: string]: Param };
}

const parse = (param: Param) => {
  return typeof param === "string" ? param : undefined;
};

const ProductsPage = ({ searchParams }: ProductsPageProps) => {
  const sort = parse(searchParams.sort);
  const category = parse(searchParams.category);

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === category
  )?.label;

  return (
    <section className="min-w-screen min-h-full border-t border-gray-200 bg-[rgba(244,244,244,255)]">
      <MaxWidthWrapper>
        <div className="w-full mt-12 flex items-center space-x-4">
          <p className="text-base text-gray-600">Filter:</p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="overflow-visible">
              <Button
                size="sm"
                className="relative bg-transparent hover:bg-transparent"
              >
                <p className="text-base font-normal text-gray-600 hover:underline">
                  Availability ⌵
                </p>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="bg-white hover:bg-white w-60"
              align="end"
            >
              <DropdownMenuSeparator />

              <DropdownMenuItem /*onClick={}*/ className="cursor-pointer">
                <Link href="">
                  <p>In stock (All)</p>
                </Link>
              </DropdownMenuItem>
              <p className="text-sm font-normal text-gray-400 ml-2 pb-2 pt-2">
                Out of stock (0)
              </p>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ProductReel
          title={label ?? "Browse high-quality products"}
          query={{
            category,
            limit: 40,
            sort: sort === "desc" || sort === "asc" ? sort : undefined,
          }}
        />
      </MaxWidthWrapper>
    </section>
  );
};

export default ProductsPage;
