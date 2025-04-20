import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ProductProps } from "../types/productprops";

function ProductDetailPage() {
  const { pid } = useParams();
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://api.jotform.com/form/${import.meta.env.VITE_FORMID_1}/payment-info?apiKey=${import.meta.env.VITE_JOTFORM_API_KEY}`,
      );
      const data = await response.json();

      const found = data.content.products.find(
        (p: ProductProps) => p.pid === pid,
      );
      setProduct(found);
    };

    fetchProduct();
  }, [pid]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* show image, add to cart, etc. */}
    </div>
  );
}

export default ProductDetailPage;
