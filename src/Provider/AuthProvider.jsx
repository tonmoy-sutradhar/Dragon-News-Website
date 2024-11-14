import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Observer set----->>
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logOut = () => {
    return signOut(auth);
  };

  // Login/SignIn ---->>

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const AuthInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
// test:{
//   name: "Tonmoy sutradhar",
//   email: "tonmoysds110@gmail.com",
// }
