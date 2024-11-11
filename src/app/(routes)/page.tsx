import Billboard from "@/components/billboard";
import MainContainer from "@/components/partials/containers/main-container";
import ProductList from "@/components/product-list";
import getBillboard from "@/core/services/api/get-billboard.api";
import getProducts from "@/core/services/api/get-products.api";

const HomePage = async () => {
  const products = await getProducts({
    isFeatured: true,
  });
  const billboard = await getBillboard("f0a55cd5-d1c8-444c-bfb0-c3714460dc23");

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

export default HomePage;
