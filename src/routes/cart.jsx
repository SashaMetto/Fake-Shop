import React, {useState, useEffect, useContext} from "react";
import { Context2 } from "../Context";

export default function Cart() {
    const [cartItems, setCartItems] = useContext(Context2);
    function cartItemCount(operator,i) {
        if(operator==="plus") {
            let copy = [...cartItems];
            copy[i]["count"] += 1;
            setCartItems(copy)
        }
    }
    return (
      <main style={{
           padding: "1rem 0",
           textAlign: "center",
         }}>
        <h1>Cart</h1>
        {cartItems.map((e, i) => {
          let name = `${e.brand} ${e.model}`;
          let color = e.colorway;
          let price = e.price + "$";
          return (
            <div key={e.id} style={{ position: "relative" }}>
              <img
                src={e.imageUrl}
                alt={name}
                style={{
                  borderRadius: "8px",
                  border: "2px solid black",
                  width: "100px",
                  height: "auto",
                  aspectRatio: "1 / 1",
                }}
              />
              <div>
                <p>{name}</p>
                <p>{color}</p>
                <p>{price} <button>-</button>{e.count}<button onClick={()=>cartItemCount("plus",i)}>+</button></p>
              </div>
            </div>
          );
        })}
      </main>
    );
  }
