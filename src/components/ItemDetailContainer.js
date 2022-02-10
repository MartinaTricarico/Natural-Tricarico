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

export const getFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = productListData.find((product) => {
        return product.id === id;
      });
      resolve(product);
    }, 2000);
  });
};

const ItemDetailContainer = () => {
  const classes = useStyle();
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getFetch(id).then((results) => {
      setProduct(results);
    });
  }, [id]);

  useEffect(() => {
    console.log("usando un query y un where para filtrar");
    const getFromFirebase = async () => {
      const q = query(
        collection(db, "items"),
        where("name", "==", "Zanahoria")
      );
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        console.log("El id", doc.id);
        console.log(doc.data());
      });
      console.log("usando getDoc");
      const docRef = doc(db, "items", "61gLTwUnxwV7BhDsKoIF");
      const docSnapshot = await getDoc(docRef);
      console.log(docSnapshot.data());
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
