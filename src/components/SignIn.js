import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase";
import googleLogo from "../assets/google_logo.svg";

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
      <button className="sign-in" onClick={signInWithGoogle}>
        {" "}
        <img src={googleLogo} alt="google logo" className="google-logo" />
        Inicia sesión con Google
      </button>
    </div>
  );
};

export default SignIn;
