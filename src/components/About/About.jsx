import React from "react";
import skills from "../../data/skills.json";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutimage.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="Cursor icon" className={styles.aboutlogo} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized websites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/skills.png")} alt="UI icon" className={styles.aboutlogo} />
            <div className={styles.aboutItemText}>
              <h3>Skills</h3>
              <div className={styles.content}>
                <div className={styles.skills}>
                  {skills.map((skill, id) => {
                    return (
                      <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                          <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};