import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import menu from "../images/icons8-menu.svg";

export default function Header() {
  const [visible, setVisible] = useState(false)

  const handleBurgerMenu = () => {
    setVisible(!visible);
  }

  

  return (<>
   <div className={styles.header}>
      <NavLink to="/">
        <img src={logo} className={styles.logo} alt="Home" />
      </NavLink>
      <div className={styles.linkContainer}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/movies">
          Movies
        </NavLink>
        <NavLink className={styles.link} to="/series">
          Series
        </NavLink>
      </div>
      <img src={menu} className={styles.menuIcon} onClick={handleBurgerMenu}/>

    </div>
     <div className={styles.mobileMenu} style={{display: visible ? "flex" : "none"}}>
      <div className={styles.closeMenu} onClick={handleBurgerMenu}>X</div>
       <NavLink className={styles.link} to="/" onClick={handleBurgerMenu}>
         Home
       </NavLink>
       <NavLink className={styles.link} to="/movies" onClick={handleBurgerMenu}>
         Movies
       </NavLink>
       <NavLink className={styles.link} to="/series" onClick={handleBurgerMenu}>
         Series
       </NavLink>
   </div>
  </>
   
  );
}
