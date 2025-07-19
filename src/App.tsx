import "./App.css";
import React, { useContext, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import search from "./images/search.webp";
import profile from "./images/profile.webp";
import cart from "./images/cart.png";
import { CartContext, PhoneContext, SneakersContext } from "./Context.tsx";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Shoes from "./routes/sneakers";
import Phones from "./routes/phones";
import Cart from "./routes/cart";
import Home from "./routes/home";
import { sneakers } from "./shoes.tsx";
import { phones } from "./phones.tsx";

export default function App() {
  const [sneak, setSneak] = useState(sneakers);
  const [phone, setPhone] = useState(phones);
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      <PhoneContext.Provider value={[phone, setPhone]}>
        <SneakersContext.Provider value={[sneak, setSneak]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/shoes" element={<Shoes />} />
                <Route path="/phones" element={<Phones />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SneakersContext.Provider>
      </PhoneContext.Provider>
    </CartContext.Provider>
  );
}

function AppLayout() {
  const navigate = useNavigate();
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useContext(CartContext);

  useEffect(() => {
    return navigate("/home");
  }, []);

  function toggleMenu() {
    setCartVisible(!cartVisible);
  }
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <nav className="nav">
        <h1 className="nav__header">Fake store</h1>
        <div className="nav__links">
          <Link className="nav__link" to="/home">
            Home
          </Link>
          <Link className="nav__link" to="/shoes">
            Shoes
          </Link>
          <Link className="nav__link" to="/phones">
            Phones
          </Link>
        </div>
        <div className="nav__search__profile__currency__cart">
          <input className="nav__searchfield"></input>
          <img
            className="nav__searchbutton nav___medium"
            alt="search"
            src={search}
          ></img>
          <img
            className="nav__profilebutton nav___medium"
            alt="profile"
            src={profile}
          ></img>
          <img
            className="nav__cartbutton nav___medium"
            alt="cart"
            src={cart}
            onClick={toggleMenu}
          ></img>
          <span className={cartItems.length ? "cart-count" : "cart-count-hide"}>
            {cartItems.length || ""}
          </span>
        </div>
        <Cart onClick={toggleMenu} menuVisibility={cartVisible} />
      </nav>
      <Outlet />
    </div>
  );
}
