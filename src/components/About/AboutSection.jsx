import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

const coreCompetencies = [
  "Full-Stack Development",
  "AI Integration",
  "Scalable Architectures",
  "Responsive Design",
  "API Development",
  "Database Management",
];

const AboutSection = () => {
  // Variants for section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  return (
    <motion.section
      className="about-section"
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Section Header */}
      <div className="section-header">
        <motion.h2
          className="section-title"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p variants={itemVariants} className="section-subtitle">
          A Glimpse into My Journey & Passion
        </motion.p>
      </div>

      {/* Content Wrapper */}
      <div className="about-content-wrapper">
        {/* Text Container */}
        <div className="about-text-container">
          <motion.div variants={itemVariants} className="about-text">
            <p>
              I’m <span className="highlight">Rishu Raj</span>, a Full-Stack
              Developer passionate about crafting scalable, intuitive, and
              user-friendly digital experiences.
            </p>
            <p>
              From responsive UIs in <strong>React</strong> to building robust{" "}
              <strong>APIs & databases</strong>, I love bringing ideas to life
              with clean code and modern practices.
            </p>
            <p>
              Beyond coding, I’m a lifelong learner exploring{" "}
              <strong>AI</strong>, solving real-world problems, and
              collaborating on impactful projects.
            </p>
          </motion.div>

          {/* Core Competencies */}
          <motion.div
            variants={itemVariants}
            className="about-competencies-container"
          >
            <h4 className="competencies-title">Core Competencies</h4>
            <ul className="competencies-list">
              {coreCompetencies.map((skill, index) => (
                <li key={index}>
                  <span className="competency-badge">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Stats + Resume */}
          <motion.div variants={itemVariants} className="about-stats">
            <div className="stat-box">
              <h3>10+</h3>
              <p>Projects</p>
            </div>
            <div className="stat-box">
              <h3>5+</h3>
              <p>Certifications Earned</p>
            </div>
            <motion.a
              href="/asset/Rishu-Resume.pdf"
              variants={itemVariants}
              target="_blank"
              className="resume-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Image Container */}
        <motion.div
          variants={itemVariants}
          className="about-image-container"
        >
          <motion.img
            src="https://www.dropbox.com/scl/fi/kplelawhwnpnp1onmlbj8/IMG_20250621_111114113-Photoroom.png?rlkey=tiwsbpvgxs9k9aizniscw53vf&st=5e15jg0s&dl=1"
            alt="Rishu Jaiswal Profile"
            className="about-profile-pic"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
