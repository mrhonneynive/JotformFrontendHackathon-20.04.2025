import { ProductProps } from "../types/productprops";
import Product from "../components/Product";

function ProductDetailPage() {
  const stored = localStorage.getItem("selectedProduct");
  const product: ProductProps = stored ? JSON.parse(stored) : null;

  if (!product) {
    return (
      <div className="p-6 text-red-500">go back to home page and try again</div>
    );
  }

  return (
    <div className="p-6">
      <Product {...product} />
    </div>
  );
}

export default ProductDetailPage;
