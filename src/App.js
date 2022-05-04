import "./App.css";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      
      <nav className="nav">
      <h1 className="nav nav_header">Fake store</h1>
        <Link to="/">Home</Link>
        <Link to="/cat1">Cat1</Link>
        <Link to="/cat2">Cat2</Link>
        <Link to="/cat3">Cat3</Link>
        <Link to="/gall">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}
