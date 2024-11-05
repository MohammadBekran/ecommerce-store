import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import getBillboard from "@/core/services/api/get-billboard.api";

const HomePage = async () => {
  const billboard = await getBillboard("0ea20b33-fd03-451b-ab74-c919acc3c3db");

  console.log(billboard);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
