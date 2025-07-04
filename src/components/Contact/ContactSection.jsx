import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react'; // Icons for contact
import './ContactSection.css'; // We'll create this CSS file

const ContactSection = () => {
    // Animation variants for the entire section
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
                staggerChildren: 0.1,
            },
        },
    };

    // Variants for individual contact items/links
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 70,
                damping: 15,
            },
        },
    };

    return (
        <motion.section
            className="contact-section"
            id="contact" // ID for Navbar linking
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible" // Animate when section is in view
            viewport={{ once: true, amount: 0.2 }} // Animate once, when 20% visible
        >
            <div className="section-header">
                <motion.h2 variants={itemVariants} className="section-title">
                    Get In Touch
                </motion.h2>
                <motion.p variants={itemVariants} className="section-subtitle">
                    Have a project in mind or just want to chat?
                </motion.p>
            </div>

            <div className="contact-content">
                <motion.p variants={itemVariants} className="contact-intro">
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                </motion.p>

                <div className="contact-details-grid">
                    <motion.div variants={itemVariants} className="contact-item">
                        <Mail size={32} className="contact-icon" />
                        <a href="mailto:rishut681@gmail.com" className="contact-link">
                            rishut681@gmail.com
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="contact-item">
                        <Phone size={32} className="contact-icon" />
                        <a href="tel:+918882905323" className="contact-link">
                            +91 8882905323
                        </a>
                    </motion.div>
                </div>

                <div className="social-links">
                    <motion.a
                        variants={itemVariants}
                        href="https://github.com/Rishut681" // Replace with your GitHub profile URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn"
                        whileHover={{ scale: 1.1, backgroundColor: '#555' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github size={28} /> GitHub
                    </motion.a>

                    <motion.a
                        variants={itemVariants}
                        href="https://linkedin.com/in/rishu-raj-322637253" // Replace with your LinkedIn profile URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn"
                        whileHover={{ scale: 1.1, backgroundColor: '#0077B5' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Linkedin size={28} /> LinkedIn
                    </motion.a>
                </div>

                <motion.p variants={itemVariants} className="contact-outro">
                    Let's build something amazing together!
                </motion.p>
            </div>
        </motion.section>
    );
};

export default ContactSection;
