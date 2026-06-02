// About section summarizes the portfolio owner's background, values, and approach.
export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__header">
        <span className="section__tag">About</span>
        <h2>A few words about my approach</h2>
      </div>
      {/* About text explains the developer's working style and background. */}
      <div className="about__content">
        <p>
          I'm a full-stack developer and cloud engineer with a background spanning government-level support,
          enterprise infrastructure, and modern application development. I've contributed to work that supported the
          Department of State and White House operations, and I bring that same precision and reliability to every
          project I build. I work across the stack — from cloud infrastructure to polished front-end experiences —
          and I'm driven by building things that are fast, functional, and built to last.
        </p>
      </div>
    </section>
  );
}
