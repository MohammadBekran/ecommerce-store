import type IProduct from "@/features/product/core/types";

import NoResults from "@/components/ui/no-results";
import ProductItem from "@/components/ui/product-item";

interface IProductListProps {
  title: string;
  data: IProduct[];
}

const ProductList = ({ title, data }: IProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {data.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
