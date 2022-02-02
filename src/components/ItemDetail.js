import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import { makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  agregarCarrito: {
    marginBottom: "10px",
  },

  botonVolver: {
    margin: "5px",
    marginBottom: "15px",
    color: "#fff",
    backgroundColor: "#cfe1b9",
    borderRadius: "15px",
  },
  contador: {
    margin: "1px",
    color: "#fff",
    backgroundColor: "#508d62",
    borderRadius: "15px",
  }
}));


const ItemDetail = ({ item }) => {
  const { title, pictureUrl, stock, details } = item || [];
  const classes = useStyle();
  const history = useNavigate();
  const volver = () => {
    history("/", { replace: false });
  };
  
  const [cambiarBotones, setCambiarBotones] = useState(false);
  const onAdd = () => {
    setCambiarBotones (true)
  }

  return (
    <>
      <div className={classes.count}>
        <h5 className={classes.titulo}>
          <b>{title}</b>
        </h5>

        <img src={pictureUrl} alt="" width={150}></img>
        <p className={classes.parrafo}>Detalle: {details}</p>

        <div>
          <p>Stock disponible: {stock}</p>
        </div>

        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        {cambiarBotones && (
          <>
            <div className={classes.agregarCarrito}>
              <Button variant="contained" className={classes.contador}>
                Agregar al carrito
              </Button>
            </div>
            <div className={classes.botonVolver}>
              <Button onClick={volver}>Volver</Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ItemDetail;
