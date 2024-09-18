// app/page.js

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/products`);
  const data = await res.json();
  const products = data.products || [];

  return (
    <div>
      <h1>Our Products</h1>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: {product.variants[0]?.prices[0]?.amount / 100} USD</p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}
