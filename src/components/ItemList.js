import Item from "./Item";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  categoryProducts: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    border: "1px solid #dbdbdb",
    borderRadius: "45px",
    margin: "20px",
  },
}));

const ItemList = ({ productos }) => {
  const classes = useStyle();
  return (
    <div className={classes.categoryProducts}>
      {productos.map((items) => {
        return (
          <div key={items.id}>
            <Item item={items} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
