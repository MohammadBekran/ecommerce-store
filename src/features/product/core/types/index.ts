import type ICategory from "@/features/category/core/types";
import type IColor from "@/features/colors/core/types";
import type IImage from "@/features/images/core/types";
import type ISize from "@/features/sizes/core/types";

interface IProduct {
  id: string;
  storeId: string;
  name: string;
  price: string;
  isFeatured: boolean;
  isArchived: boolean;
  category: ICategory;
  size: ISize;
  color: IColor;
  images: IImage[];
}

export default IProduct;
