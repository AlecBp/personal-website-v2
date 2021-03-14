import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Experience from "./Experience/Experience";
import Interests from "./Interests/Interests";
import Recommendations from "./Recommendations/Recommendations";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Recommendations />
      <Interests />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
