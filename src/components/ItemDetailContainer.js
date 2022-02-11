import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.js";
import Loading from "./Loading.js";
import { productListData } from "./ProductListData.js";
import {
  collection,
  getDocs,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Firebase.js";

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
    const getFromFirebase = async () => {
      const q = query(
        collection(db, "items"),
        where("name", "==", "Zanahoria")
      );
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        setProduct((prev) => [...prev, doc.data()]);
      });
      const docRef = doc(db, "items", "61gLTwUnxwV7BhDsKoIF");
      const docSnapshot = await getDoc(docRef);
    };
    getFromFirebase();
  }, []);

  return (
    <div className={classes.detailContainer}>
      {product ? <ItemDetail item={product} /> : <Loading />}
    </div>
  );
};

export default ItemDetailContainer;
