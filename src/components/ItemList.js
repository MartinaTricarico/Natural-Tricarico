import React from "react";
import { makeStyles } from "@material-ui/core";
import Item from "./Item";
import {productListData} from "./ProductListData.js"; 

const useStyle = makeStyles(() => ({
  categoryProducts:{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "flex-end",
  }
}));


const ItemList = ({ setItemSeleccionado }) => {
  const classes = useStyle();
  return (
    <div classname={classes.categoryProducts}>
      {productListData.map((item) => {
        return (
          <div key={item.id}>
            <Item  item={item} setItemSeleccionado={setItemSeleccionado} />
          </div>
        ) 
      })}
    </div>
  );
};

export default ItemList;