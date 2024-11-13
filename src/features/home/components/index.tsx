import IBillboard from "@/features/billboards/core/types";
import type IProduct from "@/features/product/core/types";

import Billboard from "@/components/billboard";
import MainContainer from "@/components/partials/containers/main-container";
import ProductList from "@/components/product-list";

interface IHomeProps {
  billboard?: IBillboard;
  products?: IProduct[];
}

const Home = ({ billboard, products }: IHomeProps) => {
  return (
    <MainContainer>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" data={products ?? []} />
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
