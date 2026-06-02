// Navigation bar component that includes a scrolling link menu and mobile toggle.
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

// Navigation items used for scroll-linked anchors in the nav menu.
const navItems = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  // Track whether the page has been scrolled so the nav can change style.
  const [scrolled, setScrolled] = useState(false);
  // Track whether the mobile menu is open so we can toggle visibility.
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when the mobile menu is open.
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav__wrapper ${scrolled ? "nav__wrapper--scrolled" : ""} ${menuOpen ? "nav__menu--open" : ""}`}>
      <nav className="nav">
        <div className="nav__brand">
          VB
          <span className="nav__brand-dot">.</span>
        </div>

        <button
          className={`nav__toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((s) => !s)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav__links">
          {/* Desktop nav links that scroll to each section of the page. */}
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
              onClick={() => setMenuOpen(false)}
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

        <div className="nav__mobile" onClick={() => setMenuOpen(false)}>
          <div className="nav__mobile-inner" onClick={(e) => e.stopPropagation()}>
            {navItems.map(({ id, label }) => (
              <Link
                key={`${id}-mobile`}
                to={id}
                spy
                smooth
                offset={-80}
                duration={500}
                className="nav__link nav__link--mobile"
                activeClass="nav__link--active"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link to="contact" spy smooth offset={-80} duration={500} className="nav__cta nav__cta--mobile" onClick={() => setMenuOpen(false)}>
              Hire Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
