import { Link } from "react-router";
import { ProductProps } from "../types/productprops";

interface NavbarProps {
  cart: ProductProps[];
}

function Navbar({ cart }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow">
      <Link to="/" className="text-lg font-bold text-gray-800">
        🛍️ My Store
      </Link>
      <Link
        to="/cart"
        className="relative rounded px-4 py-2 text-sm font-medium text-blue-600 hover:underline"
      >
        Cart ({cart.length})
      </Link>
    </nav>
  );
}

export default Navbar;
