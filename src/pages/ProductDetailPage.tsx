import { ProductProps } from "../types/productprops";
import { useNavigate } from "react-router";

function ProductDetailPage() {
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

  const isVisualProduct = product.images.length > 0 && product.images[0];

  return (
    <div className="mx-auto max-w-5xl p-6">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 rounded bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
      >
        ← Back to Products
      </button>

      {/* MAIN PRODUCT CARD */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* LEFT: Image */}
        {isVisualProduct && (
          <div className="w-full max-w-md flex-shrink-0">
            <img
              src={product.images[0]}
              alt={product.name}
              className="rounded-lg object-cover shadow"
            />
          </div>
        )}

        {/* RIGHT: Product Info */}
        <div className="flex-1">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            {product.name}
          </h1>

          {product.description && (
            <p className="mb-4 text-gray-600">{product.description}</p>
          )}

          {/* Price */}
          <p className="mb-4 text-xl font-semibold text-blue-600">
            ${parseFloat(product.price).toFixed(2)}
          </p>

          {/* Product Meta */}
          <div className="mb-6 space-y-2 text-sm text-gray-700">
            {product.hasQuantity === "1" && <p>✔ Custom quantity available</p>}
            {product.hasSpecialPricing === "1" && (
              <p>✔ Includes special pricing</p>
            )}
            {product.period && <p>Billing Period: {product.period}</p>}
            {product.recurringtimes && (
              <p>Recurring: {product.recurringtimes}</p>
            )}
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

          {/* Options */}
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
      </div>
    </div>
  );
}

export default ProductDetailPage;
