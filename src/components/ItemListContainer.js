import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";

import ItemList from "./ItemList";
import { db } from "../Firebase.js";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  catalog: {
    height: "10px",
    paddingTop: "20px",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontFamily: "Gill Sans",
    justifyContent: "center",
    borderRadius: "15px",
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
        setProductListData((prev) => [...prev, { ...doc.data(), key: doc.id }]);
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
        <h2>CATÁLOGO</h2>
      </div>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
