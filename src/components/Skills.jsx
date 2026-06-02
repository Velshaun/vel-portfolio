const skills = [
  { icon: "JS", name: "JavaScript", type: "Frontend" },
  { icon: "⚛️", name: "React", type: "UI Library" },
  { icon: "🐍", name: "Python", type: "Scripting" },
  { icon: "⏭️", name: "Next.js", type: "Framework" },
  { icon: "🌐", name: "Django", type: "Backend" },
  { icon: "🗄️", name: "PostgreSQL", type: "Database" },
  { icon: "🐳", name: "Docker", type: "Containers" },
  { icon: "☁️", name: "AWS", type: "Cloud" },
  { icon: "⚙️", name: "GitHub Actions", type: "CI/CD" },
  { icon: "🌍", name: "Terraform", type: "IaC" },
  { icon: "🛡️", name: "NIST RMF", type: "Compliance" },
  { icon: "📊", name: "Splunk", type: "Observability" },
];

export default function Skills() {
  return (
    <section className="section section--dark" id="skills">
      <div className="section__header">
        <span className="section__tag">Skills</span>
        <h2>What I build with</h2>
      </div>
      <div className="skills__grid">
        {skills.map((skill) => (
          <article key={skill.name} className="skill-card skill-card--feature">
            <div className="skill-card__icon">{skill.icon}</div>
            <div>
              <h3>{skill.name}</h3>
              <p>{skill.type}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
