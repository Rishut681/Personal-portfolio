import { motion, useReducedMotion } from "framer-motion"
import { aboutData } from "../../data/portfolioData"
import SectionHeading from "../ui/SectionHeading"
import { fadeUp, viewport } from "../../utils/motion"

const AboutSection = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="about-section section-shell" id="about">
      <SectionHeading
        eyebrow={aboutData.eyebrow}
        title={aboutData.title}
        description={aboutData.description}
        className="about-section__heading"
      />

      <div className="about-layout">
        <motion.article
          className="about-manifesto"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp(0.06, prefersReducedMotion)}
        >
          <span>Point of view</span>
          <h3>{aboutData.spotlight}</h3>
          <div className="about-manifesto__copy">
            {aboutData.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.article>

        <motion.div
          className="about-sidebar"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp(0.12, prefersReducedMotion)}
        >
          <div className="about-statsband">
            {aboutData.stats.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <div className="about-practices">
            {aboutData.practices.map((item) => (
              <article key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
