import { ProductProps } from "../types/productprops";

const Product = (props: ProductProps) => {
  const { name, images, description, price, hasSpecialPricing, options } =
    props;

  const specialPrices =
    options
      .find((opt) => opt.specialPricing && opt.specialPrices)
      ?.specialPrices?.split(",") || [];

  return (
    <div className="w-72 rounded-lg border bg-white p-4 shadow transition hover:shadow-md">
      <h2 className="mb-2 text-lg font-semibold text-gray-800">{name}</h2>

      <img
        src={images[0]}
        alt={name}
        className="mb-3 h-40 w-full rounded object-cover"
      />

      <p className="mb-3 text-sm text-gray-600">{description}</p>

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

      <button className="w-full rounded bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
