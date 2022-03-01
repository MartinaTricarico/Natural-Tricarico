import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { Button, makeStyles } from "@material-ui/core";

const UserLoggedIn = () => {
  const { displayName, photoURL } = auth.currentUser;
  return (
    <>
      <img style={{ margin: "20px" }} src={photoURL} alt="avatar" />{" "}
      <div style={{ fontSize: "25px" }}>{displayName}</div>
      <div>
        <Button variant="contained" style={{ margin: "20px" }}>
          <Link to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
            Ir a mi carrito
          </Link>
        </Button>
      </div>
    </>
  );
};

export default UserLoggedIn;
