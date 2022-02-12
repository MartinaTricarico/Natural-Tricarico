import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";

import ItemList from "./ItemList";
import { db } from "../Firebase.js";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  catalog: {
    background: "#e9f5db",
    height: "45px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

const ItemListContainer = ({ props }) => {
  const classes = useStyle();
  const [productos, setProductListData] = useState([]);

  useEffect(() => {
    const getFromFirebase = async () => {
      const q = query(collection(db, "items"));
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        setProductListData((prev) => [...prev, doc.data()]);
      });
    };
    getFromFirebase();
  }, []);

  useEffect(() => {
    console.log(productos);
  }, [productos]);

  return (
    <>
      <div className={classes.catalog}>
        <h3>Catálogo</h3>
      </div>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
