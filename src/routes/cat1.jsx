import * as React from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { LinkProps } from "react-router-dom";
import {sneakers, brands, prices, filterByBrand} from "../shoes.jsx";

function Layout() {
  return (
    <div
    style={{
      width: "30%",
      border: "2px solid red"
    }}
    >
      <nav>
        <h3>Filter by brand</h3>
        <ul>
          <li>
            <Link to="/cat1">All</Link>
          </li>
          {brands.map((brand) => (
            <li key={brand}>
              <Link to={`/cat1?brand=${brand}`}>{brand}</Link>
            </li>
          ))}
        </ul>
        <h3>Filter by price</h3>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/">Lower than 100$</Link>
          </li>
          <li>
            <Link to="/">Lower than 200$</Link>
          </li>
          <li>        
            <Link to="/">More than 200$</Link>
          </li>
          <p>From:<input></input>to:<input></input></p>  
        </ul>
      </nav>
    </div>
  );
}

export default function Cat1() {
  let [searchParams] = useSearchParams();
  let sneakers = (filterByBrand(searchParams.get("brand")));
    return (
      <main className="shoes-shop">
        <Layout/>
        <div className="shoes-wrapper">
        <h2>Shoes</h2>
        {searchParams.get("brand")}
        <p>A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.</p>
        <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "12px 24px",
        }}
      >
        {sneakers.map((snkr) => {
          let name = `${snkr.brand} ${snkr.model}`;
          let color = snkr.colorway;
          let price = snkr.price;
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
                <p>{price} <button>Add to cart</button></p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      </main>
    );
  }