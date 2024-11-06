import getProduct from "@/core/services/api/get-product.api";
import getProducts from "@/core/services/api/get-products.api";
import Product from "@/features/product/components";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const productInfo = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: productInfo?.category?.id,
  });

  return (
    <Product product={productInfo} suggestedProducts={suggestedProducts} />
  );
};

export default ProductPage;
