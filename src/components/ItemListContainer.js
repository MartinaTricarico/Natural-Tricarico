import React, { useState } from "react";
import { productListData } from "./ProductListData.js";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer"

export const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productListData);
  }, 2000);
});

const ItemListContainer = () => {
  const [productos, setProductListData] = useState([]);
  const [itemSeleccionado, setItemSeleccionado] = useState()

  getFetch
    .then((results) => {
      setProductListData(results);
    })
    .catch((err) => {
      console.log("Hay un error", err);
    });

  return (
    <>
      <div className="catalogo">
        <h3>Catálogo</h3>
      </div>

      <ItemList setItemSeleccionado={setItemSeleccionado} />

      <ItemCount stock={15} initial={1} />
      <ItemDetailContainer item={itemSeleccionado}/>
    </>
  );
};

export default ItemListContainer;
