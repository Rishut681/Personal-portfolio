import { motion, useScroll, useSpring } from "framer-motion"

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    mass: 0.45,
  })

  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

export default ScrollProgress
