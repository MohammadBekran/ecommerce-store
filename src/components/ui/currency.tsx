import { priceFormatter } from "@/lib/utils";

const Currency = ({ value }: { value?: string | number }) => {
  return (
    <div className="font-semibold">{priceFormatter.format(Number(value))}</div>
  );
};

export default Currency;
