"use client";

import { usePathname } from "next/navigation";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();
  const pathsToMinimize = ["/verify-email", "/sign-up", "/sign-in"];

  return (
    <footer className="bg-white flex-grow-0">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200">
          {pathsToMinimize.includes(pathname) ? null : (
            <div className="pb-8 pt-16">
              <div className="flex justify-center">
                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    {/* Replace the current logo with an image */}
                    <img
                      src="/AutoLogo.png"
                      alt="/AutoLogo.png"
                      className="h-20 w-20"
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {pathsToMinimize.includes(pathname) ? null : (
            <div>
              <div className="relative flex items-center px-6 py-6 sm:py-8 lg:mt-0">
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div
                    aria-hidden="true"
                    className="absolute bg-zinc-50 inset-0 bg-gradient-to-br bg-opacity-90"
                  />
                </div>

                <div className="text-center relative mx-auto max-w-sm">
                  <h3 className="font-semibold text-gray-900">
                    Have any issues?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Please ask any questions you might have to our customer
                    support email, thanks!{" "}
                    <Link
                      href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlKFQgFTVCsCCkzlFNZxHMCkptWWNCRjHWsKfQRBmRxFZfJxqsxHfhwSDvXtZzpHHXPsFg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-nowrap font-medium text-black hover:text-zinc-900"
                    >
                      AutosAesthetics@gmail.com &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              <Link
                href="/Terms&Services"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
