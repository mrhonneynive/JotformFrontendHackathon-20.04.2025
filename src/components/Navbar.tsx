import { Link } from "react-router";
import { ProductProps } from "../types/productprops";

interface NavbarProps {
  cart: ProductProps[];
}

function Navbar({ cart }: NavbarProps) {
  return (
    <nav className="navbar flex justify-between bg-white px-6 py-4 shadow">
      <Link to="/" className="text-xl font-bold text-gray-800">
        🛍️ My Store
      </Link>

      <details className="dropdown dropdown-end">
        <summary className="btn btn-sm">Cart ({cart.length})</summary>
        <ul className="dropdown-content menu rounded-box bg-base-100 z-20 w-64 p-4 shadow">
          {cart.length === 0 ? (
            <li className="text-sm text-gray-500">Cart is empty</li>
          ) : (
            cart.map((item, i) => (
              <li key={i} className="mb-2 border-b pb-2 text-sm">
                <div className="flex justify-between">
                  <span>{item.name}</span>
                </div>
              </li>
            ))
          )}
        </ul>
      </details>
    </nav>
  );
}

export default Navbar;
