import React, {useState, useEffect, useContext} from "react";
import { Context2 } from "../Context";

export default function Cart(props) {
    const [cartItems, setCartItems] = useContext(Context2);
    let visibility = "hide";
 
    if (props.menuVisibility) {
      visibility = "show";
    }
    
    function cartItemCount(operator,i) {
        if(operator==="plus") {
            let copy = [...cartItems];
            copy[i]["count"] += 1;
            setCartItems(copy)
        }
    }
    return (
      <div onClick={props.onClick} className={`cart-closing-field ${visibility}`}>
      <main onClick={props.onClick} className={`cart ${visibility}`}>       
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
      </div>
    );
  }
