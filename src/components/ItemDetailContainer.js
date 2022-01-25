import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.js";
import {productListData} from "./ProductListData.js"; 

export const getFetch = (id) => {
  return new Promise ((resolve, reject) => {
    const product = productListData.find((product)=>{
      return product.id === id
    })
    resolve(product)
  })
}

const ItemDetailContainer = ({ item }) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    getFetch(item).then((results) => {
      setProduct(results);
    });
  }, [item]);


  return (
    <div>
      {product ? <ItemDetail item={product}/> : null}
    </div>
  )
};

export default ItemDetailContainer;
