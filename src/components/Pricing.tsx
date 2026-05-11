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

export default function Pricing() {
  return (
    <section
      className="section pricing"
      id="pricing"
      aria-labelledby="pricing-h"
    >
      <div className="wrap">
        <div className="section-head">
          <div data-reveal data-delay="1">
            <h2 className="section-title" id="pricing-h">
              Transparent structure, <em>tailored team pricing.</em>
            </h2>
            <p className="section-lede">
              Senatio&apos;s commercial model is built around managed engineering
              capability. Final pricing depends on team structure, seniority mix,
              and management needs — not a flat public rate card.
            </p>
          </div>
        </div>

        <div className="pricing-grid">
          <article className="price" data-reveal>
            <div className="price-head">
              <span>Phase</span>
              <span className="num">01</span>
            </div>
            <h3 className="price-title">
              One-time <em>setup fee</em>
            </h3>
            <p className="price-desc">
              Covers the work required to launch the team properly. Launch has
              real value and real execution behind it — treated as a meaningful
              phase, not invisible overhead.
            </p>
            <ul className="price-list">
              <li>Sourcing</li>
              <li>Hiring</li>
              <li>Onboarding</li>
              <li>Initial team setup</li>
            </ul>
          </article>

          <article className="price" data-reveal data-delay="1">
            <div className="price-head">
              <span>Phase</span>
              <span className="num">02</span>
            </div>
            <h3 className="price-title">
              Monthly <em>per-engineer</em>
            </h3>
            <p className="price-desc">
              All-inclusive. Reflects managed capability, not salary
              pass-through — covering hiring support, operations, continuity,
              delivery, and scaling flexibility.
            </p>
            <ul className="price-list">
              <li>Hiring support</li>
              <li>Operations support</li>
              <li>Continuity & replacement</li>
              <li>Delivery support</li>
              <li>Scale flexibility</li>
            </ul>
          </article>

          <article className="price" data-reveal data-delay="2">
            <div className="price-head">
              <span>Phase</span>
              <span className="num">03</span>
            </div>
            <h3 className="price-title">
              Shared <em>oversight</em>
            </h3>
            <p className="price-desc">
              As teams grow, an added layer of delivery or program support keeps
              execution stable. Positioned as a shared operating layer, not
              duplicated headcount.
            </p>
            <ul className="price-list">
              <li>Delivery lead</li>
              <li>Engineering manager</li>
              <li>Program oversight</li>
            </ul>
          </article>
        </div>

        <div className="pricing-meta">
          <div data-reveal>
            <h4>Recommended starting point</h4>
            <p>
              Most engagements begin with at least a 2-engineer team. A
              single-engineer engagement is possible but treated as a premium
              pilot or entry case.
            </p>
            <p>
              A 2-engineer minimum supports the managed-team story properly and
              makes the operating model meaningful from day one.
            </p>
          </div>
          <div data-reveal data-delay="1">
            <h4>What shapes pricing</h4>
            <ul>
              <li>Role mix across product and engineering surfaces</li>
              <li>Seniority mix from junior to tech-lead</li>
              <li>Team size and pace of expansion</li>
              <li>Level of delivery oversight needed</li>
              <li>Complexity of the operating model</li>
            </ul>
            <p>
              Clients are paying for a team that can launch faster, run better,
              and scale more cleanly than they would likely manage alone.
            </p>
            <Link href="/contact" className="btn" style={{ marginTop: "12px" }}>
              <span>Discuss team design and pricing</span>
              <BtnArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
