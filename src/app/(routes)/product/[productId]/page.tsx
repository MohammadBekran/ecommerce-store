import Product from "@/features/product/components";
import { getProduct, getProducts } from "@/features/product/core/services/api";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const productInfo = await getProduct(productId);
  const suggestedProducts = await getProducts({
    categoryId: productInfo?.category?.id,
  });

  return (
    <Product product={productInfo} suggestedProducts={suggestedProducts} />
  );
};

export default ProductPage;
