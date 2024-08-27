import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { PRODUCT_CATEGORIES } from "@/config";
import { ChildProducts } from "../product/ChildProducts";
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

// Example function to filter out child products
const filterOutChildProducts = (products: any[]) => {
  return products.filter((product) => !product.isChildProduct); // Adjust `isChildProduct` to your actual field
};

const ProductsPage = ({ searchParams }: ProductsPageProps) => {
  const sort = parse(searchParams.sort);
  const category = parse(searchParams.category);

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === category
  )?.label;

  // Example data fetching function; replace with actual data fetching
  const fetchProducts = async (query: {
    category?: string;
    limit?: number;
    sort?: string;
  }) => {
    // Fetch products (replace this with actual API call or data fetching logic)
    const products = await fetch("/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    }).then((res) => res.json());

    return filterOutChildProducts(products); // Filter child products
  };

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
