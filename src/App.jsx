// App shell that composes the page from smaller, reusable components.
// This root component defines the main layout and the order of sections.
import "./App.css";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Strip from "./components/Strip";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      {/* Top navigation and hero section are always visible first. */}
      <Nav />
      <Hero />
      {/* A repeating tech strip that visually highlights key skills. */}
      <Strip />
      {/* Animate the main content into view once on scroll. */}
      <motion.main
        className="main"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Each section is rendered in order inside the main document flow. */}
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
