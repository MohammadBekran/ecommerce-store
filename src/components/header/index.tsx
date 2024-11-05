import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import Navbar from "@/components/header/navbar";
import { Button } from "@/components/ui/button";
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
            <Button className="flex items-center rounded-full bg-black px-4 py-2">
              <ShoppingBag size={20} color="white" />
              <span className="text-sm font-medium text-white">0</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
