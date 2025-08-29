import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { FileText } from 'lucide-react'; // Icon for Resume button
import './HeroSection.css';

const HeroSection = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    const heroVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 70,
                damping: 15,
                delay: 0.8,
                when: 'beforeChildren',
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section className="hero-section" id="home">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="particles-bg"
                options={{
                    fullScreen: false,
                    background: {
                        color: { value: "#0f172a" }
                    },
                    fpsLimit: 120,
                    particles: {
                        number: { value: 80, density: { enable: true, value_area: 800 } },
                        color: { value: "#8b5cf6" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5, random: true, anim: { enable: false } },
                        size: { value: 3, random: true, anim: { enable: true, speed: 4, size_min: 0.3, sync: false } },
                        links: { enable: true, distance: 150, color: "#94a3b8", opacity: 0.4, width: 1 },
                        move: { enable: true, speed: 1, direction: "none", random: true, straight: false, out_mode: "out", bounce: false },
                    },
                    interactivity: {
                        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
                        modes: { grab: { distance: 140, links: { opacity: 1 } }, push: { particles_nb: 4 } }
                    },
                    retina_detect: true,
                }}
            />
            <div className="hero-content-wrapper">
                <motion.div
                    className="hero-content"
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants} className="hero-title">
                      <span className='hero-hl'>Hi, I'm </span>
                      <span className="hero-highlight">Rishu Raj</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="hero-tagline">
                        <TypeAnimation
                            sequence={[
                                'I build modern web experiences.',
                                1500,
                                'A Full-Stack Developer.',
                                1500,
                                'MERN Stack enthusiast.',
                                1500,
                                'Bringing digital ideas to life.',
                                1500,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            speed={50}
                            deleteSpeed={20}
                        />
                    </motion.div>

                    <motion.p variants={itemVariants} className="hero-description">
                        I specialize in creating robust and scalable web applications, from front-end user interfaces to back-end systems, with a focus on intuitive and elegant design.
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-buttons">
                        <motion.a
                            href="#projects"
                            className="btn primary-btn"
                            variants={buttonVariants}
                            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn secondary-btn"
                            variants={buttonVariants}
                            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                        <motion.a
                            href="/asset/Rishu-Resume.pdf"
                            className="btn resume-btn"
                            variants={buttonVariants}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FileText size={20} /> My Resume
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;