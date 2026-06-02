const projects = [
  {
    number: "01",
    emoji: "🏦",
    title: "Python Banking App",
    description: "A secure banking prototype with account workflows, transaction monitoring, and role-based access.",
    tags: ["Python", "Flask", "Security"],
    repo: "https://github.com/velbyers/python-banking-app",
    featured: true,
  },
  {
    number: "02",
    emoji: "☁️",
    title: "AI Weather Dashboard",
    description: "A predictive weather dashboard with machine learning insights, alerts, and real-time status cards.",
    tags: ["React", "FastAPI", "AI"],
    repo: "https://github.com/velbyers/ai-weather-dashboard",
  },
  {
    number: "03",
    emoji: "🍽️",
    title: "SA Restaurant Finder",
    description: "A location-aware restaurant finder with filters, reviews, and dynamic map integration.",
    tags: ["Next.js", "Geo", "UX"],
    repo: "https://github.com/velbyers/sa-restaurant-finder",
  },
  {
    number: "04",
    emoji: "💪",
    title: "FitYou Fitness App",
    description: "A responsive fitness platform for coaching plans, scheduling, and progress tracking.",
    tags: ["React Native", "API", "Wellness"],
    repo: "https://github.com/velbyers/fityou-fitness-app",
    featured: true,
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__header">
        <span className="section__tag">Projects</span>
        <h2>Featured work</h2>
      </div>
      <div className="projects__grid">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`project-card ${project.featured ? "project-card--featured" : ""}`}
          >
            <div className="project-card__meta">
              <span className="project-card__number">{project.number}</span>
              <span className="project-card__emoji">{project.emoji}</span>
              <h3>{project.title}</h3>
            </div>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-card__tag">
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.repo} target="_blank" rel="noreferrer" className="project-card__cta">
              View on GitHub <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
