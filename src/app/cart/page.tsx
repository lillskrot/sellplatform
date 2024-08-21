import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import { PageCart } from "./PageCart";

const Page = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <div className="relative flex flex-col">
      {/* Underlay Section
      <section
        className="absolute top-0 z-10 mt-16 bg-gray-50 px-4 py-6 sm:p-6 lg:mt-0 lg:p-8"
        style={{ width: "500px", height: "100vh", right: "500px" }} // Adjust the value as needed
      >
        <h2 className="text-lg font-medium text-gray-900">Add a new address</h2>
      </section>*/}

      {/* Main Content */}
      <PageCart user={user} />
    </div>
  );
};

export default Page;
