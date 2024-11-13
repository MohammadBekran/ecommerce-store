import Gallery from "@/features/product/components/gallery";
import ProductInformation from "@/features/product/components/product-information";
import type IProduct from "@/features/product/core/types";

import MainContainer from "@/components/partials/containers/main-container";
import ProductList from "@/components/product-list";

interface IProductProps {
  product: IProduct | undefined;
  suggestedProducts: IProduct[] | undefined;
}

const Product = ({ product, suggestedProducts }: IProductProps) => {
  return (
    <div className="bg-white">
      <MainContainer>
        <div className="px-4 py-10 sm:-x-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product?.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInformation product={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" data={suggestedProducts ?? []} />
        </div>
      </MainContainer>
    </div>
  );
};

export default Product;
