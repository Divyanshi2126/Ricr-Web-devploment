import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("KhaaoPiyoUser"))||"");
  const [islogin, setIslogin] = useState(!!user);

  useEffect(() => {
    setIslogin(!!user);
  }, [user]);

  const value = { user, setUser, setIslogin, islogin };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
