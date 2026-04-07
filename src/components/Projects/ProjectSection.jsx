import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion"
import { animated, to, useSpring } from "@react-spring/web"
import { ArrowUpRight, Github, X } from "lucide-react"
import { projectsData } from "../../data/portfolioData"
import SectionHeading from "../ui/SectionHeading"
import { fadeUp, viewport } from "../../utils/motion"

const ProjectSection = () => {
  const prefersReducedMotion = useReducedMotion()
  const [activeProject, setActiveProject] = useState(null)
  const [featuredProject, ...supportingProjects] = projectsData

  return (
    <section className="projects-section section-shell" id="projects">
      <div className="projects-editorial-head">
        <SectionHeading
          eyebrow="Selected Work"
          title="Case studies framed like an art-directed product exhibition."
          description="The projects are rebuilt around hierarchy, image clarity, and stronger editorial rhythm so each one reads like a real product story instead of a generic portfolio tile."
        />

        <aside className="projects-editorial-note">
          <span>Curator note</span>
          <p>
            One flagship story leads the section, then the supporting work follows in a tighter bento-style composition with clearer
            framing, richer proof, and a stronger sense of premium craft.
          </p>
        </aside>
      </div>

      <div className="projects-exhibition">
        <FeaturedProject project={featuredProject} prefersReducedMotion={prefersReducedMotion} onOpen={() => setActiveProject(featuredProject)} />

        <div className="projects-gallery">
          {supportingProjects.map((project, index) => (
            <SupportingProjectCard
              key={project.id}
              index={index + 2}
              project={project}
              prefersReducedMotion={prefersReducedMotion}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>{activeProject ? <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} /> : null}</AnimatePresence>
    </section>
  )
}

const FeaturedProject = ({ project, prefersReducedMotion, onOpen }) => {
  const [{ x, y, rotateX, rotateY }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    config: { tension: 240, friction: 22 },
  }))

  const handleMove = (event) => {
    if (prefersReducedMotion) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2

    api.start({
      x: offsetX * 0.012,
      y: offsetY * 0.01,
      rotateX: (-offsetY / rect.height) * 3.4,
      rotateY: (offsetX / rect.width) * 4.2,
    })
  }

  const reset = () => api.start({ x: 0, y: 0, rotateX: 0, rotateY: 0 })

  return (
    <motion.article
      className="project-spotlight"
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewport, amount: 0.16 }}
      variants={fadeUp(0, prefersReducedMotion)}
    >
      <animated.button
        type="button"
        className="project-spotlight__inner"
        onClick={onOpen}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        data-magnetic="true"
        style={{
          transform: to(
            [x, y, rotateX, rotateY],
            (xValue, yValue, rx, ry) =>
              `translate3d(${xValue}px, ${yValue}px, 0) perspective(1500px) rotateX(${rx}deg) rotateY(${ry}deg)`
          ),
        }}
      >
        <div className="project-spotlight__panel">
          <div className="project-spotlight__topline">
            <span>01 / flagship</span>
            <small>{project.category}</small>
          </div>

          <div className="project-spotlight__headline">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>

          <div className="project-spotlight__narrative">
            <article>
              <span>Role</span>
              <p>{project.role}</p>
            </article>
            <article>
              <span>Why it matters</span>
              <p>{project.impact}</p>
            </article>
          </div>

          <div className="project-spotlight__rail">
            <div className="project-spotlight__tech">
              {project.tech.slice(0, 5).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-spotlight__metrics">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="project-spotlight__cta">
            <span>Open full case study</span>
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="project-spotlight__media">
          <div className="project-spotlight__screen">
            {project.image ? (
              <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
            ) : (
              <ProjectPoster project={project} className="project-spotlight__poster" />
            )}
          </div>

          <div className="project-spotlight__badges" aria-hidden="true">
            <article>
              <span>Case study</span>
              <strong>{project.beforeAfter.afterLabel}</strong>
            </article>
            <article>
              <span>Outcome</span>
              <strong>{project.metrics[0]?.value}</strong>
            </article>
          </div>
        </div>
      </animated.button>
    </motion.article>
  )
}

const SupportingProjectCard = ({ project, index, prefersReducedMotion, onOpen }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  const [{ x, y, rotateX, rotateY }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    config: { tension: 245, friction: 20 },
  }))

  const handleMove = (event) => {
    if (prefersReducedMotion) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2

    api.start({
      x: offsetX * 0.018,
      y: offsetY * 0.014,
      rotateX: (-offsetY / rect.height) * 5,
      rotateY: (offsetX / rect.width) * 5.8,
    })
  }

  const reset = () => api.start({ x: 0, y: 0, rotateX: 0, rotateY: 0 })

  return (
    <motion.article
      ref={cardRef}
      className={`project-card project-card--${project.accent}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewport, amount: 0.18 }}
      variants={fadeUp(0, prefersReducedMotion)}
    >
      <animated.button
        type="button"
        className="project-card__inner"
        onClick={onOpen}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        data-magnetic="true"
        style={{
          transform: to(
            [x, y, rotateX, rotateY],
            (xValue, yValue, rx, ry) =>
              `translate3d(${xValue}px, ${yValue}px, 0) perspective(1300px) rotateX(${rx}deg) rotateY(${ry}deg)`
          ),
        }}
      >
        <div className="project-card__media">
          <div className="project-card__frame">
            {project.image ? <img src={project.image} alt={project.title} loading="lazy" decoding="async" /> : <ProjectPoster project={project} className="project-card__poster" />}
          </div>
        </div>

        <div className="project-card__content">
          <div className="project-card__topline">
            <span>{String(index).padStart(2, "0")}</span>
            <small>{project.category}</small>
          </div>

          <div className="project-card__headline">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>

          <div className="project-card__proof">
            <article>
              <span>Role</span>
              <strong>{project.role}</strong>
            </article>
            <article>
              <span>Impact</span>
              <strong>{project.metrics[0]?.value}</strong>
            </article>
          </div>

          <div className="project-card__tech">
            {project.tech.slice(0, 4).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="project-card__footer">
            <div className="project-card__metrics">
              {project.metrics.slice(0, 2).map((metric) => (
                <Metric key={metric.label} metric={metric} isInView={isInView} />
              ))}
            </div>

            <div className="project-card__cta">
              <span>Open case study</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </animated.button>
    </motion.article>
  )
}

const Metric = ({ metric, isInView }) => {
  const [displayValue, setDisplayValue] = useState(metric.value)

  useEffect(() => {
    if (!isInView) {
      return undefined
    }

    const numeric = Number.parseInt(metric.value, 10)
    if (Number.isNaN(numeric)) {
      setDisplayValue(metric.value)
      return undefined
    }

    let frame = 0
    let animationFrame = 0
    const totalFrames = 24

    const tick = () => {
      frame += 1
      const next = Math.round((numeric * frame) / totalFrames)
      setDisplayValue(metric.value.replace(String(numeric), String(next)))
      if (frame < totalFrames) {
        animationFrame = window.requestAnimationFrame(tick)
      }
    }

    animationFrame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [isInView, metric.value])

  return (
    <div>
      <strong>{displayValue}</strong>
      <span>{metric.label}</span>
    </div>
  )
}

const ProjectPoster = ({ project, className }) => (
  <div className={className}>
    <span>{project.category}</span>
    <strong>{project.title}</strong>
    <p>{project.tech.join(" / ")}</p>
  </div>
)

const ProjectModal = ({ project, onClose }) => {
  const [slider, setSlider] = useState(58)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleEscape)
    }
  }, [onClose])

  return (
    <motion.div className="project-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className={`project-modal__panel project-modal__panel--${project.accent}`}
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.98 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-modal__chrome">
          <div className="project-modal__eyebrow">
            <span>{project.category}</span>
            <small>Case study view</small>
          </div>

          <button type="button" className="project-modal__close" onClick={onClose} aria-label="Close project">
            <X size={18} />
          </button>
        </div>

        <div className="project-modal__masthead">
          <div className="project-modal__lead">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>

          <div className="project-modal__links">
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <Github size={15} />
              GitHub
            </a>
            {project.liveDemoLink ? (
              <a href={project.liveDemoLink} target="_blank" rel="noreferrer">
                <ArrowUpRight size={15} />
                Live experience
              </a>
            ) : null}
          </div>
        </div>

        <div className="project-modal__hero">
          <div className="project-modal__summaryrail">
            <article>
              <span>Role</span>
              <p>{project.role}</p>
            </article>
            <article>
              <span>Core shift</span>
              <p>{project.beforeAfter.afterLabel}</p>
            </article>
            <article>
              <span>Why it matters</span>
              <p>{project.impact}</p>
            </article>
          </div>

          <div className="project-modal__media">
            {project.image ? <img src={project.image} alt={project.title} loading="lazy" decoding="async" /> : <ProjectPoster project={project} className="project-modal__poster" />}
          </div>
        </div>

        <div className="project-modal__details">
          <article>
            <span>Problem</span>
            <p>{project.problem}</p>
          </article>
          <article>
            <span>Solution</span>
            <p>{project.solution}</p>
          </article>
          <article>
            <span>Outcome</span>
            <p>{project.impact}</p>
          </article>
        </div>

        <div className="project-modal__slider">
          <div className="project-modal__slider-head">
            <strong>Product shift</strong>
            <span>Drag to compare the narrative change</span>
          </div>

          <div className="project-modal__comparison">
            <div className="project-modal__comparison-before">
              <h4>{project.beforeAfter.beforeLabel}</h4>
              <p>Disconnected flows, lower clarity, and weaker product confidence.</p>
            </div>

            <div className="project-modal__comparison-after" style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}>
              <h4>{project.beforeAfter.afterLabel}</h4>
              <p>Stronger narrative, more coherent workflows, and a more premium interaction model.</p>
            </div>

            <div className="project-modal__comparison-handle" style={{ left: `${slider}%` }} />
          </div>

          <input
            type="range"
            min="20"
            max="80"
            value={slider}
            onChange={(event) => setSlider(Number(event.target.value))}
            aria-label="Compare before and after"
          />
        </div>

        <div className="project-modal__footer">
          <div className="project-modal__tech">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="project-modal__metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectSection
