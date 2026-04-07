export const motionTokens = {
  ease: [0.22, 1, 0.36, 1],
  easeSoft: [0.16, 1, 0.3, 1],
  duration: {
    fast: 0.28,
    base: 0.56,
    slow: 0.9,
    hero: 1.1,
  },
  spring: {
    type: "spring",
    stiffness: 140,
    damping: 18,
    mass: 0.85,
  },
}

export const viewport = {
  once: true,
  amount: 0.25,
}

export const fadeUp = (delay = 0, reducedMotion = false) => ({
  hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: reducedMotion
      ? { duration: 0 }
      : {
          duration: motionTokens.duration.base,
          ease: motionTokens.ease,
          delay,
        },
  },
})

export const fadeIn = (delay = 0, reducedMotion = false) => ({
  hidden: reducedMotion ? { opacity: 1 } : { opacity: 0 },
  visible: {
    opacity: 1,
    transition: reducedMotion
      ? { duration: 0 }
      : {
          duration: motionTokens.duration.base,
          ease: motionTokens.ease,
          delay,
        },
  },
})

export const staggerContainer = (stagger = 0.12, delayChildren = 0, reducedMotion = false) => ({
  hidden: {},
  visible: {
    transition: reducedMotion
      ? { staggerChildren: 0, delayChildren: 0 }
      : {
          staggerChildren: stagger,
          delayChildren,
        },
  },
})

export const scaleIn = (delay = 0, reducedMotion = false) => ({
  hidden: reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: reducedMotion
      ? { duration: 0 }
      : {
          duration: motionTokens.duration.base,
          ease: motionTokens.easeSoft,
          delay,
        },
  },
})
