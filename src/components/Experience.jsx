// Timeline-style experience section listing past roles, organizations, and skills.
// Experience timeline entries. Each entry includes dates, organization, role,
// description, and a set of key skills or focus areas.
const experience = [
  {
    date: "Mar 2024 – Dec 2025",
    company: "Koniag Gov Services – Dept. of State (Remote)",
    role: "Senior Platform Developer",
    description:
      "Architected and deployed enterprise pilot applications on a no-code/low-code platform, delivering secure role-based dashboards and API integrations ahead of schedule.",
    tags: ["No-code/Low-code", "Platform", "APIs", "Agile"],
  },
  {
    date: "Aug 2023 – Mar 2024",
    company: "L3 Harris – Rochester, NY",
    role: "ISSO (Information Systems Security Officer)",
    description:
      "Implemented NIST RMF for classified systems, conducted Splunk-based audits, and managed eMASS ATO documentation through full RMF lifecycle activities.",
    tags: ["NIST RMF", "Splunk", "eMASS", "CONMON"],
  },
  {
    date: "Jun 2023 – Aug 2023",
    company: "MSI Solutions – Randolph AFB, TX (Remote)",
    role: "Software Engineer",
    description:
      "Built SharePoint Online applications for the Air Force Education Department and migrated legacy ETCA data to a modern, mission-aligned SharePoint platform.",
    tags: ["SharePoint", "React.js", "PowerApps", "Migration"],
  },
  {
    date: "Jan 2023 – Jun 2023",
    company: "Kings Technology Inc – Navy Warfare Center, Panama City Beach, FL",
    role: "Software Developer / Junior Systems Administrator",
    description:
      "Developed .NET MVC web applications for NAVSEA SPO, protected sensitive government data, and researched Docker/Kubernetes/Terraform infrastructure solutions.",
    tags: ["C#", ".NET MVC", "Docker", "Terraform"],
  },
  {
    date: "Sep 2018 – Feb 2021",
    company: "U.S. Army – Fort Hood, TX",
    role: "Squad Leader / HR Specialist (42A)",
    description:
      "Led a five-person team in operational missions, analyzed logistics data, and managed personnel workflows under demanding mission conditions.",
    tags: ["Leadership", "Logistics", "Operations", "Excel"],
  },
  {
    date: "Aug 2017 – Sep 2018",
    company: "Acellus – Kansas City, MO",
    role: "Jr. Front End Developer",
    description:
      "Built responsive TypeScript and Vue websites, led mentorship efforts, and maintained Git-based team workflows for desktop and mobile web projects.",
    tags: ["TypeScript", "Vue", "Bootstrap", "Web"],
  },
];

export default function Experience() {
  return (
    <section className="section section--light" id="experience">
      <div className="section__header">
        <span className="section__tag">Experience</span>
        <h2>Professional experience</h2>
      </div>
      <div className="timeline">
        {/* Render each experience entry with date, company, role, and tag badges. */}
        {experience.map((entry) => (
          <article key={`${entry.company}-${entry.role}`} className="timeline-card timeline-card--row">
            <div className="timeline-card__header">
              <div>
                <h3>{entry.role}</h3>
                <p className="timeline-card__company">{entry.company}</p>
              </div>
              <span className="timeline-card__date">{entry.date}</span>
            </div>
            <p className="timeline-card__description">{entry.description}</p>
            <div className="timeline-card__tags">
              {entry.tags.map((tag) => (
                <span key={tag} className="timeline-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
