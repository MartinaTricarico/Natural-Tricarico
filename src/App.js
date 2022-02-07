import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";


const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar mensaje="Natural Tienda" />
          <Routes>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </div>
  );
};

export default App;
