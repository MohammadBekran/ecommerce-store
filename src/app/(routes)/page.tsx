import Home from "@/features/home/components";

import getBillboards from "@/core/services/api/get-billboards.api";
import getProducts from "@/core/services/api/get-products.api";

const HomePage = async () => {
  const products = await getProducts({
    isFeatured: true,
  });
  const billboard = await getBillboards();

  return <Home billboard={billboard?.[0]} products={products} />;
};

export default HomePage;
