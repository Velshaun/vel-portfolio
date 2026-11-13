// Project highlights section. Live projects link to the deployed app;
// upcoming projects show an "In Progress" badge and download a project brief PDF.
const projects = [
  {
    title: "Pro Clubs Dashboard",
    description:
      "Custom dashboard for my EA FC Pro Clubs squad. Collects match data automatically, tracks player form, and uses AI to analyze performance, with a Discord bot for match reports.",
    tags: ["React", "FastAPI", "Python", "Claude API", "Discord Bot"],
    status: "live",
    liveUrl: "https://proclubs-dashboard.vercel.app/",
  },
  {
    title: "ConverseAI",
    description:
      "AI powered conversational study app. Upload your course material and get lectures with a voice tutor, flashcards, quizzes, and full length practice exams, plus a readiness dashboard by exam domain.",
    tags: ["React", "Vite", "Tailwind CSS", "FastAPI", "Supabase", "Gemini", "OpenAI TTS", "PWA"],
    status: "live",
    liveUrl: "https://ai-study-tutor-nu.vercel.app/",
  },
  {
    title: "FitU",
    description:
      "A ground up rebuild of my boot camp capstone and first full stack app. Fitness and nutrition in one place, built around an interactive calendar with an AI trainer and AI chef.",
    tags: ["React", "Tailwind CSS", "FastAPI", "OAuth 2.0", "OpenAI", "pytest", "GitHub Actions"],
    status: "upcoming",
    pdfUrl: "/docs/fitu-project-brief.pdf",
  },
  {
    title: "Prop Probability Engine",
    description:
      "A probability tool, not a betting tool. Compares posted player prop lines against real matchup data and returns a probability with the reasoning behind it.",
    tags: ["React", "FastAPI", "Python", "LLM Reasoning Layer", "Sports Data APIs", "pytest", "GitHub Actions"],
    status: "upcoming",
    pdfUrl: "/docs/prop-probability-engine-project-brief.pdf",
  },
  {
    title: "Talofa",
    description:
      "A Samoan language learning app built on conversation. You chat in English while Current mode flows Samoan words in, and you learn them from context.",
    tags: ["React", "FastAPI", "Whisper", "Fine Tuned Open Model", "Parallel Corpus", "pytest", "GitHub Actions"],
    status: "upcoming",
    pdfUrl: "/docs/talofa-project-brief.pdf",
  },
];

// Link attributes and accessible label for a card, based on its status.
function cardLink(project) {
  if (project.status === "live") {
    return {
      href: project.liveUrl,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": `${project.title}, live project. Open the app in a new tab.`,
      cta: "View live app",
    };
  }
  return {
    href: project.pdfUrl,
    download: "",
    "aria-label": `${project.title}, in progress. Download the project brief PDF.`,
    cta: "Download project brief",
  };
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__header">
        <span className="section__tag">Projects</span>
        <h2>Featured work</h2>
      </div>
      <div className="projects__grid">
        {projects.map((project, index) => {
          const { cta, ...linkProps } = cardLink(project);
          return (
            <a
              key={project.title}
              {...linkProps}
              className={`project-card ${index === 0 ? "project-card--featured" : ""}`}
            >
              <div className="project-card__meta">
                <span className="project-card__number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{project.title}</h3>
                {project.status === "upcoming" && (
                  <span className="project-card__badge">In Progress</span>
                )}
              </div>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="project-card__cta" aria-hidden="true">
                {cta} <span>{project.status === "live" ? "→" : "↓"}</span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
