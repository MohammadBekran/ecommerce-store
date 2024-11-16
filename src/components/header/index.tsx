import Link from "next/link";

import { getCategories } from "@/features/category/core/services/api";

import CartButton from "@/components/header/cart-button";
import Navbar from "@/components/header/navbar";
import MainContainer from "@/components/partials/containers/main-container";
import MobileNavbar from "@/components/header/mobile-navbar";

const Header = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <MainContainer>
        <div className="relative h-16 lg:flex lg:items-center lg:justify-between px-4 sm:px-6 lg:px-8">
          <div className="h-full flex justify-between items-center lg:justify-start">
            <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
              <p className="font-bold text-cl">STORE</p>
            </Link>
            <div className="hidden lg:block">
              <Navbar data={categories ?? []} />
            </div>
            <div className="lg:hidden">
              <MobileNavbar data={categories ?? []} />
            </div>
          </div>
          <div className="hidden lg:block">
            <CartButton />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Header;
