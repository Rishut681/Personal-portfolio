import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

const springConfig = {
  stiffness: 180,
  damping: 16,
  mass: 0.6,
}

const MagneticButton = ({
  href,
  children,
  className = "",
  variant = "primary",
  icon,
  target,
  rel,
  type = "button",
  ...rest
}) => {
  const prefersReducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMove = (event) => {
    if (prefersReducedMotion) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2

    x.set((offsetX / rect.width) * 18)
    y.set((offsetY / rect.height) * 18)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const sharedProps = {
    className: `magnetic-button magnetic-button--${variant} ${className}`.trim(),
    "data-magnetic": "true",
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onBlur: handleLeave,
    style: { x: springX, y: springY, ...(rest.style || {}) },
    whileHover: prefersReducedMotion ? undefined : { scale: 1.01 },
    whileTap: prefersReducedMotion ? undefined : { scale: 0.985 },
    ...rest,
  }

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...sharedProps}>
        <span className="magnetic-button__label">{children}</span>
        {icon ? <span className="magnetic-button__icon">{icon}</span> : null}
        <span className="magnetic-button__glow" aria-hidden="true" />
      </motion.a>
    )
  }

  return (
    <motion.button type={type} {...sharedProps}>
      <span className="magnetic-button__label">{children}</span>
      {icon ? <span className="magnetic-button__icon">{icon}</span> : null}
      <span className="magnetic-button__glow" aria-hidden="true" />
    </motion.button>
  )
}

export default MagneticButton
