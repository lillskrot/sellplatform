"use client";

import { useCart } from "@/hooks/use-cart";
import { User } from "@/payload-types";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export const GoToStripeButton = ({ user }: { user: User | null }) => {
  const router = useRouter();

  const { items } = useCart();
  const productIds = items.map(({ product }) => product.id);

  const { mutate: createCheckoutSession, isLoading } =
    trpc.payment.createSession.useMutation({
      onSuccess: ({ url }) => {
        if (url) router.push(url);
      },
    });

  if (!user) {
    return null;
  }

  return (
    <Button
      disabled={items.length === 0 || isLoading}
      onClick={() => createCheckoutSession({ productIds })}
      className="w-full"
      size="lg"
    >
      Proceed to payment
    </Button>
  );
};
