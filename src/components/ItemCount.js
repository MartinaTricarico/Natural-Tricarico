import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ stock, initial, item }) => {
  const { title, details, pictureUrl } = item || [];
  const [itemsQty, setItemsQty] = useState(1);

  const history = useNavigate();
  const volver = () => {
    history("/", { replace: false });
  };

  return (
    <div className="count" variant="outlined">
      <h5>
        <b>{title}</b>
      </h5>

      <img src={pictureUrl} alt='' width={150}></img>
        <p>{details}</p>

      <div className="number">

        <Button
          onClick={() => setItemsQty(itemsQty - 1)}
          disabled={itemsQty === initial}
          variant="contained">
          <Remove style={{ fontSize: 20 }} />
        </Button>

        <h2>{itemsQty}</h2>

        <Button
          onClick={() => setItemsQty(itemsQty + 1)}
          disabled={itemsQty === stock}
          variant="contained"
        >
          <Add style={{ fontSize: 20 }} />
        </Button>
      </div>

      <div className="add">
        <Button variant="contained">Agregar al carrito</Button>
      </div>

      <div>
        <p>Stock disponible: {stock}</p>
      </div>

      <div>
        <Button onClick={volver}>Volver</Button>
      </div>
    </div>
  );
};

export default ItemCount;
