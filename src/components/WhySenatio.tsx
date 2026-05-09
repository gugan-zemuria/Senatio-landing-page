const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="square"
    aria-hidden="true"
  >
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const items = [
  "Dedicated engineering teams from India",
  "Operator-led execution",
  "Fast launch and onboarding",
  "Delivery discipline and reporting",
  "Continuity and replacement support",
  "Easy scale up and scale down",
];

export default function WhySenatio() {
  return (
    <section className="section why" id="why" aria-labelledby="why-h">
      <div className="wrap">
        <div className="grid">
          <div className="why-aside" data-reveal>
            <div className="section-head">
              <h2 className="section-title" id="why-h">
                Built for speed, control, and <em>reliable execution.</em>
              </h2>
            </div>
            <p>
              Senatio is designed for companies that want engineering capability
              from India without having to build the entire operating layer
              themselves.
            </p>
            <p>
              The value is not only in finding engineers. The value is in helping
              the team launch well, run well, and remain dependable as it grows.
            </p>
            <p>
              Senatio helps clients build engineering capacity with more
              structure, more visibility, and less operational drag.
            </p>
          </div>

          <ul className="why-list">
            {items.map((text, i) => (
              <li
                key={i}
                data-reveal
                data-delay={i > 0 ? String(i) : undefined}
              >
                <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="why-text">{text}</span>
                <span className="why-arrow">
                  <ArrowIcon />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
