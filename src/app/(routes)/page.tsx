import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import getBillboard from "@/core/services/api/get-billboard.api";
import getProducts from "@/core/services/api/get-products.api";

const HomePage = async () => {
  const products = await getProducts({
    isFeatured: true,
  });
  const billboard = await getBillboard("0ea20b33-fd03-451b-ab74-c919acc3c3db");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" data={products ?? []} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
