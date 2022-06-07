import "./App.css";
import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import search from "./images/search.webp"
import profile from "./images/profile.webp"
import cart from "./images/cart.png"
import { Context, Context2 } from "./Context.js";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Cat1 from "./routes/cat1";
import Cat2 from "./routes/cat2";
import Cat3 from "./routes/cat3";
import Gall from "./routes/gall";
import Contact from "./routes/contact";
import Cart from "./routes/cart";
import {sneakers, brands, prices, filterByBrand} from "./shoes.jsx";

export default function App() {
  const [sneak, setSneak] = useState(sneakers);
  const [cartItems, setCartItems] = useState([]);
  return (
    <Context.Provider value={[sneak, setSneak]}>
    <Context2.Provider value={[cartItems, setCartItems]}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} >
          <Route path="/cat1" element={<Cat1 />} />
          <Route path="/cat2" element={<Cat2 />} />
          <Route path="/cat3" element={<Cat3 />} />
          <Route path="/gall" element={<Gall />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Context2.Provider>
  </Context.Provider>
  );
}

function AppLayout() {
  const navigate = useNavigate();
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useContext(Context2);

  function toggleMenu() {
    setCartVisible(!cartVisible)
  }
  return (
    <div className="App">
      
      <nav className="nav">
      <h1 className="nav__header">Fake store</h1>
      <div className="nav__links">  
        <Link className="nav__link" to="/">Home</Link>
        <Link className="nav__link" to="/cat1">Shoes</Link>
        <Link className="nav__link" to="/cat2">Cat2</Link>
        <Link className="nav__link" to="/cat3">Cat3</Link>
        <Link className="nav__link" to="/gall">Gallery</Link>
        <Link className="nav__link" to="/contact">Contact</Link>
        </div>
        <div className="nav__search__profile__currency__cart">
        <input></input>
        <img className="nav__searchbutton nav___medium" alt="search" src={search}></img>
        <img className="nav__profilebutton nav___medium" alt="profile" src={profile}></img>
        <img className="nav__cartbutton nav___medium" alt="cart" src={cart} onClick={toggleMenu}></img>
        <span className="cart-count">{cartItems.length || ""}</span>
        </div>
        <Cart onClick={toggleMenu} menuVisibility={cartVisible} />
      </nav>
      <Outlet/>
    </div>
  );
}