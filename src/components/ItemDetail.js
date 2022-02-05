import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { useNavigate, Link } from "react-router-dom";
import { makeStyles, Button } from "@material-ui/core";
import { CartContext } from "../context/CartContext";


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
}));

const ItemDetail = ({ item }) => {
  const {addItem} = useContext(CartContext)
  const { title, pictureUrl, stock, details } = item || [];
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
  const mostrarCarrito = (item, itemsQty) => {
    addItem(item) 
    setAgregarCarrito(true);
  };

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

        <ItemCount stock={item.stock} itemsQty={itemsQty} setItemsQty={setItemsQty} onAdd={onAdd} />
        {cambiarBotones && (
          <>
            <div className={classes.agregarCarrito}>
              <Button
                variant="contained"
                className={classes.contador}
                onClick={() => mostrarCarrito (item, itemsQty)}
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
