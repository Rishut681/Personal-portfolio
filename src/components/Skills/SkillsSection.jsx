import { useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  Atom,
  Bot,
  Box,
  Boxes,
  Code2,
  Cuboid,
  Database,
  PenTool,
  Server,
  Sparkles,
  Wind,
} from "lucide-react"
import { skillsData } from "../../data/portfolioData"
import SectionHeading from "../ui/SectionHeading"

const positions = [
  { x: 12, y: 30, size: "small" },
  { x: 23, y: 20, size: "large" },
  { x: 36, y: 30, size: "large" },
  { x: 50, y: 20, size: "large" },
  { x: 64, y: 30, size: "large" },
  { x: 77, y: 20, size: "small" },
  { x: 18, y: 48, size: "large" },
  { x: 32, y: 58, size: "large" },
  { x: 46, y: 48, size: "large" },
  { x: 60, y: 58, size: "large" },
  { x: 74, y: 48, size: "large" },
  { x: 23, y: 75, size: "small" },
  { x: 37, y: 84, size: "large" },
  { x: 51, y: 75, size: "large" },
  { x: 65, y: 84, size: "large" },
  { x: 79, y: 75, size: "small" },
  { x: 9, y: 57, size: "mini" },
  { x: 88, y: 57, size: "mini" },
]

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [0, 6], [1, 6], [1, 7], [2, 7], [2, 8], [3, 8], [3, 9], [4, 9], [4, 10], [5, 10],
  [6, 11], [6, 12], [7, 12], [8, 13], [9, 14], [10, 15],
  [11, 12], [12, 13], [13, 14], [14, 15],
  [16, 0], [16, 6], [17, 5], [17, 10],
]

const iconByLabel = {
  React: Atom,
  "Next.js": Box,
  "Framer Motion": Sparkles,
  "Three.js": Cuboid,
  WebGL: Wind,
  GSAP: Sparkles,
  "Tailwind CSS": Wind,
  TypeScript: Code2,
  "Node.js": Server,
  Prisma: Database,
  GraphQL: Boxes,
  MongoDB: Database,
  PostgreSQL: Database,
  "OpenAI API": Bot,
  "Design Systems": PenTool,
  "UI/UX": PenTool,
  "3D Modeling": Cuboid,
  "Interaction Design": PenTool,
}

const SkillsSection = () => {
  const prefersReducedMotion = useReducedMotion()
  const [activeSkill, setActiveSkill] = useState("Next.js")
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
        eyebrow="Advanced stack"
        title={
          <>
            A constellation of advanced skills
            <br />
            and a motion-driven timeline.
          </>
        }
        description="The stack is shaped like a connected field of craft, engineering, and interaction systems instead of a flat wall of tools."
        align="center"
        className="skills-section__heading"
      />

      <div className="skills-constellation">
        <div className="skills-constellation__glow skills-constellation__glow--left" aria-hidden="true" />
        <div className="skills-constellation__glow skills-constellation__glow--right" aria-hidden="true" />

        <div className="skills-constellation__stars" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <svg className="skills-constellation__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {connections.map(([from, to]) => (
            <line
              key={`${from}-${to}`}
              x1={constellation[from].x}
              y1={constellation[from].y}
              x2={constellation[to].x}
              y2={constellation[to].y}
            />
          ))}
        </svg>

        {constellation.map((skill, index) => {
          const Icon = iconByLabel[skill.label] ?? Sparkles
          return (
            <motion.button
              key={skill.label}
              type="button"
              className={`skills-node skills-node--${skill.size} ${activeSkill === skill.label ? "is-active" : ""}`}
              style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: prefersReducedMotion ? 0 : index * 0.03, duration: 0.45 }}
              whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.04 }}
              onMouseEnter={() => setActiveSkill(skill.label)}
              onFocus={() => setActiveSkill(skill.label)}
            >
              <span className="skills-node__inner">
                <Icon size={skill.size === "mini" ? 14 : 18} strokeWidth={1.8} />
                <strong>{skill.label}</strong>
                <small>{skill.group}</small>
              </span>
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}

export default SkillsSection
