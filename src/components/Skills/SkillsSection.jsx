import { useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { skillsData, workflowPillars } from "../../data/portfolioData"
import SectionHeading from "../ui/SectionHeading"
import { fadeUp, viewport } from "../../utils/motion"

const positions = [
  { x: 14, y: 22 },
  { x: 30, y: 12 },
  { x: 50, y: 18 },
  { x: 70, y: 12 },
  { x: 84, y: 24 },
  { x: 18, y: 54 },
  { x: 38, y: 46 },
  { x: 56, y: 56 },
  { x: 74, y: 44 },
  { x: 88, y: 62 },
  { x: 28, y: 78 },
  { x: 48, y: 72 },
  { x: 64, y: 84 },
  { x: 82, y: 78 },
]

const SkillsSection = () => {
  const prefersReducedMotion = useReducedMotion()
  const [activeSkill, setActiveSkill] = useState(skillsData[0])
  const constellation = useMemo(
    () =>
      skillsData.map((skill, index) => ({
        ...skill,
        ...positions[index],
      })),
    []
  )

  return (
    <section className="skills-section section-shell" id="skills">
      <SectionHeading
        eyebrow="Skills visualization"
        title="A live constellation of the tools and practices behind the work."
        description="Instead of another static logo grid, this section maps the stack as a network of related capabilities: frontend craft, motion, backend structure, and AI-aware product thinking."
      />

      <div className="skills-ecosystem">
        <div className="skills-constellation">
          <svg className="skills-constellation__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {constellation.slice(0, -1).map((skill, index) => (
              <line
                key={skill.label}
                x1={skill.x}
                y1={skill.y}
                x2={constellation[index + 1].x}
                y2={constellation[index + 1].y}
              />
            ))}
          </svg>

          {constellation.map((skill, index) => (
            <motion.button
              key={skill.label}
              type="button"
              className={`skills-node skills-node--${skill.group.toLowerCase()} ${activeSkill.label === skill.label ? "is-active" : ""}`}
              style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ delay: prefersReducedMotion ? 0 : index * 0.04 }}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.08, y: -4 }}
              onMouseEnter={() => setActiveSkill(skill)}
              onFocus={() => setActiveSkill(skill)}
            >
              <strong>{skill.label}</strong>
              <span>{skill.group}</span>
            </motion.button>
          ))}
        </div>

        <motion.aside
          className="skills-detail"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp(0.06, prefersReducedMotion)}
        >
          <span>Current focus</span>
          <h3>{activeSkill.label}</h3>
          <p>
            {activeSkill.label} sits inside the {activeSkill.group.toLowerCase()} layer of the stack and supports the kind of
            immersive product work shown throughout this portfolio.
          </p>
          <div className="skills-detail__meta">
            <strong>{activeSkill.group}</strong>
            <small>Hover or focus other nodes to inspect the constellation.</small>
          </div>
        </motion.aside>
      </div>

      <div className="skills-principles">
        {workflowPillars.map((item) => (
          <motion.article
            key={item.title}
            className="skills-principles__item"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp(0, prefersReducedMotion)}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
