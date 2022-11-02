import React, { useState, createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleName = () => {
    setName(name);
  };

  return (
    <AuthContext.Provider value={{ isLogin, handleLogin, name, handleName }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
