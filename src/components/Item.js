import { Button, makeStyles } from "@material-ui/core";

import { NavLink } from "react-router-dom";
import React from "react";

const useStyle = makeStyles(() => ({
  titulo: {
    fontSize: "25px",
  },
  contenido: {
    textDecoration: "none",
  },
  botones: {
    color: "#000",
    backgroundColor: "#508d62",
    borderRadius: "15px",
  },
}));

const Item = ({ item }) => {
  const classes = useStyle();
  const { name, imageUrl, stock, id } = item || [];

  return (
    <div>
      <div>
        <div>
          <h2 className={classes.titulo}>{name}</h2>
        </div>
        <img src={imageUrl} alt="" width={130} />

        <div>
          <NavLink to={`/item/${id}`} style={{ textDecoration: "none" }}>
            <Button variant="contained" className={classes.botones}>
              Ver detalle del producto
            </Button>
          </NavLink>
        </div>

        <div>
          <p className="stock" style={{ margin: "20px" }}>
            Stock disponible: {stock}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
