import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // We'll create this next
import './ProjectsSection.css'; // We'll create this CSS file

// --- Mock Project Data ---
// In a real application, you might fetch this from an API (e.g., GitHub API)
// or a CMS. For now, populate with your actual project details.
const projectsData = [
    {
        id: 1,
        title: 'NEXA: E-commerce Platform',
        description: 'A full-stack e-commerce application featuring user authentication, product catalog, shopping cart, and secure payment processing. Built with React, Node.js, Express, and MongoDB.',
        image: 'https://www.dropbox.com/scl/fi/9yab27rbge04krykfidd3/ecommerce.png?rlkey=r7r81a3bwb23ewk3tme53zxnh&st=6ctmmuez&dl=1', // Replace with your project image
        githubLink: 'https://github.com/Rishut681/E-commerce', // Replace with your GitHub link
        liveDemoLink: 'https://github.com/Rishut681/E-commerce', // Replace with your live demo link (optional)
    },
    {
        id: 2,
        title: 'CityZen - Smart ',
        description: 'Leveraging advanced AI and computer vision, CityZen is a robust smart city surveillance solution. It automates the detection of incidents like accidents and crimes, and continuously assesses infrastructure for anomalies, streamlining urban management and emergency response.',
        image: 'https://www.dropbox.com/scl/fi/ncohg76r6kvhuyb8c4cyv/cityzen.jpeg?rlkey=6fa8cwd4lkbbh8hd577yauufk&st=j1wg62ik&dl=1', // Replace with your project image
        githubLink: 'https://github.com/Ritesh-660/CityZenMatrix2.O', // Replace with your GitHub link
        liveDemoLink: 'https://github.com/Ritesh-660/CityZenMatrix2.O', // Replace with your live demo link (optional)
    },
    {
        id: 3,
        title: 'Personal Portfolio (This One!)',
        description: 'The very portfolio you are viewing! Built from scratch with React and Framer Motion, focusing on modern design, responsive layouts, and captivating animations.',
        image: 'https://www.dropbox.com/scl/fi/81wn2o7sj2tevoc02zo6r/portfolio.png?rlkey=ajotsjioflvdnyx5hmuwcek1w&st=bx3papyz&dl=1', // Replace with your project image
        githubLink: 'https://github.com/Rishut681/Personal-portfolio', // Replace with your GitHub link
        liveDemoLink: 'https://rishupersonalportfolio.netlify.app', // Replace with your live demo link (optional)
    },
    // {
    //     id: 4,
    //     title: 'Task Management Dashboard',
    //     description: 'A responsive dashboard for managing tasks and projects, featuring drag-and-drop functionality, progress tracking, and user collaboration. Built with React and Firebase.',
    //     image: 'https://placehold.co/600x400/1e293b/a7b7cc?text=Task+Manager+Project', // Replace with your project image
    //     githubLink: 'https://github.com/your-username/task-manager-repo', // Replace with your GitHub link
    //     liveDemoLink: null, // No live demo for this one
    // },
];

const ProjectsSection = () => {
    // Variants for the entire section
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 10,
                when: 'beforeChildren',
                staggerChildren: 0.2, // Stagger project cards
            },
        },
    };

    // Variants for individual project cards
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 15,
            },
        },
    };

    return (
        <motion.section
            className="projects-section"
            id="projects" // ID for Navbar linking
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible" // Animate when section is in view
            viewport={{ once: true, amount: 0.2 }} // Animate once, when 20% visible
        >
            <div className="section-header">
                <motion.h2 variants={cardVariants} className="section-title">
                    My Projects
                </motion.h2>
                <motion.p variants={cardVariants} className="section-subtitle">
                    Showcasing My Work & Technical Skills
                </motion.p>
            </div>

            <div className="projects-grid">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} variants={cardVariants} />
                ))}
            </div>
        </motion.section>
    );
};

export default ProjectsSection;