import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { items } = useContext(CartContext);
  

  return (
    <div>
      {items.map((item) => {
        return (
          <>
            <div>
              <p>{item.title}</p>
            </div>
            
            <div>
              <img src={item.pictureUrl} alt="" width={150}></img>
            </div>
            
          </>
        );
      })}
    </div>
  );
};

export default Cart;
