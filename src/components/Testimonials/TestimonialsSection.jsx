import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { testimonialData } from "../../data/portfolioData"
import SectionHeading from "../ui/SectionHeading"

const trustStrip = ["Product UX", "Motion Systems", "Frontend Architecture", "AI Product Thinking", "Premium Delivery"]

const TestimonialsSection = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonialData.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  const getIndex = (offset) => (active + offset + testimonialData.length) % testimonialData.length

  return (
    <section className="testimonials-section section-shell" id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="High-trust signals presented with the same care as the rest of the work."
        description="I kept this section abstract but premium so it supports the experience without feeling like stock testimonial clutter."
      />

      <div className="testimonials-stage">
        <div className="testimonials-carousel">
          {[-1, 0, 1].map((offset) => {
            const item = testimonialData[getIndex(offset)]
            const isActive = offset === 0

            return (
              <motion.article
                key={`${item.name}-${offset}`}
                className={`testimonial-card ${isActive ? "is-active" : ""}`}
                animate={{
                  opacity: isActive ? 1 : 0.52,
                  scale: isActive ? 1 : 0.9,
                  y: isActive ? 0 : 18,
                }}
                transition={{ duration: 0.45 }}
              >
                <div className="testimonial-card__portrait" aria-hidden="true">
                  <span />
                </div>
                <blockquote>{item.quote}</blockquote>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </motion.article>
            )
          })}
        </div>

        <div className="testimonial-controls">
          <button type="button" onClick={() => setActive((current) => (current - 1 + testimonialData.length) % testimonialData.length)}>
            <ChevronLeft size={16} />
          </button>
          <button type="button" onClick={() => setActive((current) => (current + 1) % testimonialData.length)}>
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonialData.map((item, index) => (
            <button key={item.name} type="button" className={index === active ? "is-active" : ""} onClick={() => setActive(index)} />
          ))}
        </div>

        <div className="testimonial-marquee" aria-hidden="true">
          <div>
            {[...trustStrip, ...trustStrip].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
