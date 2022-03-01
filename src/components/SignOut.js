import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { auth } from "../Firebase";

const SignOut = () => {
  return (
    auth.currentUser && (
      <Button
        variant="contained"
        color="secondary"
        className="sign-out"
        onClick={() => auth.signOut()}
      >
        Salir
      </Button>
    )
  );
};

export default SignOut;
