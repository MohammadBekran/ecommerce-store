import getBillboards from "@/features/billboards/core/services/api";
import Home from "@/features/home/components";
import { getProducts } from "@/features/product/core/services/api";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({
    isFeatured: true,
  });
  const billboard = await getBillboards();

  return <Home billboard={billboard?.[0]} products={products} />;
};

export default HomePage;
