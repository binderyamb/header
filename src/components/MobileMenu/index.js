import React from "react";
import { MenuItems } from "../MenuItems";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";

function MobileMenu({ active }) {
  const activeClassName = "SelectedMenuMobile";
  return (
    <div
      style={{
        transform: active ? "translateX(0%)" : "translateX(100%)",
      }}
      className={styles.MobileMenuWrapper}
    >
      <div className={styles.MobileMenu}>
        {MenuItems.map((menu, index) => {
          return (
            <NavLink
              to={menu.path}
              key={index}
              className={({ isActive }) =>
                isActive ? activeClassName : menu.classNameMobile
              }
            >
              {menu.icon}
              {menu.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default MobileMenu;
