import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

const useStyle = makeStyles(() => ({
  count: {
    width: "343px",
    margin: "29px",
    display: "flex",
    padding: "28px",
    flexDirection: "column",
    alignItems: "center",
  },
  titulo: {
    margin: "15px",
  },

  parrafo: {
    margin: "10px",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contador: {
    margin: "1px",
    color: "#fff",
    backgroundColor: "#508d62",
    borderRadius: "15px",
  },
  numero: {
    margin: "15px",
  },
}));

const ItemCount = ({ stock, itemsQty, setItemsQty, onAdd }) => {
  const classes = useStyle();

  const AddProduct = () => {
    setItemsQty(itemsQty + 1);
    onAdd();
  };
  const RestProduct = () => {
    setItemsQty(itemsQty - 1);
    onAdd();
  };

  return (
    <div className={classes.container}>
      <Button
        className={classes.contador}
        onClick={RestProduct}
        disabled={itemsQty === 0}
        variant="contained"
      >
        <Remove style={{ fontSize: 20 }} />
      </Button>

      <h2 className={classes.numero}>{itemsQty}</h2>

      <Button
        className={classes.contador}
        onClick={AddProduct}
        disabled={itemsQty === stock}
        variant="contained"
      >
        <Add style={{ fontSize: 20 }} />
      </Button>
    </div>
  );
};

export default ItemCount;
