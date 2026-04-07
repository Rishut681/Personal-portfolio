import { motion, useReducedMotion } from "framer-motion"
import { siteMeta } from "../../data/portfolioData"

const PageLoader = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className="page-loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: prefersReducedMotion ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] },
      }}
      aria-hidden="true"
    >
      <motion.div
        className="page-loader__inner"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -18 }}
      >
        <span>{siteMeta.brand}</span>
        <strong>Interactive portfolio experience loading</strong>
      </motion.div>
    </motion.div>
  )
}

export default PageLoader
