import { z } from "zod";

import { checkoutFormSchema } from "@/features/cart/core/validations";

type TCheckoutFormData = z.infer<typeof checkoutFormSchema>;

export default TCheckoutFormData;
