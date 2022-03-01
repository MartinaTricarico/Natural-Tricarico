import { Button, makeStyles } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

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
  },
  count: {
    display: "flex",
    margin: "20px",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
  },
}));

const ItemDetail = ({ item }) => {
  const { addItem, removeItem } = useContext(CartContext);
  const { name, imageUrl, stock, detail } = item || [];
  const classes = useStyle();
  const history = useNavigate();
  const volver = () => {
    history("/", { replace: false });
  };
  const [itemsQty, setItemsQty] = useState(1);
  const [agregarCarrito, setAgregarCarrito] = useState(false);
  const [cambiarBotones, setCambiarBotones] = useState(false);
  const onAdd = () => {
    setCambiarBotones(true);
  };

  const mostrarCarrito = () => {
    addItem({ qty: itemsQty, ...item });
    setAgregarCarrito(true);
  };

  return (
    <>
      <div className={classes.count}>
        <div className={classes.titulo}>
          <h5>
            <b>{name}</b>
          </h5>
        </div>

        <div>
          <img src={imageUrl} alt="" width={180}></img>
        </div>

        <div className={classes.parrafo}>
          <p>Detalle: {detail}</p>
        </div>

        <div>
          <p>Stock disponible: {stock}</p>
        </div>

        <ItemCount
          stock={item.stock}
          itemsQty={itemsQty}
          setItemsQty={setItemsQty}
          onAdd={onAdd}
        />
        {cambiarBotones && (
          <>
            <div className={classes.agregarCarrito}>
              <Button
                variant="contained"
                className={classes.contador}
                onClick={() => mostrarCarrito()}
              >
                Agregar al carrito
              </Button>
              {agregarCarrito && (
                <Button className={classes.contador} variant="contained">
                  <Link
                    to={"/cart"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Finalizar compra
                  </Link>
                </Button>
              )}
            </div>
          </>
        )}
        <div className={classes.botonVolver}>
          <Button onClick={volver}>Volver</Button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
