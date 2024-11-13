import { ClerkProvider as ClerkPackageProvider } from "@clerk/nextjs";

import type TPropsWithChildren from "@/core/types";

const ClerkProvider = ({ children }: TPropsWithChildren) => {
  return <ClerkPackageProvider>{children}</ClerkPackageProvider>;
};

export default ClerkProvider;
