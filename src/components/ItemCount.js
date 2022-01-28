import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles(() => ({
  count:{
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
  numero:{
    margin: "15px",
  },
  agregar: {
    marginBottom: "10px"
  },
  botonVolver: {
    margin: "5px",
    marginBottom: "15px",
    color: "#fff",
    backgroundColor: "#cfe1b9",
    borderRadius: "15px"
  }
}));

const ItemCount = ({ stock, initial, item }) => {
  const classes = useStyle();
  const { title, details, pictureUrl } = item || [];
  const [itemsQty, setItemsQty] = useState(1);

  const history = useNavigate();
  const volver = () => {
    history("/", { replace: false });
  };

  return (
    <div className={classes.count} variant="outlined">
      <h5 className={classes.titulo}>
        <b>{title}</b>
      </h5>

      <img src={pictureUrl} alt='' width={150}></img>
      <p className={classes.parrafo}>Detalle: {details}</p>

      <div className={classes.container}>

        <Button className={classes.contador}
          onClick={() => setItemsQty(itemsQty - 1)}
          disabled={itemsQty === initial}
          variant="contained">
          <Remove style={{ fontSize: 20 }} />
        </Button>

        <h2 className={classes.numero}>{itemsQty}</h2>

        <Button className={classes.contador}
          onClick={() => setItemsQty(itemsQty + 1)}
          disabled={itemsQty === stock}
          variant="contained"
        >
          <Add style={{ fontSize: 20}} />
        </Button>
      </div>

      <div className={classes.agregar}>
        <Button variant="contained" className={classes.contador}>Agregar al carrito</Button>
      </div>

      <div>
        <p>Stock disponible: {stock}</p>
      </div>

      <div className={classes.botonVolver}>
        <Button onClick={volver}>Volver</Button>
      </div>
    </div>
  );
};

export default ItemCount;
