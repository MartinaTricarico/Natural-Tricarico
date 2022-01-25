import React from "react";
import Item from "./Item";
import {productListData} from "./ProductListData.js"; 


const ItemList = ({ setItemSeleccionado }) => {
  return (
    <div>
      {productListData.map((item) => {
        return <Item key={item.id} item={item} setItemSeleccionado={setItemSeleccionado}/>
      })}
    </div>
  );
};

export default ItemList;