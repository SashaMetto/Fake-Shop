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
import {sneakers, brands, colors, filterByBrands, filterByPrices, filterByColors} from "../shoes.jsx";
import { Context, Context2 } from "../Context";
import { AddCartItems } from "./cart";

function Layout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [checkedStateBrand, setCheckedStateBrand] = useState(new Array(brands.length).fill(false));
  const [checkedStateColor, setCheckedStateColor] = useState(new Array(brands.length).fill(false));
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [sneak, setSneak] = useContext(Context);
   useEffect(() => {
    let copyBrand = searchParams.getAll("brand");
    let copyColor = searchParams.getAll("color");
    copyBrand.forEach((brand)=>{
      const index = brands.indexOf(brand);
      if(index>-1) {
      checkedStateBrand[index]=brand;
      setCheckedStateBrand(checkedStateBrand)
      }
    })
    copyColor.forEach((color)=>{
      const index = colors.indexOf(color);
      if(index>-1) {
      checkedStateColor[index]=color;
      setCheckedStateColor(checkedStateColor)
      }
    })
    setPriceFrom(searchParams.get("priceFrom"));
    setPriceTo(searchParams.get("priceTo"));
    let filtered = sneakers.filter(sneaker => filterByBrands(searchParams.getAll("brand"), sneaker) &&
    filterByPrices(searchParams.get("priceFrom"), searchParams.get("priceTo"), sneaker) &&
    filterByColors(searchParams.getAll("color"), sneaker))
    setSneak(filtered)
  }, [searchParams]);


  function handlePriceChangeFrom(event) {   
    searchParams.set("priceFrom", event.target.value);
    setSearchParams(searchParams)
  }

  function handlePriceChangeTo(event) {
    searchParams.set("priceTo", event.target.value)
    setSearchParams(searchParams)
  }

  function handleBrandChange(brand, ind) {
    let array = searchParams.getAll('brand');
    const index = array.indexOf(brand);   
    if(checkedStateBrand[ind]) {
      checkedStateBrand[ind]=false;
      setCheckedStateBrand(checkedStateBrand);
    }
    else if(!checkedStateBrand[ind]) {
      checkedStateBrand[ind]=brand;
      setCheckedStateBrand(checkedStateBrand);
    }
    if (index > -1) {
      array.splice(index, 1)
      console.log(array)
      searchParams.delete("brand")
      for(let i=0; i<= array.length-1; i++) {
        searchParams.append("brand", array[i])
      }     
      setSearchParams(searchParams)
      if(array.length < 1) {
        searchParams.delete("brand")
        setSearchParams(searchParams)
      }
    }
     
    else { 
      searchParams.append("brand", brand);
      setSearchParams(searchParams);
     }
  }

  function handleColorChange(color, ind) {
    let array = searchParams.getAll('color');
    const index = array.indexOf(color);   
    if(checkedStateColor[ind]) {
      checkedStateColor[ind]=false;
      setCheckedStateColor(checkedStateColor);
    }
    else if(!checkedStateColor[ind]) {
      checkedStateColor[ind]=color;
      setCheckedStateColor(checkedStateColor);
    }
    if (index > -1) {
      array.splice(index, 1)
      console.log(array)
      searchParams.delete("color")
      for(let i=0; i<= array.length-1; i++) {
        searchParams.append("color", array[i])
      }     
      setSearchParams(searchParams)
      if(array.length < 1) {
        searchParams.delete("color")
        setSearchParams(searchParams)
      }
    }
     
    else { 
      searchParams.append("color", color);
      setSearchParams(searchParams);
     }
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
              <input type="checkbox" id={`checkbox-for-${brands}${i}`} name={brand} value={brand} checked={checkedStateBrand[i]} onChange={()=>handleBrandChange(brand, i)}/>
              <label htmlFor={brand}>{brand}</label><br/>
            </>
          ))}
        </ul>       
        <ul>
        <h3>Filter by price, $</h3>
        <input type="text" id="price-from" name="price-from" value={priceFrom} onChange={handlePriceChangeFrom}/>
        <input type="text" id="price-to" name="price-to" value={priceTo} onChange={handlePriceChangeTo}/> 
        </ul>
        <ul>
        <h3>Filter by color</h3>
        {colors.map((color, i) => (
            <>
            <input type="checkbox" id={`checkbox-for-${colors}${i}`} name={color} value={color} checked={checkedStateColor[i]} onChange={()=>handleColorChange(color, i)}/>
            <label htmlFor={color}>{color}</label><br/>
          </>
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