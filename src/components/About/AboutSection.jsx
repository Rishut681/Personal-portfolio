import { motion, useReducedMotion } from "framer-motion"
import { aboutData } from "../../data/portfolioData"
import SectionHeading from "../ui/SectionHeading"
import { fadeUp, viewport } from "../../utils/motion"

const AboutSection = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="about-section section-shell" id="about">
      <SectionHeading eyebrow={aboutData.eyebrow} title={aboutData.title} description={aboutData.description} />

      <motion.div
        className="about-statsband"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp(0, prefersReducedMotion)}
      >
        {aboutData.stats.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </motion.div>

      <div className="about-editorial">
        <motion.div
          className="about-editorial__manifesto"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp(0.05, prefersReducedMotion)}
        >
          <span className="about-editorial__eyebrow">Point of view</span>
          <h3>{aboutData.spotlight}</h3>

          <div className="about-editorial__copy">
            {aboutData.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="about-editorial__panel"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp(0.12, prefersReducedMotion)}
        >
          <div className="about-editorial__panel-head">
            <span>How I work</span>
            <h3>Art direction, interaction design, and frontend systems treated as one discipline.</h3>
          </div>

          <div className="about-editorial__practices">
            {aboutData.practices.map((item) => (
              <article key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="about-editorial__tags">
            {aboutData.competencies.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

export default AboutSection
