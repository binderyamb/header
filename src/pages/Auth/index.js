import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import styles from "./index.module.css";

function Auth() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleAuth = () => {
    navigate("/");
    auth.handleName(name);
    auth.handleLogin();
  };

  return (
    <div className={styles.AuthWrapper}>
      <div className={styles.AuthContainer}>
        <div>
          <label>Name</label>
          <br />
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input type="password" />
        </div>
        <button onClick={handleAuth}>Нэвтрэх</button>
      </div>
    </div>
  );
}

export default Auth;
