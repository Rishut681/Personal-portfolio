import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Wave Divider (separated and pushed up) */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="url(#waveGradient)"
            d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,202.7C840,203,960,181,1080,181.3C1200,181,1320,203,1380,213.3L1440,224L1440,0L0,0Z"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="footer-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Rishu Raj
        </motion.h2>

        <p className="footer-tagline">
          Crafting digital experiences with{" "}
          <span className="highlight">creativity</span> &{" "}
          <span className="highlight">innovation</span>.
        </p>

        <ul className="footer-links">
          {["About", "Projects", "Skills", "Contact"].map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={`#${link.toLowerCase()}`} className="glow-link">
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="footer-socials">
          {[
            { icon: <Mail size={24} />, link: "mailto:rishut681@gmail.com" },
            { icon: <Github size={24} />, link: "https://github.com/Rishut681" },
            {
              icon: <Linkedin size={24} />,
              link: "https://www.linkedin.com/in/rishu-raj-322637253/",
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rishu Raj • Designed with ❤️ + ⚡</p>
      </div>
    </footer>
  );
};

export default Footer;
