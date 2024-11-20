import ICategory from "@/features/category/core/types";

const renderCategoryRoutes = (data: ICategory[], pathname: string) =>
  data?.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

export default renderCategoryRoutes;
