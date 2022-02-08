import React, { useContext, useEffect, useState } from "react";

import { Button } from "@material-ui/core";
import { CartContext } from "../context/CartContext.js";
import { ShoppingCart } from "@material-ui/icons";

const CartWidget = () => {
  const { items } = useContext(CartContext);
  const [cantidadItems, setCantidadItems] = useState();

  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += item.qty;
    });
    setCantidadItems(total);
  }, [items]);

  return (
    <div>
      {cantidadItems >= 1 ? (
        <Button className="cart" style={{ color: "black" }}>
          <ShoppingCart style={{ color: "black" }} />
          <p>{cantidadItems}</p>
        </Button>
      ) : null}
    </div>
  );
};

export default CartWidget;
