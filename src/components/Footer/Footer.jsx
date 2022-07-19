import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <p>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://ckn-portfolio.netlify.app/" target="_blank">
          Ckeanu
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
