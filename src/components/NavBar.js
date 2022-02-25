import { makeStyles } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import React, { Fragment } from "react";
import CartWidget from "./CartWidget";

const useStyle = makeStyles(() => ({
  containerLink: {
    backgroundColor: "white",
    padding: 20,
    fontFamily: "Pushster, cursive",
    color: "black",
    fontSize: "35px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  customList: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  logo: {
    color: "#7EB488",
    display: "flex",
    textDecoration: "none",
    "&:hover": {
      color: "#81b29a",
    },
  },
  buttonLink: {
    color: "#060d0f",
    backgroundColor: "white",
    textDecoration: "none",
    padding: "5px 0px",
    fontSize: "17px",
    margin: "10px 10px",
    fontFamily: "Arial",
    borderRadius: "22px",
    border: "none",
    "&:hover": {
      color: "#81b29a",
    },
  },
}));

const NavBar = (props) => {
  const classes = useStyle();

  return (
    <Fragment>
      <div className={classes.containerLink}>
        <Link to="/" className={classes.logo}>
          <h1>{props.mensaje}</h1>
        </Link>

        <div className={classes.customList}>
          <Link to="/" className={classes.buttonLink}>
            Inicio
          </Link>

          <Link to="/products" className={classes.buttonLink}>
            Productos
          </Link>

          <Link to="/contacto" className={classes.buttonLink}>
            Contacto
          </Link>

          <Link
            to="/account"
            className={classes.buttonLink}
            style={{ fontWeight: "bold", color: "#7EB488" }}
          >
            Mi cuenta
          </Link>

          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
