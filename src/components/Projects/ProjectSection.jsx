import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { projectsData } from "../../data/portfolioData"
import SectionHeading from "../ui/SectionHeading"
import { fadeUp, viewport } from "../../utils/motion"

const ProjectSection = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="projects-section section-shell" id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Case studies framed like an art-directed product exhibition."
        description="The projects are presented as featured product stories with stronger image priority, clearer framing, and a more editorial rhythm."
        align="center"
        className="projects-section__heading"
      />

      <div className="projects-showcase">
        {projectsData.slice(0, 4).map((project, index) => (
          <motion.article
            key={project.id}
            className={`project-row ${index % 2 === 1 ? "project-row--reverse" : ""}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ ...viewport, amount: 0.2 }}
            variants={fadeUp(index * 0.05, prefersReducedMotion)}
          >
            <div className="project-row__media">
              <div className="project-row__screen">
                {project.image ? (
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                ) : (
                  <ProjectPoster project={project} className="project-row__poster" />
                )}
              </div>

              <div className="project-row__note">
                <span>{project.beforeAfter.afterLabel}</span>
                <p>{project.problem}</p>
              </div>
            </div>

            <div className="project-row__panel">
              <div className="project-row__topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{project.category}</small>
              </div>

              <h3>{project.title}</h3>
              <p className="project-row__summary">{project.summary}</p>

              <div className="project-row__details">
                <article>
                  <span>Role</span>
                  <p>{project.role}</p>
                </article>
                <article>
                  <span>Why it matters</span>
                  <p>{project.impact}</p>
                </article>
              </div>

              <div className="project-row__tech">
                {project.tech.slice(0, 5).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-row__links">
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  <Github size={15} />
                  Code
                </a>
                {project.liveDemoLink ? (
                  <a href={project.liveDemoLink} target="_blank" rel="noreferrer">
                    <ArrowUpRight size={15} />
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

const ProjectPoster = ({ project, className }) => (
  <div className={className}>
    <span>{project.category}</span>
    <strong>{project.title}</strong>
    <p>{project.tech.join(" / ")}</p>
  </div>
)

export default ProjectSection
