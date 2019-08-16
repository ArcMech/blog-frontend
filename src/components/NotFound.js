import React from "react";
import styles from "../styles/about.module.css";

const NotFound = () => {
  return (
    <section>
      <div className={styles.item}>
        <h1>Wybacz, nie znalazłem takiej strony.</h1>
        <h2>Smutno mi :(</h2>
      </div>
    </section>
  );
};

export default NotFound;
