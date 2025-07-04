import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './HeroSection.css'; // We'll create this CSS file next

const HeroSection = () => {
    // Animation variants for staggered appearance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between child animations
                delayChildren: 0.5,   // Initial delay before first child starts
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring', // Use a spring physics animation
                damping: 10,
                stiffness: 100,
            },
        },
    };

    return (
      <section className="hero-section">
        <motion.section
          className="hero-content"
          id= "home"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm <span className="highlight">Rishu Raj</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="hero-tagline">
            <TypeAnimation
              sequence={[
                "A Full-Stack Developer",
                1500, // wait 1.5s
                "Passionate about building intuitive web experiences.",
                1500, // wait 1.5s
                "Bringing ideas to life with code.",
                1500, // wait 1.5s
                'Always chasing the "aha" moment, where coding meets creativity.',
                1500, // wait 1.5s
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={50} // Typing speed
              deleteSpeed={20} // Deleting speed
            />
          </motion.div>

          <motion.p variants={itemVariants} className="hero-description">
            Passionate about crafting modern web solutions, I build dynamic and
            scalable applications with a keen eye for both elegant user
            experiences and efficient back-end systems.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <motion.a
              href="#projects" // Link to your projects section
              className="btn primary-btn"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact" // Link to your contact section
              className="btn secondary-btn"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.section>
      </section>
    );
};

export default HeroSection;