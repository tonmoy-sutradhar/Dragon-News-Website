import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // test:{
  //   name: "Tonmoy sutradhar",
  //   email: "tonmoysds110@gmail.com",
  // }
  const [user, setUser] = useState(null);

  const AuthInfo = {
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
