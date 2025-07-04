import React from "react";
import AboutSection from "./components/About/AboutSection";
import ContactSection from "./components/Contact/ContactSection";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ProjectsSection from "./components/Projects/ProjectSection";
import SkillsSection from "./components/Skills/SkillsSection";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar /> {/* Place Navbar at the very top */}
      <div style={{ paddingTop: "5rem" }}>
        {" "}
        {/* Add padding to push content down */}
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <Footer /> {/* Place Footer at the very bottom */}
    </div>
  );
}

export default App
