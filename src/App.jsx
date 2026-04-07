"use client"

import { Suspense, lazy, useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AboutSection from "./components/About/AboutSection"
import ContactSection from "./components/Contact/ContactSection"
import Footer from "./components/Footer/Footer"
import HeroSection from "./components/Hero/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import ProjectsSection from "./components/Projects/ProjectSection"
import SkillsSection from "./components/Skills/SkillsSection"
import CircularProgress from "./components/ui/CircularProgress"
import CommandPalette from "./components/ui/CommandPalette"
import CustomCursor from "./components/ui/CustomCursor"
import PageLoader from "./components/ui/PageLoader"

gsap.registerPlugin(ScrollTrigger)

const ExperienceSection = lazy(() => import("./components/Experience/ExperienceSection"))
const TestimonialsSection = lazy(() => import("./components/Testimonials/TestimonialsSection"))

function App() {
  const prefersReducedMotion = useReducedMotion()
  const [showLoader, setShowLoader] = useState(!prefersReducedMotion)
  const [theme, setTheme] = useState("dark")
  const { scrollYProgress } = useScroll()
  const ambientY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"])
  const orbX = useTransform(scrollYProgress, [0, 1], ["-10%", "12%"])
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"])

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const storedTheme = window.localStorage.getItem("portfolio-theme")
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    document.documentElement.dataset.theme = theme
    window.localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setShowLoader(false)
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [prefersReducedMotion])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <CustomCursor />
      <CircularProgress />
      <CommandPalette />

      <div className="app-ambient" aria-hidden="true">
        <motion.div className="app-ambient__gradient" style={{ y: ambientY }} />
        <motion.div className="app-ambient__orb" style={{ x: orbX, y: orbY }} />
        <div className="app-ambient__mesh" />
        <div className="app-ambient__noise" />
      </div>

      <AnimatePresence>{showLoader ? <PageLoader key="loader" /> : null}</AnimatePresence>

      <Navbar theme={theme} onThemeToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} />

      <main id="main-content" className="page-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <div className="section-transition" aria-hidden="true">
          <span>From product stories to systems thinking</span>
        </div>
        <SkillsSection />
        <Suspense fallback={null}>
          <ExperienceSection />
          <TestimonialsSection />
        </Suspense>
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
