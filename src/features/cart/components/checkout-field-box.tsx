import { Control, Controller } from "react-hook-form";
import { Input } from "@headlessui/react";

import type { TCheckoutFormData } from "@/features/cart/core/types";

interface ICheckoutFieldBoxProps {
  control: Control<TCheckoutFormData>;
  type: string;
  name: keyof TCheckoutFormData;
  id: string;
  placeholder: string;
  label: string;
  isPending: boolean;
}

const CheckoutFieldBox = ({
  control,
  type,
  name,
  id,
  placeholder,
  label,
  isPending,
}: ICheckoutFieldBoxProps) => {
  return (
    <div className="flex items-center gap-10">
      <label
        htmlFor={id}
        className="font-medium truncate text-gray-700 w-[100px]"
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            type={type}
            id={id}
            placeholder={placeholder}
            disabled={isPending}
            className="rounded-lg border outline-none p-2 w-3/4"
            {...field}
          />
        )}
      />
    </div>
  );
};

export default CheckoutFieldBox;
