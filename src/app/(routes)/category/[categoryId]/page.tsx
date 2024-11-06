import Category from "@/features/category/components";

import getColors from "@/core/services/api/get-colors.api";
import getProducts from "@/core/services/api/get-products.api";
import getSizes from "@/core/services/api/get-sizes.api";
import getCategory from "@/core/services/api/get-category.api";

interface ICategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
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
  const category = await getCategory(params.categoryId);

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