import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const { cart } = useCart();

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId: cart.id, // You will need to create a checkout session in Medusa backend for Stripe
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart?.items?.map(item => (
          <li key={item.id}>
            {item.title} - {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
