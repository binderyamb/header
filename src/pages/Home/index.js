import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Home() {
  const auth = useContext(AuthContext);
  return <div>{auth.isLogin ? <h2>Logged</h2> : <h2>Login</h2>}</div>;
}

export default Home;
