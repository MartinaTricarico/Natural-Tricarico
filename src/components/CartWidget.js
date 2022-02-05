import React, { useContext, useEffect } from "react";
import { Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import {CartContext} from "../context/CartContext.js";

const CartWidget = () => {
  const { items } = useContext(CartContext);

  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <>
      <div>
        <Button className="cart" style={{ color: "black" }}>
          <ShoppingCart style={{ color: "black" }} />
          <p>{items.length}</p>
        </Button>
      </div>
    </>
  );
};

export default CartWidget;
