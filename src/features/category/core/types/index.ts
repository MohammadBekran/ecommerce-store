import type IBillboard from "@/features/billboards/core/types";

interface ICategory {
  id: string;
  name: string;
  billboard: IBillboard;
}

export default ICategory;
