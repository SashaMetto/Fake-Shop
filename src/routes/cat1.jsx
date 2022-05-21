import React, {useContext, useEffect} from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { LinkProps } from "react-router-dom";
import {sneakers, brands, colors, filterByBrand, filterByPrice} from "../shoes.jsx";
import { Context, Context2 } from "../Context";
import { AddCartItems } from "./cart";

function Layout() {
  let [searchParams] = useSearchParams();
  const [sneak, setSneak] = useContext(Context);
  useEffect(() => {
    if (searchParams.get("brand")) {
      setSneak((filterByBrand(searchParams.get("brand"))))
    }
    else if(searchParams.get("priceTo")) {
      setSneak((filterByPrice(searchParams.get("priceFrom"), searchParams.get("priceTo"))))
    }
    else {
      setSneak(sneakers)
    }
    
  }, [searchParams]);


  return (
    <div
    style={{
      width: "30%",
      border: "2px solid red"
    }}
    >
      <nav>        
        <ul>
        <h3>Filter by brand</h3>
          <li>
            <Link to="/cat1">All</Link>
          </li>
          {brands.map((brand) => (
            <li key={brand}>
              <Link to={`/cat1?brand=${brand}`}>{brand}</Link>
            </li>
          ))}
        </ul>       
        <ul>
        <h3>Filter by price</h3>
          <li>
            <Link to="/cat1">All</Link>
          </li>
          <li>
            <Link to={`/cat1?priceFrom=${0}&priceTo=${100}`}>Lower than 100$</Link>
          </li>
          <li>
            <Link to={`/cat1?priceFrom=${100}&priceTo=${200}`}>From 100$ to 200$</Link>
          </li>
          <li>        
            <Link to={`/cat1?priceFrom=${200}&priceTo=${Infinity}`}>More than 200$</Link>
          </li>
        </ul>
        <ul>
        <h3>Filter by color</h3>
        {colors.map((color) => (
            <li key={color}>
              <Link to={`/cat1?color=${color}`}>{color}</Link>
            </li>
          ))} 
        </ul>
      </nav>
    </div>
  );
}

export default function Cat1() {
  const [sneak, setSneak] = useContext(Context);
  const [cartItems, setCartItems] = useContext(Context2);

  function addCartItems(item) { 
    let copy = [...cartItems];
    item.count = 1;
    copy.push(item);
    setCartItems(copy)
}
    return (
      <main className="shoes-shop">
        <Layout/>
        <div className="shoes-wrapper">
        <h2>Shoes</h2>
        <p>A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.</p>
        <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "12px 24px",
        }}
      >
        {sneak.map((snkr) => {
          let name = `${snkr.brand} ${snkr.model}`;
          let color = snkr.colorway;
          let price = snkr.price + "$";
          return (
            <div key={snkr.id} style={{ position: "relative" }}>
              <img
                width={200}
                height={200}
                src={snkr.imageUrl}
                alt={name}
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1 / 1",
                }}
              />
              <div>
                <p>{name}</p>
                <p>{color}</p>
                <p>{price} <button onClick={()=>addCartItems(snkr)}>Add to cart</button></p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      </main>
    );
  }