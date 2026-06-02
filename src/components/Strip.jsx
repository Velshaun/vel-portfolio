// Simple skill strip component that repeats a list of technology badges in a carousel.
// Strip component that visually repeats a list of skills in a scrolling row.
export default function Strip() {
  const skills = [
    { icon: "JS", name: "JavaScript" },
    { icon: "⚛️", name: "React" },
    { icon: "🐍", name: "Python" },
    { icon: "⏭️", name: "Next.js" },
    { icon: "🌐", name: "Django" },
    { icon: "🗄️", name: "PostgreSQL" },
    { icon: "🐳", name: "Docker" },
    { icon: "☁️", name: "AWS" },
    { icon: "⚙️", name: "GitHub Actions" },
    { icon: "🌍", name: "Terraform" },
    { icon: "🛡️", name: "NIST RMF" },
    { icon: "📊", name: "Splunk" },
  ];

  // Duplicate the skill list to allow continuous scrolling animation.
  const loop = [...skills, ...skills];

  return (
    <div className="strip strip--carousel" aria-hidden="false">
      <div className="carousel" role="list">
        <div className="carousel__track">
          {loop.map((s, i) => (
            <div key={`${s.name}-${i}`} className="carousel__item" role="listitem">
              <div className="carousel__icon">{s.icon}</div>
              <div className="carousel__name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
