import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // For hamburger/close icons
import './Navbar.css'; // We'll create this CSS file next

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    // Animation variants for the navbar itself (fade in)
    const navbarVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 70,
                damping: 15,
                delay: 0.2, // Delay after hero section appears
            },
        },
    };

    // Animation variants for individual nav links (staggered fade in)
    const navLinkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    // Animation variants for mobile menu
    const mobileMenuVariants = {
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 70,
                damping: 15,
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 70,
                damping: 15,
            },
        },
    };

    return (
        <motion.section
            className="navbar"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#home">Rishu.dev</a> {/* Your name or logo */}
                </div>

                {/* Desktop Navigation */}
                <ul className="nav-links">
                    {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                        <motion.li
                            key={item}
                            variants={navLinkVariants}
                            // No initial/animate here, as they inherit from parent's staggerChildren
                        >
                            <motion.a
                                href={`#${item.toLowerCase()}`}
                                whileHover={{ scale: 1.05, color: '#8b5cf6' }} // Purple on hover
                                whileTap={{ scale: 0.95 }}
                            >
                                {item}
                            </motion.a>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Hamburger Icon */}
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                {/* Mobile Menu */}
                <motion.ul
                    className={`mobile-nav-links ${isOpen ? 'open' : ''}`}
                    variants={mobileMenuVariants}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                >
                    {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                        <motion.li
                            key={item}
                            variants={navLinkVariants} // Use same item variants for staggered effect
                            onClick={() => setIsOpen(false)} // Close menu on link click
                        >
                            <motion.a
                                href={`#${item.toLowerCase()}`}
                                whileHover={{ scale: 1.05, color: '#8b5cf6' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item}
                            </motion.a>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </motion.section>
    );
};

export default Navbar;