// pages/ProductsPage.tsx
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { ProductProps } from "../types/productprops";
import { parseProduct } from "../utils/utils";

function ProductsPage() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://api.jotform.com/form/${import.meta.env.VITE_FORMID_1}/payment-info?apiKey=${import.meta.env.VITE_JOTFORM_API_KEY}`,
      );
      const data = await response.json();
      setProducts(data.content.products.map(parseProduct));
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.pid}
            to={`/product/${product.pid}`}
            className="block rounded-lg border p-4 shadow hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">
              ${parseFloat(product.price).toFixed(2)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
