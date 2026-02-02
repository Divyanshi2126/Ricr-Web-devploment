import React, { useEffect, useState, useContext } from "react";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("KhaaoPiyo")) || null
  );

  const [isLogin, setIsLogin] = useState(!!user);
  const [role, setRole] = useState(user?.role || "");

  useEffect(() => {
    setIsLogin(!!user);
    setRole(user?.role || "");
  }, [user]);

  const value = { user, setUser, isLogin, setIsLogin, role, setRole };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
