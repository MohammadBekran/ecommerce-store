import Category from "@/features/category/components";
import { getCategory } from "@/features/category/core/services/api";
import getColors from "@/features/colors/core/services/api";
import { getProducts } from "@/features/product/core/services/api";
import getSizes from "@/features/sizes/core/services/api";

interface ICategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
  searchParams: Promise<{
    colorId: string;
    sizeId: string;
  }>;
}

const CategoryPage = async ({ params, searchParams }: ICategoryPageProps) => {
  const { categoryId } = await params;
  const { colorId, sizeId } = await searchParams;

  const products = await getProducts({
    categoryId,
    colorId,
    sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId);

  return (
    <Category
      products={products}
      sizes={sizes}
      colors={colors}
      category={category}
    />
  );
};

export default CategoryPage;
