import { useState, useEffect } from 'react';
import medusa from '../../lib/medusa';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    medusa.products.list().then(({ products }) => {
      setProducts(products);
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.variants[0].prices[0].amount / 100} {product.variants[0].prices[0].currency_code.toUpperCase()}</p>
            <a href={`/products/${product.id}`}>View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
