export default function About() {
  return (
    <section
      className="section about-section"
      id="about"
      aria-labelledby="about-h"
    >
      <div className="wrap">
        <div className="section-head">
          <div data-reveal data-delay="1">
            <p className="mono" style={{ marginBottom: "16px" }}>
              About Senatio
            </p>
            <h2 className="section-title" id="about-h">
              An operator-led partner for global companies building engineering
              teams <em>from India.</em>
            </h2>
          </div>
        </div>
        <div className="about-grid" data-reveal>
          <p>
            We believe building in India is easy to talk about and much harder to
            execute well. Hiring is only one part of the challenge. The real
            challenge is launching the team properly, creating the right
            operating structure, and scaling without losing quality or control.
          </p>
          <p>
            That is where Senatio is focused: launch speed, execution discipline,
            and scalable engineering capability. We help clients move from hiring
            intent to a real engineering team that runs well and grows cleanly
            over time.
          </p>
          <p>
            The goal is simple: help global companies build engineering
            capability from India with more confidence, more structure, and less
            friction.
          </p>
        </div>
      </div>
    </section>
  );
}
