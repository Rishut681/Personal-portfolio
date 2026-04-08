import { Github, Linkedin, Mail } from "lucide-react"
import { navItems, siteMeta } from "../../data/portfolioData"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner section-shell">
        <div className="footer__top">
          <div className="footer__brand">
            <span>{siteMeta.brand}</span>
            <p>{siteMeta.role}</p>
          </div>

          <div className="footer__cta">
            <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
            <small>{siteMeta.location}</small>
          </div>
        </div>

        <div className="footer__bottom">
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
        </div>

        <div className="footer__legal">
          <span>{siteMeta.name}</span>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
