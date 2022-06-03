import React, {useContext, useEffect, useState} from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams,
  useNavigate,
} from "react-router-dom";
import { LinkProps } from "react-router-dom";
import {sneakers, brands, colors, filterByBrands, filterByPrices} from "../shoes.jsx";
import { Context, Context2 } from "../Context";
import { AddCartItems } from "./cart";

function Layout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [checkedStateBrand, setCheckedStateBrand] = useState(new Array(brands.length).fill(false));
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [sneak, setSneak] = useContext(Context);
   useEffect(() => {
    setPriceFrom(searchParams.get("priceFrom"));
    setPriceTo(searchParams.get("priceTo"));
    let searchBrands = searchParams.getAll("brand").toString().split(",");
    let filtered = sneak.filter(sneaker => filterByBrands(searchBrands, sneaker) && filterByPrices(searchParams.get("priceFrom"), searchParams.get("priceTo"),sneaker))
    setSneak(filtered)
  }, [searchParams]);

  function handleCheckboxChangeBrand(i, brand) {
    let brandsParams = [];
    const updatedCheckedState = checkedStateBrand.map((isChecked, index) =>
      (index === i) ? !isChecked : isChecked
    ); 
    setCheckedStateBrand(updatedCheckedState);
    for(let i=0; i<=brands.length; i++) {
      if(updatedCheckedState[i]) {
        brandsParams.push(brands[i])
      }
    }
    searchParams.set("brand", brandsParams);
    setSearchParams(searchParams)
  }

  function handlePriceChangeFrom(event) {   
    searchParams.set("priceFrom", event.target.value);
    setSearchParams(searchParams)
  }

  function handlePriceChangeTo(event) {
    searchParams.set("priceTo", event.target.value)
    setSearchParams(searchParams)
  }

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
          {brands.map((brand,i) => (
            <>
              <input type="checkbox" id={`checkbox-for-brand${i}`} name={brand} value={brand} checked={checkedStateBrand[i]} onChange={()=>handleCheckboxChangeBrand(i, brand)}/>
              <label htmlFor={brand}>{brand}</label><br/>
            </>
          ))}
        </ul>       
        <ul>
        <h3>Filter by price</h3>
        <input type="text" id="price-from" name="price-from" value={priceFrom} onChange={handlePriceChangeFrom}/>
        <input type="text" id="price-to" name="price-to" value={priceTo} onChange={handlePriceChangeTo}/> 
        </ul>
        <ul>
        <h3>Filter by color</h3>
        {colors.map((color) => (
            <li key={color}>
              <Link to={`/cat1?color=${color}`}>{color}</Link>
            </li>
          ))}
        <p>Found {sneak.length} items</p> 
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