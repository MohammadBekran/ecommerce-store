import Filter from "@/features/category/components/filter";
import MobileFilters from "@/features/category/components/mobile-filters";
import type ICategory from "@/features/category/core/types";
import type IColor from "@/features/colors/core/types";
import type IProduct from "@/features/product/core/types";
import type ISize from "@/features/sizes/core/types";

import Billboard from "@/components/billboard";
import MainContainer from "@/components/partials/containers/main-container";
import NoResults from "@/components/ui/no-results";
import ProductItem from "@/components/ui/product-item";

interface ICategoryProps {
  products?: IProduct[];
  colors?: IColor[];
  sizes?: ISize[];
  category?: ICategory;
}

const Category = ({ products, colors, sizes, category }: ICategoryProps) => {
  return (
    <div className="">
      <MainContainer>
        <Billboard data={category?.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products?.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products?.map((product) => (
                  <ProductItem key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Category;
