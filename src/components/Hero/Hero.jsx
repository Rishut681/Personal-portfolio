import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rishu</h1>
        <p className={styles.description}>
          I'm a front-end developer, as well as a 2nd year college student pursuing my B.tech. degree. Reach out if you'd like to know more!
        </p>
        <a href="mailto:rishut681@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/coverimage.jpg")}
        alt="Hero picture of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};