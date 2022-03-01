import React from "react";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <Box
      sx={{ width: "100%", maxWidth: 600, textAlign: "Left", margin: "25px" }}
    >
      <Typography
        classname="contacto"
        variant="h3"
        component="div"
        gutterBottom
      >
        CONTACTO
      </Typography>

      <Typography variant="h5" gutterBottom component="div">
        <LocationOnIcon style={{ margin: "5px" }} />
        Encontranos en:
      </Typography>

      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        style={{ textAlign: "Left" }}
      >
        Agustín Álvarez 1413, B1638CPQ Vicente López, Provincia de Buenos Aires.
      </Typography>

      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        style={{ textAlign: "Left", fontWeight: "bold" }}
      >
        <WhatsAppIcon /> +54 9 11558321
      </Typography>

      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        style={{ textAlign: "Left" }}
      >
        correo@correo.com
      </Typography>
    </Box>
  );
};
export default Contact;
