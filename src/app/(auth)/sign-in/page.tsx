"use client";

import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

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
  const searchParams = useSearchParams();
  const router = useRouter();
  const isSeller = searchParams.get("as") === "seller";
  const origin = searchParams.get("origin");
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const continueAsSeller = () => {
    router.push("?as=seller");
  };

  const continueAsBuyer = () => {
    router.replace("/sign-in", undefined);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const { mutate: signIn, isLoading } = trpc.auth.signIn.useMutation({
    onSuccess: async () => {
      toast.success("Signed in successfully");

      router.refresh();

      if (origin) {
        router.push(`/${origin}`);
        return;
      }

      if (isSeller) {
        router.push("/sell");
        return;
      }

      router.push("/");
    },
    onError: (err) => {
      if (err.data?.code === "UNAUTHORIZED") {
        toast.error("Invalid email/password/zipcode/city/address.");
      }
    },
  });

  const onSubmit = ({
    email,
    password,
    zipcode,
    city,
    address,
  }: TAuthCredentialsValidator) => {
    signIn({ email, password, zipcode, city, address });
  };

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
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
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in to your {isSeller ? "seller" : ""} account
            </h1>

            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href="/sign-up"
            >
              Don&apos;t have an account?
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="you@example.com"
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      {...register("password")}
                      type={showPassword ? "text" : "password"} // Conditionally set the type based on visibility state
                      className={cn({
                        "focus-visible:ring-red-500": errors.password,
                      })}
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility} // Click event to toggle password visibility
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-400" /> // Icon for hiding password
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-400" /> // Icon for showing password
                      )}
                    </button>
                  </div>
                  {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="address">Address</Label>
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

                <div className="py-2">
                  <Label htmlFor="zipcode">
                    Zipcode and city - for shipping
                  </Label>
                  <div className="flex">
                    <Input
                      {...register("zipcode")}
                      type="zipcode"
                      className={cn("w-1/2 mr-2", {
                        "focus-visible:ring-red-500": errors.zipcode,
                      })}
                      placeholder="Zipcode"
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
                  {errors?.zipcode && (
                    <p className="text-sm text-red-500">
                      {errors.zipcode.message}
                    </p>
                  )}
                  {errors?.city && (
                    <p className="text-sm text-red-500">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <Button disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Sign in
                </Button>
              </div>
            </form>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or
                </span>
              </div>
            </div>

            {isSeller ? (
              <Button
                onClick={continueAsBuyer}
                variant="secondary"
                disabled={isLoading}
              >
                Continue as customer
              </Button>
            ) : (
              <Button
                onClick={continueAsSeller}
                variant="secondary"
                disabled={isLoading}
              >
                Continue as seller
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
