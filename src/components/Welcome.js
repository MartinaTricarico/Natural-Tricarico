import React from "react";
import SignIn from "./SignIn";

const Welcome = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main>
      <SignIn />
    </main>
  );
};

export default Welcome;
