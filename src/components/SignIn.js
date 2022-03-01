import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase";
import googleLogo from "../assets/google_logo.svg";
import { Button, makeStyles } from "@material-ui/core";

const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button
        variant="contained"
        className="sign-in"
        onClick={signInWithGoogle}
      >
        {" "}
        <img
          style={{ margin: "5px" }}
          src={googleLogo}
          alt="google logo"
          className="google-logo"
        />
        Inicia sesión con Google
      </Button>
    </div>
  );
};

export default SignIn;
