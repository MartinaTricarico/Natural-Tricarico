import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.js";
import Loading from "./Loading.js";
import { productListData } from "./ProductListData.js";

export const getFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const product = productListData.find((product) => {
        return product.id === id;
      });
      resolve(product);
    }, 2000)
  });
};

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

// hacer un boton de volver para atras

  useEffect(() => {
    getFetch(id).then((results) => {
      setProduct(results);
    });
  }, [id]);

  return <div>{product ? <ItemDetail item={product} /> : <Loading />}</div>;
};

export default ItemDetailContainer;
