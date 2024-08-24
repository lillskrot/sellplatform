"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";
import { ZodError } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const searchParams = useSearchParams();

  const router = useRouter();
  const isSeller = searchParams.get("as") === "seller";

  /**
   * Create user
   * - Creates the new user.
   * - On Success, Let's try and sign in the user right away.
   * - TODO: We need to remove any code that requires email validation.
   */

  const { mutate, isLoading } =
    trpc.auth.createAndSignInPayloadUser.useMutation({
      onError: (err) => {
        if (err.data?.code === "CONFLICT") {
          toast.error("This email is already in use. Sign in instead?");

          return;
        }

        if (err instanceof ZodError) {
          toast.error(err.issues[0].message);

          return;
        }

        toast.error("Something went wrong. Please try again.");
      },
      onSuccess: () => {
        toast.success(`Created and signed in user.`);
        router.push("/verify-email");
        window.location.href = "/verify-email";
      },
    });

  const onSubmit = ({
    email,
    password,
    postalcode,
    city,
    address,
    Country,
    Lastname,
    Firstname,
    Apartment,
  }: TAuthCredentialsValidator) => {
    console.log(
      "ON SUBMIT",
      email,
      password,
      postalcode,
      city,
      address,
      Country,
      Lastname,
      Firstname,
      Apartment
    );
    mutate({
      email,
      password,
      postalcode,
      city,
      address,
      Country,
      Lastname,
      Firstname,
      Apartment,
    });
  };

  return (
    <>
      <div className="container relative flex flex-col items-center justify-center lg:px-0">
        <div className="bg-white mx-auto flex w-full flex-col justify-start space-y-6 sm:w-[535px] sm:h-[1067px] px-12 py-32 pt-32 shadow-lg">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                {/* Replace the current logo with an image */}
                <Image
                  src="/AutoLogo.png"
                  alt="/AutoLogo.png"
                  className="h-20 w-20"
                  width={100}
                  height={100}
                />
              </Link>
            </div>

            {/*<Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href="/sign-in"
            >
              Already have an account? Sign-in
              <ArrowRight className="h-4 w-4" />
            </Link>*/}
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Contact
                </h1>
                <div className="grid gap-1 py-2">
                  {/*<Label htmlFor="email">Email</Label>*/}
                  <Input
                    {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="Email"
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password (To sign in later)</Label>
                  <Input
                    {...register("password")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    type="password"
                    placeholder="Password"
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  {/*<Label htmlFor="Country">Country/Region</Label>*/}
                  <h1 className="text-2xl font-semibold tracking-tight">
                    Delivery
                  </h1>
                  <Input
                    {...register("Country")}
                    type="Country"
                    className={cn({
                      "focus-visible:ring-red-500": errors.Country,
                    })}
                    placeholder="Country/Region"
                  />
                  {errors?.Country && (
                    <p className="text-sm text-red-500">
                      {errors.Country.message}
                    </p>
                  )}
                </div>

                <div className="py-2">
                  {/*<Label htmlFor="postalcode">First and last name</Label>*/}
                  <div className="flex">
                    <Input
                      {...register("Firstname")}
                      type="Firstname"
                      className={cn("w-1/2 mr-2", {
                        "focus-visible:ring-red-500": errors.Firstname,
                      })}
                      placeholder="First name (optional)"
                    />
                    <Input
                      {...register("Lastname")}
                      type="Lastname"
                      className={cn("w-1/2", {
                        "focus-visible:ring-red-500": errors.Lastname,
                      })}
                      placeholder="Last name"
                    />
                  </div>
                  {errors?.Firstname && (
                    <p className="text-sm text-red-500">
                      {errors.Firstname.message}
                    </p>
                  )}
                  {errors?.Lastname && (
                    <p className="text-sm text-red-500">
                      {errors.Lastname.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  {/*<Label htmlFor="address">Address</Label>*/}
                  <Input
                    {...register("address")}
                    type="address"
                    className={cn({
                      "focus-visible:ring-red-500": errors.address,
                    })}
                    placeholder="Address"
                  />
                  {errors?.address && (
                    <p className="text-sm text-red-500">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  {/*<Label htmlFor="Apartment">Apartment</Label>*/}
                  <Input
                    {...register("Apartment")}
                    type="Apartment"
                    className={cn({
                      "focus-visible:ring-red-500": errors.Apartment,
                    })}
                    placeholder="Apartment, suite, etc. (optional)"
                  />
                  {errors?.Apartment && (
                    <p className="text-sm text-red-500">
                      {errors.Apartment.message}
                    </p>
                  )}
                </div>

                <div className="py-2">
                  {/*<Label htmlFor="postalcode">Postalcode and city</Label>*/}
                  <div className="flex">
                    <Input
                      {...register("postalcode")}
                      type="postalcode"
                      className={cn("w-1/2 mr-2", {
                        "focus-visible:ring-red-500": errors.postalcode,
                      })}
                      placeholder="Postalcode"
                    />
                    <Input
                      {...register("city")}
                      type="text"
                      className={cn("w-1/2", {
                        "focus-visible:ring-red-500": errors.city,
                      })}
                      placeholder="City"
                    />
                  </div>
                  {errors?.postalcode && (
                    <p className="text-sm text-red-500">
                      {errors.postalcode.message}
                    </p>
                  )}
                  {errors?.city && (
                    <p className="text-sm text-red-500">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <Button
                  className={`w-full font-normal bg-gray-200 text-gray-800 hover:text-black hover:bg-gray-200 hover:scale-101 tracking-wider`}
                >
                  Sign up and proceed
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
