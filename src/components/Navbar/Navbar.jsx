import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { navItems, siteMeta } from "../../data/portfolioData"
import MagneticButton from "../ui/MagneticButton"

const Navbar = () => {
  const prefersReducedMotion = useReducedMotion()
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActiveLink(visible.target.id)
        }
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: "-20% 0px -55% 0px" }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand" data-magnetic="true">
          <span className="navbar__brand-mark" />
          <div>
            <strong>{siteMeta.brand}</strong>
            <small>{siteMeta.role}</small>
          </div>
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__links list-reset">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className={item.id === activeLink ? "is-active" : ""} data-magnetic="true">
                  {item.id === activeLink ? <motion.span className="navbar__activeblob" layoutId="nav-active-blob" /> : null}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <MagneticButton href="#contact" variant="ghost" className="navbar__cta">
            Hire Me
          </MagneticButton>
          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div className="navbar-mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className="navbar-mobile__panel"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, rotateY: 18, x: 40 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotateY: 18, x: 40 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={prefersReducedMotion ? false : { opacity: 0, rotateX: 14, y: 16 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.06 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
