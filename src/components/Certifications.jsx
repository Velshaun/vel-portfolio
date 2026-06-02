// Certification section shows verified credentials relevant to security and platform work.
// Certification entries used to display credentials in the Certifications section.
const certifications = [
  { title: "CompTIA Security+", provider: "CompTIA" },
  { title: "ITIL 4 Foundation", provider: "Axelos" },
  { title: "Python Full Stack Web Development", provider: "PDX Code Guild" },
];

export default function Certifications() {
  return (
    <section className="section section--light" id="certifications">
      <div className="section__header">
        <span className="section__tag">Certifications</span>
        <h2>Verified experience</h2>
      </div>
      <div className="certifications__list">
        {/* Render each certification as a separate card. */}
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
