"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import type IColor from "@/features/colors/core/types";
import type ISize from "@/features/sizes/core/types";

import { Button } from "@/components/ui/button";
import { cn } from "@/core/utils";

interface IFilterProps {
  data?: (ISize | IColor)[];
  name: string;
  valueKey: string;
}

const Filter = ({ data, name, valueKey }: IFilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data?.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2  border border-gray-300 hover:text-white",
                selectedValue === filter.id && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
