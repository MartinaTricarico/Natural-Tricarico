import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.js";
import Loading from "./Loading.js";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";

const useStyle = makeStyles(() => ({
  detailContainer: {
    display: "flex",
    margin: "36px",
    justifyContent: "center",
  },
}));

const ItemDetailContainer = () => {
  const classes = useStyle();
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, `items`, id);
    getDoc(queryProduct).then((resp) => {
      setProduct({ id: resp.id, ...resp.data() });
    });
  }, [id]);

  return (
    <div className={classes.detailContainer}>
      {product ? <ItemDetail item={product} /> : <Loading />}
    </div>
  );
};

export default ItemDetailContainer;
