import React from "react";
import styles from "../styles/about.module.css";
import myImage from "../img/my-photo.jpeg";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about_content}>
        <div className={styles.text_content}>
          <a href="#" className={styles.text_content_thumbnail}>
            Cześć, jestem Arkadiusz, miło mi Cię poznać!
          </a>
          <p>
            Minęło tyle czasu odkąd staram się o pozycję front-end developera.
            Może w końcu przełamię nieszczęsnę fatum krążące nad juniorami?
          </p>
          <button className={styles.about_button}>
            Przeczytaj moją historię
          </button>
        </div>
        <div className={styles.image_content}>
          <img src={myImage} alt="Moja super fota!" />
        </div>
      </div>
    </section>
  );
};

export default About;
