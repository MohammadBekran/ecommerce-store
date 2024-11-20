import { priceFormatter } from "@/core/utils";

const Currency = ({ value }: { value?: string | number }) => {
  return (
    <div className="font-semibold dark:text-gray-500">
      {priceFormatter.format(Number(value))}
    </div>
  );
};

export default Currency;
