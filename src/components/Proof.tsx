import Link from "next/link";

const BtnArrow = () => (
  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Proof() {
  return (
    <section className="section proof" id="cases" aria-labelledby="proof-h">
      <div className="wrap">
        <div className="section-head">
          <div data-reveal data-delay="1">
            <h2 className="proof-display" id="proof-h">
              Built for speed and <em>reliable execution.</em>
            </h2>
            <p className="section-lede">
              Our work is measured by how quickly teams launch, how well they
              run, and how effectively they scale. Each engagement is different,
              but the focus stays the same: practical execution, stronger
              delivery, and a team that holds together as it grows.
            </p>
          </div>
        </div>

        <div className="proof-strip">
          <article className="proof-cell" data-reveal>
            <div className="top">
              <span>Indicator · 01</span>
              <span>BLR / NYC</span>
            </div>
            <p className="stat">
              Launch in <em>&le; 2 weeks</em> where feasible.
            </p>
            <span className="label">Build · Operating standard</span>
          </article>
          <article className="proof-cell" data-reveal data-delay="1">
            <div className="top">
              <span>Indicator · 02</span>
              <span>BLR / SFO</span>
            </div>
            <p className="stat">
              Operating <em>discipline</em> from day one.
            </p>
            <span className="label">Operate · Reporting in place</span>
          </article>
          <article className="proof-cell" data-reveal data-delay="2">
            <div className="top">
              <span>Indicator · 03</span>
              <span>BLR / LDN</span>
            </div>
            <p className="stat">
              Scale <em>without losing</em> control.
            </p>
            <span className="label">Scale · Up & down posture</span>
          </article>
        </div>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "18px",
          }}
          data-reveal
        >
          <p className="mono" style={{ margin: 0 }}>
            Detailed case studies available
          </p>
          <Link href="/case-studies" className="btn">
            <span>Read case studies</span>
            <BtnArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
