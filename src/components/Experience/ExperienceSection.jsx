import { motion, useReducedMotion } from "framer-motion"
import { experienceData } from "../../data/portfolioData"

const ExperienceSection = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="experience-section section-shell" id="timeline">
      <div className="experience-timeline">
        <div className="experience-timeline__rail" aria-hidden="true" />
        {experienceData.map((item, index) => (
          <motion.article
            key={`${item.year}-${item.title}`}
            className="experience-milestone"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: prefersReducedMotion ? 0 : index * 0.05 }}
          >
            <div className="experience-milestone__dot" aria-hidden="true" />
            <span>{item.year}</span>
            <h3>{item.title}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
