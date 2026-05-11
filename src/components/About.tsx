import Link from "next/link";

const BtnArrow = () => (
  <svg
    className="btn-arrow"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

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
            Building from India is easy to talk about and harder to execute well.
            Hiring is only one part of the challenge. The real challenge is
            launching the team properly, creating the right operating structure,
            and scaling without losing quality or control.
          </p>
          <p>
            Senatio is focused on launch speed, execution discipline, and
            scalable engineering capability. We help clients move from hiring
            intent to a real engineering team that runs well and grows cleanly
            over time.
          </p>
          <p>
            The strongest engineering teams are not built through random hiring
            bursts or loose seat filling. They are built through clearer team
            design, stronger operating rhythm, and practical execution support.
            That is the gap Senatio is built to solve.
          </p>
        </div>
        <div style={{ marginTop: "32px" }} data-reveal>
          <Link href="/about" className="btn">
            <span>More about Senatio</span>
            <BtnArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
