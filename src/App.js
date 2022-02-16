import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import UserLoggedIn from "./components/UserLoggedIn";
import { SignOut } from "./components/SignOut";

const App = () => {
  const [user, setUser] = useState(() => auth.currentUser);
  const [init, setInit] = useState(true);

  useEffect(() => {
    const userListener = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }

      if (init) {
        setInit(false);
      }
    });

    return userListener;
  }, [init]);

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar mensaje="Natural Tienda" />
          <Routes>
            <Route path="/cart" element={<Cart />}></Route>
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
