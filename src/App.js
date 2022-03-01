import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Account from "./components/Account";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar mensaje="Natural Tienda" />
          <Routes>
            <Route path="/inicio" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route exact path="/products" element={<ItemListContainer />} />
            <Route exact path="/contacto" element={<Contact />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
