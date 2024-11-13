"use client";

import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

import CheckoutFieldBox from "@/features/cart/components/cart-content/checkout-field-box";
import { checkoutAPI } from "@/features/cart/core/services/api";
import type { TCheckoutFormData } from "@/features/cart/core/types";
import { checkoutFormSchema } from "@/features/cart/core/validations";

import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import useCart from "@/core/hooks/use-cart.hooks";
import { toast } from "@/core/utils";

interface ICheckoutModalProps {
  open: boolean;
  storeId: string;
  productIds: string[];
  onClose: () => void;
}

const CheckoutModal = ({
  open,
  storeId,
  productIds,
  onClose,
}: ICheckoutModalProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { user } = useUser();
  const removeAllItems = useCart((state) => state.removeAll);
  const { control, handleSubmit } = useForm<TCheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
  });

  const onSubmit = (data: TCheckoutFormData) => {
    if (!user) redirect("/sign-in");

    startTransition(() =>
      checkoutAPI(
        storeId,
        {
          ...data,
          isPaid: false,
          productIds,
          userId: user.id,
        },
        () => {
          removeAllItems();
          toast.success("Checkout has been completed.");
          router.push("/");
        }
      )
    );
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        classes={{
          dialogPanel: "max-w-2xl",
          container: "!pt-0",
        }}
      >
        <div className="size-full">
          <h2 className="text-2xl font-bold">Checkout</h2>
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div className="space-y-4 my-5">
              <CheckoutFieldBox
                control={control}
                type="number"
                name="phone"
                id="phone"
                placeholder="(555) 555-1234"
                label="Phone Number"
                isPending={isPending}
              />
              <CheckoutFieldBox
                control={control}
                type="text"
                name="address"
                id="address"
                placeholder="Address..."
                label="Address"
                isPending={isPending}
              />
            </div>
            <div className="flex justify-end gap-x-3 w-full">
              <Button variant="ghost" disabled={isPending} onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={isPending}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutModal;
