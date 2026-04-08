import { Suspense, lazy, useMemo, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, MoveRight } from "lucide-react"
import { heroData } from "../../data/portfolioData"
import MagneticButton from "../ui/MagneticButton"

const HeroScene = lazy(() => import("./HeroScene"))

const HeroSection = () => {
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const [pointer, setPointer] = useState({ x: 50, y: 50 })
  const featureCards = useMemo(() => [heroData.floatingCards[1], heroData.floatingCards[2]], [])

  const handlePointerMove = (event) => {
    if (!sectionRef.current || prefersReducedMotion) {
      return
    }

    const bounds = sectionRef.current.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100
    setPointer({ x, y })
  }

  return (
    <section className="hero-section section-shell" id="home" ref={sectionRef} onPointerMove={handlePointerMove}>
      <div className="hero-cinematic">
        <div className="hero-cinematic__backdrop" aria-hidden="true">
          <div
            className="hero-cinematic__spotlight"
            style={{
              background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(99, 230, 255, 0.2), rgba(99, 230, 255, 0) 26%)`,
            }}
          />
          <div className="hero-cinematic__mesh" />
          <div className="hero-cinematic__particles" />
        </div>

        <div className="hero-cinematic__content">
          <motion.div
            className="hero-cinematic__copy-shell"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-cinematic__copy">
              <h1>
                {heroData.title.map((line, index) => (
                  <motion.span
                    key={line}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 38 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.78,
                      delay: prefersReducedMotion ? 0 : 0.08 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.78, delay: prefersReducedMotion ? 0 : 0.32 }}
              >
                {heroData.description}
              </motion.p>
            </div>

            <motion.div
              className="hero-cinematic__actions"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.42 }}
            >
              <MagneticButton href={heroData.primaryCta.href} variant="primary" icon={<ArrowUpRight size={16} />}>
                {heroData.primaryCta.label}
              </MagneticButton>
              <MagneticButton href={heroData.secondaryCta.href} variant="secondary" icon={<MoveRight size={16} />}>
                {heroData.secondaryCta.label}
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-cinematic__feature-column"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.article
              className="hero-feature hero-feature--primary"
              animate={prefersReducedMotion ? undefined : { y: [0, -7, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hero-feature__visual">
                <Suspense fallback={<div className="hero-feature__visual-fallback" aria-hidden="true" />}>
                  <HeroScene />
                </Suspense>
              </div>

              <div className="hero-feature__body">
                <span>{featureCards[0]?.title}</span>
                <p>{featureCards[0]?.body}</p>
              </div>
            </motion.article>

            <motion.article
              className="hero-feature hero-feature--secondary"
              animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hero-feature__icon" aria-hidden="true">
                <span />
              </div>

              <div className="hero-feature__body">
                <span>{featureCards[1]?.title}</span>
                <p>{featureCards[1]?.body}</p>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
