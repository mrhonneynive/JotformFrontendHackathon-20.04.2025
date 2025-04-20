import { ProductProps } from "../types/productprops";
import { useNavigate } from "react-router";

interface ProductPropsWithAddToCart extends ProductProps {
  addToCart: (product: ProductProps) => void;
}

const Product = (props: ProductPropsWithAddToCart) => {
  const {
    name,
    images,
    description,
    price,
    hasSpecialPricing,
    options,
    addToCart,
    pid,
    type = "card",
  } = props;

  const specialPrices =
    options
      .find((opt) => opt.specialPricing && opt.specialPrices)
      ?.specialPrices?.split(",") || [];

  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "card") {
      localStorage.setItem("selectedProduct", JSON.stringify(props));
      navigate(`/product/${pid}`);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(props);
  };

  const isVisual = images.length > 0 && images[0];

  return (
    <div
      onClick={handleClick}
      className={`${type === "card" ? "w-72 cursor-pointer" : "w-full gap-8 lg:flex"} rounded-lg border bg-white p-4 shadow transition hover:shadow-md`}
    >
      {isVisual && (
        <img
          src={images[0]}
          alt={name}
          className={`${
            type === "card"
              ? "mb-3 h-40 w-full rounded object-cover"
              : "mb-4 w-full max-w-md rounded object-cover shadow lg:mb-0"
          }`}
        />
      )}

      <div className={`${type === "detail" ? "flex-1" : ""}`}>
        <h2
          className={`font-semibold text-gray-800 ${
            type === "card" ? "mb-2 text-lg" : "mb-3 text-3xl"
          }`}
        >
          {name}
        </h2>

        {description && (
          <p className="mb-3 text-sm text-gray-600">{description}</p>
        )}

        {hasSpecialPricing === "1" && specialPrices.length > 0 ? (
          <div className="mb-3 flex flex-col gap-1">
            {specialPrices.map((p, i) => (
              <span key={i} className="text-sm text-gray-700">
                ${parseFloat(p).toFixed(2)}
              </span>
            ))}
          </div>
        ) : (
          <p className="mb-3 text-base font-bold text-blue-600">
            ${parseFloat(price).toFixed(2)}
          </p>
        )}

        <button
          onClick={handleAddToCart}
          className="mt-2 w-full rounded bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
