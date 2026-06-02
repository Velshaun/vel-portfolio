const contactLinks = [
  {
    href: "tel:+18168097899",
    icon: "📞",
    label: "Phone",
    value: "(816) 809-7899",
  },
  {
    href: "mailto:vellbyers@gmail.com",
    icon: "✉️",
    label: "Email",
    value: "vellbyers@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/vel-byers-1910b224a/",
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/vel-byers-1910b224a",
  },
  {
    href: "https://github.com/velshaun",
    icon: "🐙",
    label: "GitHub",
    value: "github.com/velshaun",
  },
  {
    href: "/resume.pdf",
    icon: "📄",
    label: "Resume",
    value: "Download PDF",
    download: true,
  },
];

export default function Contact() {
  return (
    <section className="section section--light" id="contact">
      <div className="section__header">
        <span className="section__tag">Contact</span>
        <h2>Ready to collaborate?</h2>
      </div>
      <div className="contact-box">
        <div className="contact-box__left">
          <span className="contact-box__eyebrow">Let’s connect</span>
          <h3>Secure platform delivery, full-stack execution, and hands-on program support.</h3>
          <p>
            Reach out for mission-focused engineering, trusted DevSecOps support, or product delivery work that
            stays secure from design through deployment.
          </p>
        </div>
        <div className="contact-box__right">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="contact-link"
              target={item.download ? undefined : "_blank"}
              rel={item.download ? undefined : "noreferrer"}
              {...(item.download ? { download: true } : {})}
            >
              <div className="contact-link__icon">{item.icon}</div>
              <div className="contact-link__content">
                <span className="contact-link__label">{item.label}</span>
                <span className="contact-link__value">{item.value}</span>
              </div>
              <span className="contact-link__arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
