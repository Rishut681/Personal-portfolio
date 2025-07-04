import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css'; // We'll create this CSS file next
// Import your image here, e.g.:
// import myProfilePicture from '../assets/your-profile-pic.jpg';

const AboutSection = () => {
    // Variants for the entire section (if you want to animate the container)
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 10,
                when: 'beforeChildren', // Animate container before children
                staggerChildren: 0.2,   // Stagger child animations
            },
        },
    };

    // Variants for individual text blocks and image
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
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
            className="about-section"
            id="about" // ID for Navbar linking
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible" // Animation triggers when section is in view
            viewport={{ once: true, amount: 0.3 }} // Animate once, when 30% visible
        >
            <div className="section-header">
                <motion.h2 variants={itemVariants} className="section-title">
                    About Me
                </motion.h2>
                <motion.p variants={itemVariants} className="section-subtitle">
                    A Glimpse into My Journey & Passion
                </motion.p>
            </div>

            <div className="about-content">
                <motion.div variants={itemVariants} className="about-text">
                    <p>
                        Hello! I'm Rishu Raj, a passionate Full-Stack Developer with a knack for turning complex problems into elegant, user-friendly solutions. My journey in tech began with a fascination for how websites come to life, evolving into a dedicated pursuit of mastering both front-end and back-end technologies.
                    </p>
                    <p>
                        I thrive on building robust and scalable applications, constantly seeking to learn and implement the latest industry best practices. Whether it's crafting responsive user interfaces with React or designing efficient APIs and databases, I'm committed to delivering high-quality code that provides exceptional user experiences.
                    </p>
                    <p>
                        Beyond coding, I'm an avid learner, always exploring new technologies and frameworks. I believe in continuous improvement and the power of collaborative problem-solving. When I'm not at my keyboard, you might find me exploring new places or delving into a good book.
                    </p>
                    {/* You can add more paragraphs or even a list of interests/skills here */}
                </motion.div>

                <motion.div variants={itemVariants} className="about-image-container">
                    {/* Replace with your actual image path */}
                    <img
                        src="https://www.dropbox.com/scl/fi/kplelawhwnpnp1onmlbj8/IMG_20250621_111114113-Photoroom.png?rlkey=tiwsbpvgxs9k9aizniscw53vf&st=5e15jg0s&dl=1"
                        alt="Rishu Raj Profile"
                        className="about-profile-pic"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AboutSection;