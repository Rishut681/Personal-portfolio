import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./ProjectsSection.css";

const projects = [
  {
    id: 1,
    title: "Full-Stack E-commerce Platform",
    description:
      "A comprehensive e-commerce solution with product management, auth, secure checkout, and role-based access. Built with modern full-stack practices.",
    image:
      "/asset/ecommerce.png",
    githubLink: "https://github.com/Rishut681/E-commerce",
    liveDemoLink: "https://nexa-ecommerce.vercel.app/",
    tech: ["MERN", "JWT", "Stripe", "Cloud Storage"],
  },
  {
    id: 2,
    title: "AcciAlert – Smart City Surveillance",
    description:
      "AI-powered platform for real-time detection of accidents, crimes, and infrastructure issues to enhance urban safety and response.",
    image:
      "/asset/cityzen.jpeg",
    githubLink: "https://github.com/Rishut681/Accialert",
    liveDemoLink: "#",
    tech: ["Python", "Flask", "Tensorflow", "OpenCV"],
  },
  {
    id: 3,
    title: "Crypto Dashboard",
    description:
      "Live market data, sparkline charts, and portfolio tracking with clean API integration and tidy data viz.",
    image:
      "/asset/crypto.png",
    githubLink: "https://github.com/Rishut681/my-crypto-dashboard",
    liveDemoLink: "https://my-crypto-dashboard-pearl.vercel.app/",
    tech: ["React", "Charts", "REST APIs", "Caching"],
  },
  {
    id: 4,
    title: "Helpdesk Ticketing System",
    description:
      "Robust ticket lifecycle, status tracking, and streamlined communication for customer support teams.",
    image:
      "/asset/helpdesk.png",
    githubLink: "https://github.com/Rishut681/Helpdesk_app",
    liveDemoLink: "https://helpdesksite.netlify.app/",
    tech: ["Node", "Express", "MongoDB", "Auth"],
  },
  {
    id: 5,
    title: "My Personal Portfolio",
    description:
      "This portfolio—modern UI, responsive design, smooth animations, and polished UX.",
    image:
      "/asset/portfolio.png",
    githubLink: "https://github.com/Rishut681/Personal-portfolio",
    liveDemoLink: "https://rishupersonalportfolio.netlify.app",
    tech: ["React", "Framer Motion", "CSS", "A11y"],
  },
];

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.12, duration: 0.6 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 16 } },
};

const ProjectSection = () => {
  return (
    <section className="projects-section" id="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of things I’ve built—crafted with performance, DX, and clean architecture in mind.
        </p>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((p, idx) => (
          <ProjectCard key={p.id} project={p} idx={idx} />
        ))}
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project, idx }) => {
  // Desktop parallax tilt on hover
  const hoverMotion = {
    scale: 1.015,
    rotateX: 1.5,
    rotateY: -1.5,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  };

  return (
    <motion.article
      className="project-card"
      variants={cardVariant}
      whileHover={hoverMotion}
      whileTap={{ scale: 0.99 }}
      style={{ "--i": idx }}
    >
      {/* Gradient frame */}
      <div className="card-frame" />

      {/* Image */}
      <div className="project-media">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/1200x800/111827/e2e8f0?text=Image+Unavailable";
          }}
        />

        {/* Desktop hover overlay */}
        <motion.div
          className="project-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <div className="overlay-gradient" />
          <div className="overlay-content">
            <p className="project-description">{project.description}</p>
            <ul className="tech-tags">
              {project.tech?.map((t) => (
                <li key={t} className="tech-chip">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {/* moving shine */}
          <span className="shine" />
        </motion.div>

        {/* Mobile/Tablet: in-view description (shows while card is in viewport) */}
        <motion.div
          className="project-overlay mobile-inview"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6, margin: "0px 0px -10% 0px", once: false }}
          transition={{ duration: 0.35 }}
        >
          <div className="overlay-gradient" />
          <div className="overlay-content">
            <p className="project-description">{project.description}</p>
            <ul className="tech-tags">
              {project.tech?.map((t) => (
                <li key={t} className="tech-chip">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Info row */}
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-links">
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn github-btn"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={18} />
              GitHub
            </motion.a>
          )}
          {project.liveDemoLink && (
            <motion.a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn demo-btn"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={18} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectSection;
