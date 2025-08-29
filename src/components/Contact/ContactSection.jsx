import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, CheckCircle } from "lucide-react";
import "./ContactSection.css";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ig7k8e8",        // ✅ Your Service ID
        "template_1daujbk",      // ✅ Your Template ID
        e.target, 
        "sDCF2m2kH6koizTOF"      // ✅ Your Public Key
      )
      .then(
        (result) => {
          setSubmitted(true);
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2 className="contact-title">Let’s Connect</h2>
        <p className="contact-description">
          Whether you’re looking to collaborate, hire, or just say hi, feel free to drop me a message.
          I’ll get back to you as soon as possible!
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Info Card */}
        <motion.div
          className="contact-info-card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="info-title">Contact Information</h3>
          <ul className="info-list">
            <li><Mail size={18} /> rishut681@gmail.com</li>
            <li><Phone size={18} /> +91 8882905323</li>
            <li><MapPin size={18} /> New Delhi, India</li>
          </ul>

          <div className="social-links">
            <a href="https://github.com/Rishut681" target="_blank" rel="noreferrer">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/rishu-raj-322637253/" target="_blank" rel="noreferrer">
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          {submitted ? (
            <motion.div
              className="success-message"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <CheckCircle size={28} color="#22c55e" />
              <p>Message Sent Successfully!</p>
            </motion.div>
          ) : (
            <>
              <div className="form-group">
                <input type="text" name="from_name" required />
                <label>Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" name="from_email" required />
                <label>Your Email</label>
              </div>
              <div className="form-group">
                <textarea name="message" rows="5" required></textarea>
                <label>Your Message</label>
              </div>
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
