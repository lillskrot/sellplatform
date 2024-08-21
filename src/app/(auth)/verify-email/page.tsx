import { GoToStripeButton } from "@/components/GoToStripeButton";
import VerifyEmail from "@/components/VerifyEmail";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import Image from "next/image";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const VerifyEmailPage = async ({ searchParams }: PageProps) => {
  const token = searchParams.token;
  const toEmail = searchParams.to;
  console.log(toEmail);

  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token === "string" ? (
          <div className="grid gap-6">
            <VerifyEmail token={token} />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
              <Image src="/logo-car.png" fill alt="/logo-car.png" />
            </div>

            <h3 className="font-semibold text-2xl">Thanks for signing up!</h3>
            <p>
              You can sign in using your e-mail and password later to check on
              your order.
            </p>
          </div>
        )}

        <p>
          <GoToStripeButton user={user} />
        </p>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
