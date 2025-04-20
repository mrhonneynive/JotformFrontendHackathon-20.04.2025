// pages/ProductsPage.tsx
import { useState, useEffect } from "react";
import { ProductProps } from "../types/productprops";
import { parseProduct } from "../utils/utils";
import Product from "../components/Product";

function ProductsPage({ addToCart }) {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://api.jotform.com/form/${import.meta.env.VITE_FORMID}/payment-info?apiKey=${import.meta.env.VITE_JOTFORM_API_KEY}`,
      );
      const data = await response.json();
      setProducts(data.content.products.map(parseProduct));
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-white-800 mb-6 text-3xl font-bold">Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Product {...product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
