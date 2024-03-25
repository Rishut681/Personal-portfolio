import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.messagebox}>
        <h3>Leave your message below</h3>
        <div className={styles.msgcontainer}>
          <div className={styles.msgcontactform}>
            <form
              action="https://formspree.io/f/meqylodq"
              method="POST"
              className={styles.msgcontactinputs}>
              <input
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                required
              />

              <input
                type="email"
                name="Email"
                autoComplete="off"
                placeholder="Email"
                required
              />

              <textarea
                name="message"
                cols="30"
                rows="2"
                autoComplete="off"
                placeholder="Message"
                required></textarea>

              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/mail.png")}
            alt="Email icon"
            className={styles.contactIcon} />
          <a href="mailto:rishut681@email.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
            className={styles.contactIcon}
          />
          <a href="https://www.linkedin.com/in/rishu-raj-322637253">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")}
            alt="Github icon"
            className={styles.contactIcon}
          />
          <a href="https://www.github.com/Rishut681">Github</a>
        </li>
      </ul>
    </footer>
  );
};