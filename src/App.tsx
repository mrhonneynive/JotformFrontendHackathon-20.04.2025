import { useState } from "react";

import { Route, Routes } from "react-router";

import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Navbar from "./components/Navbar";
import { ProductProps } from "./types/productprops";

const App = () => {
  const [cart, setCart] = useState<ProductProps[]>([]);

  const addToCart = (product: ProductProps) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.pid === product.pid);
      if (exists) {
        return prev.map((item) =>
          item.pid === product.pid
            ? { ...item, quantity: item.cartQuantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, cartQuantity: 1 }];
    });
  };

  return (
    <>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<ProductsPage addToCart={addToCart} />} />
        <Route path="/product/:pid" element={<ProductDetailPage />} />
        {/* <Route path="/cart" element={<CartPage cart={cart} />} /> */}
        <Route path="*" element={<div className="p-6">404 Not Found</div>} />
      </Routes>
    </>
  );
};

export default App;
