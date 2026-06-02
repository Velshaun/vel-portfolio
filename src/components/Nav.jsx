import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav__wrapper ${scrolled ? "nav__wrapper--scrolled" : ""}`}>
      <nav className="nav">
        <div className="nav__brand">
          VB
          <span className="nav__brand-dot">.</span>
        </div>
        <div className="nav__links">
          {navItems.map(({ id, label }) => (
            <Link
              key={id}
              to={id}
              spy
              smooth
              offset={-80}
              duration={500}
              className="nav__link"
              activeClass="nav__link--active"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="nav__actions">
          <Link to="contact" spy smooth offset={-80} duration={500} className="nav__cta">
            Hire Me
          </Link>
        </div>
      </nav>
    </header>
  );
}
