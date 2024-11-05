import type { IBillboard } from "@/core/types";

const Billboard = ({ data }: { data: IBillboard | undefined }) => {
  return (
    <div className="p-4 rounded-xl overflow-hidden sm:p-6 lg:p-8">
      <div
        className="relative overflow-hidden rounded-xl aspect-square md:aspect-[2.4/1] bg-cover"
        style={{ background: `url(${data?.imageUrl})` }}
      >
        <div className="size-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="max-w-xs fond-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
