import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const radius = 28
const circumference = 2 * Math.PI * radius

const CircularProgress = () => {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.5,
  })
  const dashOffset = useTransform(progress, (value) => circumference - value * circumference)
  const percentage = useTransform(progress, (value) => `${Math.round(value * 100)}%`)

  return (
    <div className="circular-progress" aria-hidden="true">
      <svg viewBox="0 0 72 72">
        <circle className="circular-progress__track" cx="36" cy="36" r={radius} />
        <motion.circle
          className="circular-progress__path"
          cx="36"
          cy="36"
          r={radius}
          style={{ strokeDashoffset: dashOffset }}
          strokeDasharray={circumference}
        />
      </svg>
      <motion.span className="circular-progress__label">{percentage}</motion.span>
    </div>
  )
}

export default CircularProgress
