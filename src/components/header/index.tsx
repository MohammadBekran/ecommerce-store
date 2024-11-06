import Link from "next/link";

import CartButton from "@/components/header/cart-button";
import Navbar from "@/components/header/navbar";
import Container from "@/components/ui/container";
import getCategories from "@/core/services/api/get-categories.api";

const Header = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
              <p className="font-bold text-cl">STORE</p>
            </Link>
            <Navbar data={categories ?? []} />
          </div>
          <div>
            <CartButton />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
