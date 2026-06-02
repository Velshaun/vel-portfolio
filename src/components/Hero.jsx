// Hero section component with animated typewriter text and quick action links.
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

// Roles shown in the hero section with a typewriter animation.
const roles = ["Developer", "DevSecOps Engineer", "Platform Developer", "Problem Solver"];

export default function Hero() {
  // Current text for the typewriter effect.
  const [text, setText] = useState("");
  // Index of the current role in the roles array.
  const [index, setIndex] = useState(0);
  // Whether the typewriter is currently deleting characters.
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index % roles.length];
    const isComplete = !isDeleting && text === currentRole;
    const isCleared = isDeleting && text === "";
    const delay = isDeleting ? 80 : 120;

    const timeout = window.setTimeout(() => {
      if (isComplete) {
        // Pause on the full role text before deleting it.
        setIsDeleting(true);
      } else if (isCleared) {
        // Move to the next role once the text is fully deleted.
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText((prev) => {
          const next = isDeleting
            ? currentRole.slice(0, prev.length - 1)
            : currentRole.slice(0, prev.length + 1);
          return next;
        });
      }
    }, isComplete ? 1400 : delay);

    return () => window.clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="hero" id="hero">
      {/* Decorative overlay grid behind the hero content. */}
      <div className="hero__overlay" />
      <div className="hero__grid">
        <div className="hero__left">
          <span className="hero__badge">Available for hire</span>
          <h1 className="hero__title">
            Vel Byers
            <span className="hero__title-dot">.</span>
          </h1>
          <p className="hero__role">
            <span>I'm a</span>
            <span className="hero__typewriter">{text}</span>
          </p>
          <div className="hero__subtitle-row">
            <span>Secure systems.</span>
            <span>Platform-first thinking.</span>
            <span>Performance-led delivery.</span>
          </div>
          <p className="hero__description">
            I design and ship production-ready web platforms with a security-first mindset, clear product thinking,
            and polished interface behavior.
          </p>
          <div className="hero__actions">
            <Link to="projects" spy smooth offset={-80} duration={500} className="button">
              View projects
            </Link>
            <Link to="contact" spy smooth offset={-80} duration={500} className="button button--ghost">
              Let's talk
            </Link>
          </div>
          <div className="hero__stats">
            <div>
              <strong>5+</strong>
              <span>years</span>
            </div>
            <div>
              <strong>4+</strong>
              <span>cleared contracts supported</span>
            </div>
            <div>
              <strong>Active Secret</strong>
              <span>Interim Top Secret w/ SCI pending adjudication</span>
            </div>
          </div>
        </div>

        <aside className="hero__card">
          <div className="hero__card-header">
            <p className="hero__card-label">Clearance</p>
            <span className="hero__card-status">Active Secret — Interim Top Secret w/ SCI pending adjudication</span>
          </div>
          <div className="hero__card-body">
            <p>Active Secret, Interim Top Secret w/ SCI pending adjudication.</p>
            <p>Operational readiness for secure programs and platform delivery.</p>
          </div>
          <div className="hero__contact-list">
            <a href="tel:+18168097899">Phone</a>
            <a href="mailto:vellbyers@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/vel-byers-1910b224a/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/velshaun" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="/resume.pdf" download>
              Resume
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
