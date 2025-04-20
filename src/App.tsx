import { useState } from "react";

import { Route, Routes } from "react-router";

import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Navbar from "./components/Navbar";
import { ProductProps } from "./types/productprops";

const App = () => {
  const [cart, setCart] = useState<ProductProps[]>([]);

  const addToCart = (product: ProductProps) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.pid === product.pid);

      if (itemExists) {
        return prevCart.map((item) =>
          item.pid === product.pid
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, cartQuantity: 1 }];
    });
  };

  const removeFromCart = (pid: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.pid === pid
            ? { ...item, cartQuantity: item.cartQuantity - 1 }
            : item,
        )
        .filter((item) => item.cartQuantity > 0),
    );
  };

  return (
    <>
      <Navbar cart={cart} removeFromCart={removeFromCart} />

      <Routes>
        <Route path="/" element={<ProductsPage addToCart={addToCart} />} />
        <Route
          path="/product/:pid"
          element={<ProductDetailPage addToCart={addToCart} />}
        />
        {/* <Route path="/cart" element={<CartPage cart={cart} />} /> */}
        <Route path="*" element={<div className="p-6">404 Not Found</div>} />
      </Routes>
    </>
  );
};

export default App;
