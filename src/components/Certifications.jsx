const certifications = [
  { title: "Google UX Design Professional Certificate", provider: "Google" },
  { title: "AWS Certified Cloud Practitioner", provider: "Amazon Web Services" },
  { title: "React Developer Bootcamp", provider: "Frontend Masters" },
];

export default function Certifications() {
  return (
    <section className="section section--light" id="certifications">
      <div className="section__header">
        <span className="section__tag">Certifications</span>
        <h2>Verified experience</h2>
      </div>
      <div className="certifications__list">
        {certifications.map((cert) => (
          <article key={cert.title} className="certification-card">
            <h3>{cert.title}</h3>
            <p>{cert.provider}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
