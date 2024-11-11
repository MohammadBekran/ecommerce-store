import { priceFormatter } from "@/core/utils";

const Currency = ({ value }: { value?: string | number }) => {
  return (
    <div className="font-semibold">{priceFormatter.format(Number(value))}</div>
  );
};

export default Currency;
