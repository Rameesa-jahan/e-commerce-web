import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import { AuthContext } from "./components/context";
import Top from "./components/top";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
      <Top/>
        <AuthContext.Provider
          value={{
            products: products,
            setProducts: setProducts,
            cart: cart,
            setCart: setCart,
          }}
        > 
          <Navbar size={cart.length} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
