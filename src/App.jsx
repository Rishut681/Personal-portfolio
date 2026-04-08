"use client"

import { Suspense, lazy, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import AboutSection from "./components/About/AboutSection"
import ContactSection from "./components/Contact/ContactSection"
import Footer from "./components/Footer/Footer"
import HeroSection from "./components/Hero/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import ProjectsSection from "./components/Projects/ProjectSection"
import SkillsSection from "./components/Skills/SkillsSection"

const ExperienceSection = lazy(() => import("./components/Experience/ExperienceSection"))

function App() {
  const { scrollYProgress } = useScroll()
  const ambientY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const orbX = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"])
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"])

  useEffect(() => {
    document.documentElement.dataset.theme = "dark"
  }, [])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="app-ambient" aria-hidden="true">
        <motion.div className="app-ambient__gradient" style={{ y: ambientY }} />
        <motion.div className="app-ambient__orb" style={{ x: orbX, y: orbY }} />
        <div className="app-ambient__mesh" />
        <div className="app-ambient__noise" />
      </div>

      <Navbar />

      <main id="main-content" className="page-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <Suspense fallback={null}>
          <ExperienceSection />
        </Suspense>
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
