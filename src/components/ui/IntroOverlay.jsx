import { motion, useReducedMotion } from "framer-motion"
import { siteMeta } from "../../data/portfolioData"
import { motionTokens } from "../../utils/motion"

const lines = ["Strategy", "Motion", "Frontend craft"]

const IntroOverlay = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className="intro-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: prefersReducedMotion ? -8 : -40,
        transition: {
          duration: prefersReducedMotion ? 0.2 : motionTokens.duration.slow,
          ease: motionTokens.ease,
        },
      }}
      aria-hidden="true"
    >
      <motion.div
        className="intro-overlay__inner"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: prefersReducedMotion ? 0 : 0.08,
              delayChildren: prefersReducedMotion ? 0 : 0.08,
            },
          },
        }}
      >
        <motion.span
          className="intro-overlay__brand"
          variants={{
            hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: motionTokens.ease },
            },
          }}
        >
          {siteMeta.brand}
        </motion.span>
        <div className="intro-overlay__lines">
          {lines.map((line) => (
            <motion.span
              key={line}
              variants={{
                hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 22 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: motionTokens.ease },
                },
              }}
            >
              {line}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default IntroOverlay
