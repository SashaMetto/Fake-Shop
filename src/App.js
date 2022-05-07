import "./App.css";
import { Link, Outlet } from "react-router-dom";
import search from "./images/search.webp"
import profile from "./images/profile.webp"
import cart from "./images/cart.png"

export default function App() {
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
        <img className="nav__cartbutton nav___medium" alt="profile" src={cart}></img>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
