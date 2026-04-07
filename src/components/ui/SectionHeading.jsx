import { motion, useReducedMotion } from "framer-motion"
import { fadeUp } from "../../utils/motion"

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={`section-heading section-heading--${align} ${className}`.trim()}
      variants={fadeUp(0, prefersReducedMotion)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      {eyebrow ? <span className="section-heading__eyebrow">{eyebrow}</span> : null}
      <h2 className="section-heading__title">{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </motion.div>
  )
}

export default SectionHeading
