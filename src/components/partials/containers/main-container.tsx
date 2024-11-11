import { TPropsWithChildren } from "@/core/types";

const MainContainer = ({ children }: TPropsWithChildren) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default MainContainer;
