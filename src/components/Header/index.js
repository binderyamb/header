import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import { MenuItems } from "../MenuItems";
import { FaBars, FaPowerOff, FaTimes, FaUser } from "react-icons/fa";
import MobileMenu from "../MobileMenu";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/shop.png";
import Shadow from "../Shadow";
import AuthContext from "../../context/AuthContext";

function Header() {
  const [active, setActive] = useState(false);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleActive = () => {
    setActive(!active);
  };

  const activeClassName = "SelectedMenu";

  const handleAuth = (type) => {
    if (type === "login") {
      navigate("/auth");
    } else {
      auth.handleName("");
      auth.handleLogin();
    }
  };

  return (
    <React.Fragment>
      <nav className={styles.NavbarWrapper}>
        <ul>
          <Link to="/">
            <img src={Logo} alt="navbar logo" height="50px" />
          </Link>
          <div className={styles.NavbarMenu}>
            {MenuItems.map((menu, index) => {
              return (
                <NavLink
                  to={menu.path}
                  key={index}
                  className={({ isActive }) =>
                    isActive ? activeClassName : menu.className
                  }
                >
                  {menu.name}
                </NavLink>
              );
            })}
          </div>
          {auth.isLogin ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FaUser onClick={auth.handleLogin} />
              <h3>{auth.name}</h3>
              <FaPowerOff onClick={() => handleAuth("logout")} />
            </div>
          ) : (
            <button className={styles.NavButton} onClick={auth.handleLogin}>
              <h3>Sign Up</h3>
            </button>
          )}
          <div onClick={handleActive} className={styles.HamburgerMenu}>
            {!active ? <FaBars /> : <FaTimes />}
          </div>
        </ul>
      </nav>
      <MobileMenu active={active} />
      {active ? <Shadow /> : null}
    </React.Fragment>
  );
}

export default Header;
