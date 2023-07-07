import React from "react";
import styles from "./Footer.module.css";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.linkContainer}>
        <div>
          <div>Home</div>
          <div>Movie</div>
          <div>Series</div>
        </div>
        <div>
          <div>Instagram</div>
          <div>Twitter</div>
          <div>API</div>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} alt="logo"></img>
        <h3>ⓒ Movies React</h3>
      </div>
    </div>
  );
}
