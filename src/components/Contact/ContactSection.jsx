import { useState } from "react"
import emailjs from "emailjs-com"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react"
import { budgetMarks, contactData, contactFormConfig, siteMeta } from "../../data/portfolioData"
import MagneticButton from "../ui/MagneticButton"
import { fadeUp, staggerContainer, viewport } from "../../utils/motion"

const initialState = {
  from_name: "",
  from_email: "",
  project_type: "portfolio",
  budget_range: 3000,
  message: "",
}

const formatBudget = (value) => {
  if (value >= 10000) {
    return "$10k+"
  }

  return `$${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}k`
}

const ContactSection = () => {
  const prefersReducedMotion = useReducedMotion()
  const [formData, setFormData] = useState(initialState)
  const [status, setStatus] = useState("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      await emailjs.send(
        contactFormConfig.serviceId,
        contactFormConfig.templateId,
        formData,
        contactFormConfig.publicKey
      )

      setStatus("success")
      setFormData(initialState)
    } catch {
      setStatus("error")
      setErrorMessage("The message could not be sent right now. Email works as a backup.")
    }
  }

  return (
    <section className="contact-section section-shell" id="contact">
      <motion.div
        className="contact-slab"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer(0.1, 0.08, prefersReducedMotion)}
      >
        <motion.div className="contact-slab__intro" variants={fadeUp(0, prefersReducedMotion)}>
          <span className="contact-slab__eyebrow">{contactData.eyebrow}</span>
          <h2>{contactData.title}</h2>
          <p>{contactData.description}</p>

          <div className="contact-slab__lines">
            <div>
              <span>Response</span>
              <strong>{contactData.responsePromise}</strong>
            </div>
            <div>
              <span>Availability</span>
              <strong>{contactData.availability}</strong>
            </div>
          </div>

          <div className="contact-slab__contactlist">
            <a href={`mailto:${siteMeta.email}`}>
              <Mail size={16} />
              {siteMeta.email}
            </a>
            <span>
              <MapPin size={16} />
              {siteMeta.location}
            </span>
          </div>
        </motion.div>

        <motion.form className="contact-slab__form" onSubmit={handleSubmit} variants={fadeUp(0.08, prefersReducedMotion)}>
          <div className="contact-slab__form-head">
            <span>Project inquiry</span>
            <p>Share the brief and I'll shape the right direction, interaction approach, and build scope.</p>
          </div>

          <div className="contact-slab__grid">
            <label>
              <span>Name</span>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <label>
            <span>Project type</span>
            <select name="project_type" value={formData.project_type} onChange={handleChange} required>
              <option value="portfolio">Portfolio / personal brand</option>
              <option value="marketing">Marketing site / launch page</option>
              <option value="product">Product UI / dashboard</option>
              <option value="frontend">Frontend implementation partner</option>
            </select>
          </label>

          <label className="contact-slab__budget">
            <div className="contact-slab__budget-head">
              <span>Budget range</span>
              <strong>{formatBudget(Number(formData.budget_range))}</strong>
            </div>
            <input
              type="range"
              name="budget_range"
              min="1500"
              max="10000"
              step="500"
              value={formData.budget_range}
              onChange={handleChange}
            />
            <div className="contact-slab__budget-marks" aria-hidden="true">
              {budgetMarks.map((mark) => (
                <span key={mark.value}>{mark.label}</span>
              ))}
            </div>
          </label>

          <label>
            <span>Brief</span>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share the goal, timeline, desired feel, and what success should look like."
              maxLength="600"
              required
            />
            <small className="contact-slab__counter">{formData.message.length}/600</small>
          </label>

          <div className="contact-slab__actions">
            <div className="contact-slab__submitline">
              <MagneticButton
                type="submit"
                variant="primary"
                icon={status === "submitting" ? null : <Send size={16} strokeWidth={2.1} />}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send inquiry"}
              </MagneticButton>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                className="contact-slab__feedback contact-slab__feedback--success"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <CheckCircle2 size={18} />
                <span>Message sent. I'll get back to you soon.</span>
              </motion.div>
            ) : null}

            {status === "error" ? (
              <motion.div
                key="error"
                className="contact-slab__feedback contact-slab__feedback--error"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <span>{errorMessage}</span>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </section>
  )
}

export default ContactSection
