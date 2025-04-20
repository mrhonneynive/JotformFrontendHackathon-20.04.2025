import { ProductProps } from "./types/productprops";

const Product = (props: ProductProps) => {
  return (
    <div
      className="product flex h-80 w-80 flex-col items-center justify-center"
      key={props.pid}
    >
      <h2>{props.name}</h2>
      <img
        src={JSON.parse(props.images)}
        alt={props.name}
        className="h-32 w-32"
      />
      <p>{props.description}</p>
      <p>${props.price}</p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
