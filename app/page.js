// app/page.js

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/products`);
  const data = await res.json();
  const products = data.products || [];

  return (
    <div>
      <h1>Our Products</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-gray-700">Price: {product.variants[0]?.prices[0]?.amount / 100} USD</p>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>

    </div>
  );
}
