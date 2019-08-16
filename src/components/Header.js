import React from "react";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.logo_container}>
      <div className={styles.logo} />
    </header>
  );
};

export default Header;
