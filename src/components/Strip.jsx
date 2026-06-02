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
