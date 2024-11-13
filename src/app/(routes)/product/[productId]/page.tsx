import type { Metadata } from "next";

import Product from "@/features/product/components";
import { getProduct, getProducts } from "@/features/product/core/services/api";

interface IProductPageProps {
  params: Promise<{ productId: string }>;
}

const ProductPage = async ({ params }: IProductPageProps) => {
  const { productId } = await params;

  const productInfo = await getProduct(productId);
  const suggestedProducts = await getProducts({
    categoryId: productInfo?.category?.id,
  });

  return (
    <Product product={productInfo} suggestedProducts={suggestedProducts} />
  );
};

export async function generateMetadata({
  params,
}: IProductPageProps): Promise<Metadata> {
  const { productId } = await params;

  const product = await getProduct(productId);
  const productImage = product?.images[0] || "/placeholder.jpeg";

  return {
    title: product?.name,
    description: `On this page, you can see all of details of '${product?.name}'`,
    openGraph: {
      images: [productImage],
    },
  };
}

export default ProductPage;
