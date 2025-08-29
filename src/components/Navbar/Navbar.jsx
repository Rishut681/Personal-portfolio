import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    // Handle scroll to change Navbar background
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Set active link on click
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    const navbarVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 70,
                damping: 15,
                delay: 0.2,
            },
        },
    };

    const navLinkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

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
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#home" onClick={() => onUpdateActiveLink('home')}>Rishu.dev</a>
                </div>

                <ul className="nav-links">
                    {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => {
                        const linkId = item.toLowerCase();
                        return (
                            <motion.li key={item} variants={navLinkVariants}>
                                <a
                                    href={`#${linkId}`}
                                    className={activeLink === linkId ? 'active' : ''}
                                    onClick={() => onUpdateActiveLink(linkId)}
                                >
                                    {item}
                                </a>
                            </motion.li>
                        );
                    })}
                </ul>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <motion.ul
                    className={`mobile-nav-links ${isOpen ? 'open' : ''}`}
                    variants={mobileMenuVariants}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                >
                    {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => {
                        const linkId = item.toLowerCase();
                        return (
                            <motion.li
                                key={item}
                                variants={navLinkVariants}
                                onClick={() => setIsOpen(false)}
                            >
                                <a
                                    href={`#${linkId}`}
                                    className={activeLink === linkId ? 'active' : ''}
                                    onClick={() => onUpdateActiveLink(linkId)}
                                >
                                    {item}
                                </a>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;