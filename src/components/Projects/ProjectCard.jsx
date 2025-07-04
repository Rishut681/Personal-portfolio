import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react'; // Icons for GitHub and Live Demo
import './ProjectCard.css'; // We'll create this CSS file

const ProjectCard = ({ project, variants }) => {
    return (
        <motion.div
            className="project-card"
            variants={variants} // Inherit variants from parent (ProjectsSection)
            whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)' }} // Lift and shadow on hover
            whileTap={{ scale: 0.98 }} // Slight press effect on tap
        >
            <div className="project-image-container">
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    // Fallback for broken images (optional)
                    onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop
                        e.target.src = 'https://placehold.co/600x400/334155/e2e8f0?text=Image+Not+Found';
                    }}
                />
            </div>
            <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                    {project.githubLink && (
                        <motion.a
                            href={project.githubLink}
                            target="_blank" // Open in new tab
                            rel="noopener noreferrer" // Security best practice
                            className="project-btn github-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Github size={20} /> GitHub
                        </motion.a>
                    )}
                    {project.liveDemoLink && (
                        <motion.a
                            href={project.liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn demo-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ExternalLink size={20} /> Live Demo
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;