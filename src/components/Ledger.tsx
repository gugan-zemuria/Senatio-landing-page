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

import Link from "next/link";

const rows = [
  { num: "001", name: "Sourcing and hiring", desc: "Pipeline creation and hiring decisions tuned to your team design." },
  { num: "002", name: "Onboarding", desc: "Tools, workflows, and ramp support so engineers contribute from day one." },
  { num: "003", name: "Payroll and compliance", desc: "Local employment, payroll, and statutory compliance handled end-to-end." },
  { num: "004", name: "Delivery oversight", desc: "Operating cadence and execution oversight that keeps work on track." },
  { num: "005", name: "Reporting and visibility", desc: "Visibility into team performance, throughput, and operating health." },
  { num: "006", name: "Continuity and replacement support", desc: "Continuity so the team holds together as people and priorities shift." },
  { num: "007", name: "Scaling flexibility", desc: "Easy scale up or scale down without disrupting operating quality." },
];

export default function Ledger() {
  return (
    <section className="section ledger" id="getting" aria-labelledby="ledger-h">
      <div className="wrap">
        <div className="section-head">
          <div data-reveal data-delay="1">
            <h2 className="section-title" id="ledger-h">
              What clients are <em>actually getting.</em>
            </h2>
            <p className="section-lede">
              When clients work with Senatio, they are not paying for raw
              headcount. They are paying for managed engineering capability
              that is designed to launch fast, run reliably, and scale cleanly.
            </p>
          </div>
        </div>

        <div className="ledger-frame" data-reveal>
          <div className="ledger-head">
            <div className="col-label">
              <span>Idx</span>
              <span>Line item</span>
              <span className="ch3">Description</span>
            </div>
            <span>Status</span>
          </div>

          {rows.map((row) => (
            <div className="ledger-row" key={row.num}>
              <span className="num">{row.num}</span>
              <span className="name">{row.name}</span>
              <span className="desc">{row.desc}</span>
              <span className="tag">Included</span>
            </div>
          ))}

          <div className="ledger-foot">
            <p className="quote">
              The value is not just access to engineers. The value is making the
              engineering team <em>actually work well.</em>
            </p>
            <Link href="/contact" className="btn">
              <span>Discuss your team design</span>
              <BtnArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
