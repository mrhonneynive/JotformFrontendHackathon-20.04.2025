import { useState, useEffect } from "react";

interface ProductProps {
  pid: string;
  name: string;
  description: string;
  price: number;
  images: string;
}

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://api.jotform.com/form/251073431687963/payment-info?apiKey=e3b866e087d1eaf6e1e450c94fc55de1",
      );
      const data = await response.json();

      setProducts(data.content.products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold">Products</h1>
      <div>
        {products.map((product: ProductProps) => (
          <li key={product.pid}>
            <h2>{product.name}</h2>
            <img
              src={JSON.parse(product.images)}
              alt={product.name}
              className="h-32 w-32"
            />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button className="rounded bg-blue-500 px-4 py-2 text-white">
              Add to Cart
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
