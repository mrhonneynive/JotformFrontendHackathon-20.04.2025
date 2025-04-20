import { useState } from "react";

import { Route, Routes } from "react-router";

import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Navbar from "./components/Navbar";
import { ProductProps } from "./types/productprops";

const App = () => {
  const [cart, setCart] = useState<ProductProps[]>([]);

  const addToCart = (product: ProductProps) => {
    setCart((prev) => [...prev, product]);
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
