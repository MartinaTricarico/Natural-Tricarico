import React, { useEffect, useState } from "react";
import UserLoggedIn from "./UserLoggedIn";
import SignOut from "./SignOut";
import Welcome from "./Welcome";
import { auth } from "../Firebase";

const Account = () => {
  const [user, setUser] = useState(() => auth.currentUser);
  const [init, setInit] = useState(true);

  useEffect(() => {
    const userListener = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }

      if (init) {
        setInit(false);
      }
    });

    return userListener;
  }, [init]);

  return (
    <div className="Account">
      <header>
        <h2 style={{ margin: "10px", fontFamily: "Calibri" }}>
          {user ? <UserLoggedIn /> : "Mi cuenta"}
        </h2>
        <SignOut />
      </header>
      <section>{user ? null : <Welcome />}</section>
    </div>
  );
};

export default Account;
