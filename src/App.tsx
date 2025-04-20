import { useState, useEffect } from "react";
import Product from "./Product";

import { ProductProps } from "./types/productprops";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://api.jotform.com/form/${import.meta.env.VITE_FORMID_1}/payment-info?apiKey=${import.meta.env.VITE_JOTFORM_API_KEY}`,
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
          <Product
            pid={product.pid}
            name={product.name}
            description={product.description}
            price={product.price}
            images={product.images}
          />
        ))}
      </div>
    </>
  );
}

export default App;
