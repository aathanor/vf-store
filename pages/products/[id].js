import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import medusa from '../../lib/medusa';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      medusa.products.retrieve(id).then(({ product }) => {
        setProduct(product);
      });
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.variants[0].prices[0].amount / 100} {product.variants[0].prices[0].currency_code.toUpperCase()}</p>
      <button onClick={() => addToCart(product.variants[0].id, 1)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
