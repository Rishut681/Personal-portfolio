import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { footerData, navItems, siteMeta } from "../../data/portfolioData"
import MagneticButton from "../ui/MagneticButton"
import { fadeUp, staggerContainer } from "../../utils/motion"

const Footer = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <footer className="footer">
      <motion.div
        className="footer__inner section-shell"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={staggerContainer(0.1, 0.08, prefersReducedMotion)}
      >
        <motion.div className="footer__cta surface-card" variants={fadeUp(0, prefersReducedMotion)}>
          <div>
            <span className="footer__kicker">{footerData.kicker}</span>
            <h2>{footerData.title}</h2>
            <p>{footerData.blurb}</p>
          </div>

          <MagneticButton href="#contact" variant="primary" icon={<ArrowUpRight size={16} strokeWidth={2.2} />}>
            Book a project
          </MagneticButton>
        </motion.div>

        <motion.div className="footer__bottom" variants={fadeUp(0.06, prefersReducedMotion)}>
          <div className="footer__brand">
            <span>{siteMeta.brand}</span>
            <p>{siteMeta.role}</p>
            <small>{siteMeta.availability}</small>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {navItems.map((item) => (
              <a key={item.id} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            <a href={`mailto:${siteMeta.email}`} aria-label="Email">
              <Mail size={16} />
            </a>
            <a href={siteMeta.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div className="footer__tags" variants={fadeUp(0.08, prefersReducedMotion)}>
          <span>Portfolio systems</span>
          <span>Motion-led interfaces</span>
          <span>Frontend architecture</span>
          <span>Interactive product stories</span>
        </motion.div>

        <motion.div className="footer__legal" variants={fadeUp(0.1, prefersReducedMotion)}>
          <span>{siteMeta.name}</span>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
