import { useEffect, useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { experienceData } from "../../data/portfolioData"
import SectionHeading from "../ui/SectionHeading"

gsap.registerPlugin(ScrollTrigger)

const ExperienceSection = () => {
  const trackRef = useRef(null)
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || !trackRef.current || !sectionRef.current) {
      return undefined
    }

    const track = trackRef.current
    const section = sectionRef.current
    const distance = Math.max(0, track.scrollWidth - window.innerWidth + 96)

    const animation = gsap.to(track, {
      x: -distance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${distance || 1}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    })

    return () => {
      animation.scrollTrigger?.kill()
      animation.kill()
    }
  }, [prefersReducedMotion])

  return (
    <section className="experience-section section-shell" id="timeline" ref={sectionRef}>
      <SectionHeading
        eyebrow="Experience timeline"
        title="A horizontal narrative of what I've been building and where the craft is heading."
        description="This section uses a pinned horizontal motion system on desktop to feel more like moving through a gallery than jumping between static blocks."
      />

      <div className="experience-trackwrap">
        <div className="experience-track" ref={trackRef}>
          <div className="experience-rail" aria-hidden="true" />
          {experienceData.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.title}`}
              className={`experience-card ${index % 2 === 0 ? "experience-card--upper" : "experience-card--lower"}`}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="experience-card__dot" aria-hidden="true" />
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="experience-progress" aria-hidden="true">
        <span>Discover</span>
        <span>Build</span>
        <span>Refine</span>
        <span>Ship</span>
      </div>
    </section>
  )
}

export default ExperienceSection
