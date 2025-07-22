import React, { useContext } from "react";

import { CartContext } from "../Context";

export default function Cart(props: any) {
  const [cartItems, setCartItems] = useContext(CartContext);
  let visibility = "hide";

  if (props.menuVisibility) {
    visibility = "show";
  }

  function cartItemCount(operator: string, i: number): void {
    let copy = [...cartItems];
    if (operator === "plus") {
      copy[i]["count"]++;
      setCartItems(copy);
    }
    if (operator === "minus") {
      copy[i]["count"]--;
      if (copy[i]["count"] <= 0) {
        copy.splice(i, 1);
      }
      setCartItems(copy);
    }
  }
  function stop(e: {
    stopPropagation: () => void;
    nativeEvent: { stopImmediatePropagation: () => void };
  }) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }
  return (
    <div onClick={props.onClick} className={`cart-closing-field ${visibility}`}>
      <main
        onClick={stop}
        className={`cart ${visibility}`}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Cart</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",

            overflow: "scroll",
          }}
        >
          {cartItems.map((e: any, i: number) => {
            let name = `${e.brand} ${e.model}`;
            let color = e.colorway;
            let price = e.price * e.count + "$";
            return (
              <div key={e.id} style={{ position: "relative" }}>
                <img
                  src={e.imageUrl}
                  alt={name}
                  style={{
                    borderRadius: "8px",
                    width: "100px",
                    height: "auto",
                    aspectRatio: "1 / 1",
                  }}
                />
                <div>
                  <p>{name}</p>
                  <p>{color}</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    {price}{" "}
                    <button
                      className="button-small"
                      onClick={() => cartItemCount("minus", i)}
                    >
                      -
                    </button>
                    {e.count}
                    <button
                      className="button-small"
                      onClick={() => cartItemCount("plus", i)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
