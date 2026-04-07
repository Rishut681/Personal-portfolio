import { Suspense, lazy, useEffect, useMemo, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { ArrowDown, ArrowUpRight, Download, MoveRight } from "lucide-react"
import { heroData } from "../../data/portfolioData"
import MagneticButton from "../ui/MagneticButton"

const HeroScene = lazy(() => import("./HeroScene"))

const HeroSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])
  const prefersReducedMotion = useReducedMotion()
  const [pointer, setPointer] = useState({ x: 50, y: 50 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const stageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"])
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])
  const proofOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.36])

  useEffect(() => {
    if (prefersReducedMotion || !titleRef.current || !sectionRef.current) {
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.querySelectorAll("span"), {
        yPercent: 120,
        opacity: 0,
        duration: 1.1,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.32,
      })

      gsap.from(".hero-cinematic__meta span, .hero-cinematic__copy > *, .hero-cinematic__dock > *", {
        opacity: 0,
        y: 22,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.1,
      })

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.94,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.45,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  const floatingCards = useMemo(() => heroData.floatingCards, [])

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
              background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(99, 230, 255, 0.22), rgba(99, 230, 255, 0) 28%)`,
            }}
          />
          <div className="hero-cinematic__mesh" />
          <div className="hero-cinematic__particles" />
        </div>

        <div className="hero-cinematic__content">
          <motion.div className="hero-cinematic__copy-shell" style={{ y: copyY }}>
            <div className="hero-cinematic__meta">
              <span>{heroData.eyebrow}</span>
              <span>{heroData.trustLine}</span>
            </div>

            <div className="hero-cinematic__copy">
              <h1 ref={titleRef}>
                {heroData.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p>{heroData.description}</p>
            </div>
          </motion.div>

          <motion.div className="hero-cinematic__stage" style={{ y: stageY }}>
            <Suspense fallback={<div className="hero-cinematic__stage-fallback" aria-hidden="true" />}>
              <HeroScene />
            </Suspense>

            <div className="hero-cinematic__frame" aria-hidden="true">
              <span>Realtime mood lighting</span>
              <strong>Depth, glass, atmosphere</strong>
            </div>

            <div className="hero-cinematic__floating">
              {floatingCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  ref={(node) => {
                    cardsRef.current[index] = node
                  }}
                  className={`hero-cinematic__card hero-cinematic__card--${index + 1}`}
                  whileHover={prefersReducedMotion ? undefined : { y: -6, rotateZ: index % 2 === 0 ? -1 : 1 }}
                >
                  <span>{card.title}</span>
                  <p>{card.body}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div className="hero-cinematic__dock" style={{ opacity: proofOpacity }}>
            <div className="hero-cinematic__actions">
              <MagneticButton href={heroData.primaryCta.href} variant="primary" icon={<ArrowUpRight size={16} />}>
                {heroData.primaryCta.label}
              </MagneticButton>
              <MagneticButton href={heroData.secondaryCta.href} variant="secondary" icon={<MoveRight size={16} />}>
                {heroData.secondaryCta.label}
              </MagneticButton>
              <MagneticButton
                href={heroData.resumeCta.href}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                icon={<Download size={16} />}
              >
                {heroData.resumeCta.label}
              </MagneticButton>
            </div>

            <div className="hero-cinematic__stats">
              {heroData.quickStats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="hero-cinematic__proof" style={{ opacity: proofOpacity }}>
          {heroData.proofStrip.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>

        <a className="hero-cinematic__scrollcue" href="#projects" data-magnetic="true">
          <span>Scroll to explore</span>
          <strong>
            Projects first
            <ArrowDown size={15} />
          </strong>
        </a>
      </div>
    </section>
  )
}

export default HeroSection
