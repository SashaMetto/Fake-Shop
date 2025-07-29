import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  phones,
  brands,
  colors,
  filterByBrands,
  filterByPrices,
  filterByColors,
  Phone,
} from "../phones.tsx";
import { PhoneContext, CartContext } from "../Context.tsx";

function Layout(): React.JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const [checkedStateBrand, setCheckedStateBrand] = useState(
    new Array(brands.length).fill(false)
  );
  const [checkedStateColor, setCheckedStateColor] = useState(
    new Array(brands.length).fill(false)
  );
  const [priceFrom, setPriceFrom] = useState(null);
  const [priceTo, setPriceTo] = useState(null);
  const [phone, setPhone] = useContext(PhoneContext);
  useEffect(() => {
    let copyBrand = searchParams.getAll("brand");
    let copyColor = searchParams.getAll("color");
    copyBrand.forEach((brand) => {
      const index = brands.indexOf(brand);
      if (index > -1) {
        checkedStateBrand[index] = brand;
        setCheckedStateBrand(checkedStateBrand);
      }
    });
    copyColor.forEach((color) => {
      const index = colors.indexOf(color);
      if (index > -1) {
        checkedStateColor[index] = color;
        setCheckedStateColor(checkedStateColor);
      }
    });
    setPriceFrom(searchParams.get("priceFrom")!);
    setPriceTo(searchParams.get("priceTo")!);
    let filtered = phones.filter(
      (phone) =>
        filterByBrands(searchParams.getAll("brand"), phone) &&
        filterByPrices(
          Number(searchParams.get("priceFrom")),
          Number(searchParams.get("priceTo")),
          phone
        ) &&
        filterByColors(searchParams.getAll("color"), phone)
    );
    setPhone(filtered);
  }, [searchParams]);

  function handlePriceChangeFrom(event: { target: { value: string } }) {
    searchParams.set("priceFrom", event.target.value);
    setSearchParams(searchParams);
  }

  function handlePriceChangeTo(event: { target: { value: string } }) {
    searchParams.set("priceTo", event.target.value);
    setSearchParams(searchParams);
  }

  function handleBrandChange(brand: string, ind: number): void {
    let array = searchParams.getAll("brand");
    const index = array.indexOf(brand);
    if (checkedStateBrand[ind]) {
      checkedStateBrand[ind] = false;
      setCheckedStateBrand(checkedStateBrand);
    } else if (!checkedStateBrand[ind]) {
      checkedStateBrand[ind] = brand;
      setCheckedStateBrand(checkedStateBrand);
    }
    if (index > -1) {
      array.splice(index, 1);
      console.log(array);
      searchParams.delete("brand");
      for (let i = 0; i <= array.length - 1; i++) {
        searchParams.append("brand", array[i]);
      }
      setSearchParams(searchParams);
      if (array.length < 1) {
        searchParams.delete("brand");
        setSearchParams(searchParams);
      }
    } else {
      searchParams.append("brand", brand);
      setSearchParams(searchParams);
    }
  }

  function handleColorChange(color: string, ind: number): void {
    let array = searchParams.getAll("color");
    const index = array.indexOf(color);
    if (checkedStateColor[ind]) {
      checkedStateColor[ind] = false;
      setCheckedStateColor(checkedStateColor);
    } else if (!checkedStateColor[ind]) {
      checkedStateColor[ind] = color;
      setCheckedStateColor(checkedStateColor);
    }
    if (index > -1) {
      array.splice(index, 1);
      console.log(array);
      searchParams.delete("color");
      for (let i = 0; i <= array.length - 1; i++) {
        searchParams.append("color", array[i]);
      }
      setSearchParams(searchParams);
      if (array.length < 1) {
        searchParams.delete("color");
        setSearchParams(searchParams);
      }
    } else {
      searchParams.append("color", color);
      setSearchParams(searchParams);
    }
  }

  return (
    <div
      style={{
        width: "30%",
      }}
    >
      <nav>
        <ul>
          <h3>Filter by brand</h3>
          {brands.map((brand: string, i: number) => (
            <>
              <input
                type="checkbox"
                id={`checkbox-for-${brands}${i}`}
                name={brand}
                value={brand}
                checked={checkedStateBrand[i]}
                onChange={() => handleBrandChange(brand, i)}
              />
              <label htmlFor={brand}>{brand}</label>
              <br />
            </>
          ))}
        </ul>
        <div className="price-filter">
          <h3>Filter by price, $</h3>
          <input
            type="number"
            id="price-from"
            name="price-from"
            value={priceFrom}
            onChange={handlePriceChangeFrom}
          />
          <input
            type="number"
            id="price-to"
            name="price-to"
            value={priceTo}
            onChange={handlePriceChangeTo}
          />
        </div>
        <ul>
          <h3>Filter by color</h3>
          {colors.map((color: string, i: number) => (
            <>
              <input
                type="checkbox"
                id={`checkbox-for-${colors}${i}`}
                name={color}
                value={color}
                checked={checkedStateColor[i]}
                onChange={() => handleColorChange(color, i)}
              />
              <label htmlFor={color}>{color}</label>
              <br />
            </>
          ))}
          <p>Found {phone.length} items</p>
        </ul>
      </nav>
    </div>
  );
}

export default function Phones() {
  const [phones, setPhones] = useContext(PhoneContext);
  const [cartItems, setCartItems] = useContext(CartContext);

  function addCartItems(item: Phone) {
    let copy = [...cartItems];
    if (copy.includes(item)) {
      item.count!++;
      setCartItems(copy);
    } else {
      item.count = 1;
      copy.push(item);
      setCartItems(copy);
    }
  }
  return (
    <main className="phones-shop">
      <Layout />
      <div className="phones-wrapper">
        <h2>Phones</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "12px 24px",
          }}
        >
          {phones.map((phone: Phone) => {
            let name = `${phone.brand} ${phone.model}`;
            let color = phone.color;
            let price = phone.price + "$";
            return (
              <div key={phone.id} style={{ position: "relative" }}>
                <img
                  width={200}
                  height={200}
                  src={phone.imageUrl}
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
                  <p>
                    {price}{" "}
                    <button
                      className="button-medium"
                      onClick={() => addCartItems(phone)}
                    >
                      Add to cart
                    </button>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
