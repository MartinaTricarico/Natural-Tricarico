import React, { useState } from "react";
import { productListData } from "./ProductListData.js";
import ItemList from "./ItemList";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  catalog: {
    background: "#e9f5db",
    height: "45px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  }
    
}));

export const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productListData);
  }, 2000);
});

const ItemListContainer = ({ props }) => {
  const classes = useStyle();
  const [productos, setProductListData] = useState([]);

  getFetch
    .then((results) => {
      setProductListData(results);
    })
    .catch((err) => {
      console.log("Hay un error", err);
    });

  return (
    <>
      <div className={classes.catalog}>
        <h3>Catálogo</h3>
      </div>

      <ItemList />
    </>
  );
};

export default ItemListContainer;
