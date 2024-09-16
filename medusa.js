import Medusa from '@medusajs/medusa-js';

const medusa = new Medusa({
  baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL, // Your Medusa backend URL
  maxRetries: 3
});

export default medusa;
