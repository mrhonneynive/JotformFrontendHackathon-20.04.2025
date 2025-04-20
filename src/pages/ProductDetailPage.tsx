import Product from "../components/Product";
import { ProductProps } from "../types/productprops";
import { useNavigate } from "react-router";

function ProductDetailPage({ addToCart }) {
  const navigate = useNavigate();
  const stored = localStorage.getItem("selectedProduct");
  const product: ProductProps = stored ? JSON.parse(stored) : null;

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500">
        <p>No product selected.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 rounded bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
      >
        ← Back to Products
      </button>

      <Product {...product} addToCart={addToCart} type="detail" />

      {/* Meta section */}
      <div className="mt-6 space-y-2 text-sm text-gray-700">
        {product.hasQuantity === "1" && <p>✔ Custom quantity available</p>}
        {product.hasSpecialPricing === "1" && (
          <p>✔ Includes special pricing</p>
        )}
        {product.period && <p>Billing Period: {product.period}</p>}
        {product.recurringtimes && <p>Recurring: {product.recurringtimes}</p>}
        {product.trial && <p>Trial: {product.trial}</p>}
        {product.setupfee && product.setupfee !== "0" && (
          <p>Setup Fee: ${parseFloat(product.setupfee).toFixed(2)}</p>
        )}
        {product.isStockControlEnabled === "Yes" && (
          <p>Stock Control: Enabled</p>
        )}
        {product.isLowStockAlertEnabled === "Yes" && (
          <p>Low Stock Alert: Enabled</p>
        )}
        {product.stockQuantityAmount && (
          <p>In Stock: {product.stockQuantityAmount}</p>
        )}
      </div>

      {/* Options section */}
      {product.options.length > 0 && (
        <div className="mt-6">
          <h2 className="text-md mb-2 font-semibold text-gray-800">
            Available Options
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            {product.options.map((option, i) => (
              <li key={i}>
                <span className="font-medium">{option.name}:</span>{" "}
                {option.properties.split("\\n").join(", ")}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductDetailPage;
