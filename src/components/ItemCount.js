import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

const useStyle = makeStyles(() => ({
  count: {
    width: "343px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid rgb(57, 112, 50)",
    borderRadius: "25px",
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

const ItemCount = ({ stock, initial, onAdd }) => {
  const classes = useStyle();
  const [itemsQty, setItemsQty] = useState(1);

  return (
    <div className={classes.container}>
      <Button
        className={classes.contador}
        onClick={() => setItemsQty(itemsQty - 1)}
        disabled={itemsQty === initial}
        variant="contained"
      >
        <Remove style={{ fontSize: 20 }} />
      </Button>

      <h2 className={classes.numero}>{itemsQty}</h2>

      <Button
        className={classes.contador}
        onClick={() => setItemsQty(itemsQty + 1)}
        disabled={itemsQty === stock}
        variant="contained"
      >
        <Add style={{ fontSize: 20 }} />
      </Button>
    </div>
  );
};

export default ItemCount;
