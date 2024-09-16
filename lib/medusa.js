import { Medusa } from "@medusajs/medusa-js";

const medusa = new Medusa({ baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL });

export default medusa;
