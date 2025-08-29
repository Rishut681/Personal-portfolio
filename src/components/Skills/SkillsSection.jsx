import React from "react";
import { motion } from "framer-motion";
import "./SkillsSection.css";

// skillsData.js

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript (ES6+)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Redux.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'styled-components', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Webflow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg' },
      { name: 'Responsive Design', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=Responsive' },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'REST APIs', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=REST' },
      { name: 'Postman API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'JSON', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=JSON' },
    ],
  },
  {
    category: 'Databases & CMS',
    skills: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Webflow CMS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'Oracle Cloud Infrastructure (OCI)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'Cloud Computing', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=Cloud' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      { name: 'Artificial Intelligence', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=AI' },
      { name: 'Generative AI', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=GenAI' },
      { name: 'Machine Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Chrome DevTools', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=DevTools' },
    ],
  },
  {
    category: 'Operating Systems',
    skills: [
      { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
      { name: 'Linux (Ubuntu)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=Solve' },
      { name: 'Attention to Detail', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=Detail' },
      { name: 'Team Collaboration', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=Team' },
      { name: 'Communication', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=Comm' },
      { name: 'Time Management', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=Time' },
    ],
  },
];


const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-description">
          A blend of modern technologies and core computer science expertise. 
          From frontend to backend, DevOps to AI — here are the tools and 
          technologies I work with to build efficient and scalable solutions.
        </p>
      </div>

      <div className="skills-categories">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="skills-category-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="skill-card"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                  />
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
