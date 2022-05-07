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
import {sneakers, getSneakerById} from "../shoes.jsx"
export default function Cat1() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Shoes</h2>
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
      </main>
    );
  }