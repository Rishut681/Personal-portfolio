import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css'; // We'll create this CSS file

const Footer = () => {
    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5, // Delay footer appearance slightly
                duration: 0.8,
            },
        },
    };

    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="footer"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <p className="footer-text">
                &copy; {currentYear} Rishu Raj. All rights reserved.
            </p>
            <p className="footer-text">
                Designed & Built with ❤️ by Rishu Raj
            </p>
        </motion.footer>
    );
};

export default Footer;