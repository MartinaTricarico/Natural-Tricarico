import { Button, makeStyles } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import React from "react";

const useStyle = makeStyles(() => ({
  titulo: {
    fontSize: "22px",
    textDecoration: "underline",
    margin: "6px",
    fontFamily: "Gill Sans MT",
  },
  contenido: {
    textDecoration: "none",
  },
  botones: {
    color: "#000",
    margin: "10px",
    padding: "6px",
    backgroundColor: "#52b788",
    borderRadius: "5px",
  },

  image: {
    margin: "15px",
  },
  contenedor: {
    marginTop: "30px",
    marginRight: "3px",
  },
  cantidad: {
    // backgroundColor: "#b7e4c7",
    // borderRadius: "15px",
    // padding: "4px",
  },
}));

const Item = ({ item }) => {
  const classes = useStyle();
  const { name, imageUrl, stock, key } = item || [];

  return (
    <div className={classes.contenedor}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          src={imageUrl}
          className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" className={classes.botones}>
            <NavLink
              to={`/item/${key}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              Ver Producto
            </NavLink>
          </Button>
          <Typography
            size="small"
            className={classes.cantidad}
            style={{ margin: "10px" }}
          >
            Stock disponible: {stock}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default Item;

// <div>
//   <h2 className={classes.titulo}>{name}</h2>
// </div>
// <img className={classes.image} src={imageUrl} alt="" width={160} />

// <div>
//   <NavLink to={`/item/${key}`} style={{ textDecoration: "none" }}>
//     <Button variant="contained" className={classes.botones}>
//       Ver detalle del producto
//     </Button>
//   </NavLink>
// </div>

// <div>
//   <p className={classes.cantidad} style={{ margin: "10px" }}>
//     Stock disponible: {stock}
//   </p>
// </div>
