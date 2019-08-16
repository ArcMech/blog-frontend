import React from "react";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <section>
      <div className={styles.item}>
        <div className={styles.my_image} />
        <p className={styles.description}>
          Remove paint from wood with paint stripper and restore your piece of
          furniture back to its beautiful wood grain! This post shows you how to
          strip painted furniture step by step.It's been a bit since I've redone
          a piece of furniture around ...
        </p>
        <a href="/about" className={styles.link}>
          My story→
        </a>
      </div>
    </section>
  );
};

export default About;
