import React from "react";
import carritoLoading from "../assets/carritoLoading.gif";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "none",
      }}
    >
      <img src={carritoLoading} alt="carrito"></img>
    </div>
  );
};

export default Loading;
