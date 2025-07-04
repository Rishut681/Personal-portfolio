import React from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.css'; // We'll create this CSS file

// --- Skill Data ---
// You can find SVG icons or use icon libraries like Devicon (devicon.dev)
// For now, I'm using placeholder URLs for images, but ideally you'd import SVGs
// or use an icon font/component library for specific tech logos.
const skillsData = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'JavaScript (ES6+)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
            { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }, // Added from project tech stack
        ],
    },
    {
        category: 'Frontend',
        skills: [
            { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
            { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'Responsive Design', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=Responsive' }, // Generic placeholder
            { name: 'DOM Manipulation', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=DOM' }, // Generic placeholder
        ],
    },
    {
        category: 'Backend & APIs',
        skills: [
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
            { name: 'RESTful APIs', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=API' }, // Generic placeholder
            { name: 'JSON', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=JSON' }, // Generic placeholder
        ],
    },
    {
        category: 'Databases & CMS',
        skills: [
            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'Webflow CMS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg' }, // Using Webflow icon for CMS context
            { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        ],
    },
    {
        category: 'Tools & Platforms',
        skills: [
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
            { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
            { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
            { name: 'Chrome DevTools', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=DevTools' }, // Generic placeholder
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
            { name: 'Problem Solving', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=Solve' }, // Generic placeholder
            { name: 'Attention to Detail', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=Detail' }, // Generic placeholder
            { name: 'Team Collaboration', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=Team' }, // Generic placeholder
            { name: 'Communication', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=Comm' }, // Generic placeholder
            { name: 'Time Management', icon: 'https://placehold.co/40x40/0f172a/cbd5e1?text=Time' }, // Generic placeholder
        ],
    },
];

const SkillsSection = () => {
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
                staggerChildren: 0.1, // Stagger categories
            },
        },
    };

    // Variants for each skill category block
    const categoryVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                damping: 12,
                staggerChildren: 0.05, // Stagger individual skills within category
                delayChildren: 0.1,
            },
        },
    };

    // Variants for individual skill items
    const skillItemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <motion.section
            className="skills-section"
            id="skills" // ID for Navbar linking
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible" // Animate when section is in view
            viewport={{ once: true, amount: 0.2 }} // Animate once, when 20% visible
        >
            <div className="section-header">
                <motion.h2 variants={skillItemVariants} className="section-title">
                    My Skills
                </motion.h2>
                <motion.p variants={skillItemVariants} className="section-subtitle">
                    Technologies I Excel In
                </motion.p>
            </div>

            <div className="skills-categories-container">
                {skillsData.map((categoryData, index) => (
                    <motion.div
                        className="skill-category"
                        key={categoryData.category}
                        variants={categoryVariants}
                    >
                        <h3 className="category-title">{categoryData.category}</h3>
                        <motion.div className="skills-grid">
                            {categoryData.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-item"
                                    variants={skillItemVariants}
                                    whileHover={{ scale: 1.1, backgroundColor: '#334155', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                    <p className="skill-name">{skill.name}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default SkillsSection;