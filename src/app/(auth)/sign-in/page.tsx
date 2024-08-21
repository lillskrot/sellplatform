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
  SignInValidator,
  TSignInValidator,
} from "@/lib/validators/sign-in-validator";
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
  } = useForm<TSignInValidator>({
    resolver: zodResolver(SignInValidator),
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
        toast.error("Invalid email/password/postalcode/town/city/address.");
      }
    },
  });

  const onSubmit = ({ email, password }: TSignInValidator) => {
    signIn({
      email,
      password,
    });
  };

  return (
    <>
      <div className="container relative flex flex-col items-center justify-center lg:px-0">
        <div className="bg-white mx-auto flex w-full flex-col justify-start space-y-6 sm:w-[535px] sm:h-[1067px] px-12 py-32 pt-48 shadow-lg">
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
            {/*<h1 className="text-2xl font-semibold tracking-tight">
              1. Add an {isSeller ? "seller" : ""} address
            </h1>*/}

            {/*<Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href="/sign-up"
            >
              Don&apos;t have an account?
              <ArrowRight className="h-4 w-4" />
            </Link>*/}
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Sign in
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
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    type="password"
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder="Password"
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
